import { Form, Button, Col, Row, Input } from "antd";

const Login = () => {
   return (
      <div>
         <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
               <Col span={6}>
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
               <Col span={6}>
                  <Form.Item
                     style={{ marginBottom: 10 }}
                     label="Password"
                     name="password"
                     rules={[
                        {
                           required: true,
                        },
                     ]}
                  >
                     <Input placeholder="password" />
                  </Form.Item>
               </Col>
            </Row>
            <Button style={{ marginRight: 8 }}>Login</Button>
         </Form>
      </div>
   );
};

export default Login;
