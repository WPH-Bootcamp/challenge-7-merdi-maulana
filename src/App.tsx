import Topbar from "./components/container/0-TopBar";
import Hero from "./components/container/1-HeroSection";
import Partner from "./components/container/2-PartnerCompany";
import OurExperience from "./components/container/3-OurExperience";
import Process from "./components/container/4-OurProcess";
import Solution from "./components/container/5-ItSolution";
import Industry from "./components/container/6-BuiltIndustry";
import Project from "./components/container/7-Project";
import Working from "./components/container/8-WorkingWithUs";
import NHelp from "./components/container/9-NeedHelp";
import FormTalk from "./components/container/10-FormTalk";
import Footer from "./components/container/Footer";

function App() {
  return (
    <div className="md:px-35 px-4">
      <Topbar />
      <Hero />
      <Partner />
      <OurExperience />
      <Process />
      <Solution />
      <Industry />
      <Project />
      <Working />
      <NHelp />
      <FormTalk />
      <Footer />
    </div>
  );
}

export default App;
