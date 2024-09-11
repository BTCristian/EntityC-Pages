import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import MainContent from "./components/MainContent";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col top-0">
        <Header />
        <MainContent />
        <div className="p-2 mb-10">
          <InfoBox />
          <GetInTouch />
        </div>
      </div>
    </>
  );
}

export default App;
