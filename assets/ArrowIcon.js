import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={props.size || 459}
      height={props.size || 459}
      viewBox="0 0 459 459"
      xmlSpace="preserve"
      enableBackground="new 0 0 459 459"
      {...props}>
      <Path d="M178.5 140.25v-102L0 216.75l178.5 178.5V290.7c127.5 0 216.75 40.8 280.5 130.05-25.5-127.5-102-255-280.5-280.5z" />
    </Svg>
  );
};

export default ArrowIcon;
