import * as TypeGraphQL from "type-graphql";
import { HabitScalarFieldEnum } from "../../../../enums/HabitScalarFieldEnum";
import { HabitOrderByWithRelationInput } from "../../../inputs/HabitOrderByWithRelationInput";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";
import { HabitWhereUniqueInput } from "../../../inputs/HabitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyHabitArgs {
  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  where?: HabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [HabitOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: HabitOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  cursor?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [HabitScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "actId"
        | "userId"
        | "name"
        | "isPublic"
        | "defaultDurationInMinutes"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
