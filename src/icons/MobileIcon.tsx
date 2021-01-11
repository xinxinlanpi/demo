import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const MobileIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M896 21.333333a21.333333 21.333333 0 0 1 21.333333 21.333334v938.666666a21.333333 21.333333 0 0 1-21.333333 21.333334H128a21.333333 21.333333 0 0 1-21.333333-21.333334V42.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h768z m-85.333333 106.666667H213.333333v768h597.333334V128zM512 661.333333a74.666667 74.666667 0 1 1 0 149.333334 74.666667 74.666667 0 0 1 0-149.333334z"   />
  </SvgIcon>
));

export default MobileIcon;
