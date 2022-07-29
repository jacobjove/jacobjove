import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShelvingArgs {
  @TypeGraphQL.Field(() => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;
}
