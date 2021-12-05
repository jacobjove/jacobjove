import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { IdentitySelection } from "@/prisma/generated/models/IdentitySelection";
import { getPrismaFromContext } from "@/prisma/generated/helpers";
import * as GraphQLScalars from "graphql-scalars";


@TypeGraphQL.Resolver(_of => IdentitySelection)
export class IdentitySelectionToggleResolver {
  @TypeGraphQL.Mutation(_returns => IdentitySelection, {
    nullable: false
  })
  async toggleIdentitySelection(
    @TypeGraphQL.Ctx() ctx: any, 
    @TypeGraphQL.Info() info: GraphQLResolveInfo, 
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("identityId", _type => TypeGraphQL.Int) identityId: number,
    @TypeGraphQL.Arg("deleted", {nullable: true}) deleted: null | Date,
  ): Promise<IdentitySelection> {
    const prisma = getPrismaFromContext(ctx);
    const identitySelectionExists = await prisma.identitySelection.count({
      where: {
        userId: userId,
        identityId: identityId
      }
    }) > 0;
    if (identitySelectionExists) {
      return await prisma.identitySelection.update({
        where: {
          userId_identityId: {
            userId: userId,
            identityId: identityId
          }
        },
        data: {
          deleted: deleted
        }
      });
    } else {
      return await prisma.identitySelection.create({
        data: {
          userId: userId,
          identityId: identityId,
          deleted: deleted
        }
      });
    }
  }
}
