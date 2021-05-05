import React, { useState, useEffect } from "react";

import {
   Drawer,
   Form,
   Button,
   Col,
   Row,
   Input,
   Select,
   DatePicker,
   Table,
   Tag,
   Space,
   Switch,
   Menu,
   Dropdown,
} from "antd";

import { UserOutlined } from "@ant-design/icons";

const Children = ({userData}) => {
   const [children, setChildren] = useState(userData?.children || []);

   const columns = [
      {
         title: "លេខសំបុត្រកំណើត",
         dataIndex: "birthCertificateNum",
         key: "birthCertificateNum",
      },
      {
         title: "លេខអត្តសញ្ញាណប័ណ្ណ",
         dataIndex: "nationalityIDNum",
         key: "nationalityIDNum",
      },
      {
         title: "គោត្តនាម និងនាម",
         dataIndex: "fullName",
         key: "fullName",
      },
      {
         title: "គោត្តនាម និងនាមឡាតាំង",
         dataIndex: "fullNameLatin",
         key: "fullNameLatin",
      },
      {
         title: "ភេទ",
         dataIndex: "gender",
         key: "gender",
      },
      {
         title: "ថ្ងៃខែឆ្នាំកំណើត",
         dataIndex: "birthDate",
         key: "birthDate",
      },
      {
         title: "មុខរបរ",
         dataIndex: "occupation",
         key: "occupation",
      },
      {
         title: "ស្ថានភាព",
         dataIndex: "livingStatus",
         key: "livingStatus",
      },
   ];

   return (
      <div>
         <h1 style={{ marginBottom: 20 }}>
            <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
            ព័ត៌មានកូន
         </h1>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={children}></Table>
         </div>
      </div>
   );
};

export default Children;
