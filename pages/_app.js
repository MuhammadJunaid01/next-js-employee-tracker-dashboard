import MainLayoute from "../layoutes/mainLayoute/MainLayoute";
import "../styles/globals.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { wrapper } from "../redux/store/store";
import AuthCheck from "../protected_route/AuthCheck";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthCheck>
        <MainLayoute>
          <Component {...pageProps} />
        </MainLayoute>
      </AuthCheck>
    </>
  );
}

export default wrapper.withRedux(MyApp);
