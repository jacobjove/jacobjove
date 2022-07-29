import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActCreateNestedOneWithoutCategorizationsInput } from "../inputs/ActCreateNestedOneWithoutCategorizationsInput";
import { CategoryCreateNestedOneWithoutCategorizationsInput } from "../inputs/CategoryCreateNestedOneWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationCreateInput", {
  isAbstract: true,
})
export class CategorizationCreateInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => CategoryCreateNestedOneWithoutCategorizationsInput, {
    nullable: false,
  })
  category!: CategoryCreateNestedOneWithoutCategorizationsInput;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutCategorizationsInput, { nullable: false })
  act!: ActCreateNestedOneWithoutCategorizationsInput;
}
