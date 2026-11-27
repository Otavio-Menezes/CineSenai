import { useState } from "react";



export const Contador = () => {

    const [curtidas, setCurtidas] = useState(0)
    // set é padrão, precisa de CamelCase

    return (
        <button className="btn btn-primary" onClick={() => setCurtidas(curtidas + 1)}>
            Curtidas: {curtidas}
        </button>
    )
};
//
//
//

const PRECO_INTEIRA = 32;
const LIMITE = 6;

export const ContadorIngressos = () => { //função anonima

    const [quantidade, setQuantidade] = useState(1); //useState funciona como se fosse um array de alementos
    const [meia, setMeia] = useState(false);
    const [nome, setNome] = useState("");

    const precoUnitario = meia ? PRECO_INTEIRA / 2 : PRECO_INTEIRA;

    const total = quantidade * precoUnitario;

    const diminuir = () => setQuantidade(quantidade - 1);
    const aumentar = () => setQuantidade(quantidade + 1);

    const limpar = () => {
        setQuantidade(1);
        setMeia(false);
        setNome("");
    };


    return (
        <div className="glass" style={{padding: "1.5rem", maxWidth: "420px", margin: "1rem auto"}}> 
        {/* duas chaves são: a primeira reconhece o JS e a segunda reconhce o CSS */}
        <h3>Reservar ingressos</h3>
        <input className="form-control" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        {/* onchance se usa muito em react */}

        <p>{nome === "" ? "Digite seu nome para continuar" : `Olá, ${nome}!`}</p>

        <div style={{display: "flex", alignItems: "center", gap: "1rem", margin: "1rem 0"}}>

        <button className="btn btn-secondary" onClick={diminuir} disabled={quantidade === 1 }>
        -
        </button>

        <strong>{quantidade}</strong>

        {/*  */}

        <button className="btn btn-secondary" onClick={aumentar} disabled={quantidade === LIMITE}>+</button> {/* LIMITE É: 6*/}


        {quantidade === LIMITE && <span className="badge badge-warning"> Limite atingido</span>}
        {/* o que tiver depois do "&&", a condição é feita  */}
        </div>

        

        <label>
            <input type="checkbox" checked={meia} onChange={(e) => setMeia(e.target.checked)} />
            {" "}Meia-entrada
        </label>

        <p>
          Total: <strong> R$ {total.toFixed(2).replace('.', ',')}</strong>  
        </p>

        <button className="btn btn-primary" onClick={limpar}>Limpar</button>

        </div>
    );


};