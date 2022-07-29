import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateManyInput } from "../../../inputs/BookshelfCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookshelfArgs {
  @TypeGraphQL.Field(() => [BookshelfCreateManyInput], { nullable: false })
  data!: BookshelfCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
