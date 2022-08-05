import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Authorship } from "./Authorship";

@TypeGraphQL.ObjectType("Author", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Author extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  slug!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;

  authorships?: Authorship[];
}

const AuthorModel = getModelForClass<typeof Author>(Author);
export default AuthorModel;
