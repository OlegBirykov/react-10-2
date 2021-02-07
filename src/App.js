import React from 'react';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <>
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </>
  );
}

export default App;
