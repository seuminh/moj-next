import styles from "../../styles/Edit.module.css";
import { UserOutlined } from "@ant-design/icons";

import { Col, Row, Form, Input, DatePicker, Radio, Select } from "antd";

const status = [
   { label: "រស់", value: "រស់" },
   { label: "ស្លាប់", value: "ស្លាប់" },
];

const SpouseInfo = () => {
   return (
      <div>
         <Form layout="vertical" hideRequiredMark>
            {/* Spouse Info */}
            <div className={styles.spouseInfoContainer}>
               <h1 className={styles.title}>
                  <UserOutlined></UserOutlined>ព័ត៌មានទូទៅ
               </h1>
               <Row gutter={16}>
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="លេខសំបុត្រអាពាហ៍ពិពាហ៍"
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
                  <Col span={12}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="លេខអត្តសញ្ញាណប័ណ្ណ"
                        label="លេខអត្តសញ្ញាណប័ណ្ណ"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញលេខអត្តសញ្ញាណប័ណ្ណ",
                           },
                        ]}
                     >
                        <Input placeholder="លេខអត្តសញ្ញាណប័ណ្ណ" />
                     </Form.Item>
                  </Col>
               </Row>
               <Row gutter={16}>
                  <Col span={6}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="គោត្តនាម និងនាម"
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
                        name="គោត្តនាម និងនាម​ទ្បារតាំង"
                        label="គោត្តនាម និងនាម​ទ្បារតាំង"
                        rules={[
                           {
                              required: true,
                              message: "សូមបំពេញគោត្តនាម និងនាម​ទ្បារតាំង",
                           },
                        ]}
                     >
                        <Input placeholder="គោត្តនាម និងនាម​ទ្បារតាំង" />
                     </Form.Item>
                  </Col>
                  <Col span={6}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ស្ថានភាព"
                        label="ស្ថានភាព"
                        rules={[
                           {
                              required: true,
                              message: "សូមជ្រើសរើសស្ថានភាព",
                           },
                        ]}
                     >
                        <Radio.Group options={status}></Radio.Group>
                     </Form.Item>
                  </Col>
                  <Col span={6}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="មុខរបរ"
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
                  <Col span={12}>
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
                  <Col span={6}>
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
                  <Col span={6}>
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
                  <Col span={24}>
                     <Form.Item
                        style={{ marginBottom: 10 }}
                        name="ទីកន្លែងបំពេញការងារ"
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
               </Row>
            </div>

            {/* Birth Place */}
            <div className={styles.birthPlaceContainer}>
               <h1 className={styles.title}>
                  <UserOutlined></UserOutlined>ទីកន្លែងកំណើត
               </h1>
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

            {/* Address */}
            <div className={styles.addressContainer}>
               <h1 className={styles.title}>
                  <UserOutlined></UserOutlined>ទីលំនៅបច្ចុប្បន្ន
               </h1>
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
                        name="លេខទូរស័ព្ទ"
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
            </div>
         </Form>
      </div>
   );
};

export default SpouseInfo;
