import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("ShelvingCreateManyBookInput", {
  isAbstract: true,
})
export class ShelvingCreateManyBookInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  rationale?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;
}
