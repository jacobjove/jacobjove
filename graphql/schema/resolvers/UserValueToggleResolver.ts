import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { UserValue } from "@/prisma/generated/models/UserValue";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => UserValue)
export class UserValueToggleResolver {
  @TypeGraphQL.Mutation((_returns) => UserValue, {
    nullable: false,
  })
  async toggleUserValue(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("valueId", (_type) => TypeGraphQL.Int) valueId: number,
    @TypeGraphQL.Arg("deletedAt", { nullable: true }) deletedAt: null | Date
  ): Promise<UserValue> {
    const prisma = getPrismaFromContext(ctx);
    const userValueExists =
      (await prisma.userValue.count({
        where: {
          userId: userId,
          valueId: valueId,
        },
      })) > 0;
    if (userValueExists) {
      return await prisma.userValue.update({
        where: {
          userId_valueId: {
            userId: userId,
            valueId: valueId,
          },
        },
        data: {
          deletedAt: deletedAt,
        },
      });
    } else {
      return await prisma.userValue.create({
        data: {
          userId: userId,
          valueId: valueId,
          deletedAt: deletedAt,
        },
      });
    }
  }
}
