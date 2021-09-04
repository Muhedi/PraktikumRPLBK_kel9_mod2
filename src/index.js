import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/gambared.jpg";

const quotes ="Ciee buka buka nihh yee!";

ReactDOM.render(
<React.StrictMode>
<App />
<CardList
name="muhedi"
nim="21120118120017"
kelompok="09"
isNameBold
image={Gambar}
/>
<Quotes author="Mas edi" quotes={quotes} />
</React.StrictMode>,
document.getElementById("root")
);