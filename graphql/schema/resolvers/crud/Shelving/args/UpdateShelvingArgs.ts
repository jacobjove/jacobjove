import * as TypeGraphQL from "type-graphql";
import { ShelvingUpdateInput } from "../../../inputs/ShelvingUpdateInput";
import { ShelvingWhereUniqueInput } from "../../../inputs/ShelvingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShelvingArgs {
  @TypeGraphQL.Field((_type) => ShelvingUpdateInput, {
    nullable: false,
  })
  data!: ShelvingUpdateInput;

  @TypeGraphQL.Field((_type) => ShelvingWhereUniqueInput, {
    nullable: false,
  })
  where!: ShelvingWhereUniqueInput;
}
