import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingUpdateWithoutBookInput } from "../inputs/ShelvingUpdateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpdateWithWhereUniqueWithoutBookInput", { isAbstract: true })
export class ShelvingUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingUpdateWithoutBookInput, { nullable: false })
  data!: ShelvingUpdateWithoutBookInput;
}
