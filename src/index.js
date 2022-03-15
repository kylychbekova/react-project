import React from 'react';
import  {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Section from "./components/Section/Section";
import Dialogues from "./components/Dialogues/Dialogues";
import state from "./redux/state";





const rootElement = document.getElementById("root");
render(
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="section" element={<Section/>} />
        <Route path="dialogues" element={<Dialogues/>}/>
    </Routes>

</BrowserRouter>, rootElement);


reportWebVitals();
