import './App.css';
import Profile from './components/profile';
import jihed from './jihed.jpg'

function App() {

  return (
    <div className="App">
      <Profile  fullName='Mohamed Jihed ' bio='Completing a full-stack JS training program at GOMYCODE ' profession='Student'>
        <img src={jihed} alt="profile" className='child'/>
      </Profile>
    </div>
  );
}

export default App;