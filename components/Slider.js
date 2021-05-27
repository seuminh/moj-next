import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Slider = () => {
   const [collapsed, setCollapsed] = useState(false);

   const onCollapse = (col) => {
      setCollapsed(col);
   };

   return (
      <Sider
         // collapsible
         collapsed={collapsed}
         onCollapse={onCollapse}
         // breakpoint={"lg"}
         width="280px"
      >
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
               alignItems: "center",
               padding: "15px 0px",
            }}
         >
            <div>
               <Image src="/logo.png" width={40} height={40} />
            </div>
            <h1
               style={{
                  fontSize: "1.1em",
                  fontWeight: "normal",
                  color: "#fff",
                  marginLeft: 10,
               }}
            >
               គ្រប់គ្រងព័ត៌មានមន្រ្តីរាជការ
            </h1>
         </div>
         <Menu theme="dark" mode="inline">
            <SubMenu
               key="sub1"
               icon={<UserOutlined />}
               title="ព័ត៌មានមន្ត្រីរាជការ"
            >
               <Menu.Item key="1">
                  <Link href="/me">
                     <a>ព័ត៌មានផ្ទាល់ខ្លួន</a>
                  </Link>
               </Menu.Item>
               <Menu.Item key="2">
                  <Link href="/employee">
                     <a>ស្វែងរកព័ត៌មានមន្រ្តីរាជការ</a>
                  </Link>
               </Menu.Item>
            </SubMenu>
         </Menu>
      </Sider>
   );
};

export default Slider;
