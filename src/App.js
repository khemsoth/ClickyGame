import React from "react";
import Card from './components/card';
const characters = [
  {
    id: 1,
    name: 'Spyro',
    clicked: false
  },
    {
    id: 2,
    name: 'Bianca',
    clicked: false
  },
    {
    id: 3,
    name: 'Elora',
    clicked: false
  },
    {
    id: 4,
    name: 'Gnasty Gnorc',
    clicked: false
  },
    {
    id: 5,
    name: 'Moneybags',
    clicked: false
  },
    {
    id: 6,
    name: 'Ripto',
    clicked: false
  },
    {
    id: 7,
    name: 'Sheila',
    clicked: false
  },
    {
    id: 8,
    name: 'Sorceress',
    clicked: false
  }
]

function App() {
  return <Card characters={characters} />;
}

export default App;
