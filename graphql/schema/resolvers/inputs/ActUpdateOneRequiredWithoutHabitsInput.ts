import * as TypeGraphQL from "type-graphql";
import { ActCreateOrConnectWithoutHabitsInput } from "../inputs/ActCreateOrConnectWithoutHabitsInput";
import { ActCreateWithoutHabitsInput } from "../inputs/ActCreateWithoutHabitsInput";
import { ActUpdateWithoutHabitsInput } from "../inputs/ActUpdateWithoutHabitsInput";
import { ActUpsertWithoutHabitsInput } from "../inputs/ActUpsertWithoutHabitsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutHabitsInput", {
  isAbstract: true,
})
export class ActUpdateOneRequiredWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutHabitsInput, {
    nullable: true,
  })
  create?: ActCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutHabitsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpsertWithoutHabitsInput, {
    nullable: true,
  })
  upsert?: ActUpsertWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutHabitsInput, {
    nullable: true,
  })
  update?: ActUpdateWithoutHabitsInput | undefined;
}
