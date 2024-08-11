import clsx from 'clsx';
import { ComponentPropsWithRef, ForwardedRef, forwardRef, useId } from 'react';
import tw from 'twin.macro';
import { isEmptyArray } from '../../../utils/array';

type InputProps = ComponentPropsWithRef<'input'>;

export interface TextFieldProps {
  /**
   * 컴포넌트의 value값 입니다.
   */
  value: InputProps['value'];

  /**
   * 컴포넌트의 value값이 변할 때 실행 되는 콜백 함수 입니다.
   */
  onChange: InputProps['onChange'];

  /**
   * `text`, `email` 등 타입을 지정할 수 있습니다.
   */
  type?: InputProps['type'];

  /**
   * 마운트시 포커스 여부를 정할 수 있습니다.
   */
  autoFocus?: boolean;

  /**
   * 라벨 텍스트 입니다.
   */
  label: string;

  /**
   * `disabled` 상태를 나타낼 수 있습니다.
   */
  disabled?: boolean;

  /**
   * 에러 상태를 나타낼 수 있습니다.
   */
  hasError?: boolean;

  /**
   * 컴포넌트 하단에 에러 메세지를 표시할 수 있습니다.
   */
  errorMessages?: Array<string>;

  /**
   * 컴포넌트의 Wrapper 스타일을 지정할 수 있습니다.
   */
  className?: string;
}

/**
 * 라벨, 에러 메세지 등을 포함하고 있는 Input 컴포넌트 입니다.
 */
const TextField = forwardRef(function TextField(
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
