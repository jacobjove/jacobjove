import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateWithoutBookInput } from "../inputs/ShelvingCreateWithoutBookInput";
import { ShelvingUpdateWithoutBookInput } from "../inputs/ShelvingUpdateWithoutBookInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpsertWithWhereUniqueWithoutBookInput", { isAbstract: true })
export class ShelvingUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingUpdateWithoutBookInput, { nullable: false })
  update!: ShelvingUpdateWithoutBookInput;

  @TypeGraphQL.Field(() => ShelvingCreateWithoutBookInput, { nullable: false })
  create!: ShelvingCreateWithoutBookInput;
}
