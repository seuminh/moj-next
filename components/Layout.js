import React, { useContext } from "react";
import { AlertContext, AlertDispatch } from "contexts/alert.context";

import Slider from "./Slider";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

import { Layout as LayoutAnt, Menu, notification, Spin } from "antd";
const { Content } = LayoutAnt;

import { useSession } from "next-auth/client";

const Layout = ({ children }) => {
  const [session, loading] = useSession();
  console.log(session, loading);
  const state = useContext(AlertContext);
  const dispatch = useContext(AlertDispatch);

  const openNotification = () => {
    notification.config({
      duration: 2,
      placemeknt: "topRight",
    });
    switch (state.type) {
      case "success":
        return notification.success({
          message: state.message,
          description: state.description,
          onClose: () => dispatch({ type: "RESET" }),
        });
      case "error":
        return notification.error({
          message: state.message,
          description: state.description,
          onClose: () => dispatch({ type: "RESET" }),
        });
    }
  };
  return (
    <LayoutAnt style={{ minHeight: "100vh" }}>
      <Slider />
      <LayoutAnt className="site-layout">
        {state.show && openNotification()}
        <Header></Header>
        <Content>
          <Breadcrumb></Breadcrumb>
          {children}
        </Content>
        <Footer></Footer>
      </LayoutAnt>
    </LayoutAnt>
  );
};

export default Layout;
