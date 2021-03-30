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

const Private = () => {
   const [visible, setVisible] = useState(false);
   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();

   const onStartDateChange = (date, dateString) => {
      setStartDate(dateString);
      console.log(dateString);
   };

   const onEndDateChange = (date, dateString) => {
      setEndDate(dateString);
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
         title: "គ្រឹះស្ថាន-អង្គភាព",
         dataIndex: "company",
         key: "company",
      },
      {
         title: "តួនាទី",
         dataIndex: "position",
         key: "position",
      },
      {
         title: "ជំនាញ/បច្ចេកទេស",
         dataIndex: "skill",
         key: "skill",
      },
      {
         title: "ថ្ងៃខែឆ្នាំចូលបម្រើការងារ",
         dataIndex: "startDate",
         key: "startDate",
      },
      {
         title: "ថ្ងៃខែឆ្នាំបញ្ចប់ការងារ",
         dataIndex: "endDate",
         key: "endDate",
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
            បញ្ចូលវិស័យការងារឯកជន
         </Button>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={null}></Table>
         </div>

         {/* Drawer */}
         <Drawer
            title="បញ្ចូលវិស័យការងារឯកជន"
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="គ្រឹះស្ថាន-អង្គភាព"
                        label="គ្រឹះស្ថាន-អង្គភាព"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញគ្រឹះស្ថាន-អង្គភាព",
                           },
                        ]}
                     >
                        <Input placeholder="គ្រឹះស្ថាន-អង្គភាព" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="តួនាទី"
                        label="តួនាទី"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញតួនាទី",
                           },
                        ]}
                     >
                        <Input placeholder="តួនាទី" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ជំនាញ/បច្ចេកទេស"
                        label="ជំនាញ/បច្ចេកទេស"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញជំនាញ/បច្ចេកទេស",
                           },
                        ]}
                     >
                        <Input placeholder="ជំនាញ/បច្ចេកទេស" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="startDate"
                        label="ថ្ងៃ ខែ ឆ្នាំ ចូលបម្រើការងារ"
                        rules={[
                           {
                              required: true,
                              message:
                                 "សូមជ្រើសរើសថ្ងៃ ខែ ឆ្នាំ ចូលបម្រើការងារ",
                           },
                        ]}
                     >
                        <DatePicker
                           style={{ width: "100%" }}
                           onChange={onStartDateChange}
                        />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="startDate"
                        label="ថ្ងៃ ខែ ឆ្នាំ បញ្ចប់ការងារ"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសថ្ងៃ ខែ ឆ្នាំ បញ្ចប់ការងារ",
                           },
                        ]}
                     >
                        <DatePicker
                           style={{ width: "100%" }}
                           onChange={onEndDateChange}
                        />
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </Drawer>
      </div>
   );
};

export default Private;
