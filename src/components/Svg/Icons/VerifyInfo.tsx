import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path d="M14.5533 6.31353C14.3007 6.05012 14.0395 5.77782 13.9408 5.53919C13.8501 5.31999 13.8446 4.95692 13.8393 4.60575C13.8294 3.95226 13.8182 3.2116 13.3033 2.69668C12.7884 2.18176 12.0477 2.17058 11.3943 2.1607C11.0431 2.1554 10.68 2.14991 10.4608 2.05921C10.2222 1.96053 9.94988 1.69934 9.68647 1.44672C9.2238 1.00295 8.69927 0.5 8 0.5C7.30073 0.5 6.77627 1.00295 6.31353 1.44672C6.05012 1.69934 5.77782 1.96053 5.53919 2.05921C5.31999 2.14991 4.95692 2.1554 4.60575 2.1607C3.95226 2.17058 3.2116 2.18176 2.69668 2.69668C2.18176 3.2116 2.17058 3.95226 2.1607 4.60575C2.1554 4.95692 2.14991 5.31999 2.05921 5.53919C1.96053 5.77775 1.69934 6.05012 1.44672 6.31353C1.00295 6.7762 0.5 7.30073 0.5 8C0.5 8.69927 1.00295 9.22373 1.44672 9.68647C1.69934 9.94988 1.96053 10.2222 2.05921 10.4608C2.14991 10.68 2.1554 11.0431 2.1607 11.3943C2.17058 12.0477 2.18176 12.7884 2.69668 13.3033C3.2116 13.8182 3.95226 13.8294 4.60575 13.8393C4.95692 13.8446 5.31999 13.8501 5.53919 13.9408C5.77775 14.0395 6.05012 14.3007 6.31353 14.5533C6.7762 14.997 7.30073 15.5 8 15.5C8.69927 15.5 9.22373 14.997 9.68647 14.5533C9.94988 14.3007 10.2222 14.0395 10.4608 13.9408C10.68 13.8501 11.0431 13.8446 11.3943 13.8393C12.0477 13.8294 12.7884 13.8182 13.3033 13.3033C13.8182 12.7884 13.8294 12.0477 13.8393 11.3943C13.8446 11.0431 13.8501 10.68 13.9408 10.4608C14.0395 10.2222 14.3007 9.94988 14.5533 9.68647C14.997 9.2238 15.5 8.69927 15.5 8C15.5 7.30073 14.997 6.77627 14.5533 6.31353ZM7.46422 4.78571C7.46422 4.64363 7.52066 4.50737 7.62113 4.40691C7.72159 4.30644 7.85785 4.25 7.99993 4.25C8.14201 4.25 8.27827 4.30644 8.37874 4.40691C8.47921 4.50737 8.53565 4.64363 8.53565 4.78571V8.53571C8.53565 8.67779 8.47921 8.81406 8.37874 8.91452C8.27827 9.01499 8.14201 9.07143 7.99993 9.07143C7.85785 9.07143 7.72159 9.01499 7.62113 8.91452C7.52066 8.81406 7.46422 8.67779 7.46422 8.53571V4.78571ZM7.99997 11.75C7.84103 11.75 7.68567 11.7029 7.55353 11.6146C7.42138 11.5263 7.31838 11.4008 7.25756 11.2539C7.19674 11.1071 7.18083 10.9455 7.21183 10.7897C7.24284 10.6338 7.31937 10.4906 7.43175 10.3782C7.54414 10.2658 7.68732 10.1893 7.8432 10.1583C7.99907 10.1273 8.16065 10.1432 8.30748 10.204C8.45431 10.2648 8.57981 10.3678 8.66811 10.5C8.75641 10.6321 8.80354 10.7875 8.80354 10.9464C8.80354 11.1595 8.71887 11.3639 8.56818 11.5146C8.41748 11.6653 8.21309 11.75 7.99997 11.75H7.99997Z" />
    </Svg>
  );
};

export default Icon;