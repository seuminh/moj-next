import { Table, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Index = () => {
   const columns = [
      {
         title: "ចំនួនមន្ត្រីរាជការស៊ីវិលតាមក្របខ័ណ្ឌ",
         children: [
            {
               title: "ក្របខ័ណ្ឌ",
               dataIndex: "ក្របខ័ណ្ឌ",
               key: "ក្របខ័ណ្ឌ",
               align: "center",
            },
            {
               title: "ថ្នាក់ជាតិ",
               children: [
                  {
                     title: "ប្រុស",
                     dataIndex: "ប្រុស",
                     key: "ប្រុស",
                     align: "center",
                  },
                  {
                     title: "ស្រី",
                     dataIndex: "ស្រី",
                     key: "ស្រី",
                     align: "center",
                  },
                  {
                     title: "សរុប",
                     dataIndex: "សរុប",
                     key: "សរុប",
                     align: "center",
                  },
               ],
            },
            {
               title: "ថ្នាក់ក្រោមជាតិ",
               children: [
                  {
                     title: "ប្រុស",
                     dataIndex: "ប្រុស",
                     key: "ប្រុស",
                     align: "center",
                  },
                  {
                     title: "ស្រី",
                     dataIndex: "ស្រី",
                     key: "ស្រី",
                     align: "center",
                  },
                  {
                     title: "សរុប",
                     dataIndex: "សរុប",
                     key: "សរុប",
                     align: "center",
                  },
               ],
            },
            {
               title: "សរុប",
               dataIndex: "សរុប",
               key: "សរុប",
               align: "center",
            },
         ],
      },
   ];

   return (
      <div>
         <h1>ស្ថានភាពមន្ត្រីរាជការស៊ីវិលក្នុងឆ្នាំ</h1>

         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
               marginTop: 30,
               marginBottom: 30,
            }}
         >
            <Card
               hoverable
               style={{ width: 350, textAlign: "center", borderRadius: 10 }}
            >
               <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={{ marginBottom: 10, backgroundColor: "lightblue" }}
               />
               <p
                  style={{
                     color: "#6a0e00",
                     fontWeight: "bold",
                  }}
               >
                  12 នាក់
               </p>
               <p>មន្រ្ដីក្របខណ្ឌ</p>
            </Card>

            <Card
               hoverable
               style={{ width: 350, textAlign: "center", borderRadius: 10 }}
            >
               <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={{ marginBottom: 10, backgroundColor: "lightblue" }}
               />
               <p style={{ color: "#6a0e00", fontWeight: "bold" }}>12 នាក់</p>
               <p>មន្រ្ដីកម្មសិក្សា</p>
            </Card>

            <Card
               hoverable
               style={{ width: 350, textAlign: "center", borderRadius: 10 }}
            >
               <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={{ marginBottom: 10, backgroundColor: "lightblue" }}
               />
               <p style={{ color: "#6a0e00", fontWeight: "bold" }}>12 នាក់</p>
               <p>គ្មានក្របខណ្ឌ</p>
            </Card>

            <Card
               hoverable
               style={{ width: 350, textAlign: "center", borderRadius: 10 }}
            >
               <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={{ marginBottom: 10, backgroundColor: "lightblue" }}
               />
               <p style={{ color: "#6a0e00", fontWeight: "bold" }}>12 នាក់</p>
               <p>មន្រ្ដីចូលនិវត្តន៏</p>
            </Card>
         </div>

         <div className="summary-table">
            <Table
               columns={columns}
               dataSource={null}
               bordered
               size="middle"
            ></Table>
         </div>
      </div>
   );
};

export default Index;
