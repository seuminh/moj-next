import styles from "../../styles/Edit.module.css";
import { UserOutlined, PlusOutlined,EditOutlined ,DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

import {
   Col,
   Row,
   Form,
   Input,
   Space,
   DatePicker,
   Radio,
   Select,
   Button,
   Table,
   Drawer,
} from "antd";
import api from "@/utils/api";

const { Option } = Select;

const EducationInfo = ({userData}) => {

   const columns = [
      {
         title: "វគ្គសិក្សា",
         dataIndex: "course",
         key: "course",
      },
      {
         title: "វគ្គបណ្ដុះបណ្ដាល",
         dataIndex: "other",
         key: "other",
      },
      {
         title: "កម្រិតសិក្សា",
         dataIndex: "level",
         key: "level",
      },
      {
         title: "ប្រភេទសញ្ញាប័ត្រ",
         dataIndex: "degreeType",
         key: "degreeType",
      },
      {
         title: "គ្រឹះស្ថានសិក្សា",
         dataIndex: "institution",
         key: "institution",
      },
      {
         title: "ទីកន្លែងសិក្សា",
         dataIndex: "place",
         key: "place",
      },
      {
         title: "ឆ្នាំចូលសិក្សា",
         dataIndex: "startYear",
         key: "startYear",
      },
      {
         title: "ឆ្នាំបញ្ចប់សិក្សា",
         dataIndex: "endYear",
         key: "endYear",
      },
      {
         title: "ផ្សេងៗ",
         key: "action",
         render: (text, record) => (
            <Space size="middle">
               <Button
                  icon={<EditOutlined />}
                  onClick={() => {
                     setEditData(record)
                     setVisible(true);
                  }}
               >
                  Edit
               </Button>
               <Button
                  danger
                  icon={<DeleteOutlined />}
                  onClick={async () => {
                     let res = await api.put(
                        `/api/users/${userData.id}`,
                        {education: educationList.filter(v=>v._id !==record._id)}
                      );
                     setEducationList(res.data.education)
                  }}
               >
                  Delete
               </Button>
            </Space>
         ),
      },
   ];
   


   const [form] = Form.useForm();
   const [editData, setEditData] = useState(null)
   const [educationInfo, setEducationInfo] = useState(null);
   const [visible, setVisible] = useState(false);
   const [educationList, setEducationList] = useState([...userData.education]);

   const onClose = () => {
      setVisible(false);
   };

   const onSubmit = () => {
      const dataInput = form.getFieldsValue(true);
      form.validateFields().then(async () => {
         
         let updateData;
         if(editData){
            updateData = {education: educationList.map(v=>v._id == editData._id?dataInput: v)}
         }else{
            updateData =  {education: [ ...educationList,dataInput]}
         }

         const res = await api.put(
            `/api/users/${userData.id}`,
           updateData
         );
         setVisible(false);
         setEducationList(res.data.education)
         form.resetFields();
       });
   };
   useEffect(() => {
      if(visible === false){
         setEditData(null)
      }
      form.resetFields()
   }, [visible])

   return (
      <div className={styles.educationInfoContainer}>
         <h1 className={styles.title} style={{ marginBottom: 20 }}>
            <UserOutlined></UserOutlined>ព័ត៌មានកម្រិតវប្បធម៌
         </h1>
         <Button icon={<PlusOutlined />} onClick={() => setVisible(true)}>
            បញ្ចូលកម្រិតវប្បធម៌
         </Button>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={educationList}></Table>
         </div>

         {/* Drawer */}
         <Drawer
            title="បញ្ចូលព័ត៌មានកម្រិតវប្បធម៌"
            width={720}
            onClose={() => setVisible(false)}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
               <div
                  style={{
                     textAlign: "center",
                  }}
               >
                  <Button onClick={onClose} style={{ marginRight: 8 }} danger>
                     Cancel
                  </Button>
                  <Button onClick={onSubmit} type="primary">
                     Submit
                  </Button>
               </div>
            }
         >
            <Form layout="vertical" hideRequiredMark form={form} initialValues={{...editData}}>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="course"
                        label="វគ្គសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសវគ្គសិក្សា",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="កម្រិតវប្បធម៌ទូទៅ">
                              កម្រិតវប្បធម៌ទូទៅ
                           </Option>
                           <Option value="ឧត្តមសិក្សា">ឧត្តមសិក្សា</Option>
                           <Option value="ក្រោយឧត្តមសិក្សា">
                              ក្រោយឧត្តមសិក្សា
                           </Option>
                           <Option value="វគ្គបណ្ដុះបណ្ដាលផ្សេងៗ">
                              វគ្គបណ្ដុះបណ្ដាលផ្សេងៗ
                           </Option>
                           <Option value="កំរិតបណ្ដុះបណ្ដាលមុខវិជ្ជាជីវៈមូលដ្ឋាននិងក្រោយមូលដ្ឋាន">
                              កំរិតបណ្ដុះបណ្ដាលមុខវិជ្ជាជីវៈមូលដ្ឋាននិងក្រោយមូលដ្ឋាន
                           </Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="level"
                        label="កម្រិតសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសកម្រិតសិក្សា",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="មធ្យមសិក្សា">មធ្យមសិក្សា</Option>
                           <Option value="បរិញ្ញប័ត្ររង">បរិញ្ញប័ត្ររង</Option>
                           <Option value="បរិញ្ញប័ត្រ">បរិញ្ញប័ត្រ</Option>
                           <Option value="អនុបណ្ឌិត">អនុបណ្ឌិត</Option>
                           <Option value="បណ្ឌិត">បណ្ឌិត</Option>
                           <Option value="វគ្គបណ្ដុះបណ្ដាលរយះពេលខ្លី">
                              វគ្គបណ្ដុះបណ្ដាលរយះពេលខ្លី
                           </Option>
                           <Option value="វគ្គបណ្ដុះបណ្ដាលដំបូង">
                              វគ្គបណ្ដុះបណ្ដាលដំបូង
                           </Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="degreeType"
                        label="ប្រភេទសញ្ញាបត្រ"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញប្រភេទសញ្ញាបត្រ",
                           },
                        ]}
                     >
                        <Input placeholder="ប្រភេទសញ្ញាបត្រ" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="institution"
                        label="គ្រឹះស្ថានសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញគ្រឹះស្ថានសិក្សា",
                           },
                        ]}
                     >
                        <Input placeholder="គ្រឹះស្ថានសិក្សា" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="startYear"
                        label="ឆ្នាំចូលសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញឆ្នាំចូលសិក្សា",
                           },
                        ]}
                     >
                        <Input placeholder="ឆ្នាំចូលសិក្សា" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="endYear"
                        label="ឆ្នាំបញ្ចប់សិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញឆ្នាំបញ្ចប់សិក្សា",
                           },
                        ]}
                     >
                        <Input placeholder="ឆ្នាំបញ្ចប់សិក្សា" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="other"
                        label="វគ្គបណ្តុះបណ្តាលផ្សេងៗ"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញវគ្គបណ្តុះបណ្តាលផ្សេងៗ",
                           },
                        ]}
                     >
                        <Input placeholder="វគ្គបណ្តុះបណ្តាលផ្សេងៗ" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="place"
                        label="ទីកន្លែងសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញទីកន្លែងសិក្សា",
                           },
                        ]}
                     >
                        <Input placeholder="ទីកន្លែងសិក្សា" />
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );
};

export default EducationInfo;
