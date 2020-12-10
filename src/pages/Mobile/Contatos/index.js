import React,{ useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom'

import { Container } from './styles';

import phone from '../../../assets/phone.svg'
import medico from '../../../assets/medico.svg'

function Contatos() {

    const location = useLocation()
    const {pacientesCheck} = location.state

    const contatos =[
  
        {nome:'Dra. Ana Clara',telefone:53999999999},
        {nome:'Dra. Carolina', telefone:53999999999},
    ]

    const [msg, setMsg]= useState('Oi!')

    useEffect(()=>{
        if(pacientesCheck){
            let message = []
            for(let paciente of pacientesCheck) {
                message.push(`*Setor:* ${paciente.setor} %0a*Leito*: ${paciente.leito ? paciente.leito: ''} %0a*Nome:* ${paciente.nome.toUpperCase()} %0a*Via de alimentação:* ${encodeURIComponent(paciente.via.toUpperCase())}`)
            }
           const mesg = (message.splice(',').join('%0a%0a'))
           window.open(`https://wa.me/?text=${mesg}`);
         }
    },[])
    

  return <Container>
      <h2>Lista de médicos</h2>
      <table>
          <tbody>
          {/*   <tr onClick={()=>{
                window.open(`https://wa.me/?text=${msg}`);
                }}><td><img src={medico}/></td><td>Whatsapp grupo</td>
            </tr> */}
              {contatos.map(contato=>(
                  <tr onClick={()=>{
                    window.open(`https://wa.me/${contato.telefone}?text=${msg}`);
                  }}><td><img src={medico}/></td><td>{contato.nome}</td></tr>
              ))}
          </tbody>
      </table>
  </Container>
}

export default Contatos;
