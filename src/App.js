import './App.css';
import NavPanel from './Components/NavPanel/NavPanel';
import ProfileContainer, { withRouter } from './Components/Profile/ProfileContainer';
import { Routes, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { Provider, connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import React, { Component } from 'react';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';
import store from './redux/redux-store';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJsApp = (props) => {
  return (
    <Router>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </Router>
  )
}

export default SamuraiJsApp;