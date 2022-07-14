import * as TypeGraphQL from "type-graphql";
import { ListUpdateManyMutationInput } from "../../../inputs/ListUpdateManyMutationInput";
import { ListWhereInput } from "../../../inputs/ListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyListArgs {
  @TypeGraphQL.Field((_type) => ListUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ListUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ListWhereInput, {
    nullable: true,
  })
  where?: ListWhereInput | undefined;
}
