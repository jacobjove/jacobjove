import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingCreateInput } from "../../../inputs/ShelvingCreateInput";
import { ShelvingUpdateInput } from "../../../inputs/ShelvingUpdateInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShelvingArgs {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field(() => ShelvingCreateInput, { nullable: false })
  create!: ShelvingCreateInput;

  @TypeGraphQL.Field(() => ShelvingUpdateInput, { nullable: false })
  update!: ShelvingUpdateInput;
}
