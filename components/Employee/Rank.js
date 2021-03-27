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

import {
   PlusOutlined,
   EditOutlined,
   DeleteOutlined,
   PrinterOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const Rank = () => {
   const [visible, setVisible] = useState(false);
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [nowOption, setNowOption] = useState(true);

   const onStartDateChange = (date, dateString) => {
      setStartDate(dateString);
      console.log(dateString);
   };

   const onEndDateChange = (date, dateString) => {
      setEndDate(dateString);
      console.log(dateString);
   };

   const onNowChange = (checked) => {
      if (checked) {
         setNowOption(true);
         setEndDate(new Date());
      } else {
         setNowOption(false);
      }
   };

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };

   const onClear = () => {};

   const onSubmit = () => {};

   const columns = [
      {
         title: "លេខលិខិតយោង",
         dataIndex: "refNum",
         key: "refNum",
      },
      {
         title: "ប្រភេទលក្ខន្តិកៈ",
         dataIndex: "statuteType",
         key: "statuteType",
      },
      {
         title: "ក្របខ័ណ្ឌ",
         dataIndex: "framework",
         key: "framework",
      },
      {
         title: "ឋានន្តរសកិ្ត និងថ្នាក់",
         dataIndex: "rank",
         key: "rank",
      },
      {
         title: "កម្រិតថ្នាក់",
         dataIndex: "level",
         key: "level",
      },
      {
         title: "ថ្ងៃខែឆ្នាំចុះហត្ថលេខា",
         dataIndex: "signDate",
         key: "signDate",
      },
      {
         title: "កំណត់សំគាល់",
         dataIndex: "note",
         key: "note",
      },
      {
         title: "ផ្សេងៗ",
         key: "action",
         render: (text, record) => (
            <Button icon={<EditOutlined />} onClick={() => {}}>
               Edit
            </Button>
         ),
      },
   ];

   return (
      <div>
         <Button icon={<PlusOutlined />} onClick={showDrawer}>
            បញ្ចូលឋានន្តរសកិ្ត និងថ្នាក់
         </Button>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={null}></Table>
         </div>

         {/* Drawer */}
         <Drawer
            title="បញ្ចូលឋាន្តរសក្កិ"
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
                  <Col span={9}>
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
                  <Col span={6}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="startDate"
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
                           onChange={onStartDateChange}
                        />
                     </Form.Item>
                  </Col>
                  <Col span={3}>
                     <Form.Item
                        label="បច្ចុប្បន្ន"
                        style={{ marginBottom: 10 }}
                     >
                        <Switch defaultChecked onChange={onNowChange}></Switch>
                     </Form.Item>
                  </Col>
                  <Col span={6}>
                     <Form.Item
                        name="endDate"
                        label="កាលបរិច្ឆេទបញ្ចប់"
                        style={{ marginBottom: 10 }}
                     >
                        <DatePicker
                           disabled={nowOption}
                           style={{ width: "100%" }}
                           onChange={onEndDateChange}
                        />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="letterType"
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="upgradeType"
                        label="ប្រភេទការតម្លើង"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសប្រភេទការតម្លើង",
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="statuteType"
                        label="ប្រភេទលក្ខន្តិកៈ"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសប្រភេទលក្ខន្តិកៈ",
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="framework"
                        label="ក្របខ័ណ្ឌ"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសក្របខ័ណ្ឌ",
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="rank"
                        label="ឋានន្តរស័ក្តិ និងថ្នាក់"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសឋានន្តរស័ក្តិ និងថ្នាក់",
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="level"
                        label="កម្រិតថ្នាក់"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសកម្រិតថ្នាក់",
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
                        name="កំណត់សម្គាល់"
                        label="កំណត់សម្គាល់"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញកំណត់សម្គាល់",
                           },
                        ]}
                     >
                        <Input placeholder="កំណត់សម្គាល់" />
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );
};

export default Rank;
