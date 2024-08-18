import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import Button from '../../components/atoms/Button';
import TextField from '../../components/atoms/TextField';
import Layout from '../../components/common/Layout';
import useLogin from '../../hooks/mutations/useLogin';
import { LoginErrorResponse } from '../../types/auth';
import { getServerErrorResponse } from '../../utils/error';
import useLoginForm from './useLoginForm';

function LoginPage() {
  const loginForm = useLoginForm();
  const { mutate, error, isPending } = useLogin();
  const serverError = getServerErrorResponse<LoginErrorResponse>(error);

  return (
    <Layout css={[tw`flex-center`]}>
      <form
        onSubmit={loginForm.handleSubmit((payload) => mutate({ payload }))}
        css={[tw`flex-center flex-col w-72`]}
      >
        <span css={[tw`font-bold text-4xl mb-16`]}>celeb pick</span>
        <TextField
          type="email"
          label="이메일"
          value={loginForm.email.value}
          onChange={loginForm.email.onChange}
          hasError={!!error}
          errorMessages={[loginForm.errors.email?.message]}
          autoFocus
          css={[tw`mb-3.5`]}
        />
        <TextField
          type="password"
          label="비밀번호"
          value={loginForm.password.value}
          onChange={loginForm.password.onChange}
          css={[tw`mb-2.5`]}
          hasError={!!error}
          errorMessages={[
            loginForm.errors.password?.message,
            serverError?.data.message,
          ]}
        />
        <Link
          to="/"
          css={[tw`ml-auto mb-10 text-blue-500 text-sm font-medium`]}
        >
          게스트로 이용하기
        </Link>
        <Button type="submit" isLoading={isPending} fullWidth css={[tw`mb-8`]}>
          로그인
        </Button>
        <p css={[tw`font-medium`]}>
          계정이 없으신가요? &nbsp;
          <Link to="/signup" css={[tw`text-blue-700`]}>
            가입하기
          </Link>
        </p>
      </form>
    </Layout>
  );
}

export default LoginPage;
