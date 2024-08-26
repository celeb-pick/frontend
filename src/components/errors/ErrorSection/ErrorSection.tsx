import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { FallbackProps } from 'react-error-boundary';
import tw from 'twin.macro';
import Button from '../../atoms/Button';

interface ErrorSectionProps {
  /**
   * 에러 메세지 타이틀 입니다.
   */
  title: string;

  /**
   * 에러 메세지 서브 타이틀 입니다.
   */
  subTittle?: string;

  /**
   * ErrorBoundary Reset Callback 함수 입니다.
   */
  resetErrorBoundary?: FallbackProps['resetErrorBoundary'];

  className?: string;
}

/**
 * `ErrorBoundary`의 Fallback에 사용되는 컴포넌트 입니다.
 */
function ErrorSection({
  title,
  subTittle,
  resetErrorBoundary,
  className,
}: ErrorSectionProps) {
  return (
    <div
      css={[tw`flex-center flex-col flex-1 w-full h-full`]}
      className={className}
    >
      <ErrorOutlineRoundedIcon fontSize="large" css={[tw`text-red-500 mb-4`]} />
      <h1 css={[tw`text-xl font-semibold`]}>{title}</h1>
      {!!subTittle && (
        <p css={[tw`font-medium text-gray-400 mt-2`]}>{subTittle}</p>
      )}
      {!!resetErrorBoundary && (
        <Button color="slate" onClick={resetErrorBoundary} css={[tw`mt-7`]}>
          다시 시도
        </Button>
      )}
    </div>
  );
}

export default ErrorSection;
