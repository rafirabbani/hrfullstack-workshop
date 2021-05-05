import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from './views/MainLayout'
import Dashboard from './views/Dashboard';
import Regions from './views/Regions/Regions'
import Countries from './views/Countries'
import Home from './views/Home'
import Employees from './views/Employees/Employees'


const MainRouter = () => {
  return (
  <>
    <Switch>
      <Route exact path ='/hr'><Home/></Route>
      <MainLayout>
        <Route exact path="/hr/dashboard" component={Dashboard} />
        <Route exact path="/hr/regions" component={Regions} />
        <Route exact path="/hr/countries" component={Countries} />
        <Route exact path="/hr/employees" component={Employees} />
      </MainLayout>
    </Switch>


  </>)
}

export default MainRouter
