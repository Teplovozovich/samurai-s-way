import './App.css';
import Header from './Components/Header/Header';
import NavPanel from './Components/NavPanel/NavPanel';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { Routes, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

function App(props) {
  return (
    <div>
      <HeaderContainer />
      <div className="app__wrapper">
        <div className="maim__wrapper">
          <NavPanel />
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId"
                element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;