import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActUpdateInput } from "../../../inputs/ActUpdateInput";
import { ActWhereUniqueInput } from "../../../inputs/ActWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActArgs {
  @TypeGraphQL.Field(() => ActUpdateInput, { nullable: false })
  data!: ActUpdateInput;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;
}
