import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Calendar } from "../../../models/Calendar";
import { FindManyCalendarArgs } from "./args/FindManyCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class FindManyCalendarResolver {
  @TypeGraphQL.Query((_returns) => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarArgs
  ): Promise<Calendar[]> {
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).calendar.findMany({ ...args });
    } else {
      const calendarsRef = firestore.collection(`users/${ctx.session?.user.id}/calendars`);
      const snapshot = await calendarsRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<Calendar>)
      );
    }
  }
}
