import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  return (
    <div style={{background: "#141414" }} >
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Nessa primeira aula de React finalizaremos a home da AluraFlix! E você vai colocá-la no ar! "
        + "Usaremos o Create React App para iniciar nosso projeto e styled-components para cuidar da camada de estilo da nossa aplicação,"
        + "essas duas ferramentas são essenciais do mundo React. Também entenderemos como React se tornou tão popular no mercado"
        + "de tecnologia."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer />

    </div>
  );
}

export default App;
