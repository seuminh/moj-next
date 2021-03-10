import styles from "../../styles/Edit.module.css";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import {
   Col,
   Row,
   Form,
   Input,
   DatePicker,
   Radio,
   Select,
   Button,
   Table,
   Drawer,
} from "antd";

const columns = [
   {
      title: "វគ្គសិក្សា",
      dataIndex: "course",
      key: "course",
   },
   {
      title: "វគ្គបណ្ដុះបណ្ដាល",
      dataIndex: "training",
      key: "training",
   },
   {
      title: "កម្រិតសិក្សា",
      dataIndex: "educationLevel",
      key: "educationLevel",
   },
   {
      title: "ប្រភេទសញ្ញាប័ត្រ",
      dataIndex: "degree",
      key: "degree",
   },
   {
      title: "គ្រឹះស្ថានសិក្សា",
      dataIndex: "institution",
      key: "institution",
   },
   {
      title: "ទីកន្លែងសិក្សា",
      dataIndex: "studyPlace",
      key: "studyPlace",
   },
   {
      title: "ឆ្នាំចូលសិក្សា",
      dataIndex: "startYear",
      key: "startYear",
   },
   {
      title: "ឆ្នាំបញ្ចប់សិក្សា",
      dataIndex: "graduationYear",
      key: "graduationYear",
   },
   {
      title: "ផ្សេងៗ",
      key: "action",
      render: (text, record) => (
         <Space size="middle">
            <Button
               icon={<EditOutlined />}
               onClick={() => onEdit(record.refNumber)}
            >
               Edit
            </Button>
            <Button
               danger
               icon={<DeleteOutlined />}
               onClick={() => onDelete(record.refNumber)}
            >
               Delete
            </Button>
         </Space>
      ),
   },
];

const EducationInfo = () => {
   const [visible, setVisible] = useState(false);
   const [educationList, setEducationList] = useState([]);

   const onClose = () => {
      setVisible(false);
   };

   const onSubmit = () => {};

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
            <Form layout="vertical" hideRequiredMark>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="វគ្គសិក្សា"
                        label="វគ្គសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញវគ្គសិក្សា",
                           },
                        ]}
                     >
                        <Input placeholder="វគ្គសិក្សា" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="កម្រិតសិក្សា"
                        label="កម្រិតសិក្សា"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញកម្រិតសិក្សា",
                           },
                        ]}
                     >
                        <Input placeholder="កម្រិតសិក្សា" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ប្រភេទសញ្ញាបត្រ"
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
                        name="គ្រឹះស្ថានសិក្សា"
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
                        name="ឆ្នាំចូលសិក្សា"
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
                        name="ឆ្នាំបញ្ចប់សិក្សា"
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
                        name="វគ្គបណ្តុះបណ្តាលផ្សេងៗ"
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
                        name="ទីកន្លែងសិក្សា"
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
