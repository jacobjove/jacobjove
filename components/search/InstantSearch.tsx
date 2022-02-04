import { useLazyQuery } from "@apollo/client";
import Autocomplete, { AutocompleteRenderOptionState } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { DocumentNode } from "graphql";
import debounce from "lodash/debounce";
import { FC, HTMLAttributes, ReactNode, SyntheticEvent, useRef } from "react";

type Option = Record<string, string>;

export interface InstantSearchProps {
  label: string; // label for the search input
  query: DocumentNode; // GraphQL query that accepts "where" and "orderBy" arguments
  dataKey: string; // key associated with the search results in the GraphQL response data
  onChange?: (value: string[]) => void;
  labelKey: string;
  bodyKey: string;
  idKey?: string;
  getOptionKey?: (option: Option) => string;
  renderOption?: (
    props: HTMLAttributes<HTMLLIElement>,
    option: Option,
    state: AutocompleteRenderOptionState
  ) => ReactNode;
  groupBy?: (option: Option) => string;
  disabled?: boolean;
  minimumSearchLength?: number;
  throttleDelay?: number;
}

/**
 * A TextInput component that instantly retrieves results
 * @param getDataForInput - the callback used to retrieve results for a given text input.
 * @param labelKey - the key used to access an option's label attribute.
 * @param idKey - the key used to access an option's id attribute.
 * @param minimumSearchLength - the minimum length of text input required to call `getDataForInput`.
 * @param throttleDelay - the delay in ms between calls to `getDataForInput`.
 * @constructor
 */
const InstantSearch: FC<InstantSearchProps> = ({
  label,
  query: QUERY,
  dataKey,
  onChange,
  labelKey,
  bodyKey,
  idKey = "id",
  getOptionKey = (option: Option) => option[labelKey],
  renderOption,
  groupBy,
  disabled,
  minimumSearchLength = 1,
  throttleDelay = 250,
}: InstantSearchProps) => {
  const [getResults, { data, loading, error }] = useLazyQuery(QUERY, {
    fetchPolicy: "network-only", // TODO: this could be cache only if we already have all notes in the cache...
  });

  const options: Option[] = data?.[dataKey] || [];

  // const [options, setOptions] = useState<Option[]>([]);
  const handleValueChange = (event: SyntheticEvent, values: Option[]) => {
    onChange?.(values.map((value) => value[idKey]));
  };

  // const abortController = useRef<AbortController>();
  // Throttling behavior only works if the same function object is used,
  // so we use `useRef` to keep hold of the function object.
  const getSearchResultsForInput = useRef(
    debounce((...args: Parameters<typeof getResults>) => {
      console.log("getSearchResultsForInput", args);
      // const controller = new window.AbortController();
      // abortController.current = controller;
      const [queryOptions, ...rest] = args;
      console.log("Returning from getSearchResultsForInput");
      return Promise.resolve(getResults(queryOptions, ...rest)).catch((error) => {
        // TODO: add more resilient error handling.
        console.error(error);
      });
    }, throttleDelay)
  );

  const handleInputChange = (event: SyntheticEvent, value: string) => {
    // Cancel any pending requests.
    // if (abortController.current) {
    //   abortController.current.abort();
    // }

    // Only call `getSearchResultsForInput` if the input is long enough.
    if (value.length < minimumSearchLength) {
      return;
    }

    console.log("Calling getSearchResultsForInput", labelKey, bodyKey);

    getSearchResultsForInput.current({
      variables: {
        where: {
          OR: [
            {
              [labelKey]: {
                contains: value,
              },
            },
            {
              [bodyKey]: {
                contains: value,
              },
            },
          ],
        },
        orderBy: [
          {
            [labelKey]: "asc",
          },
        ],
      },
    });
  };

  return (
    <Autocomplete
      freeSolo
      // limitTags={5}
      noOptionsText={"Type to search"}
      options={options} // TODO
      // groupBy={(option) => notebooks.find((notebook) => notebook.id === option.notebookId)?.name}
      filterOptions={() => options} // TODO
      getOptionLabel={getOptionKey}
      {...(renderOption ? { renderOption } : {})}
      {...(groupBy ? { groupBy } : {})}
      // value={selectedOptions}
      // onChange={handleValueChange}
      // Do not use strict equality here, since ids may be numbers or strings.
      isOptionEqualToValue={(option, value) => option[idKey] == value[idKey]}
      onInputChange={handleInputChange}
      ChipProps={{ size: "small" }}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          inputProps={{ ...params.inputProps, "data-testid": "instantSearchInput" }}
        />
      )}
      sx={{
        "& .MuiChip-root": {
          fontSize: "11px",
          height: "20px",
          "& .MuiChip-label": {
            paddingLeft: "6px",
            paddingRight: "8px",
          },
          "& .MuiChip-deleteIcon": {
            height: "18px",
            width: "18px",
            marginRight: "2px",
          },
        },
      }}
    />
  );
};

export default InstantSearch;
