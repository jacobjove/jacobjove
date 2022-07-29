import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutCategorizationsInput } from "../inputs/CategoryCreateNestedOneWithoutCategorizationsInput";

@TypeGraphQL.InputType("CategorizationCreateWithoutActInput", {
  isAbstract: true,
})
export class CategorizationCreateWithoutActInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateNestedOneWithoutCategorizationsInput, {
    nullable: false,
  })
  category!: CategoryCreateNestedOneWithoutCategorizationsInput;
}
