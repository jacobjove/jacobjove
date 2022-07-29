import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateManyInput } from "../../../inputs/ActCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActArgs {
  @TypeGraphQL.Field((_type) => [ActCreateManyInput], { nullable: false })
  data!: ActCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
