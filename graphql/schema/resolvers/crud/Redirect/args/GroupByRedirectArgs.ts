import * as TypeGraphQL from "type-graphql";
import { RedirectScalarFieldEnum } from "../../../../enums/RedirectScalarFieldEnum";
import { RedirectOrderByWithAggregationInput } from "../../../inputs/RedirectOrderByWithAggregationInput";
import { RedirectScalarWhereWithAggregatesInput } from "../../../inputs/RedirectScalarWhereWithAggregatesInput";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByRedirectArgs {
  @TypeGraphQL.Field((_type) => RedirectWhereInput, {
    nullable: true,
  })
  where?: RedirectWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RedirectOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: RedirectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RedirectScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "old_path" | "new_path">;

  @TypeGraphQL.Field((_type) => RedirectScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: RedirectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
