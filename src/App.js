import Layout from "./components/Layout/Layout";
import Navbar from "./components/Nabvar/Navbar";
import Footer from "./footer/Footer";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Navbar/>
      <Routes/>
      <Footer/>
    </Layout>
  );
}

export default App;
