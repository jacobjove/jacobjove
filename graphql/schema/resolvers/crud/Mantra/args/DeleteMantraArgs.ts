import * as TypeGraphQL from "type-graphql";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMantraArgs {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, {
    nullable: false,
  })
  where!: MantraWhereUniqueInput;
}
