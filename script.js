/* Atividade: condições dentro de condições.
Pense na seguinte situação: você quer ligar o seu carro.
Isso pode ser descrito em alguns simples passos, ou até mesmo em MUITOS simples passos. Exemplo:

Versão simples:
> Carro existe.
> Entro no carro.
> Ligo o carro.
> Vou embora.


Versão desnecessáriamente complicada:
>Acho que carro existe.
>Posso estar louco.
>Verifico se o carro existe.
>O carro existe de fato.
>Posso ter esquizofrenia.
>Vou no médico.
>Médico diz que não tenho esquizofrenia.
>Confio no médico.
>Acho que carro existe.
>Verifico se o carro existe.
>O carro existe de fato.
>Penso em colocar a mão no bolso para verificar se tenho a chave.
>Movo meu braço.
>Tento colocar a mão no bolso.
>Errei o bolso.
>Tento colocar a mão no bolso.
>Errei o bolso.
>Tento colocar a mão no bolso.
>Errei o bolso.
>Tento colocar a mão no bolso.
>Errei o bolso.
>Penso que talvez esteja louco.
>Tento colocar a mão no bolso.
>Errei o bolso.
>Olho para baixo.
>Minha calça não tem bolso.
>Lembro que sou mulher.
>Abro a bolsa.
>Coloco a mão na bolsa.
>Lembro que não sou mulher.
>Dona da bolsa com raiva.
>Peço desculpas.
>Coloco a mão no bolso da blusa.
>Percebo que não sou mulher.
>Pego a chave do carro.
>Vou em direção ao carro.
>Coloco a chave na porta do carro.
>Giro a chave.
>Abro a porta do carro.
>Entro no carro.
>Bato a testa no encaixe da porta.
>Sento no banco.
>Coloco a chave na ignição.
>Giro a chave.
>Carro liga.
>Coloco a mão no engate da marcha.
>Mecho a marcha.
>Tiro carro do neutro.
>Carro morre.
>Giro a chave.
>Giro a chave.
>Carro liga.
>Coloco a mão no engate da marcha.
>Mecho a marcha.
>Tiro carro do neutro.
>Carro vive.

Independente de ser um casso simples ou um caso complicado, é fato que você só pode realizar um passo após outro passo ter sido realizado antes. Não é possível ligar o carro se o carro não existir, não é possível entrar no carro sem se machucar se você não prestar atenção quando entra.

Podemos usar um "if else" para organizar o primeiro caso de várias formas, a forma abaixo é um exemplo:
*/




// > Carro existe.
// > Entro no carro.
// > Ligo o carro.
// > Vou embora.

let carroExiste = true;
let entroNoCarro = true;
let ligoOCarro = true;
let vouEmbora = undefined;
let precisoComprarUmCarro = undefined;

if (carroExiste == true) {
    if (entroNoCarro == true) {
        if (ligoOCarro == true) {
            vouEmbora = true;
        }
    }
} else {
    precisoComprarUmCarro = true;
}


/* Já o outro código pode ser feito usando a mesma lógica do anterior... apesar de... se tornar um pouco... Longo */
/* O CÓDIGO ABAIXO FOI GERADO PELO GPT E EXISTE PURAMENTE PARA DEMONSTRAÇÃO, TENTATIVAS DE ENTENDÊ-LO SÃO DE SEU PRÓPRIO RISCO */

var achoQueCarroExiste = true;
var possoEstarLouco = true;
var verificoSeOCarroExiste = true;
var oCarroExisteDeFato = true;

var confioNoMedico = true;
var pensoQueCarroExiste = true;
var verificoSeOCarroExiste2 = true;
var oCarroExisteDeFato2 = true;

var pensoEmColocarAMaoNoBolsoParaVerificarSeTenhoAChave = true;

var movoMeuBraco = true;

var tentoColocarAMaoNoBolso = true;
var erreiOBolso = true;

var tentoColocarAMaoNoBolso2 = true;
var erreiOBolso2 = true;

var tentoColocarAMaoNoBolso3 = true;
var erreiOBolso3 = true;

var tentoColocarAMaoNoBolso4 = true;
var erreiOBolso4 = true;

var pensoQueTalvezEstejaLouco = true;

var tentoColocarAMaoNoBolso5 = true;
var erreiOBolso5 = true;

var olhoParaBaixo = true;
var minhaCalcaNaoTemBolso = true;
var lembroQueSouMulher = true;
var abroABolsa = true;
var colocoAMaoNaBolsa = true;
var lembroQueNaoSouMulher = true;

var donaDaBolsaComRaiva = true;
var pecoDesculpas = true;
var colocoAMaoNoBolsoDaBlusa = true;
var perceboQueNaoSouMulher = true;



if (achoQueCarroExiste == true) {
  if (possoEstarLouco == true) {
    if (verificoSeOCarroExiste == true) {
      if (oCarroExisteDeFato == true) {
        console.log("Depois de uma verificação, Vejo que o carro existe, Entro e vou embora.");
      }
    }
  }

  if (oCarroExisteDeFato == false) {
    console.log("Tenho duvidas se carro existe vou fazer outra verificação.");
  }
}


if (achoQueCarroExiste == true) {
  if (confioNoMedico == true) {
    if (pensoQueCarroExiste == true) {
      if (verificoSeOCarroExiste2 == true) {
        if (oCarroExisteDeFato2 == true) {
          console.log("Eu confio no meu médico, Tenho certeza que o carro existe. Faço outra verificação mais afundo.");
        }
      }
    }

    if (pensoEmColocarAMaoNoBolsoParaVerificarSeTenhoAChave == true) {
      console.log("Decido olhar se as chaves estão no meu bolso. Elas estão, Agora posso ir.");
    }
  }
}


if (achoQueCarroExiste == true) {
  if (confioNoMedico == false) {
    if (movoMeuBraco == true) {
      if (tentoColocarAMaoNoBolso == true) {
        if (erreiOBolso == true) {
          // Continue a história...
        }
      }

      if (tentoColocarAMaoNoBolso2 == true) {
        if (erreiOBolso2 == true) {
          // Continue a história...
        }
      }

      if (tentoColocarAMaoNoBolso3 == true) {
        if (erreiOBolso3 == true) {
          // Continue a história...
        }
      }

      if (tentoColocarAMaoNoBolso4 == true) {
        if (erreiOBolso4 == true) {
          // Continue a história...
        }
      }

      if (pensoQueTalvezEstejaLouco == true) {
        // Continue a história...
      }
    }
  }
}

if (achoQueCarroExiste == true) {
  if (confioNoMedico == false) {
    if (movoMeuBraco == false) {
      if (tentoColocarAMaoNoBolso5 == true) {
        if (erreiOBolso5 == true) {
          // Continue a história...
        }
      }
    }
  }
}

if (achoQueCarroExiste == false) {
  if (confioNoMedico == false) {
    if (movoMeuBraco == false) {
      if (tentoColocarAMaoNoBolso5 == false) {
        if (olhoParaBaixo == true) {
          if (minhaCalcaNaoTemBolso == true) {
            if (lembroQueSouMulher == true) {
              if (abroABolsa == true) {
                if (colocoAMaoNaBolsa == true) {
                  if (lembroQueNaoSouMulher == true) {
                    // Continue a história...
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

if (achoQueCarroExiste == false) {
  if (confioNoMedico == false) {
    if (movoMeuBraco == false) {
      if (tentoColocarAMaoNoBolso5 == false) {
        if (olhoParaBaixo == true) {
          if (minhaCalcaNaoTemBolso == true) {
            if (donaDaBolsaComRaiva == true) {
              if (pecoDesculpas == true) {
                if (colocoAMaoNoBolsoDaBlusa == true) {
                  if (perceboQueNaoSouMulher == true) {
                    // Continue a história...
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

