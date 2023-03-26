import Layout from "@/components/Layout";
import "../styles/index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <title>Portfolio | Maxime Bignolet | Développeur Front-end</title>
      <Component {...pageProps} />
    </Layout>
  );
}
