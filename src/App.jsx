import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import MainContent from "./components/MainContent";
import GetInTouch from "./components/GetInTouch";
import PartnersSection from "./components/PartnersSection";
import BlogSection from "./components/BlogSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col top-0">
        <Header />
        <MainContent />
        <div className="p-2 mb-2">
          <InfoBox />
          <GetInTouch />
          <PartnersSection />
          <BlogSection />
        </div>
      </div>
    </>
  );
}

export default App;
