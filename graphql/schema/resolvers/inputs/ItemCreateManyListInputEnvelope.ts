import * as TypeGraphQL from "type-graphql-v2-fork";
import { ItemCreateManyListInput } from "../inputs/ItemCreateManyListInput";

@TypeGraphQL.InputType("ItemCreateManyListInputEnvelope", {
  isAbstract: true,
})
export class ItemCreateManyListInputEnvelope {
  @TypeGraphQL.Field(() => [ItemCreateManyListInput], { nullable: false })
  data!: ItemCreateManyListInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
