import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../components/Layout";
import { AlertProvider } from "contexts/alert.context";

function MyApp({ Component, pageProps }) {
   return (
      <AlertProvider>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </AlertProvider>
   );
}

export default MyApp;
