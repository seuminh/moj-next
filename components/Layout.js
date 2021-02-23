import Slider from "./Slider";

import { Layout as LayoutAnt, Menu, Breadcrumb } from "antd";

const Layout = ({ children }) => {
   return (
      <LayoutAnt style={{ minHeight: "100vh" }}>
         <Slider />
         <LayoutAnt className="site-layout">{children}</LayoutAnt>
      </LayoutAnt>
   );
};

export default Layout;
