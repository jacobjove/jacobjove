import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMantraArgs {
  @TypeGraphQL.Field(() => MantraWhereUniqueInput, { nullable: false })
  where!: MantraWhereUniqueInput;
}
