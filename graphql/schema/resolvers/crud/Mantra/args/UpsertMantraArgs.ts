import * as TypeGraphQL from "type-graphql";
import { MantraCreateInput } from "../../../inputs/MantraCreateInput";
import { MantraUpdateInput } from "../../../inputs/MantraUpdateInput";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMantraArgs {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, {
    nullable: false,
  })
  where!: MantraWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MantraCreateInput, {
    nullable: false,
  })
  create!: MantraCreateInput;

  @TypeGraphQL.Field((_type) => MantraUpdateInput, {
    nullable: false,
  })
  update!: MantraUpdateInput;
}
