import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Layout, Menu, Divider } from "antd";
import {
   UserOutlined,
   HomeOutlined,
   NotificationOutlined,
   SettingOutlined,
   PrinterOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;


const siderMenu = [
   { link:'/',name: "ទំព័រដើម", iconUrl: '/home.png'},
   {link:'/me', name:"ព័ត៌មានផ្ទាល់ខ្លួន", iconUrl: '/user.png'}, {link: '/employee', name: 'បញ្ជីឈ្មោះមន្រ្តីរាជការ', iconUrl="/team.png" }, {link:'/employee/add', name: 'បញ្ចូលមន្ត្រីរាជការថ្មី', iconUrl: '/addUser.png'}, {link: '/print', name:'ការបោះពុម្ភ', iconUrl: '/printer.png'},
    {link: '/announcement', name:'សេចក្ដីជូនដំណឹង', iconUrl: '/announcement.png'}, 
   {link: '/setting', name: 'កំណត់អ្នកប្រើប្រាស់', iconUrl: '/setting.png'}]

const Slider = () => {
   const [collapsed, setCollapsed] = useState(false);

   const onCollapse = (col) => {
      setCollapsed(col);
   };

   return (
      <Sider
         theme="light"
         collapsed={collapsed}
         onCollapse={onCollapse}
         width="280px"
         collapsible
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
                  display: collapsed ? "none" : "",
                  marginLeft: 10,
               }}
            >
               គ្រប់គ្រងព័ត៌មានមន្រ្តីរាជការ
            </h1>
         </div>
         <Menu theme="light" mode="inline">
            <Menu.Item
               key="1"
               icon={<img src="/home.png" width="20" height="20" />}
            >

               <Link href="/">
                  <a>ទំព័រដើម</a>
               </Link>
            </Menu.Item>
            <Menu.Item
               key="2"
               icon={<img src="/user.png" width="20" height="20" />}
               >
               <Link href="/me">
                  <a>ព័ត៌មានផ្ទាល់ខ្លួន</a>
               </Link>
            </Menu.Item>
            <Menu.Item
               key="3"
               icon={<img src="/team.png" width="20" height="20" />}
               >
               <Link href="/employee">
                  <a>បញ្ជីឈ្មោះមន្រ្តីរាជការ</a>
               </Link>
            </Menu.Item>
            <Menu.Item
               key="4"
               icon={<img src="/addUser.png" width="20" height="20" />}
               >
               <Link href="/employee/add">
                  <a>បញ្ចូលមន្ត្រីរាជការថ្មី</a>
               </Link>
            </Menu.Item>
            <Menu.Item
               key="5"
               icon={<img src="/printer.png" width="20" height="20" />}
               >
               <Link href="/print">
                  <a>ការបោះពុម្ភ</a>
               </Link>
            </Menu.Item>
            <Divider
               style={{
                  borderColor: "#888",
               }}
               ></Divider>
            <Menu.Item
               key="6"
               icon={<img src="/announcement.png" width="20" height="20" />}
               >
               <Link href="/announcement">
                  <a>សេចក្ដីជូនដំណឹង</a>
               </Link>
            </Menu.Item>
            <Menu.Item
               key="7"
               icon={<img src="/setting.png" width="20" height="20" />}
            >
               <Link href="/setting">
                  <a>កំណត់អ្នកប្រើប្រាស់</a>
               </Link>
            </Menu.Item>
         </Menu>
      </Sider>
   );
};

export default Slider;
