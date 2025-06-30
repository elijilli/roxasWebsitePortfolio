import { Routes, Route } from 'react-router-dom';
import HomepageComponent from './Home/homepageComponents';
import AboutpageComponent from './About/aboutpageComponents';
import ResumepageComponent from './Resume/resumepageComponents';
import AchievementspageComponent from './Achievements/achievementspageComponents';
import ContactpageComponent from './Contact/contactpageComponents';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepageComponent />}>
        <Route index element={
          <div className="text-center fade-in">
            <h1 className="main-title">hi, i'm irish!</h1>
            <p className="welcome-text">
              annyeong! hola! welcome to my portfolio. 🍂
            </p>
          </div>
        } />
        <Route path="about" element={<AboutpageComponent />} />
        <Route path="resume" element={<ResumepageComponent />} />
        <Route path="achievements" element={<AchievementspageComponent />} />
        <Route path="contact" element={<ContactpageComponent />} />
      </Route>
    </Routes>
  );
}

export default App;