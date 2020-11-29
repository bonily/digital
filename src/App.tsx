import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ContactPage from './components/contact-page/contact-page';

const bgMainFooter = `#5A98D0`;

const contactFooter = `#FFFFFF`;

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <React.Fragment>
            <Header />
            <Main />
            <Footer bgColor = {bgMainFooter}/>
          </React.Fragment>
        </Route>
        <Route exact path='/contact'>
          <React.Fragment>
            <Header />
            <ContactPage />
            <Footer bgColor = {contactFooter}/>
          </React.Fragment>
        </Route>
      </Switch>

    </BrowserRouter>
  );
};

export default React.memo(App);
