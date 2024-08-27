import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { fileSchema } from '../../../../schemas/file';
import { CreateOutfitItemRequest } from '../../../../types/outfit';

type CreateOutfitItemPayloadType = CreateOutfitItemRequest['payload'];

const schema = z.object({
  name: z
    .string()
    .min(1, { message: '코디 아이템을 입력해 주세요.' })
    .max(20, { message: '코디 아이템은 20자 이하여야 합니다.' }),
  category: z.union([
    z.literal('상의'),
    z.literal('하의'),
    z.literal('아우터'),
    z.literal('신발'),
    z.literal('가방'),
    z.literal('악세사리'),
    z.literal('기타'),
  ]),
  brandName: z
    .string()
    .min(1, { message: '브랜드명 입력해 주세요.' })
    .max(20, { message: '브랜드명은 20자 이하여야 합니다.' }),
  purchaseLink: z
    .string()
    .max(300, { message: '브랜드명은 300자 이하여야 합니다.' })
    .optional(),
  image: fileSchema({
    requiredMessage: '코디 아이템 사진을 업로드해 주세요.',
  }),
}) satisfies ZodType<CreateOutfitItemPayloadType>;

const useCreateOutfitItemForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateOutfitItemPayloadType>({ resolver: zodResolver(schema) });

  const { field: name } = useController({
    name: 'name',
    defaultValue: '',
    control,
  });

  const { field: category } = useController({
    name: 'category',
    control,
  });

  const { field: brandName } = useController({
    name: 'brandName',
    defaultValue: '',
    control,
  });

  const { field: purchaseLink } = useController({
    name: 'purchaseLink',
    control,
  });

  const { field: image } = useController({
    name: 'image',
    control,
  });

  return {
    handleSubmit,
    reset,
    errors,
    name,
    category,
    brandName,
    purchaseLink,
    image,
  };
};

export default useCreateOutfitItemForm;
