import styles from "../../styles/Edit.module.css";
import Image from "next/image";
import { useState } from "react";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";

import { Col, Row, Form, Input, DatePicker, Radio, Select, Button } from "antd";

import { SaveOutlined } from "@ant-design/icons";

const genderOptions = [
   { label: "ប្រុស", value: "ប្រុស" },
   { label: "ស្រី", value: "ស្រី" },
];

const { Option } = Select;

const SelfInfo = () => {
   const [form] = Form.useForm();
   const [selfInfo, setSelfInfo] = useState(null);

   const onSave = () => {
      const dataInput = form.getFieldsValue(true);
      form.validateFields();
   };

   return (
      <div>
         <Form layout="vertical" hideRequiredMark form={form}>
            {/* General Info  */}
            <div className={styles.generalInfoContainer}>
               <h1 className={styles.title}>
                  <UserOutlined></UserOutlined>ព័ត៌មានទូទៅ
               </h1>
               <div style={{ display: "flex", marginTop: 15 }}>
                  <div className={styles.imgContainer}>
                     <img src="/noImg.jpg" alt="" width="160" height="180" />
                  </div>
                  <div className={styles.generalInfo}>
                     <Row gutter={16}>
                        <Col span={12}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="លេខសំបុត្រកំណើត"
                              label="លេខសំបុត្រកំណើត"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញលេខសំបុត្រកំណើត",
                                 },
                              ]}
                           >
                              <Input placeholder="លេខសំបុត្រកំណើត" />
                           </Form.Item>
                        </Col>
                        <Col span={12}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ"
                              label="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ"
                              rules={[
                                 {
                                    required: true,
                                    message:
                                       "សូមបំពេញលេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ",
                                 },
                              ]}
                           >
                              <Input placeholder="លេខអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ" />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row gutter={16}>
                        <Col span={12}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="លេខលិខិតឆ្លងដែន"
                              label="លេខលិខិតឆ្លងដែន"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញលេខលិខិតឆ្លងដែន",
                                 },
                              ]}
                           >
                              <Input placeholder="លេខលិខិតឆ្លងដែន" />
                           </Form.Item>
                        </Col>
                        <Col span={12}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="ផ្សេងៗ"
                              label="ផ្សេងៗ"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញផ្សេងៗ",
                                 },
                              ]}
                           >
                              <Input placeholder="ផ្សេងៗ" />
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row gutter={16}>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="គោត្តនាម"
                              label="គោត្តនាម"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញគោត្តនាម",
                                 },
                              ]}
                           >
                              <Input placeholder="គោត្តនាម" />
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="នាម"
                              label="នាម"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញនាម",
                                 },
                              ]}
                           >
                              <Input placeholder="នាម" />
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="សញ្ជាតិ"
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
                     </Row>
                     <Row gutter={16}>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="គោត្តនាមឡាតាំង"
                              label="គោត្តនាមឡាតាំង"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញគោត្តនាមឡាតាំង",
                                 },
                              ]}
                           >
                              <Input placeholder="គោត្តនាមឡាតាំង" />
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="នាមឡាតាំង"
                              label="នាមឡាតាំង"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញនាមឡាតាំង",
                                 },
                              ]}
                           >
                              <Input placeholder="នាមឡាតាំង" />
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="ជនជាតិ"
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
                     </Row>
                     <Row gutter={16}>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="ភេទ"
                              label="ភេទ"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមជ្រើសរើសភេទ",
                                 },
                              ]}
                           >
                              <Radio.Group
                                 options={genderOptions}
                              ></Radio.Group>
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="ថ្ងៃខែឆ្នាំកំណើត"
                              label="ថ្ងៃខែឆ្នាំកំណើត"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញថ្ងៃខែឆ្នាំកំណើត",
                                 },
                              ]}
                           >
                              <DatePicker
                                 placeholder="ថ្ងៃខែឆ្នាំកំណើត"
                                 style={{ width: "100%" }}
                                 //  onChange={onStartDateChange}
                              />
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="ប្រភេទឈាម"
                              label="ប្រភេទឈាម"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមជ្រើសរើសប្រភេទឈាម",
                                 },
                              ]}
                           >
                              <Select placeholder="ជ្រើសរើស">
                                 <Option value="O-">O-</Option>
                                 <Option value="O+">O+</Option>
                                 <Option value="A-">A-</Option>
                                 <Option value="A+">A+</Option>
                                 <Option value="B-">B-</Option>
                                 <Option value="B+">B+</Option>
                                 <Option value="AB-">AB-</Option>
                                 <Option value="AB+">AB+</Option>
                              </Select>
                           </Form.Item>
                        </Col>
                     </Row>
                     <Row gutter={16}>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="ស្ថានភាពគ្រួសារ"
                              label="ស្ថានភាពគ្រួសារ"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមជ្រើសរើសស្ថានភាពគ្រួសារ",
                                 },
                              ]}
                           >
                              <Select placeholder="ជ្រើសរើស">
                                 <Option value="នៅលីវ">នៅលីវ</Option>
                                 <Option value="រៀបការ">រៀបការ</Option>
                                 <Option value="ពោះម៉ាយ">ពោះម៉ាយ</Option>
                                 <Option value="មេម៉ាយ">មេម៉ាយ</Option>
                              </Select>
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="កាយសម្បទា"
                              label="កាយសម្បទា"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមជ្រើសរើសកាយសម្បទា",
                                 },
                              ]}
                           >
                              <Select placeholder="ជ្រើសរើស">
                                 <Option value="គ្រប់គ្រាន់">
                                    គ្រប់គ្រាន់
                                 </Option>
                                 <Option value="ពិការភាព">ពិការភាព</Option>
                              </Select>
                           </Form.Item>
                        </Col>
                        <Col span={8}>
                           <Form.Item
                              style={{ marginBottom: 10 }}
                              name="បញ្ជាក់ពិការភាព"
                              label="បញ្ជាក់ពិការភាព"
                              rules={[
                                 {
                                    required: true,
                                    message: "សូមបំពេញបញ្ជាក់ពិការភាព",
                                 },
                              ]}
                           >
                              <Input placeholder="កំណត់សំគាល់" />
                           </Form.Item>
                        </Col>
                     </Row>
                  </div>
               </div>
            </div>

            {/* Birth Place */}
            <div className={styles.birthPlaceContainer}>
               <h1 className={styles.title}>
                  <UserOutlined></UserOutlined>ទីកន្លែងកំណើត
               </h1>
               <div style={{ marginTop: 15 }}>
                  <Row gutter={16}>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="រាជធានី/ខេត្ត"
                           label="រាជធានី/ខេត្ត"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញរាជធានី/ខេត្ត",
                              },
                           ]}
                        >
                           <Input placeholder="រាជធានី/ខេត្ត" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ស្រុក/ខណ្ឌ"
                           label="ស្រុក/ខណ្ឌ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញស្រុក/ខណ្ឌ",
                              },
                           ]}
                        >
                           <Input placeholder="ស្រុក/ខណ្ឌ" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ឃុំ/សង្កាត់"
                           label="ឃុំ/សង្កាត់"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញឃុំ/សង្កាត់",
                              },
                           ]}
                        >
                           <Input placeholder="ឃុំ/សង្កាត់" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ភូមិ"
                           label="ភូមិ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញភូមិ",
                              },
                           ]}
                        >
                           <Input placeholder="ភូមិ" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={24}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ទីកន្លែងកំណើតផ្សេងៗ"
                           label="ទីកន្លែងកំណើតផ្សេងៗ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញទីកន្លែងកំណើតផ្សេងៗ",
                              },
                           ]}
                        >
                           <Input placeholder="ទីកន្លែងកំណើតផ្សេងៗ" />
                        </Form.Item>
                     </Col>
                  </Row>
               </div>
            </div>

            {/* Address */}
            <div className={styles.addressContainer}>
               <h1 className={styles.title}>
                  <UserOutlined></UserOutlined>ទីលំនៅបច្ចុប្បន្ន
               </h1>
               <div style={{ marginTop: 15 }}>
                  <Row gutter={16}>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="រាជធានី/ខេត្ត"
                           label="រាជធានី/ខេត្ត"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញរាជធានី/ខេត្ត",
                              },
                           ]}
                        >
                           <Input placeholder="រាជធានី/ខេត្ត" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ស្រុក/ខណ្ឌ"
                           label="ស្រុក/ខណ្ឌ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញស្រុក/ខណ្ឌ",
                              },
                           ]}
                        >
                           <Input placeholder="ស្រុក/ខណ្ឌ" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ឃុំ/សង្កាត់"
                           label="ឃុំ/សង្កាត់"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញឃុំ/សង្កាត់",
                              },
                           ]}
                        >
                           <Input placeholder="ឃុំ/សង្កាត់" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ភូមិ"
                           label="ភូមិ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញភូមិ",
                              },
                           ]}
                        >
                           <Input placeholder="ភូមិ" />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row gutter={16}>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ផ្ទះលេខ"
                           label="ផ្ទះលេខ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញផ្ទះលេខ",
                              },
                           ]}
                        >
                           <Input placeholder="ផ្ទះលេខ" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ផ្លូវលេខ"
                           label="ផ្លូវលេខ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញផ្លូវលេខ",
                              },
                           ]}
                        >
                           <Input placeholder="ផ្លូវលេខ" />
                        </Form.Item>
                     </Col>
                     <Col span={12}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ទីលំនៅបច្ចុប្បន្នផ្សេងៗ"
                           label="ទីលំនៅបច្ចុប្បន្នផ្សេងៗ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញទីលំនៅបច្ចុប្បន្នផ្សេងៗ",
                              },
                           ]}
                        >
                           <Input placeholder="ទីលំនៅបច្ចុប្បន្នផ្សេងៗ" />
                        </Form.Item>
                     </Col>
                  </Row>
               </div>
            </div>

            {/* Contact */}
            <div className={styles.contactContainer}>
               <h1 className={styles.title}>
                  <PhoneOutlined></PhoneOutlined>ទំនាក់ទំនង
               </h1>
               <div style={{ marginTop: 15 }}>
                  <Row gutter={16}>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="លេខទូរស័ព្ទទី១"
                           label="លេខទូរស័ព្ទទី១"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញលេខទូរស័ព្ទទី១",
                              },
                           ]}
                        >
                           <Input placeholder="លេខទូរស័ព្ទទី១" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="លេខទូរស័ព្ទទី២"
                           label="លេខទូរស័ព្ទទី២"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញលេខទូរស័ព្ទទី២",
                              },
                           ]}
                        >
                           <Input placeholder="លេខទូរស័ព្ទទី២" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="អ៊ីម៉ែល"
                           label="អ៊ីម៉ែល"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញអ៊ីម៉ែល",
                              },
                           ]}
                        >
                           <Input placeholder="អ៊ីម៉ែល" />
                        </Form.Item>
                     </Col>
                     <Col span={6}>
                        <Form.Item
                           style={{ marginBottom: 10 }}
                           name="ព័ត៌មានផ្សេងៗ"
                           label="ព័ត៌មានផ្សេងៗ"
                           rules={[
                              {
                                 required: true,
                                 message: "សូមបំពេញព័ត៌មានផ្សេងៗ",
                              },
                           ]}
                        >
                           <Input placeholder="ព័ត៌មានផ្សេងៗ" />
                        </Form.Item>
                     </Col>
                  </Row>
               </div>
            </div>
         </Form>
         <div className={styles.btnContainer}>
            <Button icon={<SaveOutlined />} onClick={onSave}>
               រក្សាទុក
            </Button>
         </div>
      </div>
   );
};

export default SelfInfo;
