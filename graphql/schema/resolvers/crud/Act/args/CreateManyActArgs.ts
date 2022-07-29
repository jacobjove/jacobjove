import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateManyInput } from "../../../inputs/ActCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActArgs {
  @TypeGraphQL.Field(() => [ActCreateManyInput], { nullable: false })
  data!: ActCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
