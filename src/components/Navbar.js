import React from 'react';
import "./Navbar.css"
import FontAwesome from 'react-fontawesome';
import { Link } from "react-router-dom";



function create_inner_item(name){
    const styles = {
        transform: 'translate(0,3px)',
    }
    const el = <FontAwesome name="caret-down" style={styles}/>;

    return <button href='' className = "navbar-inner-item">{name}{el}</button>
}

export default function Navbar(prop){
    return (
        <div className='navbar-container'>
            
            <Link to="/home" className='logo'></Link>
            {create_inner_item('Tutorials')}
            {create_inner_item('References')}
            {create_inner_item('Exercises')}
            
            <button href='' className='navbar-inner-item'>Videos</button>

    
            <button href='' className='round' name='Black' >Pro</button>
            <button href='' className='round' name='Pink'>Get Sertified</button>
            <button href='' className='round' name='Yellow'>Free Website</button>
            <button href='' className='round' name='Green'>Log in</button>

        </div>
    )
}