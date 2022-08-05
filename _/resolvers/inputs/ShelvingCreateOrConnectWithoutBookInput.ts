import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateOrConnectWithoutBookInput", { isAbstract: true })
export class ShelvingCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingCreateWithoutBookInput, { nullable: false })
  create!: ShelvingCreateWithoutBookInput;
}
