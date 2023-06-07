import React from "react";
import BKHeader from "./component/navbar"
import BKSlider from "./component/slider"
import BKFooter from "./component/footer"
import BKMenu from "./pages/menus"

function App() {
    return (
        <>
            <BKHeader />
            <BKSlider />
            <BKMenu />
            <BKFooter />
        </>
    );
}

export default App;
