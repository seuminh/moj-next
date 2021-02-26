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
  Switch,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const position = () => {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [nowOption, setNowOption] = useState(true);
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

  const onStartDateChange = (date, dateString) => {
    //  console.log(date);
    setStartDate(dateString);
    console.log(dateString);
  };

  const onEndDateChange = (date, dateString) => {
    //  console.log(date);
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
                  <Option value="ព្រះរាជក្រឹត្យ">ព្រះរាជក្រឹត្យ</Option>
                  <Option value="អនុក្រឹត្ស">អនុក្រឹត្ស</Option>
                  <Option value="ប្រកាស">ប្រកាស</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
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
                  <Option value="ក្រសួងមុខងារ">ក្រសួងមុខងារ</Option>
                  <Option value="ក្រសួងយុត្តិធម៌">ក្រសួងយុត្តិធម៌</Option>
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
                  <Option value="ថ្នាក់ក្រោមជាតិ">ថ្នាក់ក្រោមជាតិ</Option>
                  <Option value="ថ្នាក់កណ្តាល">ថ្នាក់កណ្តាល</Option>
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
            <Col span={12}>
              <Form.Item
                name="មុខតំណែង"
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
          <Row gutter={24}>
            <Col span={8}>
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
            <Col span={8}>
              <Form.Item
                name="នាយកដ្ឋាន"
                label="នាយកដ្ឋាន"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសនាយកដ្ឋាន",
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
                name="ការិយាល័យ"
                label="ការិយាល័យ"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសការិយាល័យ",
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
            <Col span={8}>
              <Form.Item
                name="កន្លែងធ្វើការរាជធានី៊​/ខេត្ត"
                label="កន្លែងធ្វើការរាជធានី៊​/ខេត្ត"
                rules={[
                  {
                    required: true,
                    message: "សូមជ្រើសរើសកន្លែងធ្វើការរាជធានី៊​/ខេត្ត",
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
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name="កាលបរិច្ឆេទតែងតាំង"
                label="កាលបរិច្ឆេទតែងតាំង"
                rules={[
                  { required: true, message: "សូមជ្រើសរើសកាលបរិច្ឆេទតែងតាំង" },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  onChange={onStartDateChange}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="បច្ចុប្បន្ន">
                <Switch defaultChecked onChange={onNowChange}></Switch>
              </Form.Item>
            </Col>
            <Col span={8} pull={5}>
              <Form.Item
                name="កាលបរិច្ឆេទបញ្ចប់"
                label="កាលបរិច្ឆេទបញ្ចប់"
                rules={[
                  { required: true, message: "សូមជ្រើសរើសកាលបរិច្ឆេទបញ្ចប់" },
                ]}
              >
                <DatePicker
                  disabled={nowOption}
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

export default position;
