import * as TypeGraphQL from "type-graphql-v2-fork";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Redirect", {
  isAbstract: true,
})
export class Redirect extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  old_path!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  new_path!: string;
}
