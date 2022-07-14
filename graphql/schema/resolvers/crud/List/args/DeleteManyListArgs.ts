import * as TypeGraphQL from "type-graphql";
import { ListWhereInput } from "../../../inputs/ListWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyListArgs {
  @TypeGraphQL.Field((_type) => ListWhereInput, {
    nullable: true,
  })
  where?: ListWhereInput | undefined;
}
