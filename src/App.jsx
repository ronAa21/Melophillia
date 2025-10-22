import './App.css'
import NavBar from './1st-module-components/NavBar';
import FeelsCard from './1st-module-components/FeelsCard';
import MoodPlaylist from './Main-Comp/MoodPlaylist';

function App() {

  return (
    <div>
      <NavBar/>
        <FeelsCard/>

        {/* This is for the mean time */}
        <MoodPlaylist/>
    </div>
  )
}

export default App
