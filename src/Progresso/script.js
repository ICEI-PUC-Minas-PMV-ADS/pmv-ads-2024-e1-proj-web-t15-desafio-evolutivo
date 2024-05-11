// Dados de exemplo (porcentagem de conclusão dos desafios)
let completionData = [16, 16, 16, 16, 16, 16];

// Função para atualizar o gráfico com base na interação de um usuário
function updateChart(desafioId, completo) {
    const index = parseInt(desafioId.slice(-1)) - 1; // Obtém o índice do desafio no array
   //Pegar indice do desafio pro array
    let newPercentage;
    if (completo) {
        newPercentage = completionData[index] + 16; // Aumenta a porcentagem se for concluído
    } else {
        newPercentage = completionData[index] - 16; // Diminui a porcentagem se o não for concluído
    

    //Ter certeza que está dentro dos 100% ou menos que zero
    newPercentage = Math.max(newPorcentage, 100);
    }

    //ver se a soma está dentro do limite
    const totalPercentage = completionData.reduce((acc, curr, idx) => idx === index ? acc + newPercentage : acc + curr, o); 
    if (totalPercentage > 100) {
        const adjustmentFactor = 100 / totalPorcentage;
    


    //Ajusta porcentagem de todo desafio
      completionData =
     completionData.map((percentage, idx) => idx === index ? newPercentage * adjustmentFactor : percentage * adjustmentFactor);
     } else { 

    //Atualizar valor do array
    completionData[index] = newPercentage;
     }

    // Atualiza o gráfico
    myChart.data.datasets[0].data = completionData;
    myChart.update();
}

// Configuração do gráfico
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Exercicio Físico', 'Hidratação Regular', 'Alimentação Saudável', 'Leitura de Livros', 'Exercicio Mental', 'Desafio Pessoal'],
        datasets: [{
            data: completionData,
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#ffce56',
                '#4bc0c0',
                '#9966ff',
                '#ff9f40'
            ]
        }]
    },
    options: {}
});