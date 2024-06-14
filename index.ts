interface Pessoa {
  nome: string;
  idade: number;
  email?: string;
  readonly id: number;
}

var pessoa: Pessoa = {
  nome: "Albertina",
  idade: 90,
  email: "albertinatomazzi@gmail.com",
  id: 43561,
};

const separador: string = ", ";

function turnObjectIntoString(pessoa: Pessoa) {
  return Object.entries(pessoa).map(([key, value]) => `${key}: ${value}`);
}

console.log(turnObjectIntoString(pessoa));

var pessoa: Pessoa = {
  nome: "Demétria",
  idade: 87,
  id: 34127,
};

console.log(turnObjectIntoString(pessoa));

const pessoa1: Pessoa = {
  nome: "Alberto",
  idade: 49,
  id: 63781,
};

console.log(turnObjectIntoString(pessoa1));
