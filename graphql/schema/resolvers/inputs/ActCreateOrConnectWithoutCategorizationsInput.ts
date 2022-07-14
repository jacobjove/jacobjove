import * as TypeGraphQL from "type-graphql";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutCategorizationsInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: false,
  })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutCategorizationsInput, {
    nullable: false,
  })
  create!: ActCreateWithoutCategorizationsInput;
}
