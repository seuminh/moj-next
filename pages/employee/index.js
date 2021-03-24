import Link from "next/link";

import { EditOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";

import { Table, Button } from "antd";

const Index = () => {
   const columns = [
      {
         title: "ល.រ",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "អត្តលេខ",
         dataIndex: "idNumber",
         key: "idNumber",
      },
      {
         title: "គោត្តនាមនិងនាម",
         dataIndex: "fullName",
         key: "fullName",
      },
      {
         title: "ភេទ",
         dataIndex: "gender",
         key: "gender",
      },
      {
         title: "ថ្ងៃខែឆ្នាំកំណើត",
         dataIndex: "dateBirth",
         key: "dateBirth",
      },
      {
         title: "ប្រភេទមន្រ្តីរាជការ",
         dataIndex: "employeeType",
         key: "employeeType",
      },
      {
         title: "មុខងារ",
         dataIndex: "position",
         key: "position",
      },
      // {
      //    title: "ក្របខ័ណ្ឌ",
      //    dataIndex: "refNum",
      //    key: "refNum",
      // },
      {
         title: "ស្ថានភាពមន្រ្ដី",
         dataIndex: "employeeStatus",
         key: "employeeStatus",
      },
      {
         title: "ស្ថានភាព",
         dataIndex: "status",
         key: "status",
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
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <Link href="/employee/1">
               <a>Go Employee id 1</a>
            </Link>
            <div>
               <Button icon={<SearchOutlined />} onClick={() => {}}>
                  ស្វែងរក
               </Button>
               <Link href="/employee/add">
                  <Button icon={<PlusOutlined />} style={{ marginLeft: 10 }}>
                     បញ្ចូលមន្រ្ដីរាជការ
                  </Button>
               </Link>
            </div>
         </div>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns}></Table>
         </div>
      </div>
   );
};

export default Index;
