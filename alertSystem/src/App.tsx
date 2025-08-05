import { useState } from "react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";
import { BellRing } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>YOU DON'T KNOW REACT JS</h1>
      <Alert
        type="alert-danger"
        icon={<BellRing />}
        title="Something went Wrong"
      />
    </>
  );
}

export default App;
