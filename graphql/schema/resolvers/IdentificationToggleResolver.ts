import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { Identification } from "@/prisma/generated/models/Identification";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => Identification)
export class IdentificationToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Identification, {
    nullable: false,
  })
  async toggleIdentification(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("identityId", (_type) => TypeGraphQL.Int) identityId: number,
    @TypeGraphQL.Arg("deleted", { nullable: true }) deleted: null | Date
  ): Promise<Identification> {
    const prisma = getPrismaFromContext(ctx);
    const identificationExists =
      (await prisma.identification.count({
        where: {
          userId: userId,
          identityId: identityId,
        },
      })) > 0;
    if (identificationExists) {
      return await prisma.identification.update({
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
      return await prisma.identification.create({
        data: {
          userId: userId,
          identityId: identityId,
          deleted: deleted,
        },
      });
    }
  }
}
