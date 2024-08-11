import { useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import Button from '../../components/atoms/button';
import TextField from '../../components/atoms/text-field';

function LoginPage() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className="layout-container flex-center">
      <form css={[tw`flex-center flex-col w-72`]}>
        <span css={[tw`font-bold text-4xl mb-16`]}>celeb pick</span>
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          label="이메일"
          autoFocus
          css={[tw`mb-1.5`]}
        />
        <TextField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          label="비밀번호"
          css={[tw`mb-1`]}
        />
        <Link
          to="/"
          css={[tw`ml-auto mb-10 text-blue-500 text-sm font-medium`]}
        >
          게스트로 이용하기
        </Link>
        <Button type="submit" fullWidth css={[tw`mb-8`]}>
          로그인
        </Button>
        <p css={[tw`font-medium`]}>
          계정이 없으신가요? &nbsp;
          <Link to="/signup" css={[tw`text-blue-700`]}>
            가입하기
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
