import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateManyParentInputEnvelope } from "../inputs/ActCreateManyParentInputEnvelope";
import { ActCreateOrConnectWithoutParentInput } from "../inputs/ActCreateOrConnectWithoutParentInput";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedManyWithoutParentInput", { isAbstract: true })
export class ActCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(() => [ActCreateWithoutParentInput], { nullable: true })
  create?: ActCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => [ActCreateOrConnectWithoutParentInput], { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(() => ActCreateManyParentInputEnvelope, { nullable: true })
  createMany?: ActCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActWhereUniqueInput], { nullable: true })
  connect?: ActWhereUniqueInput[] | undefined;
}
