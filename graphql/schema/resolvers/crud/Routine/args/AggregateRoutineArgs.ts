import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineOrderByWithRelationInput } from "../../../inputs/RoutineOrderByWithRelationInput";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineWhereInput, { nullable: true })
  where?: RoutineWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RoutineOrderByWithRelationInput], { nullable: true })
  orderBy?: RoutineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, { nullable: true })
  cursor?: RoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
