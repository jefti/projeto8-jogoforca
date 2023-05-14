import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import palavras from './palavras.js'
import Jogo from './componentes/Jogo'
import Letras from './componentes/Letras'

function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  

  const [PalavraSorteada, setPalavraSorteada] = React.useState(['']);
  const [emPartida, setEmPartida] = React.useState(false);

  const [LetrasJogadas,setLetrasJogadas] = React.useState([]);
  const [Jogadas, setJogadas] = React.useState(0);

  const IniciarPartida = () => { 
    if(emPartida){
      console.log('A partida já está em andamento');
    } else {
      let indexAleatorio = Math.floor(Math.random()*palavras.length);
      let palavraAleatoria = palavras[indexAleatorio];
      setPalavraSorteada(palavraAleatoria.split(''));
      setEmPartida(true);
      console.log('A partida foi iniciada');
      console.log(palavras[indexAleatorio]);
    }
    /*let teste=[];
    for(let i=0 ;i<100000 ; i++){
      let testei = Math.floor(Math.random()*palavras.length);
      teste.push(testei);
    }
    console.log(Math.max(...teste));
    */
  }

const AdicionarLetra = (letra) => {
  let listaJogada = [...LetrasJogadas, letra]
  setLetrasJogadas(listaJogada);
  if(PalavraSorteada.includes(letra)){
    alert('acertou');
  } else if(Jogadas<6) {
    const novoValor = Jogadas +1;
    alert('jogada : ' + novoValor);
    setJogadas(novoValor);
  } else{
    alert('perdeu');
  }
}

console.log(LetrasJogadas);
  

  return (
    <div className="App">

      <Jogo IniciarPartida={IniciarPartida} emPartida = {emPartida} PalavraSorteada={PalavraSorteada} LetrasJogadas = {LetrasJogadas} Jogadas={Jogadas}/>
      <Letras alfabeto={alfabeto} emPartida= {emPartida} LetrasJogadas = {LetrasJogadas} jogada={AdicionarLetra}/>

    </div>
  );
}

export default App;
