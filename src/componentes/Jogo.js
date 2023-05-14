import Resposta from './Resposta'

export default function Jogo(props){
  const { IniciarPartida, emPartida, PalavraSorteada, LetrasJogadas, Jogadas} = props;
  
  const lista = [...PalavraSorteada].map((i,numero)=> <Resposta key={'resposta'+numero} letra ={i} LetrasJogadas={LetrasJogadas}/>);

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
                :'' }
            </div>
        </div>
    </div>
);
}