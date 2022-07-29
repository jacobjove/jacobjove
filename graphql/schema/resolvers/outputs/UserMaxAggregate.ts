import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserMaxAggregate", {
  isAbstract: true,
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  uid!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  email!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  emailVerified!: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isAdmin!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin!: Date | null;
}
