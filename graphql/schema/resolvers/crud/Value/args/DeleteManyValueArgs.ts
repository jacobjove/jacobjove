import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyValueArgs {
  @TypeGraphQL.Field(() => ValueWhereInput, { nullable: true })
  where?: ValueWhereInput | undefined;
}
