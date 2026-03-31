import React, { useState } from 'react';

export default function AccountForm({ onSubmit }) {
  const [form, setForm] = useState({
    nome: '',
    idade: '',
    sexo: '',
    limite: 500,
    estudante: false,
    professor: false
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.nome || !form.idade || !form.sexo) {
      alert('Preencha tudo');
      return;
    }

    onSubmit(form);
  };

  /// centralizar as informações para celular
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    padding: "100px"
  };

  return (
    <div style={formStyle}>
      <h2>Abrir Conta</h2>

      <input
        placeholder="Nome"
        value={form.nome}
        onChange={e => handleChange('nome', e.target.value)}
      />
<p></p>
      <input
        placeholder="Idade"
        type="number"
        value={form.idade}
        onChange={e => handleChange('idade', e.target.value)}
      />
<p></p>
      <select
        value={form.sexo}
        onChange={e => handleChange('sexo', e.target.value)}
      >
        
        <option value="">Selecione</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Não-binário">Não-binário</option>
      </select>

      {/* SLIDER */}
      <input
        type="range"
        min="0"
        max="50000"
        value={form.limite}
        onChange={e => handleChange('limite', e.target.value)}
      />

      {/* LIMITE */}
      <p>Limite: R$ {form.limite}</p>

      <label>
        <input
          type="checkbox"
          checked={form.estudante}
          onChange={e => handleChange('estudante', e.target.checked)}
        />
        Estudante
      </label>
      <label>
        <input
          type="checkbox"
          checked={form.professor}
          onChange={e => handleChange('professor', e.target.checked)}
        />
        Professor
      </label>
      {/* ENVIAR */}
      <p></p>
      
      <button
  onClick={handleSubmit}
  style={{
    background: "#000000ff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s"
  }}
>
  Nova conta
</button>
    </div>

    
  );
}