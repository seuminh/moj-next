import React, { useContext } from "react";
import { AlertContext } from "contexts/alert.context";

import Slider from "./Slider";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";

import { Layout as LayoutAnt, Menu, notification, Spin } from "antd";

const Layout = ({ children }) => {
   const state = useContext(AlertContext);

   const openNotification = () => {
      switch (state.type) {
         case "success":
            return notification.success({
               message: state.message,
               description: state.description,
               duration: 3,
               placement: "topRight",
            });
         case "error":
            return notification.error({
               message: state.message,
               description: state.description,
               duration: 3,
               placement: "topRight",
            });
      }
   };
   return (
      <LayoutAnt style={{ minHeight: "1800px" }}>
         <Slider />
         <LayoutAnt className="site-layout">
            {state.show && openNotification()}
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            {children}
         </LayoutAnt>
      </LayoutAnt>
   );
};

export default Layout;
