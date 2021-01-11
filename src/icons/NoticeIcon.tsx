import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const NoticeIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M192 725.333333h640V448c0-176.736-143.264-320-320-320-176.736 0-320 143.264-320 320v277.333333zM512 21.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667v362.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H106.666667a21.333333 21.333333 0 0 1-21.333334-21.333333V448C85.333333 212.362667 276.362667 21.333333 512 21.333333zM320 896h384v106.666667H320V896z"   />
  </SvgIcon>
));

export default NoticeIcon;
