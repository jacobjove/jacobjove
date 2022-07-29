import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyActInputEnvelope } from "../inputs/CategorizationCreateManyActInputEnvelope";
import { CategorizationCreateOrConnectWithoutActInput } from "../inputs/CategorizationCreateOrConnectWithoutActInput";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class CategorizationCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field(() => [CategorizationCreateWithoutActInput], { nullable: true })
  create?: CategorizationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationCreateOrConnectWithoutActInput], { nullable: true })
  connectOrCreate?: CategorizationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => CategorizationCreateManyActInputEnvelope, { nullable: true })
  createMany?: CategorizationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereUniqueInput], { nullable: true })
  connect?: CategorizationWhereUniqueInput[] | undefined;
}
