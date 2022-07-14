import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingCreateOrConnectWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingCreateOrConnectWithoutShelfInput {
  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: false,
  })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ShelvingCreateWithoutShelfInput, {
    nullable: false,
  })
  create!: ShelvingCreateWithoutShelfInput;
}
