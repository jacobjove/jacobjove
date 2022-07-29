import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookWhereInput } from "../../../inputs/BookWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookArgs {
  @TypeGraphQL.Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput | undefined;
}
