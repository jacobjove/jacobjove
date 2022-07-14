import * as TypeGraphQL from "type-graphql";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, {
    nullable: false,
  })
  where!: CategorizationWhereUniqueInput;
}
