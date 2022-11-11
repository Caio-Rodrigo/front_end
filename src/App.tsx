import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Tabela from "components/tabela/tabela";
import { Rota } from "routes";
import Criar from "components/criarUsuario/criar";
import GetAll from "components/getAll/getAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Rota.REGISTRO} element={<Criar />} />
        <Route path={Rota.ALL} element={<GetAll />} />
        <Route path={Rota.TODOS} element={<Tabela />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
