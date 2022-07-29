import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutCategorizationsInput } from "../inputs/ActCreateNestedOneWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationCreateWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationCreateWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutCategorizationsInput, { nullable: false })
  act!: ActCreateNestedOneWithoutCategorizationsInput;
}
