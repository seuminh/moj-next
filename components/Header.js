import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import { Button, Input } from "antd";
import { useRouter } from "next/router";

const Header = () => {
   const [session, loading] = useSession();
   console.log(session);
   const router = useRouter();
   return (
      <div className="header">
         <Input
            className="search"
            placeholder="ស្វែងរក"
            suffix={<SearchOutlined />}
            style={{ maxWidth: "700px" }}
         />
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
                     {session && session.user.user.firstName}
                  </span>
               </p>
            </div>
            {session ? (
               <Button
                  onClick={() => {
                     signOut({ redirect: false });
                  }}
               >
                  Logout
               </Button>
            ) : (
               <Button
                  onClick={() => {
                     router.push("/login");
                  }}
               >
                  Login
               </Button>
            )}
         </div>
      </div>
   );
};

export default Header;
