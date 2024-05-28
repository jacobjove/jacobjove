import type { Dispatch } from 'react';
import { useReducer } from 'react';

export type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

export type FormAction<FormData> =
  | { type: 'reset' }
  | { type: 'update'; payload: Partial<FormData> };

export function formDataReducer<FormData>(
  state: FormData,
  action: FormAction<FormData>
): FormData {
  switch (action.type) {
    case 'reset':
      return {} as FormData;
    case 'update':
      return { ...state, ...action.payload };
  }
}

export function useFormDataReducer<FormData>(
  initialState: FormData
): [FormData, Dispatch<FormAction<FormData>>] {
  const reducer = (state: FormData, action: FormAction<FormData>) =>
    formDataReducer<FormData>(state, action);
  return useReducer(reducer, initialState);
}
