import * as TypeGraphQL from "type-graphql";
import { ShelvingWhereInput } from "../../../inputs/ShelvingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingWhereInput, {
    nullable: true,
  })
  where?: ShelvingWhereInput | undefined;
}
