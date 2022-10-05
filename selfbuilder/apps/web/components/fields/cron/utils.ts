import { useEffect, useRef } from "react";
import { DEFAULT_LOCALE_EN } from "./locale";
import { Locale, OnError } from "./types";

/**
 * Creates an array of integers from start to end, inclusive
 */
export function range(start: number, end: number) {
  const array: number[] = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

/**
 * Sorts an array of numbers
 */
export function sort(array: number[]) {
  array.sort(function (a, b) {
    return a - b;
  });

  return array;
}

/**
 * Removes duplicate entries from an array
 */
export function dedup(array: number[]) {
  const result: number[] = [];

  array.forEach(function (i) {
    if (result.indexOf(i) < 0) {
      result.push(i);
    }
  });

  return result;
}

/**
 * Handle onError prop to set the error
 */
export function setError(onError: OnError, locale: Locale) {
  onError &&
    onError({
      type: "invalid_cron",
      description: locale.errorInvalidCron || DEFAULT_LOCALE_EN.errorInvalidCron,
    });
}

/**
 * React useEffect hook to return the previous value
 */
export function usePrevious(value: any) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
