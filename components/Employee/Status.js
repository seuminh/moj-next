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

const Status = ({ statusOfficer, ministryList , letterTypes, rankList}) => {
  const [visible, setVisible] = useState(false);
  const [nowOption, setNowOption] = useState(true);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [employmentDate, setEmploymentDate] = useState();
  const [officialDate, setOfficialDate] = useState();

  const onStartDateChange = (date, dateString) => {
    setStartDate(dateString);
  };

  const onEndDateChange = (date, dateString) => {
    setEndDate(dateString);
  };

  const onEmploymentDateChange = (date, dateString) => {
    setEmploymentDate(dateString);
  };

  const onOfficialDateChange = (date, dateString) => {
    setOfficialDate(dateString);
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
      title: "ប្រភេទលិខិត",
      dataIndex: "letterType",
      key: "letterType",
    },
    {
      title: "ប្រភេទមន្រ្ដី",
      dataIndex: "employeeType",
      key: "employeeType",
    },
    {
      title: "ស្ថានភាព",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "ក្រសួង-ស្ថាប័ន",
      dataIndex: "ministry",
      key: "ministry",
    },
    {
      title: "ថ្ងៃខែឆ្នាំចុះហត្ថលេខា",
      dataIndex: "signDate",
      key: "signDate",
    },
    {
      title: "តួនាទី",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "ផ្សេងៗ",
      key: "action",
      render: (text, record) => (
        <Dropdown overlay={() => actionMenu(record)}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            ផ្សេងៗ <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              name="អត្តលេខមន្រ្ដីរាជការ"
              label="អត្តលេខមន្រ្ដីរាជការ"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញអត្តលេខមន្រ្ដីរាជការ",
                },
              ]}
            >
              <Input placeholder="អត្តលេខមន្រ្ដីរាជការ" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              name="ថ្ងៃខែឆ្នាំចូលបម្រើការងារ"
              label="ថ្ងៃខែឆ្នាំចូលបម្រើការងារ"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញថ្ងៃខែឆ្នាំចូលបម្រើការងារ",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                onChange={onEmploymentDateChange}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              name="កាលបរិច្ឆេទតាំងស៊ប់"
              label="កាលបរិច្ឆេទតាំងស៊ប់"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញកាលបរិច្ឆេទតាំងស៊ប់",
                },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                onChange={onOfficialDateChange}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              style={{ marginBottom: 10 }}
              name="កំណត់សំគាល់ផ្សេងៗ"
              label="កំណត់សំគាល់ផ្សេងៗ"
              rules={[
                {
                  required: true,
                  message: "សូមបំពេញកំណត់សំគាល់ផ្សេងៗ",
                },
              ]}
            >
              <Input placeholder="កំណត់សំគាល់ផ្សេងៗ" />
            </Form.Item>
          </Col>
          <Button
            type="primary"
            onClick={() => {}}
            style={{ margin: "10px 8px 10px auto" }}
          >
            រក្សាទុក
          </Button>
        </Row>
      </Form>

      <div>
        <Button icon={<PlusOutlined />} onClick={showDrawer}>
          បញ្ចូលស្ថានភាពមន្រ្ដី
        </Button>
        <div style={{ marginTop: 20 }}>
          <Table columns={columns} dataSource={null}></Table>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        title="បញ្ចូលបំរែបំរួលស្ថានភាពមន្ត្រី"
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
              <Form.Item
                style={{ marginBottom: 10 }}
                name="refNum"
                label="ប្រភេទលិខិត"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសប្រភេទលិខិត",
                  },
                ]}
              >
                <Select placeholder="ជ្រើសរើស">
                  {letterTypes.map((v) => {
                    return <Option value={v}>{v}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="employeeType"
                label="ប្រភេទមន្រ្ដី"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសប្រភេទមន្រ្ដី",
                  },
                ]}
              >
                <Select placeholder="ជ្រើសរើស">
                  {rankList.map((v) => {
                    return <Option value={v}>{v} </Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="status"
                label="ស្ថានភាព"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសស្ថានភាព",
                  },
                ]}
              >
                <Select placeholder="ជ្រើសរើស">
                  {statusOfficer.map((v) => {
                    return <Option value={v}>{v}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="ministry"
                label="ក្រសួង-ស្ថាប័ន"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសក្រសួង-ស្ថាប័ន",
                  },
                ]}
              >
                <Select placeholder="ជ្រើសរើស">
                  {ministryList.map((v) => {
                    return <Option value={v}>{v}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="position"
                label="មុខតំណែង"
                rules={[
                  {
                    required: true,
                    message: "សូមបំពេញមុខតំណែង",
                  },
                ]}
              >
                <Input placeholder="មុខតំណែង" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={10}>
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
            <Col span={4}>
              <Form.Item label="បច្ចុប្បន្ន" style={{ marginBottom: 10 }}>
                <Switch defaultChecked onChange={onNowChange}></Switch>
              </Form.Item>
            </Col>
            <Col span={10}>
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

export default Status;
