import * as TypeGraphQL from "type-graphql";
import { BookshelfCreateManyOwnerInput } from "../inputs/BookshelfCreateManyOwnerInput";

@TypeGraphQL.InputType("BookshelfCreateManyOwnerInputEnvelope", {
  isAbstract: true,
})
export class BookshelfCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field((_type) => [BookshelfCreateManyOwnerInput], {
    nullable: false,
  })
  data!: BookshelfCreateManyOwnerInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
