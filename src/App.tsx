import React, {useState} from 'react';
import './App.css';
import {DropDownList} from "./DropDownList";
import {v1} from "uuid";

export type NamesType = {
    id: string
    name: string
}

export function App() {

    const [names, setNames] = useState<Array<NamesType>>([
        {id: v1(), name: 'Julia'},
        {id: v1(), name: 'Alexey'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Dmitriy'},
        {id: v1(), name: 'Vladimir'},
    ])

  return (
    <div className="App">
      <DropDownList list={names}/>
    </div>
  );
}

