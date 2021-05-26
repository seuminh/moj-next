import { Table, Button, Modal, Form, Col, Row, Input } from "antd";
import Link from "next/link";

import { EditOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";

const Index = () => {
   const columns = [
      {
         title: "ល.រ",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "អត្តលេខ",
         dataIndex: "nationalityIDNum",
         key: "nationalityIDNum",
      },
      {
         title: "គោត្តនាមនិងនាម",
         dataIndex: "fullname",
         key: "fullname",
      },
      {
         title: "តួនាទី",
         dataIndex: "role",
         key: "role",
      },
      {
         title: "សកម្មភាព",
         key: "action",
         render: (text, record) => (
            <Button icon={<EditOutlined />} onClick={() => {}}>
               Edit
            </Button>
         ),
      },
   ];

   return (
      <div>
         <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button icon={<SearchOutlined />} onClick={() => {}}>
               Search
            </Button>
            <Link href="/user/add">
               <Button icon={<PlusOutlined />} style={{ marginLeft: 10 }}>
                  Add
               </Button>
            </Link>
         </div>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={null}></Table>
         </div>
      </div>
   );
};

export default Index;
