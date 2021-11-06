import logo from './logo.svg';
import './App.css';
import Route from './Route.js';
import {useState} from "react";
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


function App() {
    function TextBox(props) {
        return <input type="text" label={props.label}
                      onChange={
                          (input) => {
                              props.setter(input.target.value);
                              // props.onChange(input.target.value);
                          }}
                      value={props.value}>
        </input>
    }

    function Button(props) {
        return <AwesomeButton type="primary" onPress={props.onPress}>Button</AwesomeButton>;
    }

    function DisplayDebug(props) {
        return <header>{props.d}</header>
    }

    const [startLat, setStartLat] = useState(0);
    const [startLon, setStartLon] = useState(0);
    const [endLat, setEndLat] = useState(0);
    const [endLon, setEndLon] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <TextBox label="Source Latitude" value={startLat} setter={setStartLat}/>
                <TextBox label="Source Longitude" value={startLon} setter={setStartLon}/>
                <TextBox label="Dest Latitude" value={endLat} setter={setEndLat}/>
                <TextBox label="Dest Longitude" value={endLon} setter={setEndLon}/>
                <Button onPress={(event) => {
                    setStartLat(startLat);
                    setStartLon(startLon);

                }}/>
                <DisplayDebug d={startLat}/>
                <DisplayDebug d={startLon}/>
                <DisplayDebug d={endLat}/>
                <DisplayDebug d={endLon}/>
            </header>
        </div>
    );
}

export default App;
