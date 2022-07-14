import * as TypeGraphQL from "type-graphql";
import { MantraUpdateManyMutationInput } from "../../../inputs/MantraUpdateManyMutationInput";
import { MantraWhereInput } from "../../../inputs/MantraWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMantraArgs {
  @TypeGraphQL.Field((_type) => MantraUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MantraUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MantraWhereInput, {
    nullable: true,
  })
  where?: MantraWhereInput | undefined;
}
