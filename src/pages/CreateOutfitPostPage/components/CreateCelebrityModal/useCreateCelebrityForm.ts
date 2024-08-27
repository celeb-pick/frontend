import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { fileSchema } from '../../../../schemas/file';
import { CreateCelebrityRequest } from '../../../../types/celebrity';

type CreateCelebrityPayloadType = CreateCelebrityRequest['payload'];

const schema = z.object({
  name: z
    .string()
    .min(1, { message: '셀럽 이름을 입력해 주세요.' })
    .max(20, { message: '셀럽 이름은 20자 이하여야 합니다.' }),
  category: z.union([
    z.literal('아이돌'),
    z.literal('모델'),
    z.literal('가수'),
    z.literal('배우'),
    z.literal('인플루언서'),
    z.literal('기타'),
  ]),
  profileImage: fileSchema({
    requiredMessage: '셀럽 이미지를 업로드해 주세요.',
  }),
}) satisfies ZodType<CreateCelebrityPayloadType>;

const useCreateCelebrityForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCelebrityPayloadType>({ resolver: zodResolver(schema) });

  const { field: name } = useController({
    name: 'name',
    defaultValue: '',
    control,
  });

  const { field: category } = useController({
    name: 'category',
    control,
  });

  const { field: profileImage } = useController({
    name: 'profileImage',
    control,
  });

  return {
    handleSubmit,
    errors,
    name,
    category,
    profileImage,
  };
};

export default useCreateCelebrityForm;
