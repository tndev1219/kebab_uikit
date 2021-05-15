import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <path d="M16.9982 12.0458C17.0104 12.0161 17.0206 11.9855 17.0287 11.9543C17.6574 10.0401 17.6571 7.95722 17.0279 6.04316C17.02 6.01344 17.0103 5.98431 16.9988 5.95597C16.4051 4.21469 15.3191 2.70918 13.8886 1.64411C12.4581 0.579044 10.7524 0.00609872 9.00344 0.00316884L9 0L8.99657 0.00316884C7.24776 0.00609461 5.54221 0.578928 4.11177 1.6438C2.68133 2.70868 1.59537 4.21395 1.00152 5.95499C0.989645 5.98406 0.979685 6.01396 0.971708 6.04448C0.342395 7.9597 0.342775 10.0438 0.972786 11.9587C0.980388 11.9873 0.989719 12.0152 1.00072 12.0425C1.59423 13.7841 2.68013 15.29 4.11075 16.3553C5.54137 17.4207 7.24728 17.9938 8.99649 17.9967L9 18L9.00352 17.9967C10.7522 17.9938 12.4576 17.4211 13.8879 16.3563C15.3183 15.2916 16.4042 13.7866 16.9982 12.0458ZM9 1.86812C9.94902 2.90898 10.6623 4.1644 11.086 5.53964H6.91403C7.33772 4.1644 8.05098 2.90898 9 1.86812ZM6.91407 12.4603H11.0859C10.6622 13.8355 9.949 15.0909 9 16.1318C8.05101 15.0909 7.33776 13.8355 6.91407 12.4603ZM6.57174 11.0762C6.32224 9.70462 6.32224 8.2953 6.57174 6.92377H11.4283C11.6778 8.2953 11.6778 9.70462 11.4283 11.0762H6.57174ZM12.7619 6.92377H15.9204C16.2829 8.2813 16.2829 9.71862 15.9204 11.0762H12.7619C12.9768 9.70136 12.9768 8.29855 12.7619 6.92377ZM15.4054 5.53964H12.466C12.0745 4.08128 11.4031 2.72407 10.4936 1.5528C11.5404 1.79023 12.5242 2.27113 13.3738 2.96068C14.2233 3.65023 14.9173 4.53116 15.4054 5.53964H15.4054ZM10.4936 16.4471C11.403 15.2759 12.0745 13.9186 12.466 12.4603H15.4054C14.9173 13.4688 14.2233 14.3497 13.3737 15.0393C12.5242 15.7288 11.5404 16.2097 10.4936 16.4471Z" />
    </Svg>
  );
};

export default Icon;