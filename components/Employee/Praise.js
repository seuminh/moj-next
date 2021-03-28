import React, { useState } from "react";
import {
   Drawer,
   Form,
   Button,
   Col,
   Row,
   Input,
   Select,
   DatePicker,
   Table,
   Tag,
   Space,
   Switch,
} from "antd";

const { Option } = Select;

import {
   PlusOutlined,
   EditOutlined,
   DeleteOutlined,
   PrinterOutlined,
} from "@ant-design/icons";

const Praise = () => {
   const [visible, setVisible] = useState(false);
   const [signDate, setSignDate] = useState();

   const onSignDateChange = (date, dateString) => {
      setSignDate(dateString);
      console.log(dateString);
   };

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };

   const onClear = () => {};

   const onSubmit = () => {};

   const onEdit = (id, e) => {
      e.preventDefault();
      console.log("Edit " + id);
   };

   const onDelete = (id, e) => {
      e.preventDefault();
      console.log("Delete " + id);
   };

   const actionMenu = (record) => {
      return (
         <Menu>
            <Menu.Item key="0" icon={<EditOutlined />}>
               <a onClick={(e) => onEdit(record.refNum, e)}>Edit</a>
            </Menu.Item>
            <Menu.Item key="1" icon={<DeleteOutlined />}>
               <a onClick={(e) => onDelete(record.refNum, e)}>Delete</a>
            </Menu.Item>
         </Menu>
      );
   };

   const columns = [
      {
         title: "លេខលិខិតយោង",
         dataIndex: "refNum",
         key: "refNum",
      },
      {
         title: "ប្រភេទការលើកសសើរ",
         dataIndex: "praiseType",
         key: "praiseType",
      },
      {
         title: "រូបភាពលើកសសើរ",
         dataIndex: "praiseImg",
         key: "praiseImg",
      },
      {
         title: "ថ្ងៃខែឆ្នាំចុះហត្ថលេខា",
         dataIndex: "signDate",
         key: "signDate",
      },
      {
         title: "ក្រសួង-ស្ថាប័ន",
         dataIndex: "ministry",
         key: "ministry",
      },
      {
         title: "ផ្សេងៗ",
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
         <Button icon={<PlusOutlined />} onClick={showDrawer}>
            បញ្ចូលការលើកសសើរ
         </Button>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={null}></Table>
         </div>

         {/* Drawer */}
         <Drawer
            title="បញ្ចូលព័ត៌មានការលើកសសើរ"
            width={550}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
               <div
                  style={{
                     textAlign: "center",
                  }}
               >
                  <Button onClick={onClear} style={{ marginRight: 8 }}>
                     Clear
                  </Button>
                  <Button onClick={onSubmit} type="primary">
                     Submit
                  </Button>
               </div>
            }
         >
            <Form layout="vertical" hideRequiredMark>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="លេខលិខិតយោង"
                        label="លេខលិខិតយោង"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញលេខលិខិតយោង",
                           },
                        ]}
                     >
                        <Input placeholder="លេខលិខិតយោង" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="signDate"
                        label="កាលបរិច្ឆេទតែងតាំង"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសកាលបរិច្ឆេទតែងតាំង",
                           },
                        ]}
                     >
                        <DatePicker
                           style={{ width: "100%" }}
                           onChange={onSignDateChange}
                        />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ប្រភេទលិខិត"
                        label="ប្រភេទលិខិត"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសប្រភេទលិខិត",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="a">a</Option>
                           <Option value="b">b</Option>
                           <Option value="c">c</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ក្រសួង-ស្ថាប័ន"
                        label="ក្រសួង-ស្ថាប័ន"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសក្រសួង-ស្ថាប័ន",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="a">a</Option>
                           <Option value="b">b</Option>
                           <Option value="c">c</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ប្រភេទការលើកសសើរ"
                        label="ប្រភេទការលើកសសើរ"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសប្រភេទការលើកសសើរ",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="a">a</Option>
                           <Option value="b">b</Option>
                           <Option value="c">c</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="រូបភាពនៃការលើកសសើរ"
                        label="រូបភាពនៃការលើកសសើរ"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញរូបភាពនៃការលើកសសើរ",
                           },
                        ]}
                     >
                        <Input placeholder="រូបភាពនៃការលើកសសើរ" />
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );
};

export default Praise;
