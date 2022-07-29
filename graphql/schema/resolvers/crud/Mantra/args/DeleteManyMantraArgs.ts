import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMantraArgs {
  @TypeGraphQL.Field(() => MantraWhereInput, { nullable: true })
  where?: MantraWhereInput | undefined;
}
