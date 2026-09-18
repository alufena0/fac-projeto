import { ExerciseList, Resolution } from '../types.ts';

export const EXERCISE_LISTS: ExerciseList[] = [
  {
    id: 'lista-1',
    numberRomano: 'I',
    title: 'LISTA I — Exercícios de Fundamentos de Algoritmos de Computação I',
    topic: 'Fundamentos de Algoritmos de Computação I',
    description: 'Lista com 8 questões da disciplina de FAC1.',
    exercises: [
      {
        id: 'ex-1-1',
        listId: 'lista-1',
        number: 1,
        title: 'Custo ao Consumidor de um Carro Novo',
        description:
          'O custo ao consumidor de um carro novo é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Desenvolver um algoritmo que calcule o custo ao consumidor de determinado carro.',
      },
      {
        id: 'ex-1-2',
        listId: 'lista-1',
        number: 2,
        title: 'Classificação de Categoria de Nadador por Idade',
        description:
          'Elabore um algoritmo que, dada a idade de um nadador, classifique-o em uma das seguintes categorias: infantil A: 0-4 anos; infantil B: 5-7 anos; infantil C: 8-10 anos; juvenil A: 11-13 anos; juvenil B: 14-17 anos; Adulto: 18 anos ou mais.',
      },
      {
        id: 'ex-1-3',
        listId: 'lista-1',
        number: 3,
        title: 'Cálculo de Peso Ideal por Gênero e Altura',
        description:
          'Construir um algoritmo que calcule o peso ideal de uma pessoa, de acordo com o seu gênero e altura, utilizando as seguintes fórmulas: para homens: (72.7*h)-58; para mulheres: (62.1*h)-44.7.',
      },
      {
        id: 'ex-1-4',
        listId: 'lista-1',
        number: 4,
        title: 'Concessão de Crédito Especial Bancário',
        description:
          'Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que calcule o valor do crédito de acordo com a tabela: Inferior a R$ 1000,00: nenhum crédito; De R$ 1000,00 a R$ 1499,99: 20% do saldo médio; De R$ 1500,00 a R$ 2499,99: 30% do saldo médio; R$ 2500,00 ou mais: 40% do saldo médio.',
      },
      {
        id: 'ex-1-5',
        listId: 'lista-1',
        number: 5,
        title: 'Decomposição de Quantia em Notas e Moedas',
        description:
          'Escrever um algoritmo que, dada uma quantia em reais, calcule o menor número possível de notas/moedas (100, 50, 20, 10, 5, 2 e 1) em que o valor pode ser decomposto.',
      },
      {
        id: 'ex-1-6',
        listId: 'lista-1',
        number: 6,
        title: 'Ordem de uma Data (Dia e Mês) no Ano',
        description:
          'Fazer um algoritmo que determine a ordem de uma data (dia e mês) no ano. Exemplos: 01/01 - 1º dia do ano; 03/02 - 34º dia do ano.',
      },
      {
        id: 'ex-1-7',
        listId: 'lista-1',
        number: 7,
        title: 'Cálculo de Salário Semanal com Horas Extras',
        description:
          'Escreva um algoritmo para calcular o salário semanal de uma pessoa, determinado pelas condições que seguem: se o número de horas trabalhado for inferior ou igual a 40, a pessoa recebe x reais por hora; caso contrário, a pessoa recebe um adicional de 50% para cada hora trabalhada acima das 40 iniciais.',
      },
      {
        id: 'ex-1-8',
        listId: 'lista-1',
        number: 8,
        title: 'Conta Final de Hóspede de Hotel',
        description:
          'Faça um algoritmo para calcular a conta final de um hóspede de um hotel, considerando que: a) Devem ser obtidos o nome do hóspede, o tipo do apartamento utilizado (A, B, C ou D), o número de diárias utilizadas pelo hóspede e o valor do consumo interno do hóspede; b) O valor da diária é determinado pela tabela: A = R$ 350,00; B = R$ 275,00; C = R$ 200,00; D = R$ 150,00; c) O valor da taxa de serviço equivale a 10% da conta. A conta a ser apresentada ao cliente deve conter: o nome do hóspede, o tipo do apartamento, o valor total das diárias, o valor do consumo interno, o subtotal, o valor da taxa de serviço e o total geral.',
      },
    ],
  },
  {
    id: 'lista-2',
    numberRomano: 'II',
    title: 'LISTA II — Lista de Exercícios II de FAC1',
    topic: 'Lista de Exercícios II de FAC1',
    description: 'Lista com 6 questões da disciplina de FAC1.',
    exercises: [
      {
        id: 'ex-2-1',
        listId: 'lista-2',
        number: 1,
        title: 'Condição de Peso por IMC',
        description:
          'O IMC (Índice de Massa Corporal) é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é: IMC = peso / altura². Elabore um algoritmo que, dados o peso e a altura de um adulto, determine a sua condição de acordo com a tabela: IMC < 18,5: Abaixo do peso; 18,5 ≤ IMC < 25,0: Peso ideal; 25,0 ≤ IMC < 30,0: Sobrepeso; 30,0 ≤ IMC < 35,0: Obesidade grau I; 35,0 ≤ IMC < 40,0: Obesidade grau II; IMC ≥ 40,0: Obesidade grau III.',
      },
      {
        id: 'ex-2-2',
        listId: 'lista-2',
        number: 2,
        title: 'Cálculo de Peso em Outros Planetas',
        description:
          'Escrever um algoritmo que obtenha o peso de uma pessoa na Terra e o número de um planeta. Ao final, com auxílio da tabela abaixo, calcular o peso desta pessoa no planeta escolhido: 1 Mercúrio 0,37; 2 Vênus 0,88; 3 Marte 0,38; 4 Júpiter 2,64; 5 Saturno 1,15; 6 Urano 1,17. Fórmula: pesoPlaneta = (pesoTerra/10) * gravidadePlaneta.',
      },
      {
        id: 'ex-2-3',
        listId: 'lista-2',
        number: 3,
        title: 'Opções de Vendas Parceladas para Lojistas',
        description:
          'As vendas parceladas se tornaram uma ótima opção para os lojistas que, a cada dia, criam novas promoções para tentar conquistar novos clientes. Faça um algoritmo que permita ao lojista informar o preço do produto e receber as seguintes informações: a) O valor com 10% de desconto para pagamento à vista; b) O valor da prestação para parcelamento sem juros, em 5x; c) O valor da prestação para parcelamento com juros, em 10x, com 20% de acréscimo no valor do produto.',
      },
      {
        id: 'ex-2-4',
        listId: 'lista-2',
        number: 4,
        title: 'Consumo e Custo de Combustível em Viagem',
        description:
          'Desenvolva um algoritmo que calcule o consumo de combustível de um automóvel em determinada viagem. Para isso, devem ser obtidos: i) o percurso (em quilômetros) da viagem; ii) o número de quilômetros que o carro percorre com um litro de combustível (km/l); e iii) o preço do litro do combustível. Ao final, o algoritmo deve determinar: a quantidade de combustível, em litros, consumida durante a viagem; o custo total de combustível.',
      },
      {
        id: 'ex-2-5',
        listId: 'lista-2',
        number: 5,
        title: 'Cálculo de Pedido de Cardápio de Lanchonete',
        description:
          'O cardápio de uma lanchonete é o seguinte: Cachorro quente 100 — 3,50; Bauru simples 101 — 4,50; Bauru com ovo 102 — 5,20; Hamburger 103 — 3,00; Cheeseburger 104 — 4,00; Refrigerante 105 — 2,50. Escrever um algoritmo que obtenha o código do item pedido, a quantidade e calcule o valor a ser pago. Considere que, a cada execução do algoritmo, somente será calculado o valor relacionado a um item.',
      },
      {
        id: 'ex-2-6',
        listId: 'lista-2',
        number: 6,
        title: 'Ordenação de Três Valores Conforme Parâmetro i',
        description:
          'Escrever um algoritmo que, dados um número inteiro i e três valores a, b e c, apresente os 3 números na ordem definida por i: a) i = 1: os três valores em ordem crescente; b) i = 2: os três valores em ordem decrescente; c) i = 3: o maior valor deve ser apresentado no meio dos outros.',
      },
    ],
  },
  {
    id: 'lista-3',
    numberRomano: 'III',
    title: 'LISTA III — Lista de Exercícios III de FAC',
    topic: 'Lista de Exercícios III de FAC',
    description: 'Lista com 3 questões da disciplina de FAC.',
    exercises: [
      {
        id: 'ex-3-1',
        listId: 'lista-3',
        number: 1,
        title: 'Comparação de Duas Datas (Mais Recente)',
        description:
          'Faça um programa que, dadas duas datas (cada qual com dia, mês e ano) fornecidas pelo usuário, determine qual delas é a mais recente.',
      },
      {
        id: 'ex-3-2',
        listId: 'lista-3',
        number: 2,
        title: 'Cálculo de Área de Figuras Geométricas',
        description:
          'Construir um programa que permita ao usuário calcular a área de uma figura geométrica. Para isto, o usuário deverá escolher a figura desejada ([C]írculo, [R]etângulo, [Q]uadrado ou [T]riângulo) e fornecer as informações necessárias para que a área desta figura possa ser calculada. Notas: 1. Fórmulas: Acírculo = π.raio², onde π = 3.14159; Aretângulo = base.altura; Aquadrado = lado²; Atriângulo = (base.altura)/2. 2. Caso o usuário escolha uma opção inválida, uma mensagem de erro deve ser exibida e a execução do programa terminada.',
      },
      {
        id: 'ex-3-3',
        listId: 'lista-3',
        number: 3,
        title: 'Reorganização Crescente dos Algarismos de Número de 3 Dígitos',
        description:
          'Implementar um programa que leia um valor inteiro n1. Se este não estiver no intervalo de 100 a 999, uma mensagem deve ser exibida ao usuário informando que o número é inválido e, em seguida, a execução do programa terminará. Caso o valor esteja no intervalo definido, o programa deverá criar um novo valor n2 (e exibi-lo ao final) contendo os mesmos algarismos de n1, porém em ordem crescente. Exemplos: n1=514 → n2=145; n1=929 → n2=299; n1=124 → n2=124. Nota: n1 consiste em um número inteiro positivo, com 3 algarismos. n2 também será um único número!',
      },
    ],
  },
  {
    id: 'lista-4',
    numberRomano: 'IV',
    title: 'LISTA IV — Estruturas de Repetição',
    topic: 'Estruturas de Repetição',
    description: 'Lista com 8 questões sobre estruturas de repetição.',
    exercises: [
      {
        id: 'ex-4-1',
        listId: 'lista-4',
        number: 1,
        title: 'Múltiplos de Y Inferiores a N',
        description:
          'Faça um programa que leia um número inteiro positivo N e exiba todos os múltiplos de Y inferiores a N, onde N e Y são fornecidos pelo usuário.',
      },
      {
        id: 'ex-4-2',
        listId: 'lista-4',
        number: 2,
        title: 'Série Alternada de 1 a 50 e Sua Soma',
        description:
          'Faça um programa que exiba todos os elementos da seguinte série, assim como a soma destes elementos: 1, 50, 2, 49, 3, 48, 4, 47, 5, 46, ..., 49, 2, 50, 1.',
      },
      {
        id: 'ex-4-3',
        listId: 'lista-4',
        number: 3,
        title: 'Rendimento de Aplicação Financeira Mensal',
        description:
          'Joãozinho investiu Q reais em uma aplicação com rendimento fixo de R% ao mês. Pede-se a implementação de um programa que calcule o valor (e exiba-o) disponível na conta de Joãozinho após A anos de investimento.',
      },
      {
        id: 'ex-4-4',
        listId: 'lista-4',
        number: 4,
        title: 'Contagem de Negativos e Média dos Positivos em 300 Valores',
        description:
          'Faça um programa que leia 300 números reais. Ao final, devem ser exibidas as seguintes informações: a) A quantidade de valores negativos digitados; b) A média dos valores positivos.',
      },
      {
        id: 'ex-4-5',
        listId: 'lista-4',
        number: 5,
        title: '50 Primeiros Termos da Série Alternada de Sinais',
        description:
          'Faça um programa que exiba na tela os 50 primeiros termos da seguinte série: 1, -2, 3, -4, 5, -6 ...',
      },
      {
        id: 'ex-4-6',
        listId: 'lista-4',
        number: 6,
        title: 'Números de 1 a 99 Cujos Algarismos Somem N',
        description:
          'Faça um programa que leia um número N inteiro, menor ou igual a 18. Se for maior do que 18, o programa exibirá uma mensagem de erro e terminará a sua execução; caso contrário, deverá exibir os números no intervalo de 1 a 99 cujos algarismos somem N. Exemplo: N = 12 → 39, 48, 57, 66, 75, 84 e 93.',
      },
      {
        id: 'ex-4-7',
        listId: 'lista-4',
        number: 7,
        title: 'Pesquisa de Mercado sobre Aceitação de Produto',
        description:
          'Uma determinada empresa fez uma pesquisa de mercado para saber se as pessoas gostaram ou não de um novo produto que foi lançado. Para cada pessoa entrevistada foram coletados os seguintes dados: gênero (M ou F) e resposta (G [Gostou] ou N [Não Gostou]). Sabendo-se que foram entrevistadas X pessoas, faça um programa que forneça: a) Número de pessoas que gostaram do produto; b) Número de pessoas que não gostaram do produto; c) Informação dizendo em que gênero o produto teve uma melhor aceitação.',
      },
      {
        id: 'ex-4-8',
        listId: 'lista-4',
        number: 8,
        title: 'Levantamento Estatístico de Funcionários de uma Empresa',
        description:
          'Em uma empresa deseja-se fazer um levantamento sobre algumas informações dos seus 250 funcionários. Cada funcionário deverá responder um questionário ao qual informará os seguintes dados: matrícula, gênero, idade, salário e tempo (em anos) de trabalho na empresa. A execução do programa deve exibir os seguintes itens: a) Quantidade de funcionários que ingressaram na empresa com menos de 21 anos; b) Quantidade de funcionários do gênero feminino; c) Média salarial dos homens; d) Matrícula dos funcionários mais antigo e mais novo.',
      },
    ],
  },
  {
    id: 'lista-5',
    numberRomano: 'V',
    title: 'LISTA V — Estruturas de Repetição',
    topic: 'Estruturas de Repetição',
    description: 'Lista com 10 questões sobre estruturas de repetição.',
    exercises: [
      {
        id: 'ex-5-1',
        listId: 'lista-5',
        number: 1,
        title: 'Números Pares Iguais ou Inferiores a N',
        description:
          'Dado um número inteiro N, fazer um programa que exiba os números pares iguais ou inferiores a N.',
      },
      {
        id: 'ex-5-2',
        listId: 'lista-5',
        number: 2,
        title: 'Soma dos Números de 1 a N',
        description:
          'Desenvolver um programa que calcule a soma dos números de 1 a N, sendo N um número inteiro fornecido pelo usuário.',
      },
      {
        id: 'ex-5-3',
        listId: 'lista-5',
        number: 3,
        title: 'Divisores de um Número Inteiro',
        description:
          'Fazer um programa que exiba todos os divisores de um número fornecido pelo usuário.',
      },
      {
        id: 'ex-5-4',
        listId: 'lista-5',
        number: 4,
        title: 'N Primeiros Termos de uma Progressão Aritmética (PA)',
        description:
          'Implementar um programa que exiba os N primeiros termos de uma PA (Progressão Aritmética) com primeiro termo a1 e razão r.',
      },
      {
        id: 'ex-5-5',
        listId: 'lista-5',
        number: 5,
        title: 'Série Geométrica de Potências de 2',
        description:
          'Criar um programa que exiba os N primeiros termos da seguinte série: 1,2,4,8,16,32,...',
      },
      {
        id: 'ex-5-6',
        listId: 'lista-5',
        number: 6,
        title: 'Série com Fator Multiplicativo Crescente',
        description:
          'Criar um programa que exiba os N primeiros termos da seguinte série: 1,2,8,64,1024,...',
      },
      {
        id: 'ex-5-7',
        listId: 'lista-5',
        number: 7,
        title: 'Produto dos Ímpares e Soma dos Pares',
        description:
          'Desenvolver um programa no qual o usuário entre com vários números inteiros e positivos e imprima o produto dos números ímpares e a soma dos números pares.',
      },
      {
        id: 'ex-5-8',
        listId: 'lista-5',
        number: 8,
        title: 'Arrecadação de Multas de Trânsito por Motorista',
        description:
          'Fazer um programa que auxilie o órgão regulador no cálculo do total de recursos arrecadados com a aplicação de multas de trânsito. O programa deve ler as seguintes informações para cada motorista: número da carteira de motorista; número de multas; valor de cada uma das multas. Deve ser exibido o valor da dívida de cada motorista e ao final da leitura o total de recursos arrecadados (somatório de todas as multas). O programa também deverá apresentar o número da carteira do motorista que obteve o maior número de multas.',
      },
      {
        id: 'ex-5-9',
        listId: 'lista-5',
        number: 9,
        title: 'Quinto Número Maior que 1000 com Resto 5 na Divisão por 11',
        description:
          'Escrever um programa que encontre o quinto número maior que 1000, cuja divisão por 11 tenha resto 5.',
      },
      {
        id: 'ex-5-10',
        listId: 'lista-5',
        number: 10,
        title: 'Censo de Alturas e Gênero de 50 Habitantes',
        description:
          'Foi feita uma pesquisa entre os habitantes de uma região e coletados os dados de altura e gênero das pessoas. Faça um programa que leia as informações de 50 pessoas e informe: a maior e a menor alturas encontradas; a média de altura das mulheres; a média de altura da população; o percentual de homens na população.',
      },
    ],
  },
];

export const INITIAL_RESOLUTIONS: Resolution[] = [
  {
    id: 'res-101',
    exerciseId: 'ex-1-1',
    author: 'Marcos Vinicius (Monitor FAC)',
    comment:
      'Cálculo direto aplicando porcentagens de distribuidor e impostos sobre o custo de fábrica.',
    createdAt: '12/03/2026 10:15',
    linesCount: 22,
    code: `#include <stdio.h>

int main(void) {
    double custoFabrica, percDistribuidor, percImpostos;
    double custoConsumidor;

    printf("Digite o custo de fabrica do veiculo (R$): ");
    if (scanf("%lf", &custoFabrica) != 1) {
        return 1;
    }

    printf("Digite a porcentagem do distribuidor (ex: 28): ");
    if (scanf("%lf", &percDistribuidor) != 1) {
        return 1;
    }

    printf("Digite a porcentagem dos impostos (ex: 45): ");
    if (scanf("%lf", &percImpostos) != 1) {
        return 1;
    }

    custoConsumidor = custoFabrica + (custoFabrica * (percDistribuidor / 100.0)) + (custoFabrica * (percImpostos / 100.0));

    printf("Custo ao consumidor: R$ %.2f\\n", custoConsumidor);

    return 0;
}`,
  },
  {
    id: 'res-102',
    exerciseId: 'ex-1-5',
    author: 'Beatriz Duarte',
    comment:
      'Decomposição sucessiva de quantia inteira com divisão e resto em vetor de cédulas e moedas.',
    createdAt: '14/03/2026 16:40',
    linesCount: 26,
    code: `#include <stdio.h>

int main(void) {
    int valor, resto;
    int valores[7] = {100, 50, 20, 10, 5, 2, 1};
    int i, qtd;

    printf("Digite o valor em reais: ");
    if (scanf("%d", &valor) != 1) {
        return 1;
    }

    printf("Valor informado: R$ %d,00\\n", valor);
    resto = valor;

    for (i = 0; i < 7; i++) {
        qtd = resto / valores[i];
        resto = resto % valores[i];
        if (valores[i] >= 2) {
            printf("%d nota(s) de R$ %d,00\\n", qtd, valores[i]);
        } else {
            printf("%d moeda(s) de R$ %d,00\\n", qtd, valores[i]);
        }
    }

    return 0;
}`,
  },
  {
    id: 'res-201',
    exerciseId: 'ex-2-1',
    author: 'Lucas Ferreira',
    comment:
      'Implementação da verificação em faixas do IMC segundo a tabela da OMS.',
    createdAt: '18/03/2026 09:20',
    linesCount: 38,
    code: `#include <stdio.h>

int main(void) {
    double peso, altura, imc;

    printf("Digite o peso em kg (ex: 70.5): ");
    if (scanf("%lf", &peso) != 1) return 1;

    printf("Digite a altura em metros (ex: 1.75): ");
    if (scanf("%lf", &altura) != 1 || altura <= 0.0) return 1;

    imc = peso / (altura * altura);
    printf("IMC calculado: %.2f\\n", imc);
    printf("Condicao: ");

    if (imc < 18.5) {
        printf("Abaixo do peso\\n");
    } else if (imc < 25.0) {
        printf("Peso ideal\\n");
    } else if (imc < 30.0) {
        printf("Sobrepeso\\n");
    } else if (imc < 35.0) {
        printf("Obesidade grau I\\n");
    } else if (imc < 40.0) {
        printf("Obesidade grau II\\n");
    } else {
        printf("Obesidade grau III\\n");
    }

    return 0;
}`,
  },
  {
    id: 'res-301',
    exerciseId: 'ex-3-1',
    author: 'Guilherme Rocha',
    comment:
      'Comparação hierárquica de ano, depois mês, depois dia para encontrar a data mais recente.',
    createdAt: '22/03/2026 14:05',
    linesCount: 42,
    code: `#include <stdio.h>

int main(void) {
    int d1, m1, a1;
    int d2, m2, a2;

    printf("Digite a primeira data (dia mes ano): ");
    if (scanf("%d %d %d", &d1, &m1, &a1) != 3) return 1;

    printf("Digite a segunda data (dia mes ano): ");
    if (scanf("%d %d %d", &d2, &m2, &a2) != 3) return 1;

    if (a1 > a2) {
        printf("Data mais recente: %02d/%02d/%04d\\n", d1, m1, a1);
    } else if (a2 > a1) {
        printf("Data mais recente: %02d/%02d/%04d\\n", d2, m2, a2);
    } else {
        /* Mesmo ano: compara meses */
        if (m1 > m2) {
            printf("Data mais recente: %02d/%02d/%04d\\n", d1, m1, a1);
        } else if (m2 > m1) {
            printf("Data mais recente: %02d/%02d/%04d\\n", d2, m2, a2);
        } else {
            /* Mesmo mes: compara dias */
            if (d1 > d2) {
                printf("Data mais recente: %02d/%02d/%04d\\n", d1, m1, a1);
            } else if (d2 > d1) {
                printf("Data mais recente: %02d/%02d/%04d\\n", d2, m2, a2);
            } else {
                printf("As duas datas sao exatamente iguais: %02d/%02d/%04d\\n", d1, m1, a1);
            }
        }
    }

    return 0;
}`,
  },
  {
    id: 'res-401',
    exerciseId: 'ex-4-1',
    author: 'Patricia Mendes',
    comment:
      'Laço simples incrementando passo a passo ou por múltiplos diretos de Y.',
    createdAt: '26/03/2026 11:30',
    linesCount: 22,
    code: `#include <stdio.h>

int main(void) {
    int n, y, m;

    printf("Digite o valor de N (limite superior): ");
    if (scanf("%d", &n) != 1 || n <= 0) return 1;

    printf("Digite o valor de Y: ");
    if (scanf("%d", &y) != 1 || y <= 0) return 1;

    printf("Multiplos de %d inferiores a %d:\\n", y, n);
    for (m = y; m < n; m += y) {
        printf("%d ", m);
    }
    printf("\\n");

    return 0;
}`,
  },
  {
    id: 'res-501',
    exerciseId: 'ex-5-9',
    author: 'Professor / Monitor FAC',
    comment:
      'Varredura a partir de 1001 contabilizando números cujo resto por 11 seja 5 até atingir o quinto.',
    createdAt: '01/04/2026 17:00',
    linesCount: 25,
    code: `#include <stdio.h>

int main(void) {
    int num = 1001;
    int contagem = 0;
    int resultado = -1;

    while (contagem < 5) {
        if (num % 11 == 5) {
            contagem++;
            if (contagem == 5) {
                resultado = num;
                break;
            }
        }
        num++;
    }

    printf("O quinto numero maior que 1000 cuja divisao por 11 tem resto 5 eh: %d\\n", resultado);
    return 0;
}`,
  },
  // ===== NOVAS RESOLUÇÕES A ADICIONAR AO ARRAY INITIAL_RESOLUTIONS =====

  // --- Lista 1 ---

  // ex-1-1 (Custo ao Consumidor) - Anderson
  {
    id: 'res-anderson-1-1',
    exerciseId: 'ex-1-1',
    author: 'Anderson',
    comment:
      'Cálculo direto somando os percentuais de distribuidor e impostos ao custo de fábrica.',
    createdAt: '13/08/2026 20:00',
    linesCount: 15,
    code: `#include <stdio.h>
int main()
{
    int custo1, distribuidor, impostos, custo2;
    printf("Digite o custo de fabrica do carro ");
    scanf("%d", &custo1);
    printf("Digite a porcentagem do distribuidor ");
    scanf("%d", &distribuidor);
    printf("Digite a porcentagem de impostos ");
    scanf("%d", &impostos);
    custo2 = ((custo1 * distribuidor / 100) + (custo1 * impostos / 100)) + custo1;
    printf("O custo de consumidor e %d", custo2);
    return 0;
}`,
  },
  // ex-1-1 (variação) - Anônimo (usa void main + variáveis diferentes)
  {
    id: 'res-anon-1-1b',
    exerciseId: 'ex-1-1',
    author: 'Estudante Anônimo',
    comment:
      'Aplica os dois percentuais como diferenças multiplicativas antes de somar ao custo original.',
    createdAt: '20/08/2026 10:00',
    linesCount: 9,
    code: `#include <stdio.h>
void main()
{
    float custo;
    printf("custo\\n");
    scanf("%f", &custo);
    custo = ((custo * 1.1) - custo) + ((custo * 1.2) - custo) + custo;
    printf("novo custo %.f \\n", custo);
}`,
  },

  // ex-1-2 (Categoria de Nadador) - Anderson
  {
    id: 'res-anderson-1-2',
    exerciseId: 'ex-1-2',
    author: 'Anderson',
    comment:
      'Classificação simples com unsigned int para bloquear idades negativas.',
    createdAt: '13/08/2026 20:05',
    linesCount: 22,
    code: `#include <stdio.h>
int main()
{
    unsigned int idade;
    printf("Digite uma idade ");
    scanf("%u", &idade);
    if (idade <= 4)
    {
        printf("infantil A");
    }
    else if (idade <= 7)
    {
        printf("infantil B");
    }
    else if (idade <= 10)
    {
        printf("infantil C");
    }
    else if (idade <= 13)
    {
        printf("juvenil A");
    }
    else if (idade <= 17)
    {
        printf("juvenil B");
    }
    else
    {
        printf("Adulto");
    }
    return 0;
}`,
  },
  // ex-1-2 (variação) - Anônimo (usa laço for para múltiplos nadadores)
  {
    id: 'res-anon-1-2b',
    exerciseId: 'ex-1-2',
    author: 'Estudante Anônimo',
    comment:
      'Repete a classificação para uma quantidade de nadadores informada pelo usuário, usando um laço for.',
    createdAt: '13/08/2026 20:10',
    linesCount: 30,
    code: `#include <stdio.h>
void main()
{
    int idade, i, nadadores;
    printf("informe a quantidade de nadadores\\n");
    scanf("%d", &nadadores);

    for (i = 0; i < nadadores; i++)
    {
        printf("qual a sua idade\\n");
        scanf("%d", &idade);

        if (idade <= 4)
        {
            printf("infantil a\\n");
        }
        else if (idade <= 7)
        {
            printf("infantil b\\n");
        }
        else if (idade <= 10)
        {
            printf("infantil c\\n");
        }
        else if (idade <= 13)
        {
            printf("juvenil a\\n");
        }
        else if (idade <= 17)
        {
            printf("juvenil b\\n");
        }
        else if (idade >= 18)
        {
            printf("adulto\\n");
        }
        else
        {
            printf("resposta invalida");
        }
    }
}`,
  },

  // ex-1-3 (Peso ideal) - Anderson
  {
    id: 'res-anderson-1-3',
    exerciseId: 'ex-1-3',
    author: 'Anderson',
    comment:
      'Leitura do gênero por código numérico (1 ou 2) e aplicação da fórmula correspondente.',
    createdAt: '13/08/2026 20:15',
    linesCount: 15,
    code: `#include <stdio.h>
int main()
{
    int genero;
    float peso, altura;
    printf("Digite 1 para homem e 2 para mulher");
    scanf("%d", &genero);
    printf("Digite a sua altura");
    scanf("%f", &altura);
    if (genero == 1)
    {
        peso = (72.7 * altura) - 58;
        printf("Seu peso ideal e %f", peso);
    }
    else
    {
        peso = (62.1 * altura) - 44.7;
        printf("Seu peso ideal e %f", peso);
    }
    return 0;
}`,
  },

  // ex-1-4 (Crédito Bancário) - Anderson
  {
    id: 'res-anderson-1-4',
    exerciseId: 'ex-1-4',
    author: 'Anderson',
    comment:
      'Verificação em cadeia das faixas de saldo, calculando o percentual de crédito correspondente.',
    createdAt: '13/08/2026 20:20',
    linesCount: 20,
    code: `#include <stdio.h>
int main()
{
    float saldo, credito;
    printf("Digite o seu saldo ");
    scanf("%f", &saldo);
    if (saldo < 1000)
    {
        printf("nenhum credito");
    }
    else if (saldo <= 1499.99)
    {
        credito = saldo * 0.2;
        printf("20%% do saldo medio %f", credito);
    }
    else if (saldo <= 2499.99)
    {
        credito = saldo * 0.3;
        printf("30%% do saldo medio %f", credito);
    }
    else
    {
        credito = saldo * 0.4;
        printf("40%% do saldo medio %f", credito);
    }
    return 0;
}`,
  },

  // ex-1-5 (Decomposição em notas) - Anderson
  {
    id: 'res-anderson-1-5',
    exerciseId: 'ex-1-5',
    author: 'Anderson',
    comment:
      'Usa divisão e resto sucessivos para cada valor de nota/moeda, imprimindo a contagem de cada uma.',
    createdAt: '13/08/2026 20:25',
    linesCount: 36,
    code: `#include <stdio.h>
int main()
{
    int dinheiro, cem, cinquenta, vinte, dez, cinco, dois, um;
    printf("Digite uma quantia ");
    scanf("%d", &dinheiro);
    if (dinheiro >= 100)
    {
        cem = dinheiro / 100;
        dinheiro %= 100;
        printf("Notas de cem: %d\\n", cem);
    }
    if (dinheiro >= 50)
    {
        cinquenta = dinheiro / 50;
        dinheiro %= 50;
        printf("Notas de cinquenta: %d\\n", cinquenta);
    }
    if (dinheiro >= 20)
    {
        vinte = dinheiro / 20;
        dinheiro %= 20;
        printf("Notas de vinte: %d\\n", vinte);
    }
    if (dinheiro >= 10)
    {
        dez = dinheiro / 10;
        dinheiro %= 10;
        printf("Notas de dez: %d\\n", dez);
    }
    if (dinheiro >= 5)
    {
        cinco = dinheiro / 5;
        dinheiro %= 5;
        printf("Notas de cinco: %d\\n", cinco);
    }
    if (dinheiro >= 2)
    {
        dois = dinheiro / 2;
        dinheiro %= 2;
        printf("Notas de dois: %d\\n", dois);
    }
    if (dinheiro == 1)
    {
        um = dinheiro / 1;
        dinheiro %= 1;
        printf("Notas de um: %d\\n", um);
    }
    return 0;
}`,
  },

  // ex-1-6 (Ordem da data no ano) - Anderson
  {
    id: 'res-anderson-1-6',
    exerciseId: 'ex-1-6',
    author: 'Anderson',
    comment:
      'Verifica o mês e soma os dias acumulados dos meses anteriores para achar a ordem no ano.',
    createdAt: '13/08/2026 20:30',
    linesCount: 60,
    code: `#include <stdio.h>
int main()
{
    int dia, mes, ordem;
    printf("Digite o digito de um dia \\n");
    scanf("%d", &dia);
    printf("Digite o digito de um mes \\n");
    scanf("%d", &mes);
    if (dia <= 31 && mes == 1) { ordem = dia; printf("%d", ordem); }
    if (dia <= 59 && mes == 2) { ordem = dia + 31; printf("%d", ordem); }
    if (dia <= 90 && mes == 3) { ordem = dia + 59; printf("%d", ordem); }
    if (dia <= 120 && mes == 4) { ordem = dia + 90; printf("%d", ordem); }
    if (dia <= 151 && mes == 5) { ordem = dia + 120; printf("%d", ordem); }
    if (dia <= 181 && mes == 6) { ordem = dia + 151; printf("%d", ordem); }
    if (dia <= 212 && mes == 7) { ordem = dia + 181; printf("%d", ordem); }
    if (dia <= 243 && mes == 8) { ordem = dia + 212; printf("%d", ordem); }
    if (dia <= 273 && mes == 9) { ordem = dia + 243; printf("%d", ordem); }
    if (dia <= 304 && mes == 10) { ordem = dia + 273; printf("%d", ordem); }
    if (dia <= 334 && mes == 11) { ordem = dia + 304; printf("%d", ordem); }
    if (dia <= 334 && mes == 12) { ordem = dia + 334; printf("%d", ordem); }
}`,
  },

  // ex-1-7 (Salário semanal) - Anderson
  {
    id: 'res-anderson-1-7',
    exerciseId: 'ex-1-7',
    author: 'Anderson',
    comment:
      'Verifica se as horas excedem 40 e aplica o adicional de 50% apenas sobre as horas extras.',
    createdAt: '13/08/2026 20:35',
    linesCount: 18,
    code: `#include <stdio.h>
int main()
{
    int salario, horas, total;
    printf("Digite o salario por hora \\n");
    scanf("%d", &salario);
    printf("Digite as horas trabalhadas \\n");
    scanf("%d", &horas);
    if (horas <= 40)
    {
        total = salario * horas;
        printf("%d", total);
    }
    else
    {
        total = (salario * 1.5) * (horas - 40) + (salario * 40);
        printf("%d", total);
    }
    return 0;
}`,
  },

  // ex-1-8 (Conta de hotel) - Anderson
  {
    id: 'res-anderson-1-8',
    exerciseId: 'ex-1-8',
    author: 'Anderson',
    comment:
      'Usa código numérico para o tipo de apartamento e calcula subtotal, taxa e total por ramos separados.',
    createdAt: '13/08/2026 20:40',
    linesCount: 45,
    code: `#include <stdio.h>
int main()
{
    char nome[50];
    int tipo, diarias, consumo, total, taxa, subtotal, valorDiarias;
    printf("Digite seu nome \\n");
    scanf("%s", nome);
    printf("Escolha:\\n 1 para tipo A de apartamento\\n2 para tipo B\\n3 para tipo C\\n4 para tipo D \\n");
    scanf("%d", &tipo);
    printf("Digite a quantidade de diarias \\n");
    scanf("%d", &diarias);
    printf("Digite o valor de consumo interno \\n");
    scanf("%d", &consumo);
    if (tipo == 1)
    {
        total = ((350 * diarias) + consumo) * 1.1;
        valorDiarias = 350 * diarias;
        subtotal = (350 * diarias) + consumo;
        taxa = total - subtotal;
        printf("%s, %d, %d, %d, %d, %d, %d\\n", nome, tipo, total, valorDiarias, consumo, subtotal, taxa);
    }
    if (tipo == 2)
    {
        total = ((275 * diarias) + consumo) * 1.1;
        valorDiarias = 275 * diarias;
        subtotal = (275 * diarias) + consumo;
        taxa = total - subtotal;
        printf("%s, %d, %d, %d, %d, %d, %d\\n", nome, tipo, total, valorDiarias, consumo, subtotal, taxa);
    }
    if (tipo == 3)
    {
        total = ((200 * diarias) + consumo) * 1.1;
        valorDiarias = 200 * diarias;
        subtotal = (200 * diarias) + consumo;
        taxa = total - subtotal;
        printf("%s, %d, %d, %d, %d, %d, %d\\n", nome, tipo, total, valorDiarias, consumo, subtotal, taxa);
    }
    if (tipo == 4)
    {
        total = ((150 * diarias) + consumo) * 1.1;
        valorDiarias = 150 * diarias;
        subtotal = (150 * diarias) + consumo;
        taxa = total - subtotal;
        printf("%s, %d, %d, %d, %d, %d, %d", nome, tipo, total, valorDiarias, consumo, subtotal, taxa);
    }
    return 0;
}`,
  },

  // --- Lista 2 ---

  // ex-2-1 (IMC) - Anônimo (professor, versão 1 - if/else encadeado, comentários próprios)
  {
    id: 'res-anon-2-1a',
    exerciseId: 'ex-2-1',
    author: 'Estudante Anônimo',
    comment:
      'Usa blocos if/else aninhados em cascata em vez de else if, com comentários explicando cada etapa.',
    createdAt: '03/09/2026 09:00',
    linesCount: 35,
    code: `#include <stdio.h>
int main()
{
    float imc, p, h;
    printf ("qual seu peso? ");
    scanf ("%f",&p);
    printf ("qual sua altura? ");
    scanf ("%f", &h);
    imc = p/(h*h);
    printf ("IMC: %.2f\\n", imc);
    if (imc<18.5)
    {
        printf ("abaixo do peso");
    }
    else
    {
        if (imc<25)
        {
            printf ("peso ideal");
        }
        else
        {
            if (imc<30)
            {
                printf ("sobrepeso");
            }
            else
            {
                if (imc<35)
                {
                    printf ("obesidade grau I");
                }
                else
                {
                    if (imc<40)
                    {
                        printf ("obesidade grau II");
                    }
                    else
                    {
                        printf ("obesidade grau III");
                    }
                }
            }
        }
    }
}`,
  },
  // ex-2-1 (variação) - Anderson (else if direto com pow())
  {
    id: 'res-anderson-2-1',
    exerciseId: 'ex-2-1',
    author: 'Anderson',
    comment:
      'Usa pow() da math.h para o quadrado da altura e else if em cadeia.',
    createdAt: '13/08/2026 20:50',
    linesCount: 25,
    code: `#include <stdio.h>
#include <math.h>
int main()
{
    int peso;
    float altura, imc;
    printf("Digite seu peso\\n");
    scanf("%d", &peso);
    printf("Digite sua altura\\n");
    scanf("%f", &altura);
    imc = peso / pow(altura, 2);
    if (imc < 18.5)
    {
        printf("Abaixo do peso peso %f", imc);
    }
    else if (imc < 25)
    {
        printf("Peso ideal %f", imc);
    }
    else if (imc < 30)
    {
        printf("Sobrepeso %f", imc);
    }
    else if (imc < 35)
    {
        printf("Obesidade grau I %f", imc);
    }
    else if (imc < 40)
    {
        printf("Obesidade grau II %f", imc);
    }
    else
    {
        printf("Obesidade grau III %f", imc);
    }
    return 0;
}`,
  },

  // ex-2-2 (Peso nos planetas) - Anônimo (professor, versão if/else)
  {
    id: 'res-anon-2-2a',
    exerciseId: 'ex-2-2',
    author: 'Estudante Anônimo',
    comment:
      'Compara o número do planeta com if/else encadeado e imprime menu completo antes da leitura.',
    createdAt: '03/09/2026 09:10',
    linesCount: 30,
    code: `#include<stdio.h>
int main(){
    float peso, peso_planeta;
    int nplan;
    printf("Informe o seu peso(Kg): ");
    scanf("%f", &peso);
    printf("Informe o número do planeta: \\n");
    printf("Mercurio [1] \\n");
    printf("Venus [2] \\n");
    printf("Marte [3] \\n");
    printf("Jupiter [4] \\n");
    printf("Saturno [5] \\n");
    printf("Urano [6] \\n");
    scanf("%d", &nplan);
    if (nplan == 1){
        peso_planeta = (peso / 10) * 0.37;
        printf("Seu peso em Mercurio eh: %.2f Kg\\n", peso_planeta);
    } else if (nplan == 2){
        peso_planeta = (peso / 10) * 0.88;
        printf("Seu peso em Venus eh: %.2f Kg\\n", peso_planeta);
    } else if (nplan == 3){
        peso_planeta = (peso / 10) * 0.38;
        printf("Seu peso em Marte eh: %.2f Kg\\n", peso_planeta);
    } else if (nplan == 4){
        peso_planeta = (peso / 10) * 2.64;
        printf("Seu peso em Jupiter eh: %.2f Kg\\n", peso_planeta);
    } else if (nplan == 5){
        peso_planeta = (peso / 10) * 1.15;
        printf("Seu peso em Saturno eh: %.2f Kg\\n", peso_planeta);
    } else {
        peso_planeta = (peso / 10) * 1.17;
        printf("Seu peso em Urano eh: %.2f Kg\\n", peso_planeta);
    }
    return 0;
}`,
  },
  // ex-2-2 (variação) - Anônimo (versão switch)
  {
    id: 'res-anon-2-2b',
    exerciseId: 'ex-2-2',
    author: 'Estudante Anônimo',
    comment:
      'Mesma lógica, mas usando switch/case para escolher a gravidade do planeta em vez de if/else.',
    createdAt: '03/09/2026 09:15',
    linesCount: 36,
    code: `#include <stdio.h>
int main()
{
    float pesoterra;
    int numplaneta;
    float pesoplaneta;
    float gravidade;
    printf("Informe seu peso \\n");
    scanf("%f", &pesoterra);
    printf("Escolha um planeta \\n");
    scanf("%d", &numplaneta);
    switch (numplaneta) {
        case 1:
            gravidade=0.37;
            break;
        case 2:
            gravidade=0.88;
            break;
        case 3:
            gravidade=0.38;
            break;
        case 4:
            gravidade=2.64;
            break;
        case 5:
            gravidade=1.15;
            break;
        case 6:
            gravidade=1.17;
            break;
    }
    pesoplaneta=(pesoterra/10)*gravidade;
    printf("Seu peso é:\\n%.2f", pesoplaneta);
    return 0;
}`,
  },
  // ex-2-2 (variação) - Anderson (usa else if com printf único e switch de escolha textual)
  {
    id: 'res-anderson-2-2',
    exerciseId: 'ex-2-2',
    author: 'Anderson',
    comment:
      'Usa a mesma cadeia de else if, mas com o número do planeta ecoado junto ao resultado final.',
    createdAt: '13/08/2026 20:55',
    linesCount: 45,
    code: `#include <stdio.h>
int main()
{
    int escolhaPlaneta;
    float pesoTerra, planetaGravidade, pesoPlaneta;
    printf("Digite seu peso \\n");
    scanf("%f", &pesoTerra);
    printf("Escolha o dígito para um planeta: 1 Mercúrio, 2 Vênus, 3 Marte, 4 Júpiter, 5 Saturno, 6 Urano \\n");
    scanf("%d", &escolhaPlaneta);
    if (escolhaPlaneta == 1)
    {
        planetaGravidade = 0.37;
        pesoPlaneta = (pesoTerra / 10) * planetaGravidade;
        printf("Planeta: %d\\n Peso no planeta escolhido: %f\\n", escolhaPlaneta, pesoPlaneta);
    }
    else if (escolhaPlaneta == 2)
    {
        planetaGravidade = 0.88;
        pesoPlaneta = (pesoTerra / 10) * planetaGravidade;
        printf("Planeta: %d\\n Peso no planeta escolhido: %f\\n", escolhaPlaneta, pesoPlaneta);
    }
    else if (escolhaPlaneta == 3)
    {
        planetaGravidade = 0.38;
        pesoPlaneta = (pesoTerra / 10) * planetaGravidade;
        printf("Planeta: %d\\n Peso no planeta escolhido: %f\\n", escolhaPlaneta, pesoPlaneta);
    }
    else if (escolhaPlaneta == 4)
    {
        planetaGravidade = 2.64;
        pesoPlaneta = (pesoTerra / 10) * planetaGravidade;
        printf("Planeta: %d\\n Peso no planeta escolhido: %f\\n", escolhaPlaneta, pesoPlaneta);
    }
    else if (escolhaPlaneta == 5)
    {
        planetaGravidade = 1.15;
        pesoPlaneta = (pesoTerra / 10) * planetaGravidade;
        printf("Planeta: %d\\n Peso no planeta escolhido: %f\\n", escolhaPlaneta, pesoPlaneta);
    }
    else if (escolhaPlaneta == 6)
    {
        planetaGravidade = 1.17;
        pesoPlaneta = (pesoTerra / 10) * planetaGravidade;
        printf("Planeta: %d\\n Peso no planeta escolhido: %f\\n", escolhaPlaneta, pesoPlaneta);
    }
    else
    {
        printf("Escolha inválida. Responda apenas com um valor entre 1 e 6");
    }
    return 0;
}`,
  },

  // ex-2-3 (Vendas parceladas) - Anônimo (versão simples, sem char)
  {
    id: 'res-anon-2-3a',
    exerciseId: 'ex-2-3',
    author: 'Estudante Anônimo',
    comment:
      'Lê o preço e imprime as três formas de pagamento de uma vez, sem pedir escolha do usuário.',
    createdAt: '03/09/2026 09:20',
    linesCount: 20,
    code: `#include <stdio.h>
void main()
{
    float precoproduto, valor10, valorpar5, valorpar10;
    printf("\\tDigite o valor do produto: ");
    scanf("%f", &precoproduto);
    valor10 = precoproduto - (precoproduto*0.10);
    valorpar5 = precoproduto/5;
    valorpar10 = (precoproduto*1.20)/10;
    printf("\\n\\t\\tO valor do produto com 10 porcento de desconto é: %.2f", valor10);
    printf("\\n\\n\\t\\tO valor do produto parcelado em 5x é: %.2f", valorpar5);
    printf("\\n\\n\\t\\tO valor do produto parcelado em 10x com juros é: %.2f", valorpar10);
}`,
  },
  // ex-2-3 (variação) - Anônimo (pede escolha via char e usa fflush)
  {
    id: 'res-anon-2-3b',
    exerciseId: 'ex-2-3',
    author: 'Estudante Anônimo',
    comment:
      'Pede ao usuário para escolher a forma de pagamento via caractere (A/B/C) antes de calcular.',
    createdAt: '03/09/2026 09:25',
    linesCount: 22,
    code: `#include <stdio.h>
int main ()
{
    float valor, parcelas;
    char metpagamento;
    printf ("Insira o valor do produto: ");
    scanf ("%f", &valor);
    printf ("Insira o metodo de pagamento:\\nA) Pagamento a vista\\nB) Parcelamento em 5x sem juros \\nC) Parcelamento em 10x, com juros de 20%%\\n");
    fflush (stdin);
    scanf ("%c", &metpagamento);
    if ((metpagamento=='A') || (metpagamento== 'a'))
    {
        valor=(valor-(valor*0.1));
        printf ("Seu produto tera 10%% de desconto! O valor final sera de: R$%.2f",valor);
    }
    else if ((metpagamento=='B') || (metpagamento=='b'))
    {
        printf ("O valor do seu produto ficara em: R$%.2f valor em 5 parcelas de R$%.2f", valor, valor/5);
    }
    else
    {
        valor=(valor+(valor*0.2));
        printf ("O valor do seu produto ficara em: R$%.2f R$ em 10 parcelas de R$%.2f", valor, valor/10);
    }
}`,
  },
  // ex-2-3 (variação) - Anderson (escolha numérica com else if)
  {
    id: 'res-anderson-2-3',
    exerciseId: 'ex-2-3',
    author: 'Anderson',
    comment:
      'Usa um número (1, 2 ou 3) para a escolha da forma de pagamento em vez de letra.',
    createdAt: '13/08/2026 21:00',
    linesCount: 22,
    code: `#include <stdio.h>
int main()
{
    float precoProduto, precoDesconto, precoParcela5x, precoParcela10x;
    int escolhaPagamento;
    printf("Digite o preço de um produto \\n");
    scanf("%f", &precoProduto);
    printf("Escolha o dígito do tipo de pagamento: 1 à vista com 10%% de desconto.\\n 2 parcelado em 5x sem juros.\\n 3 parcelado em 10x com juros \\n");
    scanf("%d", &escolhaPagamento);
    if (escolhaPagamento == 1)
    {
        precoDesconto = precoProduto * 0.9;
        printf("O valor escolhido foi o com 10%% de desconto para pagamento à vista %f", precoDesconto);
    }
    else if (escolhaPagamento == 2)
    {
        precoParcela5x = precoProduto / 5;
        printf("O valor escolhido foi o com a prestação para parcelamento sem juros, em 5x %f", precoParcela5x);
    }
    else if (escolhaPagamento == 3)
    {
        precoParcela10x = (precoProduto * 1.2) / 10;
        printf("O valor escolhido foi o com a prestação para parcelamento com juros, em 10x %f", precoParcela10x);
    }
    else
    {
        printf("Escolha inválida. Responda apenas com um valor entre 1 e 3");
    }
    return 0;
}`,
  },

  // ex-2-4 (Consumo de combustível) - Anônimo
  {
    id: 'res-anon-2-4a',
    exerciseId: 'ex-2-4',
    author: 'Estudante Anônimo',
    comment:
      'Lê percurso como inteiro e calcula consumo e custo total de forma direta.',
    createdAt: '03/09/2026 09:30',
    linesCount: 18,
    code: `#include <stdio.h>
int main(){
    int percurso;
    float vl, consumo, total, kml;
    printf("Informe o percurso:\\n");
    scanf("%i", &percurso);
    printf("informe o número de quilômetros que o carro percorre com um litro de combustível (km/l): ");
    scanf("%f", &kml);
    printf("informe qual valor do litro:");
    scanf("%f", &vl);
    consumo = (percurso / kml);
    total = (consumo * vl);
    printf("o percurso consumiu: %.2f\\n", consumo);
    printf("o custo total do combustivel ficou em:  %.2f ", total);
}`,
  },
  // ex-2-4 (variação) - Anderson (tudo float, sem tipo misto)
  {
    id: 'res-anderson-2-4',
    exerciseId: 'ex-2-4',
    author: 'Anderson',
    comment:
      'Declara o percurso como float em vez de inteiro, evitando conversão implícita na divisão.',
    createdAt: '13/08/2026 21:05',
    linesCount: 18,
    code: `#include <stdio.h>
int main()
{
    float percurso, kmPorLitro, precoLitro, consumo, custoTotal;
    printf("Digite o km da viagem \\n");
    scanf("%f", &percurso);
    printf("Digite o consumo km/L do veículo ");
    scanf("%f", &kmPorLitro);
    printf("Digite preço de 1 litro do combustível \\n");
    scanf("%f", &precoLitro);
    consumo = percurso / kmPorLitro;
    custoTotal = consumo * precoLitro;
    printf("A quantidade de combustível, em litros, consumida durante a viagem foi %f e o custo total de combustível foi %f ", consumo, custoTotal);
    return 0;
}`,
  },

  // ex-2-5 (Cardápio lanchonete) - Anônimo (usa switch)
  {
    id: 'res-anon-2-5a',
    exerciseId: 'ex-2-5',
    author: 'Estudante Anônimo',
    comment:
      'Usa switch/case para definir o preço do produto a partir do código informado.',
    createdAt: '03/09/2026 09:35',
    linesCount: 26,
    code: `#include <stdio.h>
int main() {
    int codigo, quantidade;
    float precoProduto, precoFinal;
    printf("Informe o código do item:");
    scanf("%d", &codigo);
    printf("Informe a quantidade desejada:");
    scanf("%d", &quantidade);
    switch (codigo)
    {
        case 100: precoProduto = 3.50;
                  break;
        case 101: precoProduto = 4.50;
                  break;
        case 102: precoProduto = 5.20;
                  break;
        case 103: precoProduto = 3.00;
                  break;
        case 104: precoProduto = 4.00;
                  break;
        case 105: precoProduto = 2.50;
                  break;
    }
    precoFinal = precoProduto * quantidade;
    printf("O valor a ser pago é de R$ %.2f", precoFinal);
    return 0;
}`,
  },
  // ex-2-5 (variação) - Anderson (usa else if em vez de switch)
  {
    id: 'res-anderson-2-5',
    exerciseId: 'ex-2-5',
    author: 'Anderson',
    comment:
      'Calcula o preço final dentro de cada bloco else if, sem separar a lógica em duas etapas.',
    createdAt: '13/08/2026 21:10',
    linesCount: 32,
    code: `#include <stdio.h>
int main()
{
    int codigo, quantidade;
    float preco;
    printf("Digite um código entre os itens a seguir: \\n Código 100 - Cachorro quente - R$ 3,50 \\n Código 101 - Bauru simples - R$ 4.50 \\n Código 102 - Bauru com ovo - R$ 5,20 \\n Código 103 - Hambúrguer - R$ 3,00 \\n Código 104 - Cheeseburguer - R$ 4,00 \\n - Código 105 - Refrigerante - R$ 2,50 \\n");
    scanf("%d", &codigo);
    printf("Digite a quantidade de um item \\n");
    scanf("%d", &quantidade);
    if (codigo == 100)
    {
        preco = 3.50 * quantidade;
        printf("%f R$", preco);
    }
    else if (codigo == 101)
    {
        preco = 4.50 * quantidade;
        printf("%f R$", preco);
    }
    else if (codigo == 102)
    {
        preco = 5.20 * quantidade;
        printf("%f R$", preco);
    }
    else if (codigo == 103)
    {
        preco = 3.00 * quantidade;
        printf("%f R$", preco);
    }
    else if (codigo == 104)
    {
        preco = 4.00 * quantidade;
        printf("%f R$", preco);
    }
    else if (codigo == 105)
    {
        preco = 2.50 * quantidade;
        printf("%f R$", preco);
    }
    else
    {
        printf("Escolha inválida. Responda apenas com um valor entre 100 e 105");
    }
    return 0;
}`,
  },

  // ex-2-6 (Ordenação de 3 valores por i) - Anônimo (versão com ints, if aninhado)
  {
    id: 'res-anon-2-6a',
    exerciseId: 'ex-2-6',
    author: 'Estudante Anônimo',
    comment:
      'Ordena determinando maior, médio e menor primeiro, depois escolhe a impressão com switch(i).',
    createdAt: '03/09/2026 09:45',
    linesCount: 55,
    code: `#include <stdio.h>
int main()
{
    int i, a, b, c;
    int maior, medio, menor;
    do {
        printf("Insira um numero de 1 a 3:\\n");
        scanf("%d", &i);
        if (i < 1 || i > 3) {
            printf("Opcao invalida!\\n");
        }
    } while (i < 1 || i > 3);
    printf("Insira 3 numeros:\\n");
    scanf("%d %d %d", &a, &b, &c);
    if (a>=b && a>=c) {
        maior=a;
        if (b>=c) { medio=b; menor=c; }
        else { medio=c; menor=b; }
    }
    else if (b>=c) {
        maior=b;
        if (a>=c) { medio=a; menor=c; }
        else { medio=c; menor=a; }
    }
    else {
        maior=c;
        if(a>=b) { medio=a; menor=b; }
        else { medio=b; menor=a; }
    }
    switch(i) {
        case 1:
            printf("%d, %d, %d\\n", menor, medio, maior);
            break;
        case 2:
            printf("%d, %d, %d\\n", maior, medio, menor);
            break;
        case 3:
            printf("%d, %d, %d\\n", menor, maior, medio);
            break;
    }
    return 0;
}`,
  },
  // ex-2-6 (variação) - Anderson (compara direto em cada ramo de i, com floats)
  {
    id: 'res-anderson-2-6',
    exerciseId: 'ex-2-6',
    author: 'Anderson',
    comment:
      'Testa cada valor de i separadamente e refaz as comparações de ordem dentro de cada ramo.',
    createdAt: '13/08/2026 21:15',
    linesCount: 60,
    code: `#include <stdio.h>
int main()
{
    int numero, a, b, c;
    printf("Digite 1 para ordem crescente, 2 para ordem decrescente e 3 para o maior no meio \\n");
    scanf("%d", &numero);
    printf("Digite um segundo número \\n");
    scanf("%d", &a);
    printf("Digite um terceiro número \\n");
    scanf("%d", &b);
    printf("Digite um quarto número \\n");
    scanf("%d", &c);
    if (numero == 1)
    {
        if (a >= b && a >= c)
        {
            if (b > c) { printf("%d, %d, %d", c, b, a); }
            else { printf("%d, %d, %d", b, c, a); }
        }
        else if (b >= a && b >= c)
        {
            if (a > c) { printf("%d, %d, %d", c, a, b); }
            else { printf("%d, %d, %d", a, c, b); }
        }
        else
        {
            if (a > b) { printf("%d, %d, %d", b, a, c); }
            else { printf("%d, %d, %d", a, b, c); }
        }
    }
    else if (numero == 2)
    {
        if (a <= b && a <= c)
        {
            if (b < c) { printf("%d, %d, %d", c, b, a); }
            else { printf("%d, %d, %d", b, c, a); }
        }
        else if (b <= a && b <= c)
        {
            if (a < c) { printf("%d, %d, %d", c, a, b); }
            else { printf("%d, %d, %d", a, c, b); }
        }
        else
        {
            if (a < b) { printf("%d, %d, %d", b, a, c); }
            else { printf("%d, %d, %d", a, b, c); }
        }
    }
    else if (numero == 3)
    {
        if (a >= b && a >= c)
        {
            if (b > c) { printf("%d, %d, %d", c, a, b); }
            else { printf("%d, %d, %d", b, a, c); }
        }
        else if (b >= a && b >= c)
        {
            if (a > c) { printf("%d, %d, %d", c, b, a); }
            else { printf("%d, %d, %d", a, b, c); }
        }
        else
        {
            if (a > b) { printf("%d, %d, %d", b, c, a); }
            else { printf("%d, %d, %d", a, c, b); }
        }
    }
    return 0;
}`,
  },

  // --- Lista 3 ---

  // ex-3-1 (Comparação de datas) - Anderson
  {
    id: 'res-anderson-3-1',
    exerciseId: 'ex-3-1',
    author: 'Anderson',
    comment:
      'Compara ano, mês e dia em cascata usando else if para determinar a data mais recente.',
    createdAt: '13/08/2026 21:20',
    linesCount: 35,
    code: `#include <stdio.h>
int main()
{
    int dia1, mes1, ano1, dia2, mes2, ano2;
    printf("Escreva um dia\\n");
    scanf("%d", &dia1);
    printf("Escreva um mês\\n");
    scanf("%d", &mes1);
    printf("Escreva um ano\\n");
    scanf("%d", &ano1);
    printf("Escreva um segundo dia\\n");
    scanf("%d", &dia2);
    printf("Escreva um segundo mês\\n");
    scanf("%d", &mes2);
    printf("Escreva um segundo ano\\n");
    scanf("%d", &ano2);
    if (ano1 < ano2)
    {
        printf("A data mais recente é a %d, %d, %d ", dia2, mes2, ano2);
    }
    else if (ano1 > ano2)
    {
        printf("A data mais recente é a %d, %d, %d ", dia1, mes1, ano1);
    }
    else if (ano1 == ano2)
    {
        if (mes1 < mes2)
        {
            printf("A data mais recente é a %d, %d, %d ", dia2, mes2, ano2);
        }
        else if (mes1 > mes2)
        {
            printf("A data mais recente é a %d, %d, %d ", dia1, mes1, ano1);
        }
        else if (dia1 < dia2)
        {
            printf("A data mais recente é a %d, %d, %d ", dia2, mes2, ano2);
        }
        else if (dia1 > dia2)
        {
            printf("A data mais recente é a %d, %d, %d ", dia1, mes1, ano1);
        }
    }
    return 0;
}`,
  },

  // ex-3-2 (Área de figuras) - Anderson
  {
    id: 'res-anderson-3-2',
    exerciseId: 'ex-3-2',
    author: 'Anderson',
    comment:
      'Lê a letra da figura escolhida e calcula a área com else if, tratando entrada inválida.',
    createdAt: '13/08/2026 21:25',
    linesCount: 40,
    code: `#include <stdio.h>
int main()
{
    float aretangulo, aquadrado, atriangulo, raio, base, altura, lado;
    double acirculo;
    char escolha;
    printf("Digite a letra da figura desejada: \\n[C]írculo, [R]etângulo, [Q]uadrado ou [T]riângulo \\n");
    scanf("%c", &escolha);
    if (escolha == 'C')
    {
        printf("Digite o raio do círculo ");
        scanf("%f", &raio);
        acirculo = 3.14159 * raio * raio;
        printf("Área do círculo é %lf ", acirculo);
    }
    else if (escolha == 'R')
    {
        printf("Digite a base do retângulo ");
        scanf("%f", &base);
        printf("Digite a altura do retângulo ");
        scanf("%f", &altura);
        aretangulo = base * altura;
        printf("A área do retângulo é %f ", aretangulo);
    }
    else if (escolha == 'Q')
    {
        printf("Digite o lado do quadrado ");
        scanf("%f", &lado);
        aquadrado = lado * lado;
        printf("A área do quadrado é %f ", aquadrado);
    }
    else if (escolha == 'T')
    {
        printf("Digite a base do triângulo ");
        scanf("%f", &base);
        printf("Digite a altura do triângulo ");
        scanf("%f", &altura);
        atriangulo = (base * altura) / 2;
        printf("A área do triângulo é %f ", atriangulo);
    }
    else
    {
        printf("Escolha inválida. Responda apenas com um valor entre C, R, Q ou T");
    }
    return 0;
}`,
  },

  // ex-3-3 (Reordenar algarismos crescente) - Anderson
  {
    id: 'res-anderson-3-3',
    exerciseId: 'ex-3-3',
    author: 'Anderson',
    comment:
      'Separa centena, dezena e unidade e monta o novo número testando qual dígito é maior/menor.',
    createdAt: '13/08/2026 21:30',
    linesCount: 45,
    code: `#include <stdio.h>
int main()
{
    int n1, n2, centena, dezena, unidade;
    printf("Digite um numero entre 100 e 999 \\n");
    scanf("%d", &n1);
    if (n1 < 100 || n1 > 999)
    {
        printf("Numero %d e invalido ", n1);
    }
    else
    {
        centena = n1 / 100;
        dezena = (n1 / 10) % 10;
        unidade = n1 % 10;
        if (centena >= dezena && centena >= unidade)
        {
            if (dezena > unidade)
            {
                n2 = (unidade * 100) + (dezena * 10) + (centena * 1);
            }
            else
            {
                n2 = (dezena * 100) + (unidade * 10) + (centena * 1);
            }
        }
        else if (dezena >= centena && dezena >= unidade)
        {
            if (centena > unidade)
            {
                n2 = (unidade * 100) + (centena * 10) + (dezena * 1);
            }
            else
            {
                n2 = (centena * 100) + (unidade * 10) + (dezena * 1);
            }
        }
        else
        {
            if (centena > dezena)
            {
                n2 = (dezena * 100) + (centena * 10) + (unidade * 1);
            }
            else
            {
                n2 = (centena * 100) + (dezena * 10) + (unidade * 1);
            }
        }
        printf("%d", n2);
    }
    return 0;
}`,
  },

  // --- Lista 4 ---

  // ex-4-1 (Múltiplos de Y menores que N) - Anderson
  {
    id: 'res-anderson-4-1',
    exerciseId: 'ex-4-1',
    author: 'Anderson',
    comment:
      'Percorre de 1 até N testando o resto da divisão por Y, avisando se nenhum múltiplo for encontrado.',
    createdAt: '13/08/2026 21:35',
    linesCount: 25,
    code: `#include <stdio.h>
int main()
{
    int n, y, i;
    int encontrou = 0;
    printf("Digite um numero inteiro positivo\\n");
    scanf("%d", &n);
    printf("Digite outro numero inteiro positivo\\n");
    scanf("%d", &y);
    printf("Os multiplos do segundo numero menores do primeiro sao...\\n");
    for (i = 1; i < n; i++)
    {
        if (i % y == 0)
        {
            printf("%d", i);
            encontrou = 1;
        }
    }
    if (encontrou == 0)
    {
        printf("Nenhum multiplo encontrado!");
    }
    return 0;
}`,
  },

  // ex-4-2 (Série alternada 1..50) - Anderson
  {
    id: 'res-anderson-4-2',
    exerciseId: 'ex-4-2',
    author: 'Anderson',
    comment:
      'Usa um único laço for imprimindo o índice i e seu complemento (51 - i) a cada passo.',
    createdAt: '13/08/2026 21:40',
    linesCount: 15,
    code: `#include <stdio.h>
int main()
{
    int b = 50;
    int i;
    for (i = 1; i <= b; i++)
    {
        printf("%d, ", i);
        printf("%d, \\n", (b + 1) - i);
    }
    return 0;
}`,
  },

  // ex-4-3 (Rendimento financeiro) - Anderson
  {
    id: 'res-anderson-4-3',
    exerciseId: 'ex-4-3',
    author: 'Anderson',
    comment:
      'Converte os anos em meses e aplica o rendimento composto mês a mês, imprimindo cada atualização.',
    createdAt: '13/08/2026 21:45',
    linesCount: 22,
    code: `#include <stdio.h>
int main()
{
    float capital, rendimento, montante;
    int anos, i;
    printf("Digite o capital inicial investido\\n");
    scanf("%f", &capital);
    printf("Digite a porcentagem do rendimento fixo mensal\\n");
    scanf("%f", &rendimento);
    printf("Digite a quantidade de anos do investimento\\n");
    scanf("%d", &anos);
    montante = capital;
    anos = anos * 12;
    for (i = 1; i <= anos; i++)
    {
        montante = montante * (1 + rendimento / 100);
        printf("%.2f \\n", montante);
    }
    return 0;
}`,
  },

  // ex-4-4 (300 números: negativos e média dos positivos) - Anônimo
  {
    id: 'res-anon-4-4a',
    exerciseId: 'ex-4-4',
    author: 'Estudante Anônimo',
    comment:
      'Usa 5 leituras em vez de 300 para facilitar o teste, mas mantém a mesma lógica de contagem.',
    createdAt: '03/09/2026 09:50',
    linesCount: 22,
    code: `#include <stdio.h>
int main()
{
    int i;
    int QN = 0;
    int QP = 0;
    float numero;
    float SP = 0.0;
    for (i = 1; i <= 5; i++)
    {
        printf("Entre com um numero: ");
        scanf("%f", &numero);
        if (numero < 0)
        {
            QN++;
        }
        else if (numero > 0)
        {
            QP++;
            SP = SP + numero;
        }
    }
    float media = SP / QP;
    printf("Quantidade de numeros negativos %d\\n", QN);
    printf("A média de numeros positivos é: %f\\n", media);
    return 0;
}`,
  },
  // ex-4-4 (variação) - Anderson (300 leituras completas, soma acumulada em ponto flutuante)
  {
    id: 'res-anderson-4-4',
    exerciseId: 'ex-4-4',
    author: 'Anderson',
    comment:
      'Lê as 300 leituras completas, separando contagem de positivos e negativos em variáveis distintas.',
    createdAt: '13/08/2026 21:50',
    linesCount: 24,
    code: `#include <stdio.h>
void main()
{
    float n = 300, negativo = 0, input, soma = 0;
    int positivo = 0, i;
    for (i = 1; i <= n; i++)
    {
        printf("Digite um numero real\\n");
        scanf("%f", &input);
        if (input < 0)
        {
            negativo = negativo + 1;
        }
        else
        {
            positivo = positivo + 1;
            soma += input;
        }
    }
    printf("Negativos: %.0f\\n", negativo);
    printf("Positivos: %d\\n", positivo);
    printf("Media dos positivos: %f\\n", soma / positivo);
}`,
  },

  // ex-4-5 (50 termos série alternada) - Anderson
  {
    id: 'res-anderson-4-5',
    exerciseId: 'ex-4-5',
    author: 'Anderson',
    comment:
      'Testa a paridade do índice para decidir o sinal do termo impresso.',
    createdAt: '13/08/2026 21:55',
    linesCount: 13,
    code: `#include <stdio.h>
void main()
{
    int i;
    for (i = 1; i <= 50; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d, ", -i);
        }
        else
        {
            printf("%d, ", i);
        }
    }
}`,
  },

  // ex-4-6 (Números de 1 a 99 com soma de algarismos N) - Anderson
  {
    id: 'res-anderson-4-6',
    exerciseId: 'ex-4-6',
    author: 'Anderson',
    comment:
      'Percorre de 1 a 99 comparando a soma de dezena e unidade com o N informado.',
    createdAt: '13/08/2026 22:00',
    linesCount: 20,
    code: `#include <stdio.h>
void main()
{
    int n, i, dezena, unidade;
    printf("Digite um numero menor que 18\\n");
    scanf("%d", &n);
    if (n <= 18)
    {
        for (i = 1; i <= 99; i++)
        {
            dezena = i / 10;
            unidade = i % 10;
            if (dezena + unidade == n)
            {
                printf("%d ", i);
            }
        }
    }
    else if (n > 18)
    {
        printf("Escolha inválida");
    }
}`,
  },

  // ex-4-7 (Pesquisa de mercado por gênero) - Anônimo (usa letras G/N e M/F)
  {
    id: 'res-anon-4-7a',
    exerciseId: 'ex-4-7',
    author: 'Estudante Anônimo',
    comment:
      'Usa espaço antes de %c no scanf pra ignorar o buffer, com respostas G/N e gêneros M/F.',
    createdAt: '03/09/2026 10:00',
    linesCount: 38,
    code: `#include <stdio.h>
void main()
{
    char genero, opiniao;
    int pessoas, i, gostou = 0, naoGostou = 0, homensGostaram = 0, mulheresGostaram = 0;
    printf("Digite quantas pessoas foram entrevistadas\\n");
    scanf("%d", &pessoas);
    for (i = 1; i <= pessoas; i++)
    {
        printf("Escreva M se masculino ou F se feminino\\n");
        scanf(" %c", &genero);
        printf("Escreva G se gostou ou N se nao gostou\\n");
        scanf(" %c", &opiniao);
        if (opiniao == 'G')
        {
            gostou += 1;
            if (genero == 'M')
            {
                homensGostaram += 1;
            }
            else if (genero == 'F')
            {
                mulheresGostaram += 1;
            }
        }
        else if (opiniao == 'N')
        {
            naoGostou += 1;
        }
    }
    printf("%d\\n", gostou);
    printf("%d\\n", naoGostou);
    if (homensGostaram > mulheresGostaram)
    {
        printf("Homens gostaram mais");
    }
    else if (homensGostaram < mulheresGostaram)
    {
        printf("Mulheres gostaram mais");
    }
    else if (homensGostaram == mulheresGostaram)
    {
        printf("Empate");
    }
}`,
  },
  // ex-4-7 (variação) - Anônimo (usa letras h/m e s/n com fflush em vez de espaço)
  {
    id: 'res-anon-4-7b',
    exerciseId: 'ex-4-7',
    author: 'Estudante Anônimo',
    comment:
      'Usa fflush(stdin) em vez do espaço antes do %c, e letras h/m e s/n como códigos de resposta.',
    createdAt: '03/09/2026 10:05',
    linesCount: 44,
    code: `#include <stdio.h>
void main()
{
    int i, pessoas, gostaram = 0, naoGostaram = 0, homemGostou = 0, mulherGostou = 0;
    char respostaGostou, genero;
    printf("quantas pessoas\\n");
    scanf("%i", &pessoas);
    for (i = 0; i < pessoas; i++)
    {
        printf("informe seu genero: [m] ou [h]\\n");
        scanf("%c", &genero);
        fflush(stdin);
        printf("gostou? [s] ou [n]\\n");
        scanf("%c", &respostaGostou);
        fflush(stdin);
        if (respostaGostou == 's')
        {
            gostaram++;
            if (genero == 'h')
            {
                homemGostou++;
            }
            else if (genero == 'm')
            {
                mulherGostou++;
            }
        }
        else if (respostaGostou == 'n')
        {
            naoGostaram++;
        }
        else
        {
            printf("resposta invalida\\n");
        }
    }
    printf("Numero de pessoas que gostaram do produto%d\\n", gostaram);
    printf("Numero de pessoas que nao gostaram do produto%d\\n", naoGostaram);
    if (homemGostou > mulherGostou)
    {
        printf("O genero que o produto teve uma melhor aceitacao foram os homens");
    }
    else if (mulherGostou > homemGostou)
    {
        printf("O genero que o produto teve uma melhor aceitacao foram as mulheres");
    }
    else
    {
        printf("O genero que o produto teve uma melhor deu empate");
    }
}`,
  },

  // ex-4-8 (Levantamento de funcionários) - Anônimo
  {
    id: 'res-anon-4-8a',
    exerciseId: 'ex-4-8',
    author: 'Estudante Anônimo',
    comment:
      'Calcula idade de ingresso subtraindo o tempo de empresa da idade atual, acumulando médias e extremos.',
    createdAt: '03/09/2026 10:10',
    linesCount: 55,
    code: `#include <stdio.h>
void main()
{
    int matricula, idade, salario, tempo, i, menosVinteUm = 0, generoF = 0, generoM = 0, salarioM = 1, mediaM, maiorTempo = 0, menorTempo = 999, matriculaVelha, matriculaNova;
    char genero;
    for (i = 1; i <= 2; i++)
    {
        printf("Informe sua matricula\\n");
        scanf("%d", &matricula);
        printf("Escreva M se seu genero for masculino e F se for feminino\\n");
        scanf(" %c", &genero);
        printf("Informe sua idade\\n");
        scanf("%d", &idade);
        printf("Informe seu salario\\n");
        scanf("%d", &salario);
        printf("Informe o tempo em anos de trabalho na empresa\\n");
        scanf("%d", &tempo);
        if (idade - tempo < 21)
        {
            menosVinteUm++;
        }
        if (genero == 'F')
        {
            generoF++;
        }
        if (genero == 'M')
        {
            generoM++;
            salarioM += salario;
            mediaM = salarioM / generoM;
        }
        if (tempo > maiorTempo)
        {
            maiorTempo = tempo;
            matriculaVelha = matricula;
        }
        if (tempo < menorTempo)
        {
            menorTempo = tempo;
            matriculaNova = matricula;
        }
    }
    printf("Quantidade de funcionários que ingressaram na empresa com menos de 21 anos %d\\n", menosVinteUm);
    printf("Quantidade de funcionários do gênero feminino %d\\n", generoF);
    printf("Média salarial dos homens %d\\n", mediaM);
    printf("Matrícula dos funcionários mais antigo %d e mais novo %d", matriculaVelha, matriculaNova);
}`,
  },

  // --- Lista 5 ---

  // ex-5-1 (Números pares <= N) - Anderson
  {
    id: 'res-anderson-5-1',
    exerciseId: 'ex-5-1',
    author: 'Anderson',
    comment:
      'Percorre de 0 até N testando a paridade de cada número com o resto da divisão por 2.',
    createdAt: '13/08/2026 22:05',
    linesCount: 15,
    code: `#include <stdio.h>
int main()
{
    int n, i;
    printf("Informe um numero\\n");
    scanf("%d", &n);
    for (i = 0; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            printf("%d, ", i);
        }
    }
    return 0;
}`,
  },

  // ex-5-2 (Soma de 1 a N) - Anderson
  {
    id: 'res-anderson-5-2',
    exerciseId: 'ex-5-2',
    author: 'Anderson',
    comment: 'Acumula a soma dentro do próprio laço for, de 0 até N.',
    createdAt: '13/08/2026 22:10',
    linesCount: 14,
    code: `#include <stdio.h>
int main()
{
    int n, i, soma = 0;
    printf("Informe um numero\\n");
    scanf("%d", &n);
    for (i = 0; i <= n; i++)
    {
        soma += i;
    }
    printf("%d", soma);
    return 0;
}`,
  },

  // ex-5-3 (Divisores de N) - Anderson
  {
    id: 'res-anderson-5-3',
    exerciseId: 'ex-5-3',
    author: 'Anderson',
    comment: 'Testa de 1 até N quais valores dividem N sem deixar resto.',
    createdAt: '13/08/2026 22:15',
    linesCount: 13,
    code: `#include <stdio.h>
int main()
{
    int n, i;
    printf("Informe um numero\\n");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            printf("%d ", i);
        }
    }
    return 0;
}`,
  },

  // ex-5-4 (PA - progressão aritmética) - Anderson
  {
    id: 'res-anderson-5-4',
    exerciseId: 'ex-5-4',
    author: 'Anderson',
    comment:
      'Gera cada termo somando i vezes a razão ao primeiro termo, sem variável acumuladora.',
    createdAt: '13/08/2026 22:20',
    linesCount: 17,
    code: `#include <stdio.h>
int main()
{
    int primeiroTermo, razao, qtdTermos, i;
    printf("Informe o primeiro termo de uma progressao aritmetica\\n");
    scanf("%d", &primeiroTermo);
    printf("Informe a quantidade de termos de uma progressao aritmetica\\n");
    scanf("%d", &qtdTermos);
    printf("Informe a razao de uma progressao aritmetica\\n");
    scanf("%d", &razao);
    for (i = 0; i < qtdTermos; i++)
    {
        printf("%d ", primeiroTermo + (i * razao));
    }
    return 0;
}`,
  },

  // ex-5-5 (Série geométrica potências de 2) - Anônimo (versão com for, dobrando a variável)
  {
    id: 'res-anon-5-5a',
    exerciseId: 'ex-5-5',
    author: 'Estudante Anônimo',
    comment:
      'Multiplica a potência por 2 a cada iteração do for, começando em 1.',
    createdAt: '10/09/2026 09:00',
    linesCount: 14,
    code: `#include <stdio.h>
int main()
{
    int i, n;
    double potencia = 1;
    printf("Informe um numero\\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("%.0f ", potencia);
        potencia *= 2;
    }
    return 0;
}`,
  },

  // ex-5-6 (Série 1,2,8,64,1024) - Anônimo (multiplicador que dobra a cada passo)
  {
    id: 'res-anon-5-6a',
    exerciseId: 'ex-5-6',
    author: 'Estudante Anônimo',
    comment:
      'Usa uma variável multiplicador que também dobra a cada passo, aplicada ao termo atual.',
    createdAt: '10/09/2026 09:05',
    linesCount: 14,
    code: `#include <stdio.h>
void main()
{
    int i, n, multiplicador = 2;
    double termo = 1;
    printf("informe um numero\\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("%.0f ", termo);
        termo *= multiplicador;
        multiplicador *= 2;
    }
}`,
  },

  // ex-5-7 (Produto ímpares, soma pares) - Anderson
  {
    id: 'res-anderson-5-7',
    exerciseId: 'ex-5-7',
    author: 'Anderson',
    comment:
      'Lê a quantidade de números primeiro e depois acumula produto dos ímpares e soma dos pares.',
    createdAt: '13/08/2026 22:25',
    linesCount: 22,
    code: `#include <stdio.h>
void main()
{
    int n, i, produtoImpar = 1, somaPar = 0;
    int unsigned numero;
    printf("informe uma quantidade de numeros\\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("informe o numero\\n");
        scanf("%u", &numero);
        if (numero % 2 == 0)
        {
            somaPar += numero;
        }
        if (numero % 2 == 1)
        {
            produtoImpar *= numero;
        }
    }
    printf("Produto dos numeros impares foi %d\\n", produtoImpar);
    printf("Soma dos numeros pares foi %d\\n", somaPar);
}`,
  },

  // ex-5-8 (Multas de trânsito) - Anderson
  {
    id: 'res-anderson-5-8',
    exerciseId: 'ex-5-8',
    author: 'Anderson',
    comment:
      'Usa laço duplo: externo por motorista, interno por multa, guardando quem teve mais multas.',
    createdAt: '13/08/2026 22:30',
    linesCount: 33,
    code: `#include <stdio.h>
void main()
{
    int idCarteira, qtdMultas, qtdMotoristas, i, j, maiorMulta = 0, maiorMultaId = 0;
    float valorMultas, somaMultas = 0;
    printf("informe a quantidade de motoristas\\n");
    scanf("%d", &qtdMotoristas);
    for (i = 0; i < qtdMotoristas; i++)
    {
        printf("informe o numero da carteira\\n");
        scanf("%d", &idCarteira);
        printf("informe a quantidade de multas\\n");
        scanf("%d", &qtdMultas);
        for (j = 0; j < qtdMultas; j++)
        {
            printf("informe o valor da multa\\n");
            scanf("%f", &valorMultas);
            printf("%f R$ \\n", valorMultas);
            somaMultas += valorMultas;
        }
        if (qtdMultas > maiorMulta)
        {
            maiorMulta = qtdMultas;
            maiorMultaId = idCarteira;
        }
    }
    printf("%.2f\\n", somaMultas);
    printf("%d %d \\n", maiorMulta, maiorMultaId);
}`,
  },

  // ex-5-9 (Quinto número > 1000 com resto 5) - Anderson (while)
  {
    id: 'res-anderson-5-9',
    exerciseId: 'ex-5-9',
    author: 'Anderson',
    comment:
      'Usa while contando as ocorrências até achar a quinta, incrementando o número a cada passo.',
    createdAt: '13/08/2026 22:35',
    linesCount: 13,
    code: `#include <stdio.h>
void main()
{
    int n = 1000, numero = 0;
    while (numero < 5)
    {
        n++;
        if (n % 11 == 5)
        {
            printf("%d ", n);
            numero++;
        }
    }
}`,
  },
  // ex-5-9 (variação) - Anônimo (usa for com break em vez de while)
  {
    id: 'res-anon-5-9a',
    exerciseId: 'ex-5-9',
    author: 'Estudante Anônimo',
    comment:
      'Usa for com break assim que atinge o quinto valor, em vez de condição no while.',
    createdAt: '10/09/2026 09:10',
    linesCount: 20,
    code: `#include <stdio.h>
int main()
{
    int n = 1000, i, maiorQueCinco = -999, contador = 0;
    for (i = n; i >= n; i++)
    {
        if (i % 11 == 5)
        {
            maiorQueCinco = i;
            printf("%d\\n", maiorQueCinco);
            contador++;
        }
        if (contador == 5)
        {
            break;
        }
    }
    return 0;
}`,
  },

  // ex-5-10 (Censo alturas e gênero) - Anônimo
  {
    id: 'res-anon-5-10a',
    exerciseId: 'ex-5-10',
    author: 'Estudante Anônimo',
    comment:
      'Coleta gênero e altura de cada pessoa, atualizando extremos e acumuladores de média a cada leitura.',
    createdAt: '10/09/2026 09:15',
    linesCount: 45,
    code: `#include <stdio.h>
void main()
{
    int i;
    float altura, maiorAltura = -999, menorAltura = 999, mediaAlturaMulheres = 0, qtdMulheres = 0, mediaAlturaPopulacao = 0, percentualHomens = 0;
    char genero;
    for (i = 0; i < 50; i++)
    {
        printf("informe [h] para homem e [m] para mulher\\n");
        scanf("%c", &genero);
        fflush(stdin);
        printf("informe a altura\\n");
        scanf("%f", &altura);
        if (altura < menorAltura)
        {
            menorAltura = altura;
        }
        if (altura > maiorAltura)
        {
            maiorAltura = altura;
        }
        if (genero == 'm')
        {
            qtdMulheres++;
            mediaAlturaMulheres += altura;
        }
        if (genero == 'h')
        {
            percentualHomens++;
        }
        mediaAlturaPopulacao += altura;
    }
    mediaAlturaMulheres /= qtdMulheres;
    mediaAlturaPopulacao /= i;
    percentualHomens = (percentualHomens / i) * 100;
    printf("A maior altura foi %.2f\\n", maiorAltura);
    printf("A menor altura foi %.2f\\n", menorAltura);
    printf("Media de altura entre mulheres foi %.2f\\n", mediaAlturaMulheres);
    printf("Media de altura entre a populacao foi %.2f\\n", mediaAlturaPopulacao);
    printf("Percentual de homens foi %.2f %%\\n", percentualHomens);
}`,
  },
];
