import MainLayoute from "../layoutes/mainLayoute/MainLayoute";
import "../styles/globals.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { wrapper } from "../redux/store/store";
import "react-pro-sidebar/dist/css/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayoute>
        <Component {...pageProps} />
      </MainLayoute>
    </>
  );
}

export default wrapper.withRedux(MyApp);
