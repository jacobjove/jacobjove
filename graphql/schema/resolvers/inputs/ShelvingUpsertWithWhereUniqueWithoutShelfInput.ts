import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateWithoutShelfInput } from "../inputs/ShelvingCreateWithoutShelfInput";
import { ShelvingUpdateWithoutShelfInput } from "../inputs/ShelvingUpdateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpsertWithWhereUniqueWithoutShelfInput", {
  isAbstract: true,
})
export class ShelvingUpsertWithWhereUniqueWithoutShelfInput {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingUpdateWithoutShelfInput, { nullable: false })
  update!: ShelvingUpdateWithoutShelfInput;

  @TypeGraphQL.Field(() => ShelvingCreateWithoutShelfInput, { nullable: false })
  create!: ShelvingCreateWithoutShelfInput;
}
