import * as TypeGraphQL from "type-graphql";
import { RedirectOrderByWithRelationInput } from "../../../inputs/RedirectOrderByWithRelationInput";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRedirectArgs {
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
}
