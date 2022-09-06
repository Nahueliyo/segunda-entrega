import React from 'react'
import logo from '../../assets/logo.png'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import"./NavBar.css"


const NavBar = () => {
    return (
        <header>
        <a href="">
        <img src={logo} alt="Logo" class="logo"/>
        </a>
        <h1>Titulo</h1>
        <nav class="zona-navegable">
            <ul class="lista-navegable">
                <li class="item-lista-nav"><a href="index.html" class="boton">Inicio</a></li>
                <li class="item-lista-nav">
                    <a href="" class="boton">Nosotros</a>
                </li>
                <li class="item-lista-nav">
                    <a href="" class="boton">Accesorios</a>
                </li> 
                <li class="item-lista-nav">
                    <a href="" class="boton">Juegos</a>
                </li>
                <li class="item-lista-nav">
                    <a href="" class="boton">Consolas</a>
                </li>
            </ul>
        </nav>
        <ShoppingCartTwoToneIcon />
        </header>
    )
}

export default NavBar