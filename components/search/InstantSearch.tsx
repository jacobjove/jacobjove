import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { FC, SyntheticEvent, useCallback, useRef, useState } from "react";
import { throttle } from "throttle-debounce";

type Option = Record<string, string>;

export interface InstantSearchProps {
  label: string;
  onChange?: (value: string[]) => void;
  getDataForInput: (input: string) => Option[] | Promise<Option[]>;
  labelKey: string;
  disabled?: boolean;
  idKey?: string;
  minimumSearchLength?: number;
  throttleDelay?: number;
}

/**
 * A TextInput component that instantly retrieves suggested
 * options from ElasticSearch as the user types.
 * @param label - the input field label.
 * @param name - the query parameter name used during form submission.
 * @param getDataForInput - the callback used to retrieve results for a given text input.
 * @param labelKey - the key used to access an option's label attribute.
 * @param idKey - the key used to access an option's id attribute.
 * @param minimumSearchLength - the minimum length of text input required to call `getDataForInput`.
 * @param throttleDelay - the delay in ms between calls to `getDataForInput`.
 * @constructor
 */
const InstantSearch: FC<InstantSearchProps> = ({
  label,
  onChange,
  getDataForInput,
  labelKey,
  disabled,
  idKey = "id",
  minimumSearchLength = 1,
  throttleDelay = 250,
}: InstantSearchProps) => {
  const [options, setOptions] = useState<Option[]>([]);
  const handleValueChange = (event: SyntheticEvent, values: Option[]) => {
    onChange?.(values.map((value) => value[idKey]));
  };

  const abortController = useRef<AbortController>(new AbortController());
  // const cancelTokenSourceRef = useRef(axios.CancelToken.source());

  // Throttling behavior only works if the same instance of
  // the throttled callback is used, so we use `useCallback`.
  // eslint-disable-next-line
  const getThrottledDataForInput = useCallback(
    throttle(throttleDelay, (...args: Parameters<typeof getDataForInput>) =>
      Promise.resolve(getDataForInput(...args))
        .then(setOptions)
        .catch((error) => {
          // TODO: add more resilient error handling.
          console.error(error);
        })
    ),
    [getDataForInput, abortController]
  );

  const handleInputChange = (event: SyntheticEvent, value: string) => {
    // When input changes, cancel any pending requests.
    abortController.current.abort();
    // cancelTokenSourceRef.current.cancel();
    abortController.current = new AbortController();

    if (value.length < minimumSearchLength) {
      setOptions([]);
      return;
    }

    getThrottledDataForInput(value);
  };

  return (
    <Autocomplete
      freeSolo
      // limitTags={5}
      noOptionsText={"Type to search"}
      options={options}
      filterOptions={() => options}
      getOptionLabel={(option) => option[labelKey] as string}
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
