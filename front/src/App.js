import './App.css';
import Movies from './components/movies';
import Liquid from './components/liquid';
import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

function App() {
  return (
    <main className="container">
      <Movies/>
      <Gauge value={25} width={400} height={320} label="Temperatura" />
      <Liquid />
    </main>
  );
}

export default App;
