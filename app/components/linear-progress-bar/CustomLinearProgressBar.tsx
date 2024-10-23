import React, { memo } from 'react';
import * as Progress from 'react-native-progress';

import { Colors } from '../../theme';

const CustomLinearProgressBar = (props: Progress.BarPropTypes) => {
  return (
    <Progress.Bar
      {...props}
      progress={props.progress}
      width={props.width}
      color={props.color ?? Colors.primary}
      borderColor={props.borderColor ?? Colors.boxBorderColor}
      unfilledColor={props.unfilledColor ?? Colors.overlayDark}
    />
  );
};

export default memo(CustomLinearProgressBar);
