import * as TypeGraphQL from "type-graphql";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMantraArgs {
  @TypeGraphQL.Field((_type) => MantraWhereInput, {
    nullable: true,
  })
  where?: MantraWhereInput | undefined;
}
