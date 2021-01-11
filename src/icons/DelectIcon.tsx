import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const DelectIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M981.333333 256v106.666667H874.666667v597.333333H149.333333V362.666667H42.666667V256h938.666666zM458.666667 362.666667H256v490.666666h202.666667V362.666667z m309.333333 0H565.333333v490.666666h202.666667V362.666667z m21.333333-298.666667v106.666667H234.666667V64h554.666666z"   />
  </SvgIcon>
));

export default DelectIcon;
