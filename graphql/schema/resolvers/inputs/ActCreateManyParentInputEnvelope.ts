import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateManyParentInput } from "../inputs/ActCreateManyParentInput";

@TypeGraphQL.InputType("ActCreateManyParentInputEnvelope", {
  isAbstract: true,
})
export class ActCreateManyParentInputEnvelope {
  @TypeGraphQL.Field((_type) => [ActCreateManyParentInput], { nullable: false })
  data!: ActCreateManyParentInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
