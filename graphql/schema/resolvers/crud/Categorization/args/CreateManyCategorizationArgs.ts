import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationCreateManyInput } from "../../../inputs/CategorizationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategorizationArgs {
  @TypeGraphQL.Field(() => [CategorizationCreateManyInput], { nullable: false })
  data!: CategorizationCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
