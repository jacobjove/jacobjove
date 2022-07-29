import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateInput } from "../../../inputs/ListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateListArgs {
  @TypeGraphQL.Field(() => ListCreateInput, { nullable: false })
  data!: ListCreateInput;
}
