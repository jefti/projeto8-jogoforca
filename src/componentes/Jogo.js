import Resposta from './Resposta'

export default function Jogo(props){
    const { IniciarPartida, emPartida, PalavraSorteada, LetrasJogadas, Jogadas, Resultado} = props;
  
    const lista = [...PalavraSorteada].map((i,numero)=> <Resposta key={'resposta'+numero} letra ={i} LetrasJogadas={LetrasJogadas} numero={numero} Resultado={Resultado}/>);
    const OutGame = [...PalavraSorteada].map((i,numero)=> <div key={'outGame'+numero} className={'DisplayLetra '+ Resultado} >{(numero==0)?i.toUpperCase():i}</div>);
return(
    <div className='Jogo'>
        <img src={'/assets/forca'+Jogadas+'.png'}></img>

        <div className='HUB'>
            <div>
                <button className='botao' onClick={IniciarPartida}>Escolher Palavra</button>
            </div>
            <div className='DisplayContainer'>
                {emPartida
                ?lista
                :OutGame }
            </div>
        </div>
    </div>
);
}