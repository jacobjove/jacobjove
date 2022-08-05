import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutCategorizationsInput", { isAbstract: true })
export class ActCreateOrConnectWithoutCategorizationsInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActCreateWithoutCategorizationsInput, { nullable: false })
  create!: ActCreateWithoutCategorizationsInput;
}
