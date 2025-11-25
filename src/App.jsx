// ...existing code...
import React from "react";

/**
 * Componente principal da aplicação.
 * - Texto e estrutura mais claros
 * - Comentários explicativos em PT-BR
 * - Uso de marcação semântica e acessibilidade básica (ids/aria)
 */
export default function App() {
  return (
    <main className="container">
      {/* Cabeçalho com título e descrição curta do projeto */}
      <header>
        <h1>Deploy da aplicação no Vercel</h1>
        <p>Este projeto é deployado automaticamente via GitHub + Vercel.</p>
      </header>

      {/* Seção explicando o funcionamento do pipeline de deploy */}
      <section className="card" aria-labelledby="func-title">
        <h3 id="func-title">Funcionamento</h3>
        {/* Lista com os pontos principais do fluxo de CI/CD */}
        <ul>
          <li>Push no GitHub — o Vercel inicia o build automaticamente.</li>
          <li>Preview deploy gerado para cada Pull Request (PR).</li>
          <li>Deploy para produção a partir da branch <code>main</code>.</li>
        </ul>
      </section>
    </main>
  );
}
// ...existing code...