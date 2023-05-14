export default function Resposta(props){
    const {letra, LetrasJogadas} = props;
    const teste = LetrasJogadas.includes(letra);
    const texto = teste? letra :'_';
    return (
        <div className="DisplayLetra">{texto}</div>
    )
}