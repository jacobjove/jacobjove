import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingUpdateWithoutShelfInput } from "../inputs/ShelvingUpdateWithoutShelfInput";
import { ShelvingWhereUniqueInput } from "../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.InputType("ShelvingUpdateWithWhereUniqueWithoutShelfInput", { isAbstract: true })
export class ShelvingUpdateWithWhereUniqueWithoutShelfInput {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingUpdateWithoutShelfInput, { nullable: false })
  data!: ShelvingUpdateWithoutShelfInput;
}
