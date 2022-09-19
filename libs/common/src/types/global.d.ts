export {};

declare global {
  type RequiredKeys<T> = { [K in keyof T as undefined extends T[K] ? never : K]: T[K] };

  type NoUndefinedField<T> = {
    [P in keyof T]-?: Exclude<T[P], undefined>;
  };

  type NoNullField<T> = {
    [P in keyof T]-?: Exclude<T[P], null>;
  };

  type NoNullishField<T> = {
    [P in keyof T]-?: Exclude<T[P], null | undefined>;
  };
}
