import React from "react";

// Modules

// import { Router } from 'react-router';

// Components

// import { HomeButtonLink } from './components/HomeButtonLink';
// import { MainRouter } from './router/MainRouter';

// Utils

// import { history } from './utils/history';

// import './styles/index.scss';

// ----------------

import MainPage from "./pages/mainPage";

export const App = () => {
  return (
    <div className="app">
      {/* <Router history={history}>
        <MainRouter />
        <HomeButtonLink />
      </Router> */}
      {/* hello */}
      <MainPage />
    </div>
  );
};
