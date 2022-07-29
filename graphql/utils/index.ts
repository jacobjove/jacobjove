import { getFragmentForModel } from "@/graphql/fragments";
import { gql } from "@apollo/client";

const pascalCaseRegexPattern = new RegExp(/^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*(?:[A-Z]?)$/);

const checkModelName = (modelName: string) => {
  if (!pascalCaseRegexPattern.test(modelName))
    throw new Error(
      `The model name ${modelName} is invalid. The model name for mutation generation must be Pascal case.`
    );
};

export const generateCreationMutation = (modelName: string) => {
  checkModelName(modelName);
  const fragment = getFragmentForModel(modelName);
  return gql`
    # eslint-disable-next-line @graphql-eslint/known-type-names
    mutation Create${modelName}($data: ${modelName}CreateInput!) {
      create${modelName}(data: $data) {
        ...${modelName}Fragment
      }
    }
    ${fragment}
  `;
};

export const generateUpdateMutation = (modelName: string) => {
  checkModelName(modelName);
  const fragment = getFragmentForModel(modelName);
  return gql`
    # eslint-disable-next-line @graphql-eslint/known-type-names
    mutation Update${modelName}($where: ${modelName}WhereUniqueInput!, $data: ${modelName}UpdateInput!) {
      update${modelName}(data: $data, where: $where) {
        ...${modelName}Fragment
      }
    }
    ${fragment}
  `;
};
