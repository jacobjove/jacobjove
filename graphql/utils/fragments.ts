import { DocumentNode, gql } from "@apollo/client";

export const buildNewItemFragment = (
  fragment: DocumentNode,
  fragmentName: string,
  modelName: string
): [DocumentNode, string] => {
  const newFragmentName = `New${fragmentName}`;
  const fragmentString = `
    fragment ${newFragmentName} on ${modelName} { 
      ...${fragmentName} 
    }
  `;
  return [gql(fragmentString, fragment), newFragmentName];
};

// export function generateFragment<T>(model: typeof T, fields: string[]) {
//   console.log(">>>", model);
//   return gql([`
//     fragment ActionFragment on Action {
//       ${fields.join("\n")}
//     }
//   `]);
// }
