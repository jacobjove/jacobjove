interface ModelOrFragmentBase {
  __typename?: string;
  _id?: unknown;
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreationInput<T extends ModelOrFragmentBase> = Omit<
  T,
  "id" | "_id" | "createdAt" | "updatedAt"
>;

export type Data<T extends ModelOrFragmentBase> = Partial<CreationInput<T>> & {
  id?: ID;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Payload<T> =
  | {
      field: "init";
      value: Partial<T>;
    }
  | {
      field: Extract<keyof T, string>;
      value: T[Extract<keyof T, string>];
    };

export type DataTuple<T> = [Data<T>, Dispatch<Payload<Data<T>>>];
