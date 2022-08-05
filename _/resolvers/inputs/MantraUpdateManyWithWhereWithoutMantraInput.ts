import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraScalarWhereInput } from "../inputs/MantraScalarWhereInput";
import { MantraUpdateManyMutationInput } from "../inputs/MantraUpdateManyMutationInput";

@TypeGraphQL.InputType("MantraUpdateManyWithWhereWithoutMantraInput", { isAbstract: true })
export class MantraUpdateManyWithWhereWithoutMantraInput {
  @TypeGraphQL.Field(() => MantraScalarWhereInput, { nullable: false })
  where!: MantraScalarWhereInput;

  @TypeGraphQL.Field(() => MantraUpdateManyMutationInput, { nullable: false })
  data!: MantraUpdateManyMutationInput;
}
