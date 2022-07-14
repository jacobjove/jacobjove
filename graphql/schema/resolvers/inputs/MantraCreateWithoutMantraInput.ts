import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { UserCreateNestedOneWithoutMantrasInput } from "../inputs/UserCreateNestedOneWithoutMantrasInput";

@TypeGraphQL.InputType("MantraCreateWithoutMantraInput", {
  isAbstract: true,
})
export class MantraCreateWithoutMantraInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutMantrasInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutMantrasInput;
}
