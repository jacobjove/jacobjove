import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingUpdateManyMutationInput } from "../../../inputs/ShelvingUpdateManyMutationInput";
import { ShelvingWhereInput } from "../../../inputs/ShelvingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyShelvingArgs {
  @TypeGraphQL.Field(() => ShelvingUpdateManyMutationInput, { nullable: false })
  data!: ShelvingUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ShelvingWhereInput, { nullable: true })
  where?: ShelvingWhereInput | undefined;
}
