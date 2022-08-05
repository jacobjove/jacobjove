import { ExtraBookData } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateManyauthorNamesInput } from "../inputs/BookCreateManyauthorNamesInput";
import { BookCreateManyauthorNamesLfInput } from "../inputs/BookCreateManyauthorNamesLfInput";

@TypeGraphQL.InputType("BookCreateManyInput", { isAbstract: true })
export class BookCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  isbn13?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear?: number | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  extra!: ExtraBookData;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookCreateManyauthorNamesInput, { nullable: true })
  authorNames?: BookCreateManyauthorNamesInput | undefined;

  @TypeGraphQL.Field(() => BookCreateManyauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookCreateManyauthorNamesLfInput | undefined;
}
