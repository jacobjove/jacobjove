import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutHabitsInput } from "../inputs/ActCreateOrConnectWithoutHabitsInput";
import { ActCreateWithoutHabitsInput } from "../inputs/ActCreateWithoutHabitsInput";
import { ActUpdateWithoutHabitsInput } from "../inputs/ActUpdateWithoutHabitsInput";
import { ActUpsertWithoutHabitsInput } from "../inputs/ActUpsertWithoutHabitsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutHabitsInput", { isAbstract: true })
export class ActUpdateOneRequiredWithoutHabitsInput {
  @TypeGraphQL.Field(() => ActCreateWithoutHabitsInput, { nullable: true })
  create?: ActCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutHabitsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActUpsertWithoutHabitsInput, { nullable: true })
  upsert?: ActUpsertWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateWithoutHabitsInput, { nullable: true })
  update?: ActUpdateWithoutHabitsInput | undefined;
}
