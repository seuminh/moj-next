import { Dropdown, Card, Avatar, Row, Col, Divider, Table } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import Image from "next/image";
import TyperPNG from "@/public/home/typer.png";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import withAuth from '../hoc/privateRoutes.js'

import General from "@/components/Employee/General";

const { Meta } = Card;

const Index = () => {
   const [displayData, setDisplayData] = useState();
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      (async () => {
         const { data } = await api.get("/api/users/overview");
         console.log(data);
         setDisplayData(data.data);
      })();
   }, []);

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
         dataIndex: "firstName",
         key: "firstName",
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
         title: "មុខតំណែង",
         dataIndex: ["experience", "position"],
         key: "position",
      },
      {
         title: "អង្គភាព",
         dataIndex: "experience",
         key: "department",
         render: (experience) => {
            return experience.department || experience.unit;
         },
      },
      {
         title: "ស្ថានភាព",
         dataIndex: "status",
         key: "status",
      },
      {
         title: "ស្ថានភាពមន្ត្រី",
         dataIndex: "approval",
         key: "approvalStatus",
         render: (approval, record) => {
            console.log(approval);
            let color = "red";
            let title = "កំពុងពិនិត្យ";
            if (approval) {
               title = "អនុម័ត្ត";
               color = "green";
            }
            return (
               <Tag color={color} key={approval}>
                  {title}
               </Tag>
            );
         },
      },
      {
         title: "កែប្រែ",
         key: "action",
         render: (text, record) => (
            <Dropdown overlay={() => actionMenu(record)}>
               <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
               >
                  ផ្សេងៗ <DownOutlined />
               </a>
            </Dropdown>
         ),
      },
   ];

   return (
      <div>
         <div className="top-section">
            <Row gutter={16}>
               <Col span={16}>
                  <div
                     style={{
                        height: 230,
                        backgroundColor: "#FEE5D1",
                        borderRadius: 10,
                        padding: 10,
                        paddingLeft: 20,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                     }}
                  >
                     <Image
                        src={TyperPNG}
                        alt="Typer"
                        placeholder="blur"
                        width={200}
                        height={190}
                     />
                     <section
                        style={{
                           marginTop: -50,
                        }}
                     >
                        <h1 style={{ color: "orange", fontSize: "1.5rem" }}>
                           សូមស្វាគមន៏មកកាន់ប្រព័ន្ធគ្រប់គ្រងkhambodiaHR
                        </h1>
                        <div
                           style={{
                              marginTop: 30,
                              marginLeft: 50,
                              fontSize: "1rem",
                           }}
                        >
                           <p>
                              <span style={{ fontWeight: "bold" }}>+</span>
                              ប្រកាសស្ដីពីការប្រើប្រាស់ប្រព័ន្ធគ្រប់គ្រងkhambodiaHR
                           </p>
                           <p>
                              <span style={{ fontWeight: "bold" }}>+</span>{" "}
                              សេចក្ដីណែនាំ
                              របៀបការប្រើប្រាស់ប្រព័ន្ធគ្រប់គ្រងkhambodiaHR
                           </p>
                        </div>
                     </section>
                  </div>
               </Col>
               <Col span={8}>
                  <div style={{ height: 230, backgroundColor: "#FEE5D1" }}>
                     <iframe
                        width="100%"
                        height="230"
                        src="https://www.youtube.com/embed/KODKSNiVd7E"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                     ></iframe>
                  </div>
               </Col>
            </Row>
         </div>

         {/* List User */}
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={employees}></Table>
         </div>

         {/* General Info */}
         <General userData={{photo: ''}}></General>

         <div style={{ margin: "30px 0px" }}>
            <h1 style={{ textAlign: "center", fontSize: "19px" }}>
               ចំនួនមន្ត្រីរាជការស៊ីវិល តាមប្រភេទក្របខ័ណ្ឌ
            </h1>
            <div
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
               }}
            >
               <Card
                  hoverable
                  style={{ width: 290, textAlign: "center", borderRadius: 10 }}
               >
                  <TeamOutlined
                     style={{ fontSize: "2em", color: "#E6C155" }}
                  ></TeamOutlined>
                  <span
                     style={{
                        color: "#4B5E9B",
                        fontSize: "1.1em",
                        margin: "-20px 5px",
                     }}
                  >
                     មន្រ្ដីក្របខ័ណ្ឌ
                  </span>
                  <Divider
                     style={{ borderColor: "#E6C155", borderWidth: "2px" }}
                  ></Divider>
                  <p
                     style={{
                        color: "#4B5E9B",
                        fontWeight: "bold",
                        fontSize: "1.4em",
                     }}
                  >
                     0
                  </p>
                  <p>នាក់ ក្នុងឆ្នាំ2021</p>
               </Card>

               <Card
                  hoverable
                  style={{
                     width: 290,
                     textAlign: "center",
                     borderRadius: 10,
                     margin: "0px 30px",
                  }}
               >
                  <TeamOutlined
                     style={{ fontSize: "2em", color: "#683131" }}
                  ></TeamOutlined>
                  <span
                     style={{
                        color: "#4B5E9B",
                        fontSize: "1.1em",
                        margin: "-20px 5px",
                     }}
                  >
                     មន្រ្ដីកំពុងកម្មសិក្សា
                  </span>
                  <Divider
                     style={{ borderColor: "#683131", borderWidth: "2px" }}
                  ></Divider>
                  <p
                     style={{
                        color: "#4B5E9B",
                        fontWeight: "bold",
                        fontSize: "1.4em",
                     }}
                  >
                     0
                  </p>
                  <p>នាក់ ក្នុងឆ្នាំ2021</p>
               </Card>

               <Card
                  hoverable
                  style={{
                     width: 290,
                     textAlign: "center",
                     borderRadius: 10,
                  }}
               >
                  <TeamOutlined
                     style={{ fontSize: "2em", color: "#4B5E9B" }}
                  ></TeamOutlined>
                  <span
                     style={{
                        color: "#4B5E9B",
                        fontSize: "1.1em",
                        margin: "-20px 5px",
                     }}
                  >
                     មន្រ្ដីគ្មានក្របខ័ណ្ឌ
                  </span>
                  <Divider
                     style={{ borderColor: "#4B5E9B", borderWidth: "2px" }}
                  ></Divider>
                  <p
                     style={{
                        color: "#4B5E9B",
                        fontWeight: "bold",
                        fontSize: "1.4em",
                     }}
                  >
                     0
                  </p>
                  <p>នាក់ ក្នុងឆ្នាំ2021</p>
               </Card>

               <Card
                  hoverable
                  style={{
                     width: 290,
                     textAlign: "center",
                     borderRadius: 10,
                     marginLeft: 30,
                  }}
               >
                  <TeamOutlined
                     style={{ fontSize: "2em", color: "#486E6C" }}
                  ></TeamOutlined>
                  <span
                     style={{
                        color: "#4B5E9B",
                        fontSize: "1.1em",
                        margin: "-20px 5px",
                     }}
                  >
                     មន្រ្ដីចូលនិវត្តន៏
                  </span>
                  <Divider
                     style={{ borderColor: "#4B5E9B", borderWidth: "2px" }}
                  ></Divider>
                  <p
                     style={{
                        color: "#486E6C",
                        fontWeight: "bold",
                        fontSize: "1.4em",
                     }}
                  >
                     0
                  </p>
                  <p>នាក់ ក្នុងឆ្នាំ2021</p>
               </Card>
            </div>
         </div>

         <div style={{ margin: "50px 0px" }}>
            <h1 style={{ textAlign: "center", fontSize: "19px" }}>
               ស្ថានភាពមន្រ្ដីរាជការ គិតត្រឹមឆ្នាំ2021
            </h1>
            <div style={{ width: "80%", margin: "auto" }}>
               <Row gutter={10}>
                  <Col span={12}>
                     <div
                        style={{
                           backgroundColor: "#fff",
                           padding: "10px 0px",
                           borderRadius: 10,
                        }}
                     >
                        <div
                           style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontSize: "1.1em",
                              padding: "0px 10px",
                           }}
                        >
                           <div>
                              <TeamOutlined
                                 style={{
                                    fontSize: "2em",
                                    color: "#E6C155",
                                 }}
                              ></TeamOutlined>
                              <span style={{ marginTop: -30 }}>
                                 មន្រ្ដីរាជការថ្នាក់ជាតិ
                              </span>
                           </div>
                           <div>
                              {+(displayData?.centerInstitution["ស្រី"] || 0) +
                                 +(
                                    displayData?.centerInstitution["ប្រុស"] || 0
                                 )}{" "}
                              នាក់
                           </div>
                        </div>
                        <Divider style={{ borderWidth: 2 }}></Divider>
                        <div
                           style={{
                              display: "flex",
                              justifyContent: "space-around",
                              paddingTop: 20,
                              paddingBottom: 25,
                           }}
                        >
                           <Card
                              hoverable
                              style={{
                                 width: 200,
                                 textAlign: "center",
                                 borderRadius: 10,
                              }}
                           >
                              <TeamOutlined
                                 style={{ fontSize: "2em", color: "#E6C155" }}
                              ></TeamOutlined>
                              <span
                                 style={{
                                    fontSize: "1.1em",
                                    margin: "-20px 5px",
                                 }}
                              >
                                 ថ្នាក់ជាតិប្រុស
                              </span>
                              <Divider
                                 style={{
                                    borderColor: "#E6C155",
                                    borderWidth: "2px",
                                 }}
                              ></Divider>
                              <p
                                 style={{
                                    fontWeight: "bold",
                                    fontSize: "1.4em",
                                    paddingTop: 10,
                                 }}
                              >
                                 {displayData?.centerInstitution["ប្រុស"] || 0}{" "}
                                 នាក់
                              </p>
                           </Card>
                           <Card
                              hoverable
                              style={{
                                 width: 200,
                                 textAlign: "center",
                                 borderRadius: 10,
                              }}
                           >
                              <TeamOutlined
                                 style={{ fontSize: "2em", color: "#E6C155" }}
                              ></TeamOutlined>
                              <span
                                 style={{
                                    fontSize: "1.1em",
                                    margin: "-20px 5px",
                                 }}
                              >
                                 ថ្នាក់ជាតិស្រី
                              </span>
                              <Divider
                                 style={{
                                    borderColor: "#E6C155",
                                    borderWidth: "2px",
                                 }}
                              ></Divider>
                              <p
                                 style={{
                                    fontWeight: "bold",
                                    fontSize: "1.4em",
                                    paddingTop: 10,
                                 }}
                              >
                                 {displayData?.centerInstitution["ស្រី"] || 0}{" "}
                                 នាក់
                              </p>
                           </Card>
                        </div>
                     </div>
                  </Col>
                  <Col span={12}>
                     <div
                        style={{
                           backgroundColor: "#fff",
                           padding: "10px 0px",
                           borderRadius: 10,
                        }}
                     >
                        <div
                           style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontSize: "1.1em",
                              padding: "0px 10px",
                           }}
                        >
                           <div>
                              <TeamOutlined
                                 style={{
                                    fontSize: "2em",
                                    color: "#E6C155",
                                 }}
                              ></TeamOutlined>
                              <span style={{ marginTop: -30 }}>
                                 មន្រ្ដីរាជការថ្នាក់ក្រោមជាតិ
                              </span>
                           </div>
                           <div>
                              {+(
                                 displayData?.provinceInstitution["ស្រី"] || 0
                              ) +
                                 +(
                                    displayData?.provinceInstitution["ប្រុស"] ||
                                    0
                                 )}{" "}
                              នាក់
                           </div>
                        </div>
                        <Divider style={{ borderWidth: 2 }}></Divider>
                        <div
                           style={{
                              display: "flex",
                              justifyContent: "space-around",
                              paddingTop: 20,
                              paddingBottom: 25,
                           }}
                        >
                           <Card
                              hoverable
                              style={{
                                 width: 200,
                                 textAlign: "center",
                                 borderRadius: 10,
                              }}
                           >
                              <TeamOutlined
                                 style={{ fontSize: "2em", color: "#E6C155" }}
                              ></TeamOutlined>
                              <span
                                 style={{
                                    fontSize: "1.1em",
                                    margin: "-20px 5px",
                                 }}
                              >
                                 ថ្នាក់ក្រោមជាតិប្រុស
                              </span>
                              <Divider
                                 style={{
                                    borderColor: "#E6C155",
                                    borderWidth: "2px",
                                 }}
                              ></Divider>
                              <p
                                 style={{
                                    fontWeight: "bold",
                                    fontSize: "1.4em",
                                    paddingTop: 10,
                                 }}
                              >
                                 {displayData?.provinceInstitution["ប្រុស"] ||
                                    0}{" "}
                                 នាក់
                              </p>
                           </Card>
                           <Card
                              hoverable
                              style={{
                                 width: 200,
                                 textAlign: "center",
                                 borderRadius: 10,
                              }}
                           >
                              <TeamOutlined
                                 style={{ fontSize: "2em", color: "#E6C155" }}
                              ></TeamOutlined>
                              <span
                                 style={{
                                    fontSize: "1.1em",
                                    margin: "-20px 5px",
                                 }}
                              >
                                 ថ្នាក់ក្រោមជាតិស្រី
                              </span>
                              <Divider
                                 style={{
                                    borderColor: "#E6C155",
                                    borderWidth: "2px",
                                 }}
                              ></Divider>
                              <p
                                 style={{
                                    fontWeight: "bold",
                                    fontSize: "1.4em",
                                    paddingTop: 10,
                                 }}
                              >
                                 {displayData?.provinceInstitution["ស្រី"] || 0}{" "}
                                 នាក់
                              </p>
                           </Card>
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </div>

         <style global jsx>
            {`
               .ant-card-body {
                  padding: 13px 0px;
               }

               .ant-divider-horizontal {
                  margin: 15px 0;
               }
            `}
         </style>
      </div>
   );
};

export default Index ;
