import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutCategorizationsInput } from "../inputs/ActCreateOrConnectWithoutCategorizationsInput";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutCategorizationsInput", { isAbstract: true })
export class ActCreateNestedOneWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => ActCreateWithoutCategorizationsInput, { nullable: true })
  create?: ActCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutCategorizationsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;
}
