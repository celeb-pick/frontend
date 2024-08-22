import { extname } from 'path';
import { z } from 'zod';
import { ALLOWED_EXTENSIONS, MB } from '../constants/file';

interface FileSchemaParams {
  requiredMessage: string;
  /**
   * MB 단위 파일 사이즈 입니다.
   */
  maxSizeMB?: number;
}

const checkExtension = (file: File) => {
  const extensionName = extname(file.name); // 확장자명('.' 포함)

  const extensionPattern = `\\.(${ALLOWED_EXTENSIONS.join('|')})$`;
  const regex = RegExp(extensionPattern, 'i');

  return regex.test(extensionName);
};

export const fileSchema = ({
  requiredMessage,
  maxSizeMB = 2.5,
}: FileSchemaParams) => {
  return z
    .instanceof(File, { message: requiredMessage })
    .refine(
      (file) => file.size < maxSizeMB * MB,
      `파일 크기는 ${maxSizeMB}MB 미만이어야 합니다.`
    )
    .refine(
      (file) => checkExtension(file),
      `${ALLOWED_EXTENSIONS.join(', ')} 확장자만 업로드할 수 있습니다.`
    );
};
