import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineScalarFieldEnum } from "../../../../enums/RoutineScalarFieldEnum";
import { RoutineOrderByWithRelationInput } from "../../../inputs/RoutineOrderByWithRelationInput";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyRoutineArgs {
  @TypeGraphQL.Field(() => RoutineWhereInput, { nullable: true })
  where?: RoutineWhereInput | undefined;

  @TypeGraphQL.Field(() => [RoutineOrderByWithRelationInput], { nullable: true })
  orderBy?: RoutineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => RoutineWhereUniqueInput, { nullable: true })
  cursor?: RoutineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [RoutineScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "userId"
        | "name"
        | "durationInMinutes"
        | "notes"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
