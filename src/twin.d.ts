import { css as cssImport } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import 'twin.macro';

declare module 'twin.macro' {
  const css: typeof cssImport;
}

declare module 'react' {
  interface DOMAttributes<T> {
    tw?: string;
    css?: CSSInterpolation;
  }
}