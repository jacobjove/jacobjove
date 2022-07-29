import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput | undefined;
}
