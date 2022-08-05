import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Book } from "./Book";
import { Bookshelf } from "./Bookshelf";

@TypeGraphQL.ObjectType("Shelving", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Shelving extends Model {
  book?: Book;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  bookId!: string;

  shelf?: Bookshelf;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  shelfId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  position!: number;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  rationale?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const ShelvingModel = getModelForClass<typeof Shelving>(Shelving);
export default ShelvingModel;
