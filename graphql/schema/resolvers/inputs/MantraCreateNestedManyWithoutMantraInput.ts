import * as TypeGraphQL from "type-graphql";
import { MantraCreateManyMantraInputEnvelope } from "../inputs/MantraCreateManyMantraInputEnvelope";
import { MantraCreateOrConnectWithoutMantraInput } from "../inputs/MantraCreateOrConnectWithoutMantraInput";
import { MantraCreateWithoutMantraInput } from "../inputs/MantraCreateWithoutMantraInput";
import { MantraWhereUniqueInput } from "../inputs/MantraWhereUniqueInput";

@TypeGraphQL.InputType("MantraCreateNestedManyWithoutMantraInput", {
  isAbstract: true,
})
export class MantraCreateNestedManyWithoutMantraInput {
  @TypeGraphQL.Field((_type) => [MantraCreateWithoutMantraInput], {
    nullable: true,
  })
  create?: MantraCreateWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraCreateOrConnectWithoutMantraInput], {
    nullable: true,
  })
  connectOrCreate?: MantraCreateOrConnectWithoutMantraInput[] | undefined;

  @TypeGraphQL.Field((_type) => MantraCreateManyMantraInputEnvelope, {
    nullable: true,
  })
  createMany?: MantraCreateManyMantraInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereUniqueInput], {
    nullable: true,
  })
  connect?: MantraWhereUniqueInput[] | undefined;
}
