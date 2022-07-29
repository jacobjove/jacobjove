import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookCreateManyInput } from "../../../inputs/BookCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookArgs {
  @TypeGraphQL.Field(() => [BookCreateManyInput], { nullable: false })
  data!: BookCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
