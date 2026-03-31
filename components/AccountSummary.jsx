import React from 'react';

export default function AccountSummary({ data = {}, onReset }) {
  // centralizar as informações para celular
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
      <h2>CONTA CRIADA</h2>

      <p><strong>Nome:</strong>{data.nome}</p>
      <p><strong>Idade:</strong>{data.idade}</p>
      <p><strong>Sexo:</strong>{data.sexo}</p>
      <p><strong>Limite:</strong> R$ {data.limite}</p>
      <p>
        <strong>Tipo:</strong>{' '}
        {data.estudante ? 'Estudante' : ''}
        {data.professor ? (data.estudante ? ' / Professor' : 'Professor') : ''}
      </p>

      <button
  onClick={onReset}
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
