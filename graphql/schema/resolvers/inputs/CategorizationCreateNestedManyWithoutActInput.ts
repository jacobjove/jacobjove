import * as TypeGraphQL from "type-graphql";
import { CategorizationCreateManyActInputEnvelope } from "../inputs/CategorizationCreateManyActInputEnvelope";
import { CategorizationCreateOrConnectWithoutActInput } from "../inputs/CategorizationCreateOrConnectWithoutActInput";
import { CategorizationCreateWithoutActInput } from "../inputs/CategorizationCreateWithoutActInput";
import { CategorizationWhereUniqueInput } from "../inputs/CategorizationWhereUniqueInput";

@TypeGraphQL.InputType("CategorizationCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class CategorizationCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [CategorizationCreateWithoutActInput], {
    nullable: true,
  })
  create?: CategorizationCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationCreateOrConnectWithoutActInput], {
    nullable: true,
  })
  connectOrCreate?: CategorizationCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategorizationCreateManyActInputEnvelope, {
    nullable: true,
  })
  createMany?: CategorizationCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategorizationWhereUniqueInput[] | undefined;
}
