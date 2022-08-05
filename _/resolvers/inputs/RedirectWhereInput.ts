import * as TypeGraphQL from "type-graphql-v2-fork";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RedirectWhereInput", { isAbstract: true })
export class RedirectWhereInput {
  @TypeGraphQL.Field(() => [RedirectWhereInput], { nullable: true })
  AND?: RedirectWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RedirectWhereInput], { nullable: true })
  OR?: RedirectWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RedirectWhereInput], { nullable: true })
  NOT?: RedirectWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  old_path?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  new_path?: StringFilter | undefined;
}
