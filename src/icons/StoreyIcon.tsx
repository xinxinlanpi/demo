import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const StoreyIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M825.813333 565.333333l175.989334 113.664a17.066667 17.066667 0 0 1 0 28.672L523.573333 1016.533333a21.333333 21.333333 0 0 1-23.146666 0L22.186667 707.669333a17.066667 17.066667 0 0 1 0-28.672L198.197333 565.333333l98.304 63.488L196.608 693.333333 512 897.024 827.392 693.333333l-99.893333-64.512L825.813333 565.333333zM523.562667 7.466667L1001.813333 316.341333a17.066667 17.066667 0 0 1 0 28.672L523.573333 653.866667a21.333333 21.333333 0 0 1-23.146666 0L22.186667 345.002667a17.066667 17.066667 0 0 1 0-28.672L500.426667 7.466667a21.333333 21.333333 0 0 1 23.146666 0zM196.608 330.666667L512 534.357333 827.392 330.666667 512 126.976 196.608 330.666667z"   />
  </SvgIcon>
));

export default StoreyIcon;
