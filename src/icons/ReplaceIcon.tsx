import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const ReplaceIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M941.632 591.637333a17.066667 17.066667 0 0 1 0.053333 24.138667L620.16 938.666667 544 862.165333 712.106667 693.333333H74.666667V586.666667h854.922666a17.066667 17.066667 0 0 1 12.042667 4.970666zM949.333333 437.333333H94.410667a17.066667 17.066667 0 0 1-12.096-29.109333L403.84 85.333333 480 161.834667 311.893333 330.666667H949.333333v106.666666z"   />
  </SvgIcon>
));

export default ReplaceIcon;
