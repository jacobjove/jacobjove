import * as TypeGraphQL from "type-graphql";
import { ShelvingCreateInput } from "../../../inputs/ShelvingCreateInput";
import { ShelvingUpdateInput } from "../../../inputs/ShelvingUpdateInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: false,
  })
  where!: ShelvingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ShelvingCreateInput, {
    nullable: false,
  })
  create!: ShelvingCreateInput;

  @TypeGraphQL.Field((_type) => ShelvingUpdateInput, {
    nullable: false,
  })
  update!: ShelvingUpdateInput;
}
