import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateInput } from "../inputs/MantraCreateInput";
import { MantraUpdateWithoutMantrasInput } from "../inputs/MantraUpdateWithoutMantrasInput";

@TypeGraphQL.InputType("MantraUpsertWithoutMantrasInput", {
  isAbstract: true,
})
export class MantraUpsertWithoutMantrasInput {
  @TypeGraphQL.Field((_type) => MantraUpdateWithoutMantrasInput, { nullable: false })
  update!: MantraUpdateWithoutMantrasInput;

  @TypeGraphQL.Field((_type) => MantraCreateInput, { nullable: false })
  create!: MantraCreateInput;
}
