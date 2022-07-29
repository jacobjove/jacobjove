import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMantraArgs {
  @TypeGraphQL.Field((_type) => MantraWhereInput, { nullable: true })
  where?: MantraWhereInput | undefined;
}
