function Calcular(Tenho_carteira, Compra_mercado) {
    if (
        !Tenho_carteira ||
        Number(Tenho_carteira) == 0 ||
        !Compra_mercado ||
        Number(Compra_mercado) === 0

    ) {
        return console.log('errado')
    }

    return (Number(Tenho_carteira) + Number(Compra_mercado));

}

module.exports = Calcular