import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import MainContent from "./components/MainContent";
import GetInTouch from "./components/GetInTouch";
import PartnersSection from "./components/PartnersSection";
import BlogSection from "./components/BlogSection";
import CoreTeam from "./components/CoreTeam";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col top-0">
        <Header />
        <MainContent />
        <div className="p-3 mb-2">
          <InfoBox />
          <GetInTouch />
          <PartnersSection />
          <BlogSection />
        </div>
        <CoreTeam />
      </div>
    </>
  );
}

export default App;
