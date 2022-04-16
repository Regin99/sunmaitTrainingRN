import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

const ProfileIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}>
      <G
        transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}>
        <Circle
          cx={45}
          cy={45}
          r={45}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="#2454ce"
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M61.194 67.5a1.94 1.94 0 001.94-1.94v-3.024c0-6.676-4.448-12.361-10.527-14.243a3.31 3.31 0 01-2.337-3.159c0-.889.362-1.736.994-2.36a8.876 8.876 0 002.657-6.34v-4.798c0-4.838-3.762-8.958-8.597-9.13a8.923 8.923 0 00-9.248 8.917v5.012a8.877 8.877 0 002.657 6.34c.633.624.994 1.471.994 2.36 0 1.453-.95 2.73-2.337 3.159-6.079 1.882-10.527 7.567-10.527 14.243v3.024a1.94 1.94 0 001.94 1.94h32.391z"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="#fff"
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
};

export default ProfileIcon;
