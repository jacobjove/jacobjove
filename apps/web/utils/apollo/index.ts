import { ApolloCache, DocumentNode } from "@apollo/client";

export const addItemToCache = (
  cache: ApolloCache<unknown>,
  data: unknown,
  fieldName: string,
  fragment: DocumentNode,
  fragmentName: string
) => {
  if (data) {
    const newItemRef = cache.writeFragment({
      data,
      fragment,
      fragmentName,
    });
    cache.modify({
      fields: {
        [fieldName]: (existingItems = []) => {
          return [...existingItems, newItemRef];
        },
        user: (instance) => {
          if (instance[fieldName]) {
            return {
              ...instance,
              [fieldName]: [...instance[fieldName], newItemRef],
            };
          }
          return instance;
        },
        // TODO:
      },
    });
  }
};
