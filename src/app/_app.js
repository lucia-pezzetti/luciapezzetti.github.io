import '../styles/globals.css';
import Layout from '../components/layout'; // Adjust the path to your `layout.js`

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
