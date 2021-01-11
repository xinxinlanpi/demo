import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const SortIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M85.333 128h853.334v128H85.333V128z m0 320h853.334v128H85.333V448z m0 320h853.334v128H85.333V768z"   />
  </SvgIcon>
));

export default SortIcon;
