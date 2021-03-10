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

const genderOptions = [
   { label: "រស់", value: "រស់" },
   { label: "ស្លាប់", value: "ស្លាប់" },
];

const statusOptions = [
   { label: "រស់", value: "រស់" },
   { label: "ស្លាប់", value: "ស្លាប់" },
];

const columns = [
   {
      title: "លេខសំបុត្រកំណើត",
      dataIndex: "course",
      key: "course",
   },
   {
      title: "គោត្តនាម និងនាម",
      dataIndex: "training",
      key: "training",
   },
   {
      title: "គោត្តនាម និងនាមឡាតាំង",
      dataIndex: "educationLevel",
      key: "educationLevel",
   },
   {
      title: "ភេទ",
      dataIndex: "degree",
      key: "degree",
   },
   {
      title: "ថ្ងៃខែឆ្នាំកំណើត",
      dataIndex: "institution",
      key: "institution",
   },
   {
      title: "មុខរបរ",
      dataIndex: "studyPlace",
      key: "studyPlace",
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

const childrenInfo = () => {
   const [visible, setVisible] = useState(false);
   const [childrenList, setChildrenList] = useState([]);

   const onClose = () => {
      setVisible(false);
   };

   const onSubmit = () => {};

   return (
      <div className={styles.childrenInfoContainer}>
         <h1 className={styles.title} style={{ marginBottom: 20 }}>
            <UserOutlined></UserOutlined>ព័ត៌មានកូន
         </h1>
         <Button icon={<PlusOutlined />} onClick={() => setVisible(true)}>
            បញ្ចូលកូន
         </Button>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={childrenList}></Table>
         </div>

         {/* Drawer */}
         <Drawer
            title="បញ្ចូលព័ត៌មានកូន"
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
                        name="លេខសំបុត្រកំណើត"
                        label="លេខសំបុត្រកំណើត"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញលេខសំបុត្រកំណើត",
                           },
                        ]}
                     >
                        <Input placeholder="លេខសំបុត្រកំណើត" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ"
                        label="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញលេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ",
                           },
                        ]}
                     >
                        <Input placeholder="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="គោត្តនាម និងនាម"
                        label="គោត្តនាម និងនាម"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញគោត្តនាម និងនាម",
                           },
                        ]}
                     >
                        <Input placeholder="គោត្តនាម និងនាម" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="គោត្តនាម និងនាម​ទ្បារតាំង"
                        label="គោត្តនាម និងនាម​ទ្បារតាំង"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញគោត្តនាម និងនាម​ទ្បារតាំង",
                           },
                        ]}
                     >
                        <Input placeholder="គោត្តនាម និងនាម​ទ្បារតាំង" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ថ្ងៃខែឆ្នាំកំណើត"
                        label="ថ្ងៃខែឆ្នាំកំណើត"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញថ្ងៃខែឆ្នាំកំណើត",
                           },
                        ]}
                     >
                        <DatePicker
                           placeholder="ថ្ងៃខែឆ្នាំកំណើត"
                           style={{ width: "100%" }}
                           //  onChange={onStartDateChange}
                        />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ភេទ"
                        label="ភេទ"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសភេទ",
                           },
                        ]}
                     >
                        <Radio.Group options={genderOptions}></Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="មុខរបរ"
                        label="មុខរបរ"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញមុខរបរ",
                           },
                        ]}
                     >
                        <Input placeholder="មុខរបរ" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ស្ថានភាព"
                        label="ស្ថានភាព"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសស្ថានភាព",
                           },
                        ]}
                     >
                        <Radio.Group options={statusOptions}></Radio.Group>
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );
};

export default childrenInfo;
