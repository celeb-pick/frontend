import { ReactNode } from 'react';

export type RadioGroupOptionsType<T = string> = Array<{
  value: T;
  label?: ReactNode;
}>;

export type RadioGroupValueType = string | number;
