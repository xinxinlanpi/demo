import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const ArrangeIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M591.637333 71.701333a17.066667 17.066667 0 0 1 24.138667-0.053333L938.666667 393.173333 862.165333 469.333333 693.333333 301.226667V960H586.666667V83.744c0-4.512 1.792-8.842667 4.970666-12.042667zM437.333333 64v876.256a17.066667 17.066667 0 0 1-29.109333 12.096L85.333333 630.826667 161.834667 554.666667 330.666667 722.773333V64h106.666666z"   />
  </SvgIcon>
));

export default ArrangeIcon;
