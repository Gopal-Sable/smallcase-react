import "./App.css";
import smallCaseData from "./assets/smallcases.json";
import SmallCaseList from "./components/SmallCaseList";


function App() {
    return (
        <>
            <SmallCaseList smallCaseData={smallCaseData} />
        </>
    );
}

export default App;
