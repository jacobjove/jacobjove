import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateManyInput } from "../../../inputs/ItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemArgs {
  @TypeGraphQL.Field(() => [ItemCreateManyInput], { nullable: false })
  data!: ItemCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
