import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueShelvingArgs {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;
}
