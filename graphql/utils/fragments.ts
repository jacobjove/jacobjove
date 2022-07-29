import { DocumentNode, gql } from "@apollo/client";

export const buildNewItemFragment = (
  fragment: DocumentNode,
  fragmentName: string,
  modelName: string
): [DocumentNode, string] => {
  const newFragmentName = `New${fragmentName}`;
  return [
    gql`
      # eslint-disable-next-line
      fragment ${newFragmentName} on ${modelName} { 
        ...${fragmentName} 
      }
      ${fragment}
    `,
    newFragmentName,
  ];
};
