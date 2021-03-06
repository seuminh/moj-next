import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../components/Layout";
import { AlertProvider } from "contexts/alert.context";
import router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider } from "next-auth/client";
import ProtectedRoute from "hoc/ProtectedRoute";

NProgress.configure({
  trickleRate: 0.02,
  trickleSpeed: 800,
  showSpinner: false,
});
router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
router.events.on("routeChangeComplete", () => NProgress.done());
router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AlertProvider>
        {Component.authCondition ==="WithoutAuth" ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ProtectedRoute>
        )}
      </AlertProvider>
    </Provider>
  );
}

export default MyApp;
