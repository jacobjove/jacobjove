import * as TypeGraphQL from "type-graphql";
import { RedirectScalarFieldEnum } from "../../../../enums/RedirectScalarFieldEnum";
import { RedirectOrderByWithRelationInput } from "../../../inputs/RedirectOrderByWithRelationInput";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstRedirectArgs {
  @TypeGraphQL.Field((_type) => RedirectWhereInput, {
    nullable: true,
  })
  where?: RedirectWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RedirectOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: RedirectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => RedirectWhereUniqueInput, {
    nullable: true,
  })
  cursor?: RedirectWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [RedirectScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "old_path" | "new_path"> | undefined;
}
