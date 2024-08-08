import { ReactNode } from 'react';

export type SelectOptionsType<T = string> = Array<{
  value: T | null | undefined;
  label?: ReactNode;
}>;
