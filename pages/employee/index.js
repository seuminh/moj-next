import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { EditOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";

import { Table, Button, Modal, Form, Col, Row, Input } from "antd";
import api from "@/utils/api";

const Index = () => {
  const [modalSearch, setModalSearch] = useState(false);

  const toggleModal = () => {
    setModalSearch(!modalSearch);
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
    // {
    //    title: "ក្របខ័ណ្ឌ",
    //    dataIndex: "refNum",
    //    key: "refNum",
    // },
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
          <Button icon={<SearchOutlined />} onClick={toggleModal}>
            ស្វែងរក
          </Button>
          <Link href="/employee/add">
            <Button icon={<PlusOutlined />} style={{ marginLeft: 10 }}>
              បញ្ចូលមន្រ្ដីរាជការ
            </Button>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <Table columns={columns} dataSource={employees}></Table>
      </div>

      <Modal
        title="Search"
        visible={modalSearch}
        onOk={toggleModal}
        onOk={onSearch}
        onCancel={toggleModal}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onSearch}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                style={{ marginBottom: 10 }}
                label="Search"
                name="search"
              >
                <Input placeholder="search" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Index;
