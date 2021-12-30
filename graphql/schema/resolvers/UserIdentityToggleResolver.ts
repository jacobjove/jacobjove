import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { UserIdentity } from "@/prisma/generated/models/UserIdentity";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => UserIdentity)
export class UserIdentityToggleResolver {
  @TypeGraphQL.Mutation((_returns) => UserIdentity, {
    nullable: false,
  })
  async toggleUserIdentity(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("identityId", (_type) => TypeGraphQL.Int) identityId: number,
    @TypeGraphQL.Arg("deleted", { nullable: true }) deleted: null | Date
  ): Promise<UserIdentity> {
    const prisma = getPrismaFromContext(ctx);
    const identitySelectionExists =
      (await prisma.identitySelection.count({
        where: {
          userId: userId,
          identityId: identityId,
        },
      })) > 0;
    if (identitySelectionExists) {
      return await prisma.identitySelection.update({
        where: {
          userId_identityId: {
            userId: userId,
            identityId: identityId,
          },
        },
        data: {
          deleted: deleted,
        },
      });
    } else {
      return await prisma.identitySelection.create({
        data: {
          userId: userId,
          identityId: identityId,
          deleted: deleted,
        },
      });
    }
  }
}
