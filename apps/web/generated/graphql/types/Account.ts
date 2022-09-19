/* Do not edit this file. It was generated programmatically. */

import { DateTimeScalar, ObjectIdScalar } from "@web/graphql/schema/scalars";
import { Model } from "@web/graphql/schema/types";
import { Field, ObjectType } from "type-graphql-v2-fork";

@ObjectType()
export class Account extends Model {
  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => ObjectIdScalar, { nullable: false })
  userId!: string;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: false })
  provider!: string;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: false })
  remoteId!: string;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => [String], { nullable: false })
  scopes!: string[];

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: true })
  accessToken?: string | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: true })
  refreshToken?: string | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => DateTimeScalar, { nullable: true })
  accessTokenExpiry?: Date | null;

  // `nullable` in TypeGraphQL actually refers to whether the input is optional.
  // https://typegraphql.com/docs/0.17.2/types-and-fields.html
  @Field(() => String, { nullable: true })
  syncToken?: string | null;
}

export default Account;
