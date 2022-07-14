import * as TypeGraphQL from "type-graphql";
import { ShelvingUpdateWithoutBookInput } from "../inputs/ShelvingUpdateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true,
})
export class ShelvingUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: false,
  })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ShelvingUpdateWithoutBookInput, {
    nullable: false,
  })
  data!: ShelvingUpdateWithoutBookInput;
}
