import { GqlContext } from "@/graphql/context";
import { User } from "@/graphql/schema/generated/models/user.model";
import { GraphQLResolveInfo } from "graphql";
import { Model } from "@/graphql/schema/types";

export function convertFilterForMongo<T>(filter: T) {
  if (!filter) return undefined;
  const modifiedFilter = filter as Record<string, unknown>;
  Object.keys(modifiedFilter).forEach(
    (key) => modifiedFilter[key] === undefined && delete modifiedFilter[key]
  );
  return modifiedFilter;
}

interface CreateItemArgs {
  collectionName: string;
  ctx: GqlContext;
  info: GraphQLResolveInfo;
  args: DocCreationArgs;
  inlineWithUser?: boolean;
}
export async function createItem({
  collectionName,
  ctx,
  info: _info,
  args,
  inlineWithUser,
}: CreateItemArgs) {
  throw new Error("Not implemented");
}

export async function getItem(
  collectionName: string,
  ctx: GqlContext,
  info: GraphQLResolveInfo,
  args: any
) {
  throw new Error("Not implemented");
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
  ctx: GqlContext,
  args: QueryArgs
): Promise<unknown[]> {
  throw new Error("Not implemented");
}

export async function resolveUserRelation(
  collectionName: string,
  user: User,
  ctx: GqlContext,
  args: QueryArgs
): Promise<unknown[]> {
  throw new Error("Not implemented");
}

export async function getCollectionData(
  collectionName: string,
  ctx: GqlContext,
  info: GraphQLResolveInfo,
  args: QueryArgs
): Promise<unknown[]> {
  throw new Error("Not implemented");
}

export async function getUserSubcollectionData(
  collectionName: string,
  ctx: GqlContext,
  info: GraphQLResolveInfo | undefined,
  args: QueryArgs,
  inline?: boolean
): Promise<unknown[]> {
  throw new Error("Not implemented");
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
  ctx: GqlContext,
  info: GraphQLResolveInfo,
  args: DocUpdateArgs,
  inUserSubcollection = false
): Promise<unknown> {
  throw new Error("Not implemented");
}

export async function toggleSelection(
  collectionName: string,
  ctx: GqlContext,
  info: GraphQLResolveInfo,
  id: string,
  archivedAt: Date | null
): Promise<unknown> {
  throw new Error("Not implemented");
}

export async function upsertItem(
  collectionName: string,
  ctx: GqlContext,
  info: GraphQLResolveInfo,
  args: DocUpdateArgs,
  inUserSubcollection = false
): Promise<unknown> {
  throw new Error("Not implemented");
}
