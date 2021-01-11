import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const EditIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M885.045333 64L960 138.954667 480.288 618.666667 405.333333 543.712 885.045333 64zM170.666667 170.666667h320V64H85.333333a21.333333 21.333333 0 0 0-21.333333 21.333333v853.333334a21.333333 21.333333 0 0 0 21.333333 21.333333h853.333334a21.333333 21.333333 0 0 0 21.333333-21.333333V533.333333H853.333333v320H170.666667V170.666667z"   />
  </SvgIcon>
));

export default EditIcon;
