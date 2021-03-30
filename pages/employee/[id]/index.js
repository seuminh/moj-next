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

import Position from "@/components/Employee/Position";
import Status from "@/components/Employee/Status";
import Rank from "@/components/Employee/Rank";
import Private from "@/components/Employee/Private";
import Praise from "@/components/Employee/Praise";
import Penalty from "@/components/Employee/Penalty";
import Parent from "@/components/Employee/Parent";
import Spouse from "@/components/Employee/Spouse";
import Children from "@/components/Employee/Children";
import Education from "@/components/Employee/Education";

import api from "@/utils/api";
export async function getServerSideProps(context) {
  const res = await api.get("/api/users?employeeId=60526a89fad4f524788e5fb4");

  return {
    props: {
      user: res.data,
    },
  };
}

export default function Home({ user }) {
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
        {/* General Info */}
        <div className={styles.generalInfoContainer}>
          <Row gutter={24} justify="start">
            <Col span={6}>
              <div className={styles.userImg}>
                <img src={user.photo} alt="" width="160" height="180" />
                {/* <Image
                           src="/noImg.jpg"
                           width={160}
                           height={180}
                        ></Image> */}
                <Link href="/employee/1/edit">
                  <Button danger style={{ marginRight: 8 }}>
                    កែប្រែព័ត៌មានបុគ្គល
                  </Button>
                </Link>
              </div>
            </Col>
            <Col span={18}>
              <div className={styles.generalInfo}>
                <h1>
                  <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
                  ព័ត៌មានទូទៅ
                </h1>
                <Row style={{ marginTop: 15 }}>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>គោត្តនាម និង​នាម</span>
                    <span className={styles.hightLightInfo}>
                      {user.firstName + " " + user.lastName}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>លេខសំបុត្រកំណើត</span>
                    <span className={styles.hightLightInfo}>
                      {user.birthCertificateNum}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>គោត្តនាម និង​នាម ឡាតាំង</span>
                    <span className={styles.hightLightInfo}>
                      {user.firstNameLatin + " " + user.lastNameLatin}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>លេខអត្តសញ្ជាតិខ្មែរ</span>
                    <span className={styles.hightLightInfo}>
                      {user.nationalityIDNum}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>ភេទ</span>
                    <span className={styles.hightLightInfo}>{user.gender}</span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>លេខលិខិតឆ្លងដែន</span>
                    <span className={styles.hightLightInfo}>
                      {user.passportNumber}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>ថ្ងៃខែឆ្នាំកំណើត</span>
                    <span className={styles.hightLightInfo}>
                      {user.birthDate}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>លេខទូរស័ព្ទ</span>
                    <span className={styles.hightLightInfo}>
                      {user.contactInfo?.phoneNumber1}
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>អត្តលេខមន្រ្ដីរាជការ</span>
                    <span className={styles.hightLightInfo}>
                      input form does not exist
                    </span>
                  </Col>
                  <Col span={12} className={styles.singleGeneralInfo}>
                    <span>អ៊ីម៉ែល</span>
                    <span className={styles.hightLightInfo}>
                      {user.contactInfo?.email}
                    </span>
                  </Col>
                  <Col span={24} className={styles.singleGeneralInfo}>
                    <span style={{ flex: 1 }}>ទីកន្លែងកំណើត</span>
                    <span className={styles.hightLightInfo} style={{ flex: 6 }}>
                      {Object.values(user.birthPlace).join(" ")}
                    </span>
                  </Col>
                  <Col span={24} className={styles.singleGeneralInfo}>
                    <span style={{ flex: 1 }}>អាស័យដ្ឋាន</span>
                    <span className={styles.hightLightInfo} style={{ flex: 6 }}>
                      {Object.values(user.currentResidence).join(" ")}
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        {/* Specific Info */}
        <Tabs defaultActiveKey="1" size="small" className={styles.specificInfo}>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                ស្ថានភាពមន្រ្ដី
              </span>
            }
            key="1"
          >
            <Status></Status>
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
            <Rank></Rank>
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
            <Position userData={user}></Position>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                វិស័យឯកជន
              </span>
            }
            key="4"
          >
            <Private></Private>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                ការលើកសសើរ
              </span>
            }
            key="5"
          >
            <Praise></Praise>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                ការដាក់ពិន័យ
              </span>
            }
            key="6"
          >
            <Penalty></Penalty>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                ព័ត៌មានឪពុកម្តាយ
              </span>
            }
            key="7"
          >
            <Parent></Parent>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                ព័ត៌មានសហព័ទ្ធ
              </span>
            }
            key="8"
          >
            <Spouse></Spouse>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                ព័ត៌មានកូន
              </span>
            }
            key="9"
          >
            <Children></Children>
          </TabPane>
          <TabPane
            tab={
              <span>
                <DatabaseOutlined />
                កម្រិតវប្បធម៌
              </span>
            }
            key="10"
          >
            <Education></Education>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
