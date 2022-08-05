import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Shelving } from "./Shelving";
import { User } from "./User";

@TypeGraphQL.ObjectType("Bookshelf", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Bookshelf extends Model {
  owner?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  slug!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  description?: string | null;

  shelvings?: Shelving[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const BookshelfModel = getModelForClass<typeof Bookshelf>(Bookshelf);
export default BookshelfModel;
