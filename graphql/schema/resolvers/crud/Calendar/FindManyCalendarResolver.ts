import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getFirestoreDocDataFromSnapshot,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Calendar } from "../../../models/Calendar";
import { FindManyCalendarArgs } from "./args/FindManyCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class FindManyCalendarResolver {
  @TypeGraphQL.Query((_returns) => [Calendar], {
    nullable: false,
  })
  async calendars(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarArgs
  ): Promise<Calendar[]> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).calendar.findMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      const calendarsRef = firestore.collection(`users/${ctx.token?.uid}/calendars`);
      const snapshot = await calendarsRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<Calendar>)
      );
    }
  }
}
