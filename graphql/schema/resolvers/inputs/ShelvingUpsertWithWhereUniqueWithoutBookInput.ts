import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingUpdateWithoutBookInput } from "../inputs/ShelvingUpdateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: false,
  })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ShelvingUpdateWithoutBookInput, {
    nullable: false,
  })
  update!: ShelvingUpdateWithoutBookInput;

  @TypeGraphQL.Field((_type) => ShelvingCreateWithoutBookInput, {
    nullable: false,
  })
  create!: ShelvingCreateWithoutBookInput;
}
