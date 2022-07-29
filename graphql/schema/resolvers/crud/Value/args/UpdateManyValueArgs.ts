import * as TypeGraphQL from "type-graphql-v2-fork";
import { ValueUpdateManyMutationInput } from "../../../inputs/ValueUpdateManyMutationInput";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyValueArgs {
  @TypeGraphQL.Field(() => ValueUpdateManyMutationInput, { nullable: false })
  data!: ValueUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ValueWhereInput, { nullable: true })
  where?: ValueWhereInput | undefined;
}
