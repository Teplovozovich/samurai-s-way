import './App.css';
import NavPanel from './Components/NavPanel/NavPanel';
import { BrowserRouter, HashRouter, Navigate, withRouter } from 'react-router-dom';
import { Routes, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer.tsx';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login.tsx';
import { Provider, connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer.ts";
import React, { Component, Suspense } from 'react';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';
import store from './redux/redux-store.ts';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error")
    console.log(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
              <Route path="/" element={<Navigate to="/profile" />} />              <Route path="/news" element={<News />} />
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId"
                  element={<ProfileContainer />} />
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<UsersContainer pageTitle={"ttiittllee"}/>} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<div>404 not found</div>} />
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
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJsApp = (props) => {
  return (
    <Suspense fallback={<div>загруска</div>}>
      <BrowserRouter>
        <React.StrictMode>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </React.StrictMode>
      </BrowserRouter>
    </Suspense>
  )
}

export default SamuraiJsApp;