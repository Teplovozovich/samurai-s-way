import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavPanel from './Components/NavPanel/NavPanel';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Routes, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div>
      <Header />
      <div className="app__wrapper">
        <div className="maim__wrapper">
          <NavPanel friends={props.state.navbar.friends} />
          <Routes>
            <Route path="/news"
              element={<News />} />
            <Route path="/profile"
              element={<Profile
                store={props.store}
                dispatch={props.dispatch}
                posts={props.state.profilePage} />} />
            <Route path="/dialogs/*"
              element={<DialogsContainer
                store={props.store} />} />
            <Route path="/music"
              element={<Music />} />
            <Route path="/settings"
              element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;