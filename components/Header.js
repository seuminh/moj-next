import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const Header = () => {
   return (
      <div className="header">
         <div className="headerIcon">
            <Link href="/">
               <HomeOutlined style={{ fontSize: 22 }} />
            </Link>
         </div>
         <div className="headerInfo">
            <div>
               <p>
                  ក្រសួង-ស្ថាប័ន
                  <span style={{ color: "#6a0e00", fontWeight: "bold" }}>
                     យុត្តិធម័
                  </span>
               </p>
            </div>
            <div>
               <p>
                  ឈ្មោះអ្នកចូលប្រើ{" "}
                  <span style={{ color: "#6a0e00", fontWeight: "bold" }}>
                     Unknown
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Header;
