import * as TypeGraphQL from "type-graphql-v2-fork";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Redirect", {
  isAbstract: true,
})
export class Redirect extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  old_path!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  new_path!: string;
}
