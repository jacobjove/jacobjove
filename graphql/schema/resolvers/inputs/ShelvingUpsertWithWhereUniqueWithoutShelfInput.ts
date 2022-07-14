import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingUpdateWithoutShelfInput } from "../inputs/ShelvingUpdateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpsertWithWhereUniqueWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingUpsertWithWhereUniqueWithoutShelfInput {
  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: false,
  })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ShelvingUpdateWithoutShelfInput, {
    nullable: false,
  })
  update!: ShelvingUpdateWithoutShelfInput;

  @TypeGraphQL.Field((_type) => ShelvingCreateWithoutShelfInput, {
    nullable: false,
  })
  create!: ShelvingCreateWithoutShelfInput;
}
