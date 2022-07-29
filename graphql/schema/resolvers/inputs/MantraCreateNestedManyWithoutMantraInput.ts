import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraCreateManyMantraInputEnvelope } from "../inputs/MantraCreateManyMantraInputEnvelope";
import { MantraCreateOrConnectWithoutMantraInput } from "../inputs/MantraCreateOrConnectWithoutMantraInput";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateNestedManyWithoutMantraInput", {
  isAbstract: true,
})
export class MantraCreateNestedManyWithoutMantraInput {
  @TypeGraphQL.Field(() => [MantraCreateWithoutMantraInput], { nullable: true })
  create?: MantraCreateWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraCreateOrConnectWithoutMantraInput], { nullable: true })
  connectOrCreate?: MantraCreateOrConnectWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field(() => MantraCreateManyMantraInputEnvelope, { nullable: true })
  createMany?: MantraCreateManyMantraInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MantraWhereUniqueInput], { nullable: true })
  connect?: MantraWhereUniqueInput[] | undefined;
}
