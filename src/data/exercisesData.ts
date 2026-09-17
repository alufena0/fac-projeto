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
        description: 'O custo ao consumidor de um carro novo é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Desenvolver um algoritmo que calcule o custo ao consumidor de determinado carro.'
      },
      {
        id: 'ex-1-2',
        listId: 'lista-1',
        number: 2,
        title: 'Classificação de Categoria de Nadador por Idade',
        description: 'Elabore um algoritmo que, dada a idade de um nadador, classifique-o em uma das seguintes categorias: infantil A: 0-4 anos; infantil B: 5-7 anos; infantil C: 8-10 anos; juvenil A: 11-13 anos; juvenil B: 14-17 anos; Adulto: 18 anos ou mais.'
      },
      {
        id: 'ex-1-3',
        listId: 'lista-1',
        number: 3,
        title: 'Cálculo de Peso Ideal por Gênero e Altura',
        description: 'Construir um algoritmo que calcule o peso ideal de uma pessoa, de acordo com o seu gênero e altura, utilizando as seguintes fórmulas: para homens: (72.7*h)-58; para mulheres: (62.1*h)-44.7.'
      },
      {
        id: 'ex-1-4',
        listId: 'lista-1',
        number: 4,
        title: 'Concessão de Crédito Especial Bancário',
        description: 'Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que calcule o valor do crédito de acordo com a tabela: Inferior a R$ 1000,00: nenhum crédito; De R$ 1000,00 a R$ 1499,99: 20% do saldo médio; De R$ 1500,00 a R$ 2499,99: 30% do saldo médio; R$ 2500,00 ou mais: 40% do saldo médio.'
      },
      {
        id: 'ex-1-5',
        listId: 'lista-1',
        number: 5,
        title: 'Decomposição de Quantia em Notas e Moedas',
        description: 'Escrever um algoritmo que, dada uma quantia em reais, calcule o menor número possível de notas/moedas (100, 50, 20, 10, 5, 2 e 1) em que o valor pode ser decomposto.'
      },
      {
        id: 'ex-1-6',
        listId: 'lista-1',
        number: 6,
        title: 'Ordem de uma Data (Dia e Mês) no Ano',
        description: 'Fazer um algoritmo que determine a ordem de uma data (dia e mês) no ano. Exemplos: 01/01 - 1º dia do ano; 03/02 - 34º dia do ano.'
      },
      {
        id: 'ex-1-7',
        listId: 'lista-1',
        number: 7,
        title: 'Cálculo de Salário Semanal com Horas Extras',
        description: 'Escreva um algoritmo para calcular o salário semanal de uma pessoa, determinado pelas condições que seguem: se o número de horas trabalhado for inferior ou igual a 40, a pessoa recebe x reais por hora; caso contrário, a pessoa recebe um adicional de 50% para cada hora trabalhada acima das 40 iniciais.'
      },
      {
        id: 'ex-1-8',
        listId: 'lista-1',
        number: 8,
        title: 'Conta Final de Hóspede de Hotel',
        description: 'Faça um algoritmo para calcular a conta final de um hóspede de um hotel, considerando que: a) Devem ser obtidos o nome do hóspede, o tipo do apartamento utilizado (A, B, C ou D), o número de diárias utilizadas pelo hóspede e o valor do consumo interno do hóspede; b) O valor da diária é determinado pela tabela: A = R$ 350,00; B = R$ 275,00; C = R$ 200,00; D = R$ 150,00; c) O valor da taxa de serviço equivale a 10% da conta. A conta a ser apresentada ao cliente deve conter: o nome do hóspede, o tipo do apartamento, o valor total das diárias, o valor do consumo interno, o subtotal, o valor da taxa de serviço e o total geral.'
      }
    ]
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
        description: 'O IMC (Índice de Massa Corporal) é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é: IMC = peso / altura². Elabore um algoritmo que, dados o peso e a altura de um adulto, determine a sua condição de acordo com a tabela: IMC < 18,5: Abaixo do peso; 18,5 ≤ IMC < 25,0: Peso ideal; 25,0 ≤ IMC < 30,0: Sobrepeso; 30,0 ≤ IMC < 35,0: Obesidade grau I; 35,0 ≤ IMC < 40,0: Obesidade grau II; IMC ≥ 40,0: Obesidade grau III.'
      },
      {
        id: 'ex-2-2',
        listId: 'lista-2',
        number: 2,
        title: 'Cálculo de Peso em Outros Planetas',
        description: 'Escrever um algoritmo que obtenha o peso de uma pessoa na Terra e o número de um planeta. Ao final, com auxílio da tabela abaixo, calcular o peso desta pessoa no planeta escolhido: 1 Mercúrio 0,37; 2 Vênus 0,88; 3 Marte 0,38; 4 Júpiter 2,64; 5 Saturno 1,15; 6 Urano 1,17. Fórmula: pesoPlaneta = (pesoTerra/10) * gravidadePlaneta.'
      },
      {
        id: 'ex-2-3',
        listId: 'lista-2',
        number: 3,
        title: 'Opções de Vendas Parceladas para Lojistas',
        description: 'As vendas parceladas se tornaram uma ótima opção para os lojistas que, a cada dia, criam novas promoções para tentar conquistar novos clientes. Faça um algoritmo que permita ao lojista informar o preço do produto e receber as seguintes informações: a) O valor com 10% de desconto para pagamento à vista; b) O valor da prestação para parcelamento sem juros, em 5x; c) O valor da prestação para parcelamento com juros, em 10x, com 20% de acréscimo no valor do produto.'
      },
      {
        id: 'ex-2-4',
        listId: 'lista-2',
        number: 4,
        title: 'Consumo e Custo de Combustível em Viagem',
        description: 'Desenvolva um algoritmo que calcule o consumo de combustível de um automóvel em determinada viagem. Para isso, devem ser obtidos: i) o percurso (em quilômetros) da viagem; ii) o número de quilômetros que o carro percorre com um litro de combustível (km/l); e iii) o preço do litro do combustível. Ao final, o algoritmo deve determinar: a quantidade de combustível, em litros, consumida durante a viagem; o custo total de combustível.'
      },
      {
        id: 'ex-2-5',
        listId: 'lista-2',
        number: 5,
        title: 'Cálculo de Pedido de Cardápio de Lanchonete',
        description: 'O cardápio de uma lanchonete é o seguinte: Cachorro quente 100 — 3,50; Bauru simples 101 — 4,50; Bauru com ovo 102 — 5,20; Hamburger 103 — 3,00; Cheeseburger 104 — 4,00; Refrigerante 105 — 2,50. Escrever um algoritmo que obtenha o código do item pedido, a quantidade e calcule o valor a ser pago. Considere que, a cada execução do algoritmo, somente será calculado o valor relacionado a um item.'
      },
      {
        id: 'ex-2-6',
        listId: 'lista-2',
        number: 6,
        title: 'Ordenação de Três Valores Conforme Parâmetro i',
        description: 'Escrever um algoritmo que, dados um número inteiro i e três valores a, b e c, apresente os 3 números na ordem definida por i: a) i = 1: os três valores em ordem crescente; b) i = 2: os três valores em ordem decrescente; c) i = 3: o maior valor deve ser apresentado no meio dos outros.'
      }
    ]
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
        description: 'Faça um programa que, dadas duas datas (cada qual com dia, mês e ano) fornecidas pelo usuário, determine qual delas é a mais recente.'
      },
      {
        id: 'ex-3-2',
        listId: 'lista-3',
        number: 2,
        title: 'Cálculo de Área de Figuras Geométricas',
        description: 'Construir um programa que permita ao usuário calcular a área de uma figura geométrica. Para isto, o usuário deverá escolher a figura desejada ([C]írculo, [R]etângulo, [Q]uadrado ou [T]riângulo) e fornecer as informações necessárias para que a área desta figura possa ser calculada. Notas: 1. Fórmulas: Acírculo = π.raio², onde π = 3.14159; Aretângulo = base.altura; Aquadrado = lado²; Atriângulo = (base.altura)/2. 2. Caso o usuário escolha uma opção inválida, uma mensagem de erro deve ser exibida e a execução do programa terminada.'
      },
      {
        id: 'ex-3-3',
        listId: 'lista-3',
        number: 3,
        title: 'Reorganização Crescente dos Algarismos de Número de 3 Dígitos',
        description: 'Implementar um programa que leia um valor inteiro n1. Se este não estiver no intervalo de 100 a 999, uma mensagem deve ser exibida ao usuário informando que o número é inválido e, em seguida, a execução do programa terminará. Caso o valor esteja no intervalo definido, o programa deverá criar um novo valor n2 (e exibi-lo ao final) contendo os mesmos algarismos de n1, porém em ordem crescente. Exemplos: n1=514 → n2=145; n1=929 → n2=299; n1=124 → n2=124. Nota: n1 consiste em um número inteiro positivo, com 3 algarismos. n2 também será um único número!'
      }
    ]
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
        description: 'Faça um programa que leia um número inteiro positivo N e exiba todos os múltiplos de Y inferiores a N, onde N e Y são fornecidos pelo usuário.'
      },
      {
        id: 'ex-4-2',
        listId: 'lista-4',
        number: 2,
        title: 'Série Alternada de 1 a 50 e Sua Soma',
        description: 'Faça um programa que exiba todos os elementos da seguinte série, assim como a soma destes elementos: 1, 50, 2, 49, 3, 48, 4, 47, 5, 46, ..., 49, 2, 50, 1.'
      },
      {
        id: 'ex-4-3',
        listId: 'lista-4',
        number: 3,
        title: 'Rendimento de Aplicação Financeira Mensal',
        description: 'Joãozinho investiu Q reais em uma aplicação com rendimento fixo de R% ao mês. Pede-se a implementação de um programa que calcule o valor (e exiba-o) disponível na conta de Joãozinho após A anos de investimento.'
      },
      {
        id: 'ex-4-4',
        listId: 'lista-4',
        number: 4,
        title: 'Contagem de Negativos e Média dos Positivos em 300 Valores',
        description: 'Faça um programa que leia 300 números reais. Ao final, devem ser exibidas as seguintes informações: a) A quantidade de valores negativos digitados; b) A média dos valores positivos.'
      },
      {
        id: 'ex-4-5',
        listId: 'lista-4',
        number: 5,
        title: '50 Primeiros Termos da Série Alternada de Sinais',
        description: 'Faça um programa que exiba na tela os 50 primeiros termos da seguinte série: 1, -2, 3, -4, 5, -6 ...'
      },
      {
        id: 'ex-4-6',
        listId: 'lista-4',
        number: 6,
        title: 'Números de 1 a 99 Cujos Algarismos Somem N',
        description: 'Faça um programa que leia um número N inteiro, menor ou igual a 18. Se for maior do que 18, o programa exibirá uma mensagem de erro e terminará a sua execução; caso contrário, deverá exibir os números no intervalo de 1 a 99 cujos algarismos somem N. Exemplo: N = 12 → 39, 48, 57, 66, 75, 84 e 93.'
      },
      {
        id: 'ex-4-7',
        listId: 'lista-4',
        number: 7,
        title: 'Pesquisa de Mercado sobre Aceitação de Produto',
        description: 'Uma determinada empresa fez uma pesquisa de mercado para saber se as pessoas gostaram ou não de um novo produto que foi lançado. Para cada pessoa entrevistada foram coletados os seguintes dados: gênero (M ou F) e resposta (G [Gostou] ou N [Não Gostou]). Sabendo-se que foram entrevistadas X pessoas, faça um programa que forneça: a) Número de pessoas que gostaram do produto; b) Número de pessoas que não gostaram do produto; c) Informação dizendo em que gênero o produto teve uma melhor aceitação.'
      },
      {
        id: 'ex-4-8',
        listId: 'lista-4',
        number: 8,
        title: 'Levantamento Estatístico de Funcionários de uma Empresa',
        description: 'Em uma empresa deseja-se fazer um levantamento sobre algumas informações dos seus 250 funcionários. Cada funcionário deverá responder um questionário ao qual informará os seguintes dados: matrícula, gênero, idade, salário e tempo (em anos) de trabalho na empresa. A execução do programa deve exibir os seguintes itens: a) Quantidade de funcionários que ingressaram na empresa com menos de 21 anos; b) Quantidade de funcionários do gênero feminino; c) Média salarial dos homens; d) Matrícula dos funcionários mais antigo e mais novo.'
      }
    ]
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
        description: 'Dado um número inteiro N, fazer um programa que exiba os números pares iguais ou inferiores a N.'
      },
      {
        id: 'ex-5-2',
        listId: 'lista-5',
        number: 2,
        title: 'Soma dos Números de 1 a N',
        description: 'Desenvolver um programa que calcule a soma dos números de 1 a N, sendo N um número inteiro fornecido pelo usuário.'
      },
      {
        id: 'ex-5-3',
        listId: 'lista-5',
        number: 3,
        title: 'Divisores de um Número Inteiro',
        description: 'Fazer um programa que exiba todos os divisores de um número fornecido pelo usuário.'
      },
      {
        id: 'ex-5-4',
        listId: 'lista-5',
        number: 4,
        title: 'N Primeiros Termos de uma Progressão Aritmética (PA)',
        description: 'Implementar um programa que exiba os N primeiros termos de uma PA (Progressão Aritmética) com primeiro termo a1 e razão r.'
      },
      {
        id: 'ex-5-5',
        listId: 'lista-5',
        number: 5,
        title: 'Série Geométrica de Potências de 2',
        description: 'Criar um programa que exiba os N primeiros termos da seguinte série: 1,2,4,8,16,32,...'
      },
      {
        id: 'ex-5-6',
        listId: 'lista-5',
        number: 6,
        title: 'Série com Fator Multiplicativo Crescente',
        description: 'Criar um programa que exiba os N primeiros termos da seguinte série: 1,2,8,64,1024,...'
      },
      {
        id: 'ex-5-7',
        listId: 'lista-5',
        number: 7,
        title: 'Produto dos Ímpares e Soma dos Pares',
        description: 'Desenvolver um programa no qual o usuário entre com vários números inteiros e positivos e imprima o produto dos números ímpares e a soma dos números pares.'
      },
      {
        id: 'ex-5-8',
        listId: 'lista-5',
        number: 8,
        title: 'Arrecadação de Multas de Trânsito por Motorista',
        description: 'Fazer um programa que auxilie o órgão regulador no cálculo do total de recursos arrecadados com a aplicação de multas de trânsito. O programa deve ler as seguintes informações para cada motorista: número da carteira de motorista; número de multas; valor de cada uma das multas. Deve ser exibido o valor da dívida de cada motorista e ao final da leitura o total de recursos arrecadados (somatório de todas as multas). O programa também deverá apresentar o número da carteira do motorista que obteve o maior número de multas.'
      },
      {
        id: 'ex-5-9',
        listId: 'lista-5',
        number: 9,
        title: 'Quinto Número Maior que 1000 com Resto 5 na Divisão por 11',
        description: 'Escrever um programa que encontre o quinto número maior que 1000, cuja divisão por 11 tenha resto 5.'
      },
      {
        id: 'ex-5-10',
        listId: 'lista-5',
        number: 10,
        title: 'Censo de Alturas e Gênero de 50 Habitantes',
        description: 'Foi feita uma pesquisa entre os habitantes de uma região e coletados os dados de altura e gênero das pessoas. Faça um programa que leia as informações de 50 pessoas e informe: a maior e a menor alturas encontradas; a média de altura das mulheres; a média de altura da população; o percentual de homens na população.'
      }
    ]
  }
];

export const INITIAL_RESOLUTIONS: Resolution[] = [
  {
    id: 'res-101',
    exerciseId: 'ex-1-1',
    author: 'Marcos Vinicius (Monitor FAC)',
    comment: 'Cálculo direto aplicando porcentagens de distribuidor e impostos sobre o custo de fábrica.',
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
}`
  },
  {
    id: 'res-102',
    exerciseId: 'ex-1-5',
    author: 'Beatriz Duarte',
    comment: 'Decomposição sucessiva de quantia inteira com divisão e resto em vetor de cédulas e moedas.',
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
}`
  },
  {
    id: 'res-201',
    exerciseId: 'ex-2-1',
    author: 'Lucas Ferreira',
    comment: 'Implementação da verificação em faixas do IMC segundo a tabela da OMS.',
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
}`
  },
  {
    id: 'res-301',
    exerciseId: 'ex-3-1',
    author: 'Guilherme Rocha',
    comment: 'Comparação hierárquica de ano, depois mês, depois dia para encontrar a data mais recente.',
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
}`
  },
  {
    id: 'res-401',
    exerciseId: 'ex-4-1',
    author: 'Patricia Mendes',
    comment: 'Laço simples incrementando passo a passo ou por múltiplos diretos de Y.',
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
}`
  },
  {
    id: 'res-501',
    exerciseId: 'ex-5-9',
    author: 'Professor / Monitor FAC',
    comment: 'Varredura a partir de 1001 contabilizando números cujo resto por 11 seja 5 até atingir o quinto.',
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
}`
  }
];
