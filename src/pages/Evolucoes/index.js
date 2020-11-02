import React, {useEffect, useState} from 'react';

import {useLocation} from 'react-router-dom'
import firebase from '../../context/firebase'

import { Container } from './styles';

function Evolucoes() {

  const location = useLocation()
  const {paciente, index} = location.state
  const [imgURL, setImgUrl] = useState([])
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  useEffect(()=>{
    setList([...list, imgURL])
  },[imgURL])

  useEffect(()=>{
    firebase
      .storage()
      .ref(`pacientes/${index}`)
      .listAll()
      .then(function(result) {
        result.items.forEach(function(imageRef) {
          // And finally display them
          imageRef.getDownloadURL()
          .then((url) => {
            const time = url.substr(93, 13)
            const t = new Date(Number(time)).toLocaleString()
            setImgUrl({url:url, time:t})
          })
          .catch(() => {
           console.log('erro')
          });
        });
        setLoading(false)
      }).catch(function(error) {
        // Handle any errors
      });     
    },[])
    
  return (
    <Container>
      {loading?<></>:
        <ul>
          {list
            .sort((a,b)=>{
              return b.time - a.time
            })
            .map(item=>(
              item.url &&
              <a href={item.url}>
                <li>
                  <img src={item.url}/>
                  <span>{String(item.time)}</span>
                </li>
              </a>)
            )}
        </ul>
      }
    </Container>
  )
}

export default Evolucoes;