// import "../styles.css";
import Header from "../components/Header";
import Form1 from "../components/Form1";
import ConfigForm from "../components/ConfigForm";
import LoadingTest from "../components/LoadingTest";
import { useState } from "react";

export default function Home(props) {
  const [detailPg, setDetailPg] = useState("home");

  const swapDetails = (comp) => {
    switch (comp) {
      case "home":
        return <Form1 clickHandler={setDetailPg} />;
      case "config":
        return <ConfigForm clickHandler={setDetailPg} />;
      case "loading":
        return <LoadingTest clickHandler={setDetailPg} />;
      default:
        return <Form1 clickHandler={setDetailPg} />;
    }
  };

  return (
    <div type="H1">
      <Header />
      {swapDetails(detailPg)}
    </div>
  );
}
