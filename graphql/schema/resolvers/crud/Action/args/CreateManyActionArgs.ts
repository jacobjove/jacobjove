import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateManyInput } from "../../../inputs/ActionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActionArgs {
  @TypeGraphQL.Field((_type) => [ActionCreateManyInput], { nullable: false })
  data!: ActionCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
