import * as TypeGraphQL from "type-graphql";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActArgs {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: false,
  })
  where!: ActWhereUniqueInput;
}
