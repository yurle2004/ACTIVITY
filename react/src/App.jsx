import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


 
  function Formulario_Usuario (){
    const[Nombre, setNombre] = useState('');
    const[Apellido, setApellido] = useState('');
    const[estado, setEstado] = useState([]);
   
   
    function AgregarUsuario(){
         e.preventDefault();
         let Usuario = {
            Nombre: Nombre,
            Apellido: Apellido,
   
     
         }
         setEstado([...estado, Usuario]);
   
      }



       return(
        <Fragment>
     <form action="" onSubmit={(e) => AgregarUsuario(e)}>   
        <text> NOMBRE </text>
        <input onChange={(e) => setNombre(e.target.value)} type="text" id="nombre" name="nombre"/>
        <text> APELLIDO </text>
        <input onChange={(e) => setApellido(e.target.value)} type="text" id="apellido" name="apellido"/>
        <button> AGREGAR </button>
   </form>
   
     <div>

    <text>MostrarUsuario</text>
   
    {
       estado.map(item =>(
      <li key={item.Nombre}>{item.Name} - {item.Apellido}</li>
       ))

    }
  

     </div>

   </Fragment>
   
    
       
   )
       }

       
export default Formulario_Usuario