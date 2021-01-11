import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const PeopleIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M149.333333 661.333333v213.333334h725.333334V661.333333H149.333333z m-21.333333-106.666666h768a85.333333 85.333333 0 0 1 85.333333 85.333333v320a21.333333 21.333333 0 0 1-21.333333 21.333333H64a21.333333 21.333333 0 0 1-21.333333-21.333333V640a85.333333 85.333333 0 0 1 85.333333-85.333333z m389.706667-170.666667C588.586667 384 650.666667 321.92 650.666667 251.04 650.666667 169.792 589.546667 106.666667 517.706667 106.666667 435.413333 106.666667 373.333333 168.746667 373.333333 251.04 373.333333 322.869333 436.458667 384 517.706667 384z m0 106.666667C376.501333 490.666667 266.666667 380.832 266.666667 251.04 266.666667 109.834667 376.501333 0 517.706667 0 647.498667 0 757.333333 109.834667 757.333333 251.04 757.333333 380.832 647.498667 490.666667 517.706667 490.666667z"   />
  </SvgIcon>
));

export default PeopleIcon;
