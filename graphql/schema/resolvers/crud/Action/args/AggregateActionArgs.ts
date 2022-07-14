import * as TypeGraphQL from "type-graphql";
import { ActionOrderByWithRelationInput } from "../../../inputs/ActionOrderByWithRelationInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";
import { ActionWhereUniqueInput } from "../../../inputs/ActionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateActionArgs {
  @TypeGraphQL.Field((_type) => ActionWhereInput, {
    nullable: true,
  })
  where?: ActionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ActionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ActionWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
