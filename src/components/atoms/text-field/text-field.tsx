import clsx from 'clsx';
import { ComponentPropsWithRef, ForwardedRef, forwardRef, useId } from 'react';
import tw from 'twin.macro';
import { isEmptyArray } from '../../../utils/array';

type InputProps = ComponentPropsWithRef<'input'>;

export interface TextFieldProps {
  value: InputProps['value'];
  onChange: InputProps['onChange'];
  type?: InputProps['type'];
  label: string;
  hasError?: boolean;
  errorMessages?: Array<string>;
  className?: string;
}

export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const {
    value,
    onChange,
    type = 'text',
    autoFocus = false,
    label,
    disabled,
    hasError = false,
    errorMessages = [],
    className,
  } = props;

  const inputId = useId();
  const error = hasError || !isEmptyArray(errorMessages);

  return (
    <div className={clsx('flex flex-col gap-y-2', className)}>
      <label
        htmlFor={inputId}
        css={[
          tw`flex flex-col gap-y-0.5 px-2.5 py-1 border border-solid border-gray-400 rounded`,
          !disabled &&
            tw`cursor-text focus-within:shadow-sm focus-within:shadow-gray-300`,
          disabled && tw`bg-gray-100 [&>input]:bg-gray-100`,
          error && tw`border-red-500 [&>span]:text-red-500`,
        ]}
      >
        <span css={[tw`text-gray-500 text-sm`]}>{label}</span>
        <input
          ref={ref}
          id={inputId}
          type={type}
          autoFocus={autoFocus}
          value={value || ''}
          onChange={onChange}
          disabled={disabled}
          css={[tw`w-full outline-0`]}
        />
      </label>
      <ul css={[tw`ml-1`]}>
        {errorMessages.map((message) => (
          <li key={message} css={[tw`text-red-500 text-sm`]}>
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TextField;
