import * as TypeGraphQL from "type-graphql";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteActArgs {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: false,
  })
  where!: ActWhereUniqueInput;
}
