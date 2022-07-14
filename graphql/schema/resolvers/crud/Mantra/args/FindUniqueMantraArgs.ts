import * as TypeGraphQL from "type-graphql";
import { MantraWhereUniqueInput } from "../../../inputs/MantraWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMantraArgs {
  @TypeGraphQL.Field((_type) => MantraWhereUniqueInput, {
    nullable: false,
  })
  where!: MantraWhereUniqueInput;
}
