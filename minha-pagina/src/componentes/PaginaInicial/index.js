import React, { useState } from 'react';

export default function PaginaInicial() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(1);

    function gerarNumero () {
        const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    return (
        <div className='areaContent'>
            <div className="conteudo-centralizado">
                <h3>Número Aleatório</h3>
                <h1>{numeroAleatorio}</h1>
            
                <div className='area-botao'>
                    <p>Clique no botão para gerar o número:</p>
                    <button onClick={gerarNumero}>Gerar Número</button>
                </div>
            </div>
        </div>
    )
}