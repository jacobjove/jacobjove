import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateOneRequiredWithoutShelvingsInput } from "../inputs/BookUpdateOneRequiredWithoutShelvingsInput";

@TypeGraphQL.InputType("ShelvingUpdateWithoutShelfInput", { isAbstract: true })
export class ShelvingUpdateWithoutShelfInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  rationale?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookUpdateOneRequiredWithoutShelvingsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutShelvingsInput | undefined;
}
