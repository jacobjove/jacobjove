import * as TypeGraphQL from "type-graphql";
import { ItemCreateManyInput } from "../../../inputs/ItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemArgs {
  @TypeGraphQL.Field((_type) => [ItemCreateManyInput], {
    nullable: false,
  })
  data!: ItemCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
