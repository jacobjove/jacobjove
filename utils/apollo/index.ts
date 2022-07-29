import { ApolloCache, DocumentNode } from "@apollo/client";

export const addItemToCache = (
  cache: ApolloCache<unknown>,
  data: unknown,
  fieldName: string,
  fragment: DocumentNode,
  fragmentName: string
) => {
  if (data) {
    cache.modify({
      fields: {
        [fieldName]: (existingItems = []) => {
          const newItemRef = cache.writeFragment({
            data,
            fragment,
            fragmentName,
          });
          return [...existingItems, newItemRef];
        },
      },
    });
  }
};
