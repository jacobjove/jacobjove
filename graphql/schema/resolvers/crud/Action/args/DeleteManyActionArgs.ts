import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActionArgs {
  @TypeGraphQL.Field((_type) => ActionWhereInput, { nullable: true })
  where?: ActionWhereInput | undefined;
}
