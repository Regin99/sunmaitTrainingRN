import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FavoriteIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 495 495"
      xmlSpace="preserve"
      enableBackground="new 0 0 495 495"
      {...props}>
      <Path
        d="M362.96 14.24c-49.72 0-92.95 27.53-115.46 68.13v398.39C284.67 452.84 495 288.55 495 146.28c0-72.92-59.12-132.04-132.04-132.04z"
        fill="#c70024"
      />
      <Path
        d="M132.04 14.24C59.12 14.24 0 73.36 0 146.28c0 142.26 210.33 306.55 247.5 334.48V82.37c-22.51-40.6-65.74-68.13-115.46-68.13z"
        fill="#ff0c38"
      />
    </Svg>
  );
};

export default FavoriteIcon;
