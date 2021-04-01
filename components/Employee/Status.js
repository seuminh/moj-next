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

const Status = () => {
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
                           <Option value="ព្រះរាជក្រឹត្យ">
                              ព្រះរាជក្រឹត្យ
                           </Option>
                           <Option value="ព្រះរាជក្រម">ព្រះរាជក្រម</Option>
                           <Option value="ដីការ">ដីការ</Option>
                           <Option value="លិខិតឧទ្ទេសនាម">
                              លិខិតឧទ្ទេសនាម
                           </Option>
                           <Option value="លិខិតបង្គាប់ការ">
                              លិខិតបង្គាប់ការ
                           </Option>
                           <Option value="អនុក្រឹត្យ">អនុក្រឹត្យ</Option>
                           <Option value="ប្រកាស">ប្រកាស</Option>
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
                           <Option value="មន្ត្រីពេញសិទ្ធ/មន្រ្តីក្របខណ្ឌ">
                              មន្ត្រីពេញសិទ្ធ/មន្រ្តីក្របខណ្ឌ
                           </Option>
                           <Option value="មន្ត្រីកិច្ចសន្យា">
                              មន្ត្រីកិច្ចសន្យា
                           </Option>
                           <Option value="មន្រ្តីកម្មសិក្សា">
                              មន្រ្តីកម្មសិក្សា
                           </Option>
                           <Option value="គ្មានក្របខណ្ឌ">គ្មានក្របខណ្ឌ</Option>
                           <Option value="និវត្តន៍">និវត្តន៍</Option>
                           <Option value="ទីប្រឹក្សាបច្ចេកទេស">
                              ទីប្រឹក្សាបច្ចេកទេស
                           </Option>
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
                           <Option value="ថ្នាក់ដឹកនាំ">ថ្នាក់ដឹកនាំ</Option>
                           <Option value="មន្ត្រីសកម្ម">មន្ត្រីសកម្ម</Option>
                           <Option value="មន្ត្រីផ្ទេរចេញ">
                              មន្ត្រីផ្ទេរចេញ
                           </Option>
                           <Option value="មន្ត្រីផ្ទេរចូល">
                              មន្ត្រីផ្ទេរចូល
                           </Option>
                           <Option value="មន្ត្រីស្ថិតនៅក្នុងភាពទំនេរគ្មានបៀរវត្ស">
                              មន្ត្រីស្ថិតនៅក្នុងភាពទំនេរគ្មានបៀរវត្ស
                           </Option>
                           <Option value="មន្ត្រីស្ថិតនៅក្រៅក្របខ័ណ្ឌដើម">
                              មន្ត្រីស្ថិតនៅក្រៅក្របខ័ណ្ឌដើម
                           </Option>
                           <Option value="មន្ត្រីជាប់បេសកកម្មក្នុងប្រទេស">
                              មន្ត្រីជាប់បេសកកម្មក្នុងប្រទេស
                           </Option>
                           <Option value="មន្ត្រីជាប់បេសកកម្មក្រៅប្រទេស">
                              មន្ត្រីជាប់បេសកកម្មក្រៅប្រទេស
                           </Option>
                           <Option value="មន្ត្រីជាប់សិក្សាក្នុងប្រទេស">
                              មន្ត្រីជាប់សិក្សាក្នុងប្រទេស
                           </Option>
                           <Option value="មន្ត្រីជាប់សិក្សាក្រៅប្រទេស">
                              មន្ត្រីជាប់សិក្សាក្រៅប្រទេស
                           </Option>
                           <Option value="មន្ត្រីស្តិតក្នុងរយៈពេលកម្មសិក្សា">
                              មន្ត្រីស្តិតក្នុងរយៈពេលកម្មសិក្សា
                           </Option>
                           <Option value="មន្ត្រីបាត់បង់សត្ថភាពពលកម្ម">
                              មន្ត្រីបាត់បង់សត្ថភាពពលកម្ម
                           </Option>
                           <Option value="មន្ត្រីមានជំងឹរាំរ៉ៃ">
                              មន្ត្រីមានជំងឹរាំរ៉ៃ
                           </Option>
                           <Option value="មន្ត្រីដល់អាយុចូលនិវត្តន្ត៏និងចូលនិវត្តន៏">
                              មន្ត្រីដល់អាយុចូលនិវត្តន្ត៏និងចូលនិវត្តន៏
                           </Option>
                           <Option value="មន្ត្រីស្ថាប់">មន្ត្រីស្ថាប់</Option>
                           <Option value="មន្ត្រីជាប់ទណ្ឌកម្មដោយសាលក្រមឬសាលដីកា">
                              មន្ត្រីជាប់ទណ្ឌកម្មដោយសាលក្រមឬសាលដីកា
                           </Option>
                           <Option value="មន្ត្រីបោះបង់ចោលការងារ">
                              មន្ត្រីបោះបង់ចោលការងារ
                           </Option>
                           <Option value="មន្ត្រីសុំលាឈប់ពីការងារ">
                              មន្ត្រីសុំលាឈប់ពីការងារ
                           </Option>
                           <Option value="មន្ត្រីត្រូវបានលប់ឈ្មោះ">
                              មន្ត្រីត្រូវបានលប់ឈ្មោះ
                           </Option>
                           <Option value="មន្ត្រីស៊ីឈ្មោះគេ">
                              មន្ត្រីស៊ីឈ្មោះគេ
                           </Option>
                           <Option value="មន្ត្រីក្រោយពីជំរឿន">
                              មន្ត្រីក្រោយពីជំរឿន
                           </Option>
                           <Option value="មន្ត្រីសកម្មក្រោយពីជំរឿន">
                              មន្ត្រីសកម្មក្រោយពីជំរឿន
                           </Option>
                           <Option value="មន្ត្រីទីប្រឹក្សា">
                              មន្ត្រីទីប្រឹក្សា
                           </Option>
                           <Option value="មន្ត្រីជំនួយការ">
                              មន្ត្រីជំនួយការ
                           </Option>
                           <Option value="មន្ត្រីបំរើការងារពីរកន្លែង">
                              មន្ត្រីបំរើការងារពីរកន្លែង
                           </Option>
                           <Option value="មន្ត្រីត្រូវបានប្តូរអត្តលេខ">
                              មន្ត្រីត្រូវបានប្តូរអត្តលេខ
                           </Option>
                           <Option value="អត្តលេខលប់">អត្តលេខលប់</Option>
                           <Option value="បម្រុង">បម្រុង</Option>
                           <Option value="និរាករ">និរាករ</Option>
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
                           <Option value="ក្រសួងកសិកម្ម រុក្ខាប្រមាញ់ និងនេសាទ">
                              ក្រសួងកសិកម្ម រុក្ខាប្រមាញ់ និងនេសាទ
                           </Option>
                           <Option value="ទំនាក់ទំនងជាមួយរដ្ឋសភា-ព្រឹទ្ធសភា និង អធិការកិច្ច">
                              ទំនាក់ទំនងជាមួយរដ្ឋសភា-ព្រឹទ្ធសភា និង អធិការកិច្ច
                           </Option>
                           <Option value="អាកាសចរស៊ីវិល">អាកាសចរស៊ីវិល</Option>
                           <Option value="ក្រសួងមុខងារសាធារណៈ">
                              ក្រសួងមុខងារសាធារណៈ
                           </Option>
                           <Option value="ក្រសួងពាណិជ្ជកម្ម">
                              ក្រសួងពាណិជ្ជកម្ម
                           </Option>
                           <Option value="ទីស្តីការគណៈរដ្ឋមន្ត្រី">
                              ទីស្តីការគណៈរដ្ឋមន្ត្រី
                           </Option>
                           <Option value="ក្រសួងធម្មការ និងសាសនា">
                              ក្រសួងធម្មការ និងសាសនា
                           </Option>
                           <Option value="ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ">
                              ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ
                           </Option>
                           <Option value="ក្រសួងសេដ្ឋកិច្ច និង ហិរញ្ញវត្ថុ">
                              ក្រសួងសេដ្ឋកិច្ច និង ហិរញ្ញវត្ថុ
                           </Option>
                           <Option value="ក្រសួងអប់រំ យុវជន និង កីទ្បា">
                              ក្រសួងអប់រំ យុវជន និង កីទ្បា
                           </Option>
                           <Option value="ក្រសួងក្រសួងបរិស្ថាន">
                              ក្រសួងក្រសួងបរិស្ថាន
                           </Option>
                           <Option value="ការបរទេស និង សហប្រតិបត្តិការអន្តរជាតិ">
                              ការបរទេស និង សហប្រតិបត្តិការអន្តរជាតិ
                           </Option>
                           <Option value="ក្រសួងសុខាភិបាល">
                              ក្រសួងសុខាភិបាល
                           </Option>
                           <Option value="ឧស្សាហកម្ម និងសិប្បកម្ម">
                              ឧស្សាហកម្ម និងសិប្បកម្ម
                           </Option>
                           <Option value="ក្រសួងព័ត៌មាន">ក្រសួងព័ត៌មាន</Option>
                           <Option value="ក្រសួងមហាផ្ទៃ">ក្រសួងមហាផ្ទៃ</Option>
                           <Option value="ក្រសួងយុត្តិធម៌">
                              ក្រសួងយុត្តិធម៌
                           </Option>
                           <Option value="ក្រសួងការពារជាតិ">
                              ក្រសួងការពារជាតិ
                           </Option>
                           <Option value="ក្រសួងផែនការ">ក្រសួងផែនការ</Option>
                           <Option value="ក្រសួងក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍">
                              ក្រសួងក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍
                           </Option>
                           <Option value="ក្រសួងសាធារណការ និង ដឹកជញ្ជូន">
                              ក្រសួងសាធារណការ និង ដឹកជញ្ជូន
                           </Option>
                           <Option value="ក្រសួងព្រះបរមរាជវាំង">
                              ក្រសួងព្រះបរមរាជវាំង
                           </Option>
                           <Option value="ក្រសួងអភិវឌ្ឍន៍ជនបទ">
                              ក្រសួងអភិវឌ្ឍន៍ជនបទ
                           </Option>
                           <Option value="សង្គមកិច្ច អតីតយុទ្ធជន និងយុវនីតិសម្បទា">
                              សង្គមកិច្ច អតីតយុទ្ធជន និងយុវនីតិសម្បទា
                           </Option>
                           <Option value="ក្រសួងទេសចរណ៍">ក្រសួងទេសចរណ៍</Option>
                           <Option value="ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និង សំណង់">
                              ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និង សំណង់
                           </Option>
                           <Option value="ក្រសួងធនធានទឹក និង ឧតុនិយម">
                              ក្រសួងធនធានទឹក និង ឧតុនិយម
                           </Option>
                           <Option value="ក្រសួងកិច្ចការនារី">
                              ក្រសួងកិច្ចការនារី
                           </Option>
                           <Option value="តុលាការកំពូល">តុលាការកំពូល</Option>
                           <Option value="សាលាមធ្យមសិក្សា សុខាភិបាលភូមិភាគ">
                              សាលាមធ្យមសិក្សា សុខាភិបាលភូមិភាគ
                           </Option>
                           <Option value="ការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ">
                              ការងារ និងបណ្តុះបណ្តាលវិជ្ជាជីវៈ
                           </Option>
                           <Option value="អង្គភាពប្រឆាំងអំពើពុករលួយ">
                              អង្គភាពប្រឆាំងអំពើពុករលួយ
                           </Option>
                           <Option value="ក្រសួងរ៉ែ និងថាមពល">
                              ក្រសួងរ៉ែ និងថាមពល
                           </Option>
                           <Option value="សាលាឧទ្ធរណ៍">សាលាឧទ្ធរណ៍</Option>
                           <Option value="រដ្ឋលេខាធិការដ្ឋានមុខងារសាធារណៈ">
                              រដ្ឋលេខាធិការដ្ឋានមុខងារសាធារណៈ
                           </Option>
                           <Option value="ធនាគាជាតិនៃកម្ពុជា">
                              ធនាគាជាតិនៃកម្ពុជា
                           </Option>
                           <Option value="ព្រឹទ្ធសភាជាតិ">
                              ព្រឹទ្ធសភាជាតិ
                           </Option>
                           <Option value="រដ្ឋសភាជាតិ">រដ្ឋសភាជាតិ</Option>
                           <Option value="គណៈកម្មាធិការជាតិរៀបចំការបោះឆ្នោត (គ.ជ.ប)">
                              គណៈកម្មាធិការជាតិរៀបចំការបោះឆ្នោត (គ.ជ.ប)
                           </Option>
                           <Option value="អង្គជំនុំជម្រះវិសាមញ្ញក្នុងតុលាការ">
                              អង្គជំនុំជម្រះវិសាមញ្ញក្នុងតុលាការ
                           </Option>
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
                     <Form.Item
                        label="បច្ចុប្បន្ន"
                        style={{ marginBottom: 10 }}
                     >
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
