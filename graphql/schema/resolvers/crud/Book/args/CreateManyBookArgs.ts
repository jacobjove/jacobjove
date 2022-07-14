import * as TypeGraphQL from "type-graphql";
import { BookCreateManyInput } from "../../../inputs/BookCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookArgs {
  @TypeGraphQL.Field((_type) => [BookCreateManyInput], {
    nullable: false,
  })
  data!: BookCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
