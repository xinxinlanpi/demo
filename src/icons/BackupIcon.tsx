import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const BackupIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M1002.789 395.922c11.776 0 21.357 9.509 21.357 21.285V954.66c0 11.776-9.508 21.357-21.357 21.357H240.933a21.358 21.358 0 0 1-21.358-21.357v-76.508h708.242l-0.073-482.304h75.045zM311.003 73.142c4.901 0 9.728 1.683 13.532 4.828l172.617 141.678a21.358 21.358 0 0 0 13.458 4.827h309.175c11.776 0 21.358 9.509 21.358 21.358v537.38c0 11.777-9.582 21.358-21.358 21.358H21.504A21.358 21.358 0 0 1 0.146 783.214V94.5a21.29 21.29 0 0 1 21.358-21.358h289.5z"   />
  </SvgIcon>
));

export default BackupIcon;
