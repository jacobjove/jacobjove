import * as TypeGraphQL from "type-graphql";
import { BookWhereInput } from "../../../inputs/BookWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookArgs {
  @TypeGraphQL.Field((_type) => BookWhereInput, {
    nullable: true,
  })
  where?: BookWhereInput | undefined;
}
