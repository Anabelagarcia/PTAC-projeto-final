import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Componentes/Header';


export default function Home(){

    return(
        <div>
           <Header/>
           <h1>PTAC 2 - PROJETO FINAL</h1>
           <Link to= "/registro">Registre-se</Link>
        </div>
     );

}