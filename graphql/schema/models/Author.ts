import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../models/Authorship";
import { AuthorCount } from "../resolvers/outputs/AuthorCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Author", {
  isAbstract: true,
})
export class Author extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;

  authorships?: Authorship[];

  @TypeGraphQL.Field((_type) => AuthorCount, {
    nullable: true,
  })
  _count?: AuthorCount | null;
}
