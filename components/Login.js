import { Form, Button, Col, Row, Input } from "antd";
import { signIn } from "next-auth/client";

const Login = () => {
  const [form] = Form.useForm()
  
  ;
  const login = () => {
   const dataInput = form.getFieldsValue(true);
   form.validateFields().then(async() => {
      const result = await signIn("credentials", {
        redirect: false,
        username: dataInput.username,
        password: dataInput.password,
      });
      console.log(result)
    });
  };
  return (
    <div>
      <Form layout="vertical" hideRequiredMark form={form}>
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
        <Button style={{ marginRight: 8 }} onClick={login}>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
