import "./App.css";
import smallCaseData from "./assets/smallcases.json";
import Navbar from "./components/Navbar";
import SmallCaseList from "./components/SmallCaseList";

function App() {
    return (
        <>
            <Navbar />
            <SmallCaseList smallCaseData={smallCaseData} />
        </>
    );
}

export default App;
