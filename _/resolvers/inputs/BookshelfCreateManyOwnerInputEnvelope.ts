import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateManyOwnerInput } from "../inputs/BookshelfCreateManyOwnerInput";

@TypeGraphQL.InputType("BookshelfCreateManyOwnerInputEnvelope", { isAbstract: true })
export class BookshelfCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(() => [BookshelfCreateManyOwnerInput], { nullable: false })
  data!: BookshelfCreateManyOwnerInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
