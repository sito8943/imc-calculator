import ReactDOM from "react-dom/client";

// @sito/ui
import { StyleProvider, ModeProvider, NotificationProvider } from "@sito/ui";

// translations
import "./i18.js";

// APP
import App from "./App.jsx";

// app styles
import "./index.css";
// Import css files
import "tippy.js/dist/tippy.css"; // optional

// font
import "@fontsource/roboto/400.css";
import "@fontsource/poppins/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeProvider>
    <StyleProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </StyleProvider>
  </ModeProvider>
);
