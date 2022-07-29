import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { User, UserInlineCollectionKey } from "@/graphql/schema/models/User";
import { printError } from "@/utils/apollo/error-handling";
import admin, { firestore } from "@/utils/firebase/admin";
import { DocumentSnapshot, QueryDocumentSnapshot } from "@firebase/firestore";
import cuid from "cuid";
import { GraphQLResolveInfo } from "graphql";
import pluralize from "pluralize";
import { Model } from "./models/model";

export function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      // remove __typename and others
      .filter(([key, _value]) => !key.startsWith("__"))
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        return [key, transformFields(value)];
      })
  );
}

export function getPrismaFromContext(context: any) {
  const prismaClient = context.prisma;
  if (!prismaClient) {
    throw new Error(
      "Unable to find Prisma Client in GraphQL context. Please provide it under the `context.prisma` key."
    );
  }
  return prismaClient;
}

export function transformCountFieldIntoSelectRelationsCount(_count: object) {
  return {
    include: {
      _count: {
        select: {
          ...Object.fromEntries(Object.entries(_count).filter(([_, v]) => v != null)),
        },
      },
    },
  };
}

export type DocSnapshot = Pick<DocumentSnapshot | QueryDocumentSnapshot, "id" | "data">;

interface CreateItemArgs {
  collectionName: string;
  ctx: ApolloContext;
  info: GraphQLResolveInfo;
  args: DocCreationArgs;
  inlineWithUser?: boolean;
}
export async function createItem({
  collectionName,
  ctx,
  info,
  args,
  inlineWithUser,
}: CreateItemArgs) {
  if (USE_FIREBASE) {
    const userDocPath = `users/${ctx.session?.user.id}`;
    const now = new Date();
    const data = {
      createdAt: now,
      updatedAt: now,
      ...args.data,
    };
    if (inlineWithUser) {
      console.log(">> Attempting to create item inline with user...");
      const userDocRef = firestore.doc(userDocPath);
      const itemId = cuid();
      userDocRef.update({
        [collectionName]: admin.firestore.FieldValue.arrayUnion({
          id: itemId,
          ...data,
        }),
      });
      const userDoc = await userDocRef.get();
      const userData = (await getFirestoreDocDataFromSnapshot(userDoc)) as User;
      const collectionData = userData[collectionName as UserInlineCollectionKey] ?? [];
      return (collectionData as { id: string }[]).find((item) => item.id === itemId);
    }
    // TODO: create collection if does not exist
    const res = await firestore
      .collection(`users/${ctx.session?.user.id}/${collectionName}`)
      .add({ ...data });
    const doc = await res.get();
    return getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>;
  } else {
    const prismaKey = pluralize.singular(collectionName);
    const prismaTypeHandler = getPrismaFromContext(ctx)[prismaKey];
    return prismaTypeHandler.create({ ...args });
  }
}

export async function getItem(
  collectionName: string,
  ctx: ApolloContext,
  info: GraphQLResolveInfo,
  args: any
) {
  if (USE_FIREBASE) {
    const id = args.where.id;
    return await firestore
      .doc(`users/${ctx.session?.user.id}/${collectionName}/${id}`)
      .get()
      .then((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>);
  } else {
    const prismaKey = pluralize.singular(collectionName);
    const prismaHandler = getPrismaFromContext(ctx)[prismaKey];
    return prismaHandler.findUnique({ ...args });
  }
}

export async function getFirestoreDocDataFromSnapshot(
  doc: DocSnapshot | null | undefined
): Promise<unknown> {
  return doc
    ? ({
        id: doc.id,
        ...doc.data(),
      } as unknown)
    : null;
}

interface QueryArgs {
  where?: any;
  orderBy?: any;
  cursor?: any;
  take?: any;
  skip?: any;
  distinct?: any;
}

export async function resolveRelation(
  collectionName: string,
  object: Model & { id: string },
  ctx: ApolloContext,
  args: QueryArgs
): Promise<unknown[]> {
  if (!object.__typename) throw new Error("typename undefined");
  if (USE_FIREBASE) {
    const snapshot = await firestore
      .collectionGroup(collectionName)
      .where(`${object.__typename}Id`, "==", object.id)
      .get();
    return Promise.all(
      snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>)
    );
  } else {
    const prismaKey = object.__typename as string;
    // prettier-ignore
    return getPrismaFromContext(ctx)[prismaKey].findUnique({
      where: {
        id: object.id,
      },
    })[collectionName](args);
  }
}

export async function resolveUserRelation(
  collectionName: string,
  user: User,
  ctx: ApolloContext,
  args: QueryArgs
): Promise<unknown[]> {
  if (USE_FIREBASE) {
    if (user[collectionName as keyof User]) return user[collectionName as keyof User] as unknown[];
    const collectionRef = firestore.collection(`users/${user.id}/${collectionName}`);
    const snapshot = await collectionRef.get();
    return Promise.all(
      snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>)
    );
  } else {
    // prettier-ignore
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    })[collectionName](args);
  }
}

export async function getCollectionData(
  collectionName: string,
  ctx: ApolloContext,
  info: GraphQLResolveInfo,
  args: QueryArgs
): Promise<unknown[]> {
  if (USE_FIREBASE) {
    const collectionRef = firestore.collection(`${collectionName}`);
    const snapshot = await collectionRef.get();
    return Promise.all(
      snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>)
    );
  } else {
    return getPrismaFromContext(ctx)[pluralize.singular(collectionName)].findMany({ ...args });
  }
}

export async function getUserSubcollectionData(
  collectionName: string,
  ctx: ApolloContext,
  info: GraphQLResolveInfo | undefined,
  args: QueryArgs,
  inline?: boolean
): Promise<unknown[]> {
  if (USE_FIREBASE) {
    const userId = ctx.session?.user.id;
    if (!userId) throw new Error("No userId");
    const userDocPath = `users/${userId}`;
    if (inline) {
      const userDoc = await firestore.doc(userDocPath).get();
      const data = userDoc.data() as User;
      return data[collectionName as UserInlineCollectionKey] as unknown[];
    }
    const collectionPath = `${userDocPath}/${collectionName}`;
    const collectionRef = firestore.collection(collectionPath);
    // TODO: filter based on args
    const snapshot = await collectionRef.get();
    return Promise.all(
      snapshot.docs.map((doc) => {
        return getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>;
      })
    );
  } else {
    return getPrismaFromContext(ctx)[pluralize.singular(collectionName)].findMany({ ...args });
  }
}

interface DocCreationArgs {
  data: any;
}

interface DocUpdateArgs {
  where: { id?: string };
  data: any;
}

export async function updateItem(
  collectionName: string,
  ctx: ApolloContext,
  info: GraphQLResolveInfo,
  args: DocUpdateArgs,
  inUserSubcollection = false
): Promise<unknown> {
  if (USE_FIREBASE) {
    const itemId = args.where.id;
    if (!itemId) throw new Error("Item ID not provided");
    const userId = ctx.session?.user.id;
    const data = {
      updatedAt: new Date(),
      ...args.data,
    };
    const userDocPath = `users/${userId}`;
    const collectionPath = inUserSubcollection
      ? `${userDocPath}/${collectionName}`
      : collectionName;
    const docRef = firestore.doc(`${collectionPath}/${itemId}`);
    // TODO
    let doc = await docRef.get();
    if (doc.exists) {
      await docRef.update(data).catch(printError);
      doc = await docRef.get();
      return getFirestoreDocDataFromSnapshot(doc) as Promise<unknown>;
    } else {
      const userDocRef = firestore.doc(userDocPath);
      let userDoc = await userDocRef.get();
      let userData = (await getFirestoreDocDataFromSnapshot(userDoc)) as User;
      let collectionData = userData[collectionName as UserInlineCollectionKey];
      if (!collectionData) throw new Error("Collection does not exist.");
      const collectionItemIndex = (collectionData as { id: string }[]).findIndex(
        (item) => item.id === itemId
      );
      if (typeof collectionItemIndex !== "number")
        throw new Error(`Could not find collection item with id ${itemId}`);
      collectionData[collectionItemIndex] = {
        ...collectionData[collectionItemIndex],
        ...data,
      };
      await userDocRef.update({ [collectionName]: collectionData });
      // console.log(">>> Set collectionData:)
      userDoc = await userDocRef.get();
      userData = (await getFirestoreDocDataFromSnapshot(userDoc)) as User;
      collectionData = userData[collectionName as UserInlineCollectionKey];
      if (!collectionData) throw new Error("Collection does not exist.");
      return collectionData[collectionItemIndex] as unknown;
    }
  } else {
    return getPrismaFromContext(ctx)[pluralize.singular(collectionName)].update({ ...args });
  }
}

export async function toggleSelection(
  collectionName: string,
  ctx: ApolloContext,
  info: GraphQLResolveInfo,
  id: string,
  archivedAt: Date | null
): Promise<unknown> {
  const userId = ctx.session?.user.id;
  if (USE_FIREBASE) {
    // TODO: refactor
    const docRef = await firestore.doc(`users/${userId}/${collectionName}/${id}`);
    return docRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        return updateItem(collectionName, ctx, info, {
          where: { id },
          data: { archivedAt },
        });
      } else {
        return createItem({
          collectionName,
          ctx,
          info,
          args: { data: { archivedAt } },
        });
      }
    });
  } else {
    throw new Error("Not implemented");
    // const prisma = getPrismaFromContext(ctx);
    // const prismaKey = pluralize.singular(collectionName);
    // const itemExists =
    //   (await prisma[prismaKey].count({ where: { userId } })) > 0;
    // if (itemExists) {
    //   return await prisma[prismaKey].update({
    //     where: {
    //       userId_actionId: { userId, actionId },
    //     },
    //     data: {
    //       archivedAt: archivedAt,
    //     },
    //   });
    // } else {
    //   return await prisma.actCompletion.create({
    //     data: { userId, actionId: actionId, archivedAt: archivedAt },
    //   });
    // }
  }
}

export async function upsertItem(
  collectionName: string,
  ctx: ApolloContext,
  info: GraphQLResolveInfo,
  args: DocUpdateArgs,
  inUserSubcollection = false
): Promise<unknown> {
  if (USE_FIREBASE) {
    const id = args.where.id;
    if (!id) throw new Error(`ID is not included in ${JSON.stringify(args.where)}`);
    const userDocPath = `users/${ctx.session?.user.id}`;
    const docPath = inUserSubcollection
      ? `${userDocPath}/${collectionName}/${id}`
      : `${collectionName}/${id}`;
    const docRef = firestore.doc(docPath);
    // TODO
    const data = {
      updatedAt: new Date(),
      ...args.data,
    };
    return await docRef.set(data, { merge: true });
  } else {
    return getPrismaFromContext(ctx)[pluralize.singular(collectionName)].upsert({ ...args });
  }
}

// export function transformDataForFirestore(
//   data: Record<string | symbol, unknown>
// ): Record<string, unknown> {
//   const transformedData = {} as Record<string, unknown>;
//   Object.entries(data).forEach(([key, value]: [string, unknown]) => {
//     // Note: typeof null === "object"
//     if (typeof value === "object" && value !== null) {
//       const input = value as any;
//       if (input["connect"]) {
//         console.error("Old input:", JSON.stringify(data[key]));
//         transformedData[`${key}Id`] = input["connect"].id ?? null;
//       } else if ("set" in input) {
//         console.error("Old input:", JSON.stringify(data[key]));
//         transformedData[key] = typeof input["set"] !== "undefined" ? input["set"] : value;
//       } else {
//         transformedData[key] = value;
//       }
//     } else if (typeof value !== "undefined") {
//       transformedData[key] = value;
//     }
//   });
//   return transformedData;
// }
