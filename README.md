Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"


#  Desafio Classificador de nível de Herói => Explicando o Passo a Passo da minha entrega:

## PASSO 1 => Import da biblioteca do node:
No meu projeto queria que o proprio terminal tivesse o input do usuário, 
então importei a biblioteca para realizar a entrada de dados de forma interativa.

## PASSO 2 => Definição de variáveis:
Definir três variáveis que iram armazenar o nome do jogador, o seu XP e seu nivel,
as variáveis do nome do jogador e do seu XP, eram definidas dinamicamente pelo input.

## PASSO 3 => Estruturas de desição e laço de repetição :
Primeiro usei a estrutura do Switch case em conjunto com operadores lógicos para definir 
cada caso dos níveis, coloquei dentro de laço de repetição(loop) em conjunto com um if 
ao fim do Switch, para que quando o usuário
recebe-se a saída podesse conferir outro jogador novamente ou encerrar a operação.

## PASSO 4 => Criar uma função:
Criei uma função para monstrar uma mensagem sempre que chamada em cada caso. 

#

- Por fim o codigo vai retornar o nome e o nível do jogador como esperado
- conferir nível de outro jogador ou sair do programa.
  














