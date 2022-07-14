import * as TypeGraphQL from "type-graphql";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, {
    nullable: false,
  })
  where!: CategorizationWhereUniqueInput;
}
