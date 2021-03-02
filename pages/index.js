import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Tabs, Col, Row, Button } from "antd";

import {
   HomeOutlined,
   DatabaseOutlined,
   UserOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

import Position from "../components/Home/Position";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>ព័ត៌មានមន្រ្តីរាជការ</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
            ></meta>
         </Head>

         <div className={styles.header}>
            <div className={styles.headerIcon}>
               <HomeOutlined style={{ fontSize: 22 }} />
            </div>
            <div className={styles.headerInfo}>
               <div>
                  <p>
                     ក្រសួង-ស្ថាប័ន
                     <span style={{ color: "#6a0e00", fontWeight: "bold" }}>
                        យុត្តិធម័
                     </span>
                  </p>
               </div>
               <div>
                  <p>
                     ឈ្មោះអ្នកចូលប្រើ{" "}
                     <span style={{ color: "#6a0e00", fontWeight: "bold" }}>
                        Unknown
                     </span>
                  </p>
               </div>
            </div>
         </div>

         <div className="pageInfo">
            <h1>ព័ត៌មានមន្រ្តីរាជការ</h1>
         </div>

         <div className={styles.userInfo}>
            {/* General Info */}
            <div className={styles.generalInfoContainer}>
               <Row gutter={24} justify="start">
                  <Col span={6}>
                     <div className={styles.userImg}>
                        <img src="/noImg.jpg" alt="" width="160" height="180" />
                        {/* <Image
                           src="/noImg.jpg"
                           width={160}
                           height={180}
                        ></Image> */}
                        <Button
                           // onClick={onClose}
                           danger
                           style={{ marginRight: 8 }}
                        >
                           កែប្រែព័ត៌មានបុគ្គល
                        </Button>
                     </div>
                  </Col>
                  <Col span={18}>
                     <div className={styles.generalInfo}>
                        <h1>
                           <UserOutlined
                              style={{ fontSize: 23, marginRight: 5 }}
                           />
                           ព័ត៌មានទូទៅ
                        </h1>
                        <Row style={{ marginTop: 15 }}>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>គោត្តនាម និង​នាម</span>
                              <span className={styles.hightLightInfo}>
                                 Unknown
                              </span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>លេខសំបុត្រកំណើត</span>
                              <span className={styles.hightLightInfo}>0</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>គោត្តនាម និង​នាម ឡាតាំង</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>លេខអត្តសញ្ជាតិខ្មែរ</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>ភេទ</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>លេខលិខិតឆ្លងដែន</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>ថ្ងៃខែឆ្នាំកំណើត</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>លេខទូរស័ព្ទ</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>អត្តលេខមន្រ្ដីរាជការ</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={12} className={styles.singleGeneralInfo}>
                              <span>អ៊ីម៉ែល</span>
                              <span className={styles.hightLightInfo}>123</span>
                           </Col>
                           <Col span={24} className={styles.singleGeneralInfo}>
                              <span style={{ flex: 1 }}>ទីកន្លែងកំណើត</span>
                              <span
                                 className={styles.hightLightInfo}
                                 style={{ flex: 6 }}
                              >
                                 Fugiat in reprehenderit quis est Lorem occaecat
                                 cillum ut ut ipsum velit occaecat magna dolore.
                              </span>
                           </Col>
                           <Col span={24} className={styles.singleGeneralInfo}>
                              <span style={{ flex: 1 }}>អាស័យដ្ឋាន</span>
                              <span
                                 className={styles.hightLightInfo}
                                 style={{ flex: 6 }}
                              >
                                 Fugiat in reprehenderit quis est Lorem occaecat
                                 cillum ut ut ipsum velit occaecat magna dolore.
                              </span>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </Row>
            </div>

            {/* Specific Info */}
            <Tabs
               defaultActiveKey="1"
               size="small"
               className={styles.specificInfo}
            >
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ស្ថានភាពមន្រ្ដី
                     </span>
                  }
                  key="1"
               >
                  ស្ថានភាពមន្រ្ដី
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ឋានន្តរសកិ្ត និងថ្នាក់
                     </span>
                  }
                  key="2"
               >
                  ឋានន្តរសកិ្ត និងថ្នាក់
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        មុខតំណែង
                     </span>
                  }
                  key="3"
               >
                  <Position></Position>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ការលើកសសើរ
                     </span>
                  }
                  key="4"
               >
                  ការលើកសសើរ
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ការដាក់ពិន័យ
                     </span>
                  }
                  key="5"
               >
                  ការដាក់ពិន័យ
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ព័ត៌មានឪពុក
                     </span>
                  }
                  key="6"
               >
                  ព័ត៌មានឪពុក
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ព័ត៌មានម្តាយ
                     </span>
                  }
                  key="7"
               >
                  ព័ត៌មានម្តាយ
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        ព័ត៌មានកូន
                     </span>
                  }
                  key="8"
               >
                  ព័ត៌មានកូន
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <DatabaseOutlined />
                        កម្រិតវប្បធម៌
                     </span>
                  }
                  key="9"
               >
                  កម្រិតវប្បធម៌
               </TabPane>
            </Tabs>
         </div>
      </div>
   );
}
