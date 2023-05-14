import React from "react";

export default function Letra(props){
    const {i,emPartida,jogada,LetrasJogadas} = props;
    let teste = (emPartida && (!LetrasJogadas.includes(i)))?false:true;





   return (
    <button className='botaoLetra' disabled={teste} onClick={() => jogada(i)} data-test="letter">  
        {i.toUpperCase()} 
    </button>
    );

}
