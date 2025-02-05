import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@primer/react-brand/lib/css/main.css'
import '@primer/react-brand/fonts/fonts.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
