export function validateForm({ nome, idade, sexo }) {
  const errors = {};

  if (!nome || !nome.trim()) {
    errors.nome = 'Nome é obrigatório.';
  } else if (nome.trim().length < 3) {
    errors.nome = 'Nome deve ter ao menos 3 caracteres.';
  }

  if (!idade || !String(idade).trim()) {
    errors.idade = 'Idade é obrigatória.';
  } else {
    const n = Number(idade);
    if (!Number.isInteger(n) || n < 1 || n > 120) {
      errors.idade = 'Informe uma idade válida (1–120).';
    }
  }

  if (!sexo || !sexo.trim()) {
    errors.sexo = 'Selecione o sexo.';
  }

  return errors;
}

export function hasErrors(errors) {
  return Object.values(errors).some(v => v && v.length > 0);
}
