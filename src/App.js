import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import InfoBox from './components/InfoBox';
import CallToAction from './components/CallToAction';
import CoreTeam from './components/CoreTeam';

function App() {
  return (
    <div className="bg-black min-h-screen p-10">
      <Header />
      <MainContent />
      <InfoBox />
      <CallToAction />
      <CoreTeam />
    </div>
  );
}

export default App;
