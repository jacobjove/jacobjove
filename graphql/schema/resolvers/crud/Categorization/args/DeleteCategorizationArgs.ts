import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationWhereUniqueInput } from "../../../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCategorizationArgs {
  @TypeGraphQL.Field((_type) => CategorizationWhereUniqueInput, { nullable: false })
  where!: CategorizationWhereUniqueInput;
}
