import * as TypeGraphQL from "type-graphql";
import { ActCreateManyParentInputEnvelope } from "../inputs/ActCreateManyParentInputEnvelope";
import { ActCreateOrConnectWithoutParentInput } from "../inputs/ActCreateOrConnectWithoutParentInput";
import { ActCreateWithoutParentInput } from "../inputs/ActCreateWithoutParentInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedManyWithoutParentInput", {
  isAbstract: true,
})
export class ActCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field((_type) => [ActCreateWithoutParentInput], {
    nullable: true,
  })
  create?: ActCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActCreateOrConnectWithoutParentInput], {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActCreateManyParentInputEnvelope, {
    nullable: true,
  })
  createMany?: ActCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActWhereUniqueInput[] | undefined;
}
