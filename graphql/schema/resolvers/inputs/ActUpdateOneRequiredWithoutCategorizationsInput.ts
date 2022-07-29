import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutCategorizationsInput } from "../inputs/ActCreateOrConnectWithoutCategorizationsInput";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActUpdateWithoutCategorizationsInput } from "../inputs/ActUpdateWithoutCategorizationsInput";
import { ActUpsertWithoutCategorizationsInput } from "../inputs/ActUpsertWithoutCategorizationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutCategorizationsInput", {
  isAbstract: true,
})
export class ActUpdateOneRequiredWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => ActCreateWithoutCategorizationsInput, { nullable: true })
  create?: ActCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutCategorizationsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => ActUpsertWithoutCategorizationsInput, { nullable: true })
  upsert?: ActUpsertWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateWithoutCategorizationsInput, { nullable: true })
  update?: ActUpdateWithoutCategorizationsInput | undefined;
}
