import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationOrderByWithRelationInput } from "../../../inputs/IdentityActRelationOrderByWithRelationInput";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, {
    nullable: true,
  })
  where?: IdentityActRelationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: IdentityActRelationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, {
    nullable: true,
  })
  cursor?: IdentityActRelationWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
