import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function HiddenIcon(props) {
  return (
    <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G id="hide">
        <Path
          className="cls-1"
          d="M4 17a1 1 0 01-.87-1.5C3.31 15.2 7.52 8 16 8s12.69 7.2 12.87 7.5a1 1 0 11-1.74 1C27.1 16.43 23.3 10 16 10S4.91 16.43 4.87 16.5A1 1 0 014 17z"
        />
        <Path
          className="cls-1"
          d="M16 24c-8.48 0-12.69-7.2-12.87-7.5a1 1 0 011.74-1C4.9 15.57 8.7 22 16 22s11.09-6.43 11.13-6.5a1 1 0 011.74 1c-.18.3-4.39 7.5-12.87 7.5z"
        />
        <Path className="cls-1" d="M19 17h-6a1 1 0 010-2h6a1 1 0 010 2z" />
      </G>
    </Svg>
  );
}

export default HiddenIcon;
