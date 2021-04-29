import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from './views/MainLayout'
import Home from './views/Home';


const MainRouter = () => {
  return (<>
    <Switch>
      <MainLayout >

        <Route exact path="/hr/dashboard/" component={Home} />
       
      </MainLayout>
    </Switch>


  </>)
}

export default MainRouter
