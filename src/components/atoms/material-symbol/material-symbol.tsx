import clsx from 'clsx';
import { ComponentPropsWithoutRef, CSSProperties } from 'react';
import { MATERIAL_SYMBOL_NAMES } from './constants';

interface MaterialSymbolProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * 심볼의 이름 입니다.
   * @see {@link https://fonts.google.com/icons 심볼 이름 검색 페이지}
   * */
  name: (typeof MATERIAL_SYMBOL_NAMES)[number];

  /**
   * 심볼의 크기를 나타내는 단위 입니다.
   * 'px' 단위로 값이 적용 됩니다.
   */
  size?: number;

  /**
   * 심볼의 채움 여부를 정할 수 있습니다.
   */
  fill?: boolean;

  /**
   * 굵기는 기호의 획 굵기를 정의하며, 굵기 범위는 가는(100)에서 굵은(700) 사이입니다.
   * 굵기는 심볼의 전체 크기에도 영향을 줄 수 있습니다.
   */
  wght?: number;

  /**
   * 두께에 영향을 주고 심볼의 강조 정도를 나타낼 수 있습니다.
   * 어두운 배경에서 빛 반사를 줄이려면 낮은 값(-25)을,
   * 심볼을 강조하려면 높은 값(200)을 사용할 수 있습니다.
   */
  grad?: number;

  /**
   * 광학 크기(Optical Size)로, 다양한 텍스트 크기에 맞게 디자인을 변경하는 데 사용됩니다.
   * 값은 20에서 40사이로 설정할 수 있습니다.
   */
  opsz?: number;
}

/**
 * Material Symbol의 다양한 아이콘을 사용할 수 있는 컴포넌트 입니다.
 */
function MaterialSymbol({
  name,
  size = 24,
  fill = false,
  wght = 400,
  grad = 0,
  opsz = 24,
  className,
  ...props
}: MaterialSymbolProps) {
  const fontVariationSettings: CSSProperties['fontVariationSettings'] = `
    'FILL' ${Number(fill)},
    'wght' ${wght},
    'GRAD' ${grad},
    'opsz' ${opsz}
  `;

  return (
    <span
      css={{ fontVariationSettings, fontSize: size }}
      className={clsx('material-symbols-rounded', className)}
      {...props}
    >
      {name}
    </span>
  );
}

export default MaterialSymbol;
