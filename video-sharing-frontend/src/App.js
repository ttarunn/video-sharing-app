import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
    <div className="header">
      <div className='title'>FlickFlow</div>
      <div>
        <input type='text' className='search' placeholder='search'/>
      </div>
      <div className='login-signup'>Login | Signup</div>
    </div>
    <div className='land'>
      <LandingPage/>
    </div>
    </>
    
  );
}

export default App;
