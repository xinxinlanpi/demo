import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const PageTobackIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M414.496 160L490.666667 236.501333 269.450667 458.666667H960v106.666666H269.450667L490.666667 787.498667 414.496 864 64 512l350.496-352z"   />
  </SvgIcon>
));

export default PageTobackIcon;
