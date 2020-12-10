import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tabela from "./pages/Tabela";
import Setores from "./pages/Setores";
import Login from "./pages/Login";
import Geral from "./pages/Geral";
import Prontuarios from './pages/Prontuarios'
import Image from './pages/Evolucoes/Image'
import Evolucoes from './pages/Evolucoes'

import HomeMobile from './pages/Mobile/Home'
import DetailsMobile from './pages/Mobile/Details'
import EditMobile from './pages/Mobile/Edit'
import ContatosMobile from './pages/Mobile/Contatos'


function Routes() {
  const user = true

  return (
    <BrowserRouter>
      <Switch>
        {!user && <Route path="/" component={Login} />}
        {user && (
          window.innerWidth <= 768?
          <Route exact path='/' component={HomeMobile} />:
          <Route exact path="/" component={Prontuarios} />
        )}
         {user &&  
             window.innerWidth <= 768?
             <Route exact path='/evolucoesMobile' component={Evolucoes} />:
            <Route exact path="/evolucoes" component={Evolucoes} />
          }
        {user &&(
          <Route exact path='/detalhes' component={DetailsMobile}/>
        )}
        {user &&(
          <Route exact path='/edit' component={EditMobile}/>
        )}
          {user &&(
          <Route exact path='/contatos' component={ContatosMobile}/>
        )}
         {user &&(
          <Route exact path='/image' component={Image}/>
        )}
        {user && (
          <Route
            exact
            path="/tabela"
            component={Tabela}
          />
        )}
        {user && (
          <Route
            exact
            path="/setores"
            component={Setores}
          />
        )}
        {user && (
          <Route exact path="/anual" component={Geral} />
        )}
        {user && (
          <Route exact path="/geral" component={Home} />
        )}
          
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default Routes;
