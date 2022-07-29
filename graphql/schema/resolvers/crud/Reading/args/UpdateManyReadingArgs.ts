import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingUpdateManyMutationInput } from "../../../inputs/ReadingUpdateManyMutationInput";
import { ReadingWhereInput } from "../../../inputs/ReadingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReadingArgs {
  @TypeGraphQL.Field(() => ReadingUpdateManyMutationInput, { nullable: false })
  data!: ReadingUpdateManyMutationInput;

  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  where?: ReadingWhereInput | undefined;
}
