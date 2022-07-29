import { useLazyQuery } from "@apollo/client";
import Autocomplete, { AutocompleteRenderOptionState } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { DocumentNode } from "graphql";
import debounce from "lodash/debounce";
import { FC, HTMLAttributes, ReactNode, SyntheticEvent, useRef } from "react";

type Option = Record<string, string>; // TODO: use generic type!

export interface InstantSearchProps {
  label: string; // label for the search input
  query: DocumentNode; // GraphQL query that accepts "where" and "orderBy" arguments
  dataKey: string; // key associated with the search results in the GraphQL response data
  idKey?: string;
  labelKey: string;
  searchableFieldKeys: string[];
  getOptionKey?: (option: Option | string) => string;
  minimumSearchLength?: number; // minimum length of text input required to call `getSearchResultsForInput`
  throttleDelay?: number; // delay in ms between calls to `getSearchResultsForInput`
  // TODO: include onChange in autocompleteProps after fixing signature
  onChange: (value: string | Option | null) => void;
  autocompleteProps: {
    renderOption?: (
      props: HTMLAttributes<HTMLLIElement>,
      option: Option,
      state: AutocompleteRenderOptionState
    ) => ReactNode;
    groupBy?: (option: Option) => string;
    disabled?: boolean;
  };
}

/**
 * A TextInput component that instantly retrieves results
 */
const InstantSearch: FC<InstantSearchProps> = ({
  label,
  query: QUERY,
  dataKey,
  labelKey,
  searchableFieldKeys,
  idKey = "id",
  getOptionKey = (option: Option | string) =>
    typeof option === "string" ? option : option[labelKey],
  minimumSearchLength = 1,
  throttleDelay = 250,
  onChange, // TODO: include in autocompleteProps after fixing signature
  autocompleteProps,
}: InstantSearchProps) => {
  const [getResults, { data, loading, error }] = useLazyQuery(QUERY, {
    // TODO: this could be cache only if we already have all notes in the cache...
    fetchPolicy: "network-only",
  });

  const options: Option[] = data?.[dataKey] || [];

  // Throttling behavior only works if the same function object is used,
  // so we use `useRef` to keep hold of the function object.
  const getSearchResultsForInput = useRef(
    debounce((...args: Parameters<typeof getResults>) => {
      const [queryOptions, ...rest] = args;
      return Promise.resolve(getResults(queryOptions, ...rest)).catch((error) => {
        console.error(error);
      });
    }, throttleDelay)
  );

  const handleInputChange = (event: SyntheticEvent, value: string) => {
    // Only call `getSearchResultsForInput` if the input is long enough.
    if (value.length < minimumSearchLength) return;
    getSearchResultsForInput.current({
      variables: {
        where: {
          OR: [
            ...searchableFieldKeys.map((key) => ({
              [key]: { contains: value },
            })),
          ],
        },
        orderBy: [{ [labelKey]: "asc" }],
      },
    });
  };

  return (
    <Autocomplete
      {...autocompleteProps}
      // TODO: include onChange in autocompleteProps after fixing signature
      onChange={(_event, value, _reason, _details) => onChange(value)}
      freeSolo
      noOptionsText={"Type to search"}
      options={options} // TODO
      filterOptions={() => options} // TODO
      // Note: Option labels must be unique; MUI uses them as component keys.
      getOptionLabel={getOptionKey}
      // Do not use strict equality here, since ids may be numbers or strings.
      isOptionEqualToValue={(option, value) => option[idKey] == value[idKey]}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          inputProps={{ ...params.inputProps, "data-testid": "instantSearchInput" }}
        />
      )}
    />
  );
};

export default InstantSearch;
