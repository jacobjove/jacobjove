import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyActionInputEnvelope } from "../inputs/IdentityActRelationCreateManyActionInputEnvelope";
import { IdentityActRelationCreateOrConnectWithoutActionInput } from "../inputs/IdentityActRelationCreateOrConnectWithoutActionInput";
import { IdentityActRelationCreateWithoutActionInput } from "../inputs/IdentityActRelationCreateWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationCreateNestedManyWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateNestedManyWithoutActionInput {
  @TypeGraphQL.Field(() => [IdentityActRelationCreateWithoutActionInput], { nullable: true })
  create?: IdentityActRelationCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationCreateOrConnectWithoutActionInput], {
    nullable: true,
  })
  connectOrCreate?: IdentityActRelationCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationCreateManyActionInputEnvelope, {
    nullable: true,
  })
  createMany?: IdentityActRelationCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationWhereUniqueInput], { nullable: true })
  connect?: IdentityActRelationWhereUniqueInput[] | undefined;
}
