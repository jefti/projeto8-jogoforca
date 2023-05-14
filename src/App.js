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

  const [LetrasNecessarias, setLetrasNecessarias] = React.useState(0);
  const [LetrasCertas,setLetrasCertas] = React.useState(0);
  const [Jogadas, setJogadas] = React.useState(0);

  const [Resultado, setResultado] = React.useState('OutGame');

  const IniciarPartida = () => { 
    if(emPartida){
      console.log('A partida já está em andamento');

    } else {

      let indexAleatorio = Math.floor(Math.random()*palavras.length);
      let palavraAleatoria = palavras[indexAleatorio];
      setLetrasJogadas([]);
      setLetrasCertas(0);
      setJogadas(0);

      setPalavraSorteada(palavraAleatoria.split(''));
      setEmPartida(true);

      let cont = 0;
      let listaCont = [];
      for(let index = 0; index < palavraAleatoria.length; index++){
        if(!listaCont.includes(palavraAleatoria[index])){
          listaCont.push(palavraAleatoria[index]);
          cont++;
        }
      }
      console.log('A partida foi iniciada!');
      console.log('A palavra sorteada é '+ palavras[indexAleatorio]);
      console.log('são necessários ' + cont + ' Letras diferentes')
      setLetrasNecessarias(cont);
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
    let cont = LetrasCertas + 1;
    setLetrasCertas(cont);
    if(cont < LetrasNecessarias){
      //alert('acertou '+ cont+' letras até agora, faltam ' + LetrasNecessarias + ' Letras.');
    } else {
      //alert('Parabéns, você ganhou o jogo');
      setEmPartida(false);
      setResultado('Vitoria');
    }
  } else {
    const novoValor = Jogadas +1;
    //alert('jogada : ' + novoValor);
    setJogadas(novoValor);
    if(novoValor == 6){
      //alert('foram 6 jogadas erradas, você perdeu o jogo!');
      setEmPartida(false);
      setResultado('Derrota');
    }
  } 
}


  

  return (
    <div className="App">

      <Jogo IniciarPartida={IniciarPartida} emPartida = {emPartida} PalavraSorteada={PalavraSorteada} LetrasJogadas = {LetrasJogadas} Jogadas={Jogadas} Resultado={Resultado}/>
      <Letras alfabeto={alfabeto} emPartida= {emPartida} LetrasJogadas = {LetrasJogadas} jogada={AdicionarLetra}/>

    </div>
  );
}

export default App;
