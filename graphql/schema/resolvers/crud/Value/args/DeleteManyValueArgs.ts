import * as TypeGraphQL from "type-graphql";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyValueArgs {
  @TypeGraphQL.Field((_type) => ValueWhereInput, {
    nullable: true,
  })
  where?: ValueWhereInput | undefined;
}
