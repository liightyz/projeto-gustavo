import React from "react";
import "./Content.css";


function Content() {
  return (
    <>
    {/* Contúdo */}
      <div className="container">
        <section className="d-1">
          <div className="d-2">
            <h2>Lançamento</h2>
            <p>
            O Visual Studio foi lançado pela primeira vez em 16 de maio de 2011.
            </p>
          </div>

          <div className="d-2">
            <h2>Quem criou</h2>
            <p>
            Ele foi criado por Nat Friedman, Joseph Hill, Miguel de Icaza
            </p>
          </div>

          <div className="d-2">
            <h2>Qual é a sua função</h2>
            <p>
         O Xamarin é uma plataforma que permite criar aplicativos para Android, iOS, macOS e Windows. Ele usa a linguagem C# e o código .NET. 
            </p>
          </div>
        </section>

        {/* Beneficios */}

        <div className="container-2">
            <header id="h-2">
                <h1>Oque resolveu no mercado</h1>
                <p>O xamarin resolveu os problemas de código compartilhado entre plataformas, integração com APIs nativas, ecossistema Microsoft, etc</p>
            </header>
            <section className="beneficio">
                <h2>Facilitou o desenvolvimento</h2>
                <p>Facilitou para equipes corporativas já tinham desenvolvedores C# e .NET, então com Xamarin puderam reaproveitar talentos internos, em vez de contratar especialistas separados para cada plataforma.</p>
            </section>
            <section className="beneficio">
                <h2>Aumentou a produtividade</h2>
                <p> Ajudou de várias formas bem práticas, especialmente em equipes que precisavam entregar apps para iOS e Android ao mesmo tempo</p>
            </section>
            <section className="beneficio">
                <h2>Deu suporte a times grandes com controle de versão, testes e deploy integrados</h2>
                <p>Ele trouxe recursos pra integração Controle de versão com Git, Testes automatizados, Deploy e CI/CD integrados e Suporte a equipes distribuídas</p>
            </section>
        </div>

        {/* Exemplos */}
        
        <div className="container-3">
            <header id="h-3">
                <h1>exemplos de uso na Microsoft</h1>
                <p> A própria Microsoft usou (e ainda usa em alguns casos) o Xamarin em diversos produtos e soluções afinal, eles compraram a Xamarin em 2016 e integraram tudo ao ecossistema do .NET.<br /><br /></p>
            </header>
            <section className="tema">
                <h2>O PowerApps (hoje parte do Power Platform) usou Xamarin em partes do app mobile para entregar a experiência nativa em dispositivos Android e iOS.

</h2>
            </section>
            <section className="tema">
                <h2>A Microsoft criou apps de exemplo com Xamarin para demonstrar os recursos de IA dos Cognitive Services.</h2>
            </section>
            <section className="tema">
                <h2>O App Center da Microsoft foi construído justamente para dar suporte a apps Xamarin <br />
                (entre outras plataformas).

</h2>
            </section>
        </div>
      </div>
    </>
  );
}

export default Content;