import { useState, useEffect } from 'react';
import Content from './Content';
import NavBar from './NavBar';
import './style.css';


export default function Main (params) {

    const [mainState, setMainState] = useState({
        pagination: {
            offset: 0
        }
    });

    return (
        <div className="main-content">
            <NavBar state={mainState} setState={setMainState}></NavBar>
            <Content state={mainState} setState={setMainState}></Content>
        </div>
    )
}