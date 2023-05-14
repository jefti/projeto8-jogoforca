export default function Resposta(props){
    const {letra, LetrasJogadas, Resultado, numero} = props;
    const teste = LetrasJogadas.includes(letra);
    const texto = teste? letra :'_';
    return (
        (numero == 0)? <div className="DisplayLetra">{texto.toUpperCase()}</div> : <div className="DisplayLetra">{texto}</div>
    )
}