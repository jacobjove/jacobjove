import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutCategorizationsInput } from "../inputs/CategoryCreateNestedOneWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationCreateWithoutActInput", {
  isAbstract: true,
})
export class CategorizationCreateWithoutActInput {
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
}
