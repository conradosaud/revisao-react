import React from "react";

function App() {

    //let credito = 155;
    const [ credito, alteraCredito ] = React.useState(155)

    function adicionaCredito(){
        alteraCredito( credito + 1000 );
    }

    function compraPassagem( valor ){
		if( credito < valor){
			alert("Você não possui créditos para comprar esta passagem")
			return
		}
		alteraCredito( credito - valor )
		alert("Passagem comprada com sucesso")
	}

    return (
        <div>

            <h1 >Conradito Viagens</h1>
            <p>Conheço o mundo com preços acessíveis</p>
            <button>Contato</button>
            <button onClick={ ()=> adicionaCredito() } >Adicionar Crédito</button>

            <p> Seu crédito é de <strong>R$ { credito } </strong> </p>

            <h2> Viagens </h2>
            <p> Nova York - R$ 1.200 <button onClick={()=>compraPassagem(1200)} > Comprar </button> </p>
            <p> Londres - R$ 1.550 <button onClick={()=>compraPassagem(1550)} > Comprar </button> </p>

        </div>
    );
}

export default App;

