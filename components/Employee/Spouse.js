import React, { useState, useEffect } from "react";
import {
   Drawer,
   Form,
   Button,
   Menu,
   Col,
   Row,
   Input,
   Select,
   DatePicker,
   Dropdown,
   Table,
   Tag,
   Space,
   Switch,
   Radio,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Option } = Select;

const statusOptions = [
   { label: "រស់", value: "រស់" },
   { label: "ស្លាប់", value: "ស្លាប់" },
];

const Spouse = () => {
   const [spouseForm] = Form.useForm();
   return (
      <div>
         <Form layout="vertical" hideRequiredMark form={spouseForm}>
            <h1 style={{ marginBottom: 20 }}>
               <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
               ព័ត៌មានសហព័ទ្ធ
            </h1>
            <Row gutter={16}>
               <Col span={12}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="លេខសំបុត្រអាពាហ៍ពិពាហ៍"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញលេខសំបុត្រអាពាហ៍ពិពាហ៍",
                        },
                     ]}
                  >
                     <Input placeholder="លេខសំបុត្រអាពាហ៍ពិពាហ៍" />
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
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
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="លេខទូរស័ព្ទ"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញលេខទូរស័ព្ទ",
                        },
                     ]}
                  >
                     <Input placeholder="លេខទូរស័ព្ទ" />
                  </Form.Item>
               </Col>
            </Row>
            <Row gutter={16}>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
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
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="គោត្តនាម និងនាមឡាតាំង"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញគោត្តនាម និងនាមឡាតាំង",
                        },
                     ]}
                  >
                     <Input placeholder="គោត្តនាម និងនាមឡាតាំង" />
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="ថ្ងៃខែឆ្នាំកំណើត"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញថ្ងៃខែឆ្នាំកំណើត",
                        },
                     ]}
                  >
                     <Input placeholder="ថ្ងៃខែឆ្នាំកំណើត" />
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
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
            </Row>
            <Row gutter={16}>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="ទីកន្លែងបំពេញការងារ"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញទីកន្លែងបំពេញការងារ",
                        },
                     ]}
                  >
                     <Input placeholder="ទីកន្លែងបំពេញការងារ" />
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="ជនជាតិ"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញជនជាតិ",
                        },
                     ]}
                  >
                     <Input placeholder="ជនជាតិ" />
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="សញ្ជាតិ"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញសញ្ជាតិ",
                        },
                     ]}
                  >
                     <Input placeholder="សញ្ជាតិ" />
                  </Form.Item>
               </Col>
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
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
            <h1 style={{ marginBottom: 10, marginTop: 20 }}>
               <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
               ទីកន្លែងកំណើត
            </h1>
            <Row gutter={16}>
               <Col span={24}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="ទីកន្លែងកំណើតរបស់សហព័ន្ធ"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញទីកន្លែងកំណើតរបស់សហព័ន្ធ",
                        },
                     ]}
                  >
                     <Input placeholder="ទីកន្លែងកំណើតរបស់សហព័ន្ធ" />
                  </Form.Item>
               </Col>
            </Row>
            <h1 style={{ marginBottom: 10, marginTop: 20 }}>
               <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
               អាសយដ្ឋានបច្ចុប្បន្ន
            </h1>
            <Row gutter={16}>
               <Col span={24}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="អាសយដ្ឋានរបស់សហព័ន្ធ"
                     rules={[
                        {
                           required: true,
                           message: "សូមបំពេញអាសយដ្ឋានរបស់សហព័ន្ធ",
                        },
                     ]}
                  >
                     <Input placeholder="អាសយដ្ឋានរបស់សហព័ន្ធ" />
                  </Form.Item>
               </Col>
            </Row>
         </Form>
      </div>
   );
};

export default Spouse;
