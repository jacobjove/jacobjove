import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyActInput } from "../inputs/MetricApplicationCreateManyActInput";

@TypeGraphQL.InputType("MetricApplicationCreateManyActInputEnvelope", {
  isAbstract: true,
})
export class MetricApplicationCreateManyActInputEnvelope {
  @TypeGraphQL.Field((_type) => [MetricApplicationCreateManyActInput], { nullable: false })
  data!: MetricApplicationCreateManyActInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
