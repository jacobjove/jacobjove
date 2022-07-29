import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateManyInput } from "../../../inputs/ListCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyListArgs {
  @TypeGraphQL.Field(() => [ListCreateManyInput], { nullable: false })
  data!: ListCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
