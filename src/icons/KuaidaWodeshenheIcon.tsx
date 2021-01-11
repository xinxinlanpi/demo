import React from 'react';
import { SvgIcon, ISvgProps } from '@muya-ui/theme-light';

export const KuaidaWodeshenheIcon = React.forwardRef<SVGSVGElement, ISvgProps>((props, ref) => (
  <SvgIcon ref={ref} viewBox="0 0 1024 1024" {...props}>
    <path d="M768 42.688V256h213.312v725.312H256V768H42.688V42.688H768z m106.688 320h-512v512h512v-512zM768 661.312V768H469.312v-106.688H768z m-106.688-512h-512v512H256V256h405.312V149.312z m106.688 320V576H469.312V469.312H768z"   />
  </SvgIcon>
));

export default KuaidaWodeshenheIcon;
