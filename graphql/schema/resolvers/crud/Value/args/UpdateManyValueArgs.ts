import * as TypeGraphQL from "type-graphql";
import { ValueUpdateManyMutationInput } from "../../../inputs/ValueUpdateManyMutationInput";
import { ValueWhereInput } from "../../../inputs/ValueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyValueArgs {
  @TypeGraphQL.Field((_type) => ValueUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ValueUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ValueWhereInput, {
    nullable: true,
  })
  where?: ValueWhereInput | undefined;
}
