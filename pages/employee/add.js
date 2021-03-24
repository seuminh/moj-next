import styles from "../../styles/Edit.module.css";
import SelfInfo from "../../components/Add/selfInfo";
import ParentInfo from "../../components/Add/parentInfo";
import SpouseInfo from "../../components/Add/spouseInfo";
import ChildrenInfo from "../../components/Add/childrenInfo";
import EducationInfo from "../../components/Add/educationInfo";

import { Tabs } from "antd";

const { TabPane } = Tabs;

const add = () => {
   return (
      <div className={styles.container}>
         <Tabs defaultActiveKey="1">
            <TabPane tab="ព័ត៌មានផ្ទាល់ខ្លួន" key="1">
               <SelfInfo></SelfInfo>
            </TabPane>
            <TabPane tab="ព័ត៌មានឪពុកម្តាយ" key="2">
               <ParentInfo></ParentInfo>
            </TabPane>
            <TabPane tab="ព័ត៌មានសហព័ទ្ធ" key="3">
               <SpouseInfo></SpouseInfo>
            </TabPane>
            <TabPane tab="ព័ត៌មានកូន" key="4">
               <ChildrenInfo></ChildrenInfo>
            </TabPane>
            <TabPane tab="ព័ត៌មានកម្រិតវប្បធម៌" key="5">
               <EducationInfo></EducationInfo>
            </TabPane>
         </Tabs>
      </div>
   );
};

export default add;
