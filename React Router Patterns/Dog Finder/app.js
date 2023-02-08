import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

import knock from "./Images/Knock.jpg";
import Tom from "./Images/Tom.jpg";
import william from "./Images/William.jpg";
import ricky from "./Images/Ricky.jpg";

function App(props) {
    return (
        <div className="App">
            <NavBar dogs={ props.dogs } />
            <Switch>
                <Route exact path="/dogs/:dogName"><DogDetails dogs={ props.dogs } /></Route>
                <Route exact path="/dogs"><DogList dogs={ props.dogs } /></Route>
                <Redirect to="/dogs" />
            </Switch>
        </div>
    );
}

App.defaultProps = {
    dogs: [
    {
        name: "Knock",
        age: 5,
        src: knock,
        facts: [
          "Knock loves eating popcorn.",
          "knock is a terrible guard dog.",
          "knock wants to cuddle with you!"
        ]
    },
    {
        name: "Tom",
        age: 3,
        src: Tom,
        facts: [
          "Tom believes that ball is life.",
          "Tom likes snow.",
          "Tom enjoys pawing other dogs."
        ]
    },
    {
        name: "William",
        age: 4,
        src: william,
        facts: [
          "William loves all humans.",
          "William demolishes all snacks.",
          "William hates the rain."
        ]
    },
    {
        name: "Ricky",
        age: 4,
        src: ricky,
        facts: [
          "Ricky is really stupid.",
          "Ricky does not like walks.",
          "Angela used to hate Ricky, but claims not to anymore."
        ]
    }
]};

export default App;