import Letra from './Letra'

export default function Letras(props){
    
    const {alfabeto, emPartida,jogada, LetrasJogadas} = props;



    return (
        <div className='Letras'>
            <div className="container">
                {alfabeto.map( (i)=> 
                    <Letra key = {i} i = {i} emPartida = {emPartida} jogada={jogada} LetrasJogadas = {LetrasJogadas} />
                )}
            </div>
        </div>
    );
}