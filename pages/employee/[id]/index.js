import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Employee.module.css";

import { Tabs, Col, Row, Button } from "antd";

import {
   HomeOutlined,
   DatabaseOutlined,
   UserOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

import General from "@/components/Employee/General";
import Rank from "@/components/Employee/Rank";
import Family from "@/components/Employee/Family";
import Education from "@/components/Employee/Education";
import WorkHistory from "@/components/Employee/WorkHistory";
import Status from "@/components/Employee/Status";
import Praise from "@/components/Employee/Praise";
import Penalty from "@/components/Employee/Penalty";

import api from "@/utils/api";
import { readFileFolderData } from "@/lib/ReadFileFolderData";

export async function getServerSideProps({ params }) {
   const res = await api.get("/api/users/" + params.id);
   const ministryStructure = await readFileFolderData("Structure.json");
   const statusOfficer = await readFileFolderData("StatusOfficer.json");
   const ministryList = await readFileFolderData("Ministry.json");
   const rankList = await readFileFolderData("Rank.json");
   const letterTypes = await readFileFolderData("LetterTypes.json");
   return {
      props: {
         ministryStructure,
         statusOfficer,
         letterTypes,
         rankList,
         ministryList,
         user: res.data,
      },
   };
}

export default function Home({
   ministryStructure,
   statusOfficer,
   ministryList,
   letterTypes,
   rankList,
   user,
}) {
   console.log(user);
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

         <div className={styles.userInfo}>
            {/* Specific Info */}
            <Tabs
               defaultActiveKey="1"
               size="small"
               className={styles.specificInfo}
               centered
            >
               <TabPane
                  tab={
                     <span>
                        <img src="/user.png" width="30" height="30" />
                        ព័ត៌មានទូទៅ
                     </span>
                  }
                  key="1"
               >
                  <General userData={user}></General>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/rank.png" width="30" height="30" />
                        ឋានន្តរសកិ្ត និងថ្នាក់
                     </span>
                  }
                  key="2"
               >
                  <Rank userData={user}></Rank>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/family.png" width="30" height="30" />
                        គ្រួសារ
                     </span>
                  }
                  key="3"
               >
                  <Family userData={user}></Family>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/education.png" width="30" height="30" />
                        កម្រិតវប្បធម៌
                     </span>
                  }
                  key="4"
               >
                  <Education userData={user}></Education>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/work.png" width="30" height="30" />
                        ប្រវត្តិការងារ
                     </span>
                  }
                  key="5"
               >
                  <WorkHistory
                     userData={user}
                     ministryStructure={ministryStructure}
                  ></WorkHistory>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/status.png" width="30" height="30" />
                        ស្ថានភាពមន្រ្ដី
                     </span>
                  }
                  key="6"
               >
                  <Status
                     userData={user}
                     rankList={rankList}
                     letterTypes={letterTypes}
                     ministryList={ministryList}
                     statusOfficer={statusOfficer}
                  ></Status>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/penalty.png" width="30" height="30" />
                        ការដាក់ពិន័យ
                     </span>
                  }
                  key="7"
               >
                  <Penalty userData={user}></Penalty>
               </TabPane>
               <TabPane
                  tab={
                     <span>
                        <img src="/praise.png" width="30" height="30" />
                        ការលើកសសើរ
                     </span>
                  }
                  key="8"
               >
                  <Praise userData={user}></Praise>
               </TabPane>
            </Tabs>
         </div>
         <style global jsx>{`
            .ant-tabs-tab-btn span {
               display: flex;
               flex-direction: column;
               align-items: center;
               gap: 1rem;
            }
            .ant-tabs-tab-btn .anticon {
               margin-right: 0;
            }
         `}</style>
      </div>
   );
}
