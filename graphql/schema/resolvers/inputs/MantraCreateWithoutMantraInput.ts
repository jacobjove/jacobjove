import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { UserCreateNestedOneWithoutMantrasInput } from "../inputs/UserCreateNestedOneWithoutMantrasInput";

@TypeGraphQL.InputType("MantraCreateWithoutMantraInput", {
  isAbstract: true,
})
export class MantraCreateWithoutMantraInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  content!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutMantrasInput, { nullable: false })
  user!: UserCreateNestedOneWithoutMantrasInput;
}
