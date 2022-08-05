import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfUpdateOneRequiredWithoutShelvingsInput } from "../inputs/BookshelfUpdateOneRequiredWithoutShelvingsInput";

@TypeGraphQL.InputType("ShelvingUpdateWithoutBookInput", { isAbstract: true })
export class ShelvingUpdateWithoutBookInput {
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

  @TypeGraphQL.Field(() => BookshelfUpdateOneRequiredWithoutShelvingsInput, { nullable: true })
  shelf?: BookshelfUpdateOneRequiredWithoutShelvingsInput | undefined;
}
