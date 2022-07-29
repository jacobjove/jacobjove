import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateManyMutationInput } from "../../../inputs/BookUpdateManyMutationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookArgs {
  @TypeGraphQL.Field(() => BookUpdateManyMutationInput, { nullable: false })
  data!: BookUpdateManyMutationInput;

  @TypeGraphQL.Field(() => BookWhereInput, { nullable: true })
  where?: BookWhereInput | undefined;
}
