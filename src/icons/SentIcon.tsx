import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const SentIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M972.629333 64.938667c1.472 4.405333 1.472 9.162667 0 13.568L671.018667 983.338667a21.450667 21.450667 0 0 1-35.52 8.384l-157.44-157.429334a21.333333 21.333333 0 0 0-29.493334-0.64l-78.933333 72.288a21.333333 21.333333 0 0 1-35.744-15.733333V690.112l362.026667-362.026667-437.44 286.602667L32.256 388.501333a21.450667 21.450667 0 0 1 8.384-35.52L945.493333 51.370667a21.450667 21.450667 0 0 1 27.136 13.568z"   />
  </SvgIcon>
));

export default SentIcon;
