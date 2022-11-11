import http from "Http";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./criar.css";

interface CriarUsuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

export default function Criar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const id = Math.random();

  const SubmitForm = (event: any) => {
    event.preventDefault();

    const usuario = {
      id,
      email,
      name,
      password,
    };

    http
      .post<CriarUsuario>("user", usuario)
      .then(() => {
        alert("cadastrado com sucesso");
        navigate("/getAll");
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert(
            "Aconteceu um erro inesperado ao afetuar o seu getAll! Entre em contato com o suporte!"
          );
        }
      });
  };
  return (
    <div className="caixa">
      <h1>Cadastre-se</h1>

      <form onSubmit={SubmitForm}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          title="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome."
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          title="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          title="senha"
          id="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
