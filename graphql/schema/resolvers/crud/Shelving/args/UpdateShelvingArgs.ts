import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingUpdateInput } from "../../../inputs/ShelvingUpdateInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShelvingArgs {
  @TypeGraphQL.Field(() => ShelvingUpdateInput, { nullable: false })
  data!: ShelvingUpdateInput;

  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;
}
