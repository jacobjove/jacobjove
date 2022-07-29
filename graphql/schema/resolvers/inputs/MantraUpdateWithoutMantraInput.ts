import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserUpdateOneRequiredWithoutMantrasInput } from "../inputs/UserUpdateOneRequiredWithoutMantrasInput";

@TypeGraphQL.InputType("MantraUpdateWithoutMantraInput", {
  isAbstract: true,
})
export class MantraUpdateWithoutMantraInput {
  @TypeGraphQL.Field({ nullable: true })
  content?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutMantrasInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutMantrasInput | undefined;
}
