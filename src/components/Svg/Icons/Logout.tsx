import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path
        d="M15.8048 8.47135L12.3058 11.9714C12.2439 12.0333 12.1704 12.0824 12.0895 12.1159C12.0086 12.1494 11.9219 12.1667 11.8344 12.1667C11.7468 12.1667 11.6601 12.1495 11.5792 12.116C11.4983 12.0825 11.4248 12.0334 11.3629 11.9715C11.301 11.9096 11.2519 11.8361 11.2184 11.7552C11.1849 11.6743 11.1676 11.5876 11.1676 11.5001C11.1676 11.4125 11.1848 11.3258 11.2183 11.245C11.2518 11.1641 11.3009 11.0906 11.3628 11.0286L13.7242 8.66667H6C5.82319 8.66667 5.65362 8.59643 5.5286 8.47141C5.40357 8.34638 5.33334 8.17681 5.33334 8C5.33334 7.82319 5.40357 7.65362 5.5286 7.5286C5.65362 7.40357 5.82319 7.33333 6 7.33333H13.7242L11.3628 4.97135C11.2378 4.84631 11.1676 4.67673 11.1676 4.49991C11.1676 4.3231 11.2379 4.15353 11.3629 4.02852C11.488 3.90351 11.6575 3.83329 11.8344 3.83332C12.0112 3.83334 12.1807 3.9036 12.3058 4.02865L15.8048 7.52865C15.9298 7.65366 16 7.82321 16 8C16 8.17679 15.9298 8.34634 15.8048 8.47135ZM6 14.6667H1.33333V1.33333H6C6.17681 1.33333 6.34638 1.2631 6.47141 1.13807C6.59643 1.01305 6.66667 0.843478 6.66667 0.666667C6.66667 0.489856 6.59643 0.320287 6.47141 0.195262C6.34638 0.070238 6.17681 0 6 0H1.33333C0.979836 0.000404282 0.640932 0.14101 0.390971 0.390971C0.14101 0.640932 0.000404282 0.979835 0 1.33333V14.6667C0.000404282 15.0202 0.14101 15.3591 0.390971 15.609C0.640932 15.859 0.979836 15.9996 1.33333 16H6C6.17681 16 6.34638 15.9298 6.47141 15.8047C6.59643 15.6797 6.66667 15.5101 6.66667 15.3333C6.66667 15.1565 6.59643 14.987 6.47141 14.8619C6.34638 14.7369 6.17681 14.6667 6 14.6667Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;