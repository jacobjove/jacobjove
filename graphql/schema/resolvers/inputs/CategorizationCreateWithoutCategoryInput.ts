import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutCategorizationsInput } from "../inputs/ActCreateNestedOneWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationCreateWithoutCategoryInput", {
  isAbstract: true,
})
export class CategorizationCreateWithoutCategoryInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutCategorizationsInput, { nullable: false })
  act!: ActCreateNestedOneWithoutCategorizationsInput;
}
