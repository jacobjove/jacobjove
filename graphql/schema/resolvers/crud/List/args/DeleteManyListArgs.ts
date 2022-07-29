import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListWhereInput } from "../../../inputs/ListWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyListArgs {
  @TypeGraphQL.Field(() => ListWhereInput, { nullable: true })
  where?: ListWhereInput | undefined;
}
