import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { EditOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";

import { Table, Button, Modal, Form, Col, Row, Input, Select } from "antd";
import api from "@/utils/api";

const { Option } = Select;

const Index = () => {
   const [modalAdd, setModalAdd] = useState(false);

   const toggleModalAdd = () => {
      setModalAdd(!modalAdd);
   };

   const [form] = Form.useForm();

   const [employees, setEmployees] = useState([]);
   useEffect(() => {
      fetchEmployees();
   }, []);
   const fetchEmployees = async (search) => {
      const { data } = await api.get(
         `/api/users${search ? `?nationalityIDNum=${search}` : ""}`
      );
      console.log(data);
      const employees = data.data.map((employee) => {
         for (const key in employee) {
            if (Object.hasOwnProperty.call(employee, key)) {
               if (typeof employee[key] != "string") {
                  delete employee[key];
               }
            }
         }
         return employee;
      });
      setEmployees(employees);
   };
   const router = useRouter();
   const onSearch = async () => {
      const dataInput = form.getFieldsValue(true);
      console.log(dataInput);
      await fetchEmployees(dataInput.search);
      setModalSearch(false);
   };

   const columns = [
      {
         title: "ល.រ",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "អត្តលេខ",
         dataIndex: "nationalityIDNum",
         key: "nationalityIDNum",
      },
      {
         title: "គោត្តនាមនិងនាម",
         dataIndex: "firstName",
         key: "firstName",
      },
      {
         title: "ភេទ",
         dataIndex: "gender",
         key: "gender",
      },
      {
         title: "ថ្ងៃខែឆ្នាំកំណើត",
         dataIndex: "birthDate",
         key: "birthDate",
      },
      {
         title: "ប្រភេទមន្រ្តីរាជការ",
         dataIndex: "employeeType",
         key: "employeeType",
      },
      {
         title: "មុខងារ",
         dataIndex: "position",
         key: "position",
      },
      {
         title: "ស្ថានភាពមន្រ្ដី",
         dataIndex: "employeeStatus",
         key: "employeeStatus",
      },
      {
         title: "ស្ថានភាព",
         dataIndex: "status",
         key: "status",
      },
      {
         title: "សកម្មភាព",
         key: "action",
         render: (text, record) => (
            <Button
               icon={<EditOutlined />}
               onClick={() => {
                  router.push(`/employee/${record.id}`);
               }}
            >
               Edit
            </Button>
         ),
      },
   ];

   return (
      <div>
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <Link href="/employee/1/">
               <a>Go Employee id 1</a>
            </Link>
            <div>
               <Button
                  onClick={toggleModalAdd}
                  icon={<PlusOutlined />}
                  style={{ marginLeft: 10 }}
               >
                  បញ្ចូលមន្រ្ដីរាជការ
               </Button>
            </div>
         </div>
         <div style={{ marginTop: 20 }}>
            <Table columns={columns} dataSource={employees}></Table>
         </div>

         {/* Modal Add User */}
         <Modal
            title="Add User"
            visible={modalAdd}
            onOk={toggleModalAdd}
            onOk={onSearch}
            onCancel={toggleModalAdd}
            footer={null}
         >
            <Form layout="vertical" hideRequiredMark>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="Username"
                        name="username"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Input placeholder="username" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="ID"
                        name="nationalityIDNum"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Input placeholder="អត្តលេខ" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="Department"
                        name="department"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="Department A">Department A</Option>
                           <Option value="Department B">Department B</Option>
                           <Option value="Department C">Department C</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        label="Role"
                        name="role"
                        rules={[
                           {
                              required: true,
                           },
                        ]}
                     >
                        <Select placeholder="ជ្រើសរើស">
                           <Option value="User">User</Option>
                           <Option value="Editor">Editor</Option>
                        </Select>
                     </Form.Item>
                  </Col>
               </Row>
               <Button style={{ marginRight: 8 }} onClick={() => {}}>
                  Add
               </Button>
            </Form>
         </Modal>
      </div>
   );
};

export default Index;
