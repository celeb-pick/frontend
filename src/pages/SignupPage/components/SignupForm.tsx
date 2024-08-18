import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import Button from '../../../components/atoms/Button';
import TextField from '../../../components/atoms/TextField';
import useSignup from '../../../hooks/mutations/useSignup';
import { SignupErrorResponse } from '../../../types/auth';
import { getServerErrorResponse } from '../../../utils/error';
import UserGenderRadioGroup from './UserGenderRadioGroup';
import useSignupForm from '../useSignupForm';

function SignupForm() {
  const signupForm = useSignupForm();
  const { mutate, error, isPending } = useSignup();
  const serverError = getServerErrorResponse<SignupErrorResponse>(error);

  return (
    <form
      onSubmit={signupForm.handleSubmit((payload) => mutate({ payload }))}
      css={[tw`flex-center flex-col w-72 mx-auto m-20`]}
    >
      <TextField
        type="email"
        label="이메일"
        value={signupForm.email.value}
        onChange={signupForm.email.onChange}
        errorMessages={[
          signupForm.errors.email?.message,
          ...(serverError?.data.email || []),
        ]}
        autoFocus
        css={[tw`mb-3.5`]}
      />
      <TextField
        label="닉네임"
        value={signupForm.nickname.value}
        onChange={signupForm.nickname.onChange}
        errorMessages={[
          signupForm.errors.nickname?.message,
          ...(serverError?.data.nickname || []),
        ]}
        css={[tw`mb-3.5`]}
      />
      <UserGenderRadioGroup
        value={signupForm.gender.value}
        onChange={signupForm.gender.onChange}
        css={[tw`mb-3.5`]}
      />
      <TextField
        type="password"
        label="비밀번호"
        value={signupForm.password.value}
        onChange={signupForm.password.onChange}
        errorMessages={[
          signupForm.errors.password?.message,
          ...(serverError?.data.password || []),
        ]}
        css={[tw`mb-3.5`]}
      />
      <TextField
        type="password"
        label="비밀번호 확인"
        value={signupForm.confirmPassword.value}
        onChange={signupForm.confirmPassword.onChange}
        errorMessages={[signupForm.errors.confirmPassword?.message]}
        css={[tw`mb-10`]}
      />
      <Button type="submit" isLoading={isPending} fullWidth css={[tw`mb-8`]}>
        가입하기
      </Button>
      <p css={[tw`font-medium`]}>
        계정이 있으신가요? &nbsp;
        <Link to="/login" css={[tw`text-blue-700`]}>
          로그인
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;
