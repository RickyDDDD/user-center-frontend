// import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import React from "react";
// import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '吃嗯陈';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[

      ]}
    />
  );
};

export default Footer;
