import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListCreateManyOwnerInput } from "../inputs/ListCreateManyOwnerInput";

@TypeGraphQL.InputType("ListCreateManyOwnerInputEnvelope", { isAbstract: true })
export class ListCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(() => [ListCreateManyOwnerInput], { nullable: false })
  data!: ListCreateManyOwnerInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
