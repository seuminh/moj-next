import Slider from "./Slider";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";

import { Layout as LayoutAnt, Menu } from "antd";

const Layout = ({ children }) => {
   return (
      <LayoutAnt style={{ minHeight: "1500px" }}>
         <Slider />
         <LayoutAnt className="site-layout">
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            {children}
         </LayoutAnt>
      </LayoutAnt>
   );
};

export default Layout;
