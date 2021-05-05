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

const Spouse = ({ userData }) => {
  const birthPlace = [];
  for (const key in userData.partnerInfo.birthPlace) {
    if (Object.hasOwnProperty.call(userData.partnerInfo.birthPlace, key)) {
      birthPlace.push(userData.partnerInfo.birthPlace[key]);
    }
  }
  const currentResidence = [];
  for (const key in userData.partnerInfo.currentResidence) {
    if (
      Object.hasOwnProperty.call(userData.partnerInfo.currentResidence, key)
    ) {
      currentResidence.push(userData.partnerInfo.currentResidence[key]);
    }
  }
  userData.partnerInfo.birthPlace = birthPlace.join(", ");
  userData.partnerInfo.currentResidence = currentResidence.join(", ");

  return (
    <div>
      <Form
        layout="vertical"
        hideRequiredMark
        initialValues={userData?.partnerInfo}
      >
        <h1 style={{ marginBottom: 20 }}>
          <UserOutlined style={{ fontSize: 23, marginRight: 5 }} />
          ព័ត៌មានសហព័ទ្ធ
        </h1>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="លេខសំបុត្រអាពាហ៍ពិពាហ៍"
              name="weddingCertificateNum"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញលេខសំបុត្រអាពាហ៍ពិពាហ៍",
                },
              ]}
            >
              <Input disabled placeholder="លេខសំបុត្រអាពាហ៍ពិពាហ៍" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ"
              name="nationalityIDNum"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញលេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ",
                },
              ]}
            >
              <Input disabled placeholder="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="លេខទូរស័ព្ទ"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញលេខទូរស័ព្ទ",
                },
              ]}
            >
              <Input disabled placeholder="លេខទូរស័ព្ទ" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="គោត្តនាម និងនាម"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញគោត្តនាម និងនាម",
                },
              ]}
            >
              <Input disabled placeholder="គោត្តនាម និងនាម" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="គោត្តនាម និងនាមឡាតាំង"
              name="fullNameLatin"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញគោត្តនាម និងនាមឡាតាំង",
                },
              ]}
            >
              <Input disabled placeholder="គោត្តនាម និងនាមឡាតាំង" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="ថ្ងៃខែឆ្នាំកំណើត"
              name="birthDate"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញថ្ងៃខែឆ្នាំកំណើត",
                },
              ]}
            >
              <Input disabled placeholder="ថ្ងៃខែឆ្នាំកំណើត" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="មុខរបរ"
              name="occupation"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញមុខរបរ",
                },
              ]}
            >
              <Input disabled placeholder="មុខរបរ" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="ទីកន្លែងបំពេញការងារ"
              name="workPlace"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញទីកន្លែងបំពេញការងារ",
                },
              ]}
            >
              <Input disabled placeholder="ទីកន្លែងបំពេញការងារ" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="ជនជាតិ"
              name="nationality"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញជនជាតិ",
                },
              ]}
            >
              <Input disabled placeholder="ជនជាតិ" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="សញ្ជាតិ"
              name="ethnicity"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញសញ្ជាតិ",
                },
              ]}
            >
              <Input disabled placeholder="សញ្ជាតិ" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              label="ស្ថានភាព"
              name="statusLive"
              rules={[
                {
                  required: true,
                  message: "សូមជ្រើសរើសស្ថានភាព",
                },
              ]}
            >
              <Radio.Group disabled options={statusOptions}></Radio.Group>
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
              name="birthPlace"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញទីកន្លែងកំណើតរបស់សហព័ន្ធ",
                },
              ]}
            >
              <Input disabled placeholder="ទីកន្លែងកំណើតរបស់សហព័ន្ធ" />
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
              name="currentResidence"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញអាសយដ្ឋានរបស់សហព័ន្ធ",
                },
              ]}
            >
              <Input disabled placeholder="អាសយដ្ឋានរបស់សហព័ន្ធ" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Spouse;
