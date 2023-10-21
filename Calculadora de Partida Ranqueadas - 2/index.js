calcularVitoriaeDerrota(120,11);


function calcularVitoriaeDerrota(vitorias,derrotas) {
    let saldoVitoria = vitorias - derrotas;
    let nivel;
    if (saldoVitoria < 10) {
        nivel = "ferro";
    } else if (saldoVitoria > 10 && saldoVitoria <= 20) {
        nivel = "bronze";
    } else if (saldoVitoria > 20 && saldoVitoria <= 50) {
        nivel = "prata";
    } else if (saldoVitoria > 50 && saldoVitoria <= 80) {
        nivel = "ouro";
    } else if (saldoVitoria > 80 && saldoVitoria <= 90) {
        nivel = "diamante";
    } else if (saldoVitoria > 90 && saldoVitoria <= 100) {
        nivel = "lendário";
    } else if (saldoVitoria > 100) {
        nivel = "imortal";
    }
    console.log("O Herói tem um saldo de "+ saldoVitoria +" vitórias e está no nível "+ nivel)
}