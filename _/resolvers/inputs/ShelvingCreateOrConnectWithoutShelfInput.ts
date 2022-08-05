import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateOrConnectWithoutShelfInput", { isAbstract: true })
export class ShelvingCreateOrConnectWithoutShelfInput {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingCreateWithoutShelfInput, { nullable: false })
  create!: ShelvingCreateWithoutShelfInput;
}
