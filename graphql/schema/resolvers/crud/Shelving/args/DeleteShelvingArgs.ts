import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, { nullable: false })
  where!: ShelvingWhereUniqueInput;
}
