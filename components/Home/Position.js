import { useState } from "react";
import styles from "../../styles/Home.module.css";

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
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const position = () => {
   const [visible, setVisible] = useState(false);
   // const [data, setDate] = useState([
   //    {
   //       key: "1",
   //       refNumber: "abc",
   //       position: "abc",
   //       status: "",
   //       signDate: "01/01/2000",
   //       endDate: "01/01/2020",
   //       note: "",
   //    },
   // ]);

   const data = [];
   for (let i = 0; i < 4; i++) {
      data.push({
         key: i,
         refNumber: "abc" + i,
         position: "abc",
         status: "",
         signDate: "01/01/2000",
         endDate: "01/01/2020",
         note: "",
      });
   }

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };

   const onClear = () => {};

   const onSubmit = () => {};

   const onEdit = (id) => {
      console.log("Edit " + id);
   };

   const onDelete = (id) => {
      console.log("Delete " + id);
   };

   const columns = [
      {
         title: "លេខលិខិតយោង",
         dataIndex: "refNumber",
         key: "refNumber",
      },
      {
         title: "មុខតំណែង",
         dataIndex: "position",
         key: "position",
      },
      {
         title: "ឋានៈ​ស្មើ",
         dataIndex: "status",
         key: "status",
      },
      {
         title: "ថ្ងៃខែឆ្នាំចុះហត្ថលេខា",
         dataIndex: "signDate",
         key: "signDate",
      },
      {
         title: "ថ្ងៃខែឆ្នាំបញ្ចប់",
         dataIndex: "endDate",
         key: "endDate",
      },
      {
         title: "កំណត់សំគាល់",
         dataIndex: "note",
         key: "note",
      },
      {
         title: "ខ្លឹមសារផ្សេងៗ",
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

   return (
      <div>
         <Button icon={<PlusOutlined />} onClick={showDrawer}>
            បញ្ចូលមុខតំណែង
         </Button>

         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={data}></Table>
         </div>

         {/* Drawer */}
         <Drawer
            title="បញ្ចូលមុខតំណែង"
            width={720}
            onClose={onClose}
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
                  <Col span={12}>
                     <Form.Item
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
                  <Col span={12}>
                     {/* <Form.Item
                        name="url"
                        label="Url"
                        rules={[
                           { required: true, message: "Please enter url" },
                        ]}
                     >
                        <Input
                           style={{ width: "100%" }}
                           addonBefore="http://"
                           addonAfter=".com"
                           placeholder="Please enter url"
                        />
                     </Form.Item> */}
                     <Form.Item
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
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
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
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={6}>
                     <Form.Item
                        name="ប្រភេទស្ថាប័ន"
                        label="ប្រភេទស្ថាប័ន"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសប្រភេទស្ថាប័ន",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                     {/* <Form.Item
                        name="type"
                        label="Type"
                        rules={[
                           {
                              required: true,
                              message: "Please choose the type",
                           },
                        ]}
                     >
                        <Select placeholder="Please choose the type">
                           <Option value="private">Private</Option>
                           <Option value="public">Public</Option>
                        </Select>
                     </Form.Item> */}
                  </Col>
                  <Col span={6}>
                     <Form.Item
                        name="អង្គភាព"
                        label="អង្គភាព"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសអង្គភាព",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        name="មុខតំណែង"
                        label="មុខតំណែង"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសមុខតំណែង",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     {/* <Form.Item
                        name="dateTime"
                        label="DateTime"
                        rules={[
                           {
                              required: true,
                              message: "Please choose the dateTime",
                           },
                        ]}
                     >
                        <DatePicker.RangePicker
                           style={{ width: "100%" }}
                           getPopupContainer={(trigger) =>
                              trigger.parentElement
                           }
                        />
                     </Form.Item> */}
                     <Form.Item
                        name="ឋានៈ​"
                        label="ឋានៈ​"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសឋានៈ​",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={24}>
                  {/* <Col span={24}>
                     <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                           {
                              required: true,
                              message: "please enter url description",
                           },
                        ]}
                     >
                        <Input.TextArea
                           rows={4}
                           placeholder="please enter url description"
                        />
                     </Form.Item>
                  </Col> */}
                  <Col span={8}>
                     <Form.Item
                        name="កន្លែងធ្វើការរាជធានី៊​/ខេត្ត"
                        label="កន្លែងធ្វើការរាជធានី៊​/ខេត្ត"
                        rules={[
                           {
                              required: true,
                              message:
                                 "សូមជ្រើសរើសកន្លែងធ្វើការរាជធានី៊​/ខេត្ត",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        name="កន្លែងធ្វើការស្រុក/ខណ្ឌ"
                        label="កន្លែងធ្វើការស្រុក/ខណ្ឌ"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសកន្លែងធ្វើការស្រុក/ខណ្ឌ",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
                  <Col span={8}>
                     <Form.Item
                        name="កន្លែងធ្វើការឃុំ/សង្កាត់"
                        label="កន្លែងធ្វើការឃុំ/សង្កាត់"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសកន្លែងធ្វើការឃុំ/សង្កាត់",
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Hello">Hello</Option>
                           <Option value="Hi">Hi</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );
};

export default position;
