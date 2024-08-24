import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { fileSchema } from '../../schemas/file';
import { CreateOutfitPostRequest } from '../../types/outfit';

const schema = z.object({
  celebrityId: z.number({ message: '코디에 맞는 셀럽을 선택해 주세요.' }),
  gender: z.union([z.literal('남성'), z.literal('여성'), z.literal('공용')], {
    message: '코디에 맞는 성별을 선택해 주세요.',
  }),
  title: z
    .string()
    .min(1, { message: '코디 제목을 입력해 주세요.' })
    .min(4, { message: '코디 제목은 4자 이상이어야 합니다.' })
    .max(20, { message: '코디 제목은 20자 이하여야 합니다.' }),
  image: fileSchema({
    requiredMessage: '코디 이미지를 업로드해 주세요.',
  }),
  itemIds: z
    .array(z.number())
    .nonempty({ message: '코디 아이템을 선택해 주세요.' })
    .max(5, { message: '코디 아이템은 5개 이하여야 합니다.' }),
}) satisfies ZodType<CreateOutfitPostRequest['payload']>;

const useCreateOutfitPostForm = () => {
  const {
    control,
    handleSubmit,
    trigger,
    resetField,
    formState: { errors },
  } = useForm<CreateOutfitPostRequest['payload']>({
    resolver: zodResolver(schema),
  });

  const { field: celebrityId } = useController({
    name: 'celebrityId',
    control,
  });

  const { field: gender } = useController({
    name: 'gender',
    defaultValue: '남성',
    control,
  });

  const { field: title } = useController({
    name: 'title',
    defaultValue: '',
    control,
  });

  const { field: image } = useController({
    name: 'image',
    control,
  });

  const { field: itemIds } = useController({
    name: 'itemIds',
    defaultValue: [],
    control,
  });

  return {
    handleSubmit,
    trigger,
    resetField,
    errors,
    celebrityId,
    gender,
    title,
    image,
    itemIds,
  };
};

export default useCreateOutfitPostForm;
