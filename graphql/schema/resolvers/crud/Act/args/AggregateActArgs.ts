import * as TypeGraphQL from "type-graphql";
import { ActOrderByWithRelationInput } from "../../../inputs/ActOrderByWithRelationInput";
import { ActWhereInput } from "../../../inputs/ActWhereInput";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateActArgs {
  @TypeGraphQL.Field((_type) => ActWhereInput, {
    nullable: true,
  })
  where?: ActWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ActOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
