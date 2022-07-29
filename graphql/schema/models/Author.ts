import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "../models/Authorship";
import { AuthorCount } from "../resolvers/outputs/AuthorCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Author", {
  isAbstract: true,
})
export class Author extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  authorships?: Authorship[];

  @TypeGraphQL.Field(() => AuthorCount, { nullable: true })
  _count?: AuthorCount | null;
}
