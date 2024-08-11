import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { LoginRequest } from '../../types/auth';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해 주세요.' })
    .email('이메일 형식에 맞게 입력해 주세요.'),
  password: z
    .string()
    .min(1, '비밀번호를 입력해 주세요.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.'),
}) satisfies ZodType<LoginRequest['payload']>;

const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest['payload']>({ resolver: zodResolver(schema) });

  const { field: email } = useController({
    name: 'email',
    defaultValue: '',
    control,
  });

  const { field: password } = useController({
    name: 'password',
    defaultValue: '',
    control,
  });

  return { handleSubmit, errors, email, password };
};

export default useLoginForm;
