import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { SignupRequest } from '../../types/auth';

type SignupPayloadType = SignupRequest['payload'] & { confirmPassword: string };

const passwordSchema = z
  .string()
  .min(1, '비밀번호를 입력해 주세요.')
  .min(8, '비밀번호는 8자 이상이어야 합니다.');

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해 주세요.' })
      .max(200, { message: '이메일이 너무 깁니다.' })
      .email('이메일 형식에 맞게 입력해 주세요.'),
    nickname: z
      .string()
      .min(1, { message: '닉네임을 입력해 주세요.' })
      .max(6, { message: '닉네임은 6자 이하여야 합니다.' }),
    gender: z.union([z.literal('남성'), z.literal('여성')]),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  }) satisfies ZodType<SignupPayloadType>;

const useSignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupPayloadType>({ resolver: zodResolver(schema) });

  const { field: email } = useController({
    name: 'email',
    defaultValue: '',
    control,
  });

  const { field: nickname } = useController({
    name: 'nickname',
    defaultValue: '',
    control,
  });

  const { field: gender } = useController({
    name: 'gender',
    defaultValue: '남성',
    control,
  });

  const { field: password } = useController({
    name: 'password',
    defaultValue: '',
    control,
  });

  const { field: confirmPassword } = useController({
    name: 'confirmPassword',
    defaultValue: '',
    control,
  });

  return {
    handleSubmit,
    errors,
    email,
    nickname,
    gender,
    password,
    confirmPassword,
  };
};

export default useSignupForm;
