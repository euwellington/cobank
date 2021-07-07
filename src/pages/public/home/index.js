import React, { useEffect } from 'react';
import '../../../css/home.css';
import Menu from '../../../components/menu';
import Footer from '../../../components/footer';
import Cartao from '../../../assets/cartao.png';
import apphome from '../../../assets/apphome.png';
import life from '../../../assets/life.png';
import { FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    document.title = 'cobank | Início';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Menu/>
      <div className="home">
        {/* APRESENTATION */}
        <div className={'container d-flex justify-content-center breakdiv apresentation'}>
          <div style={{display: 'grid', height: 'auto'}} className={'home-left'}>
            <div style={{margin: 'auto'}}>
              <p className={'home-left-title'}>Seja bem vindo ao Cobank!</p>
              <p className={'home-left-subtitle'}>Aqui nós ajudamos você a conquistar sua vida financeira de forma independente, rápido e simples</p>
            </div>
          </div>
          <div style={{display: 'grid', height: 'auto'}} className={'home-left'}>
            <div style={{margin: 'auto'}}>
              <img alt={'cartao'} src={Cartao} className={'cartao-img'} />
            </div>
          </div>
        </div>
        {/* ACCOUNT */}
        <div className={'account d-flex justify-content-center breakdiv'}>
          <div className={'account-left breakdiv'}>
            <p className={'account-title'}>Conta do Cobank
              Nossa conta digital
              que fez mais de 10 milhôes
              de pessoa independente</p>
              <Link to={'/conta'} className={'account-btn'}>
                Peça seu cartão, rápido e simples!
              </Link>
          </div>
           <div className={''}>
            <img alt={'account'} src={apphome} className={'account-img'} />
          </div>
        </div>
        {/* PIX */}
        <div className={'pix d-flex justify-content-center breakdiv'}>
          <div>
            <p className={'pix-title'}>Se tem cobank então também tem pix!</p>
            <p className={'pix-subtitle'}>
              Um novo jeito de fazer pagamentos instatâncios. use o pix Cobank  com um
              cartão de crédito sem anuidade e uma conta 100% digital.
            </p>
            <Link className={'pix-btn'} to={'/pix'}>
              Venha saber mais <FaTelegram/>
            </Link>
          </div>
          <div>
            <img alt={'pix'} className={'pix-img'} src={'https://i.pinimg.com/736x/09/12/87/091287043a227ccbdb2ebdd983ef1b30.jpg'} />
          </div>
        </div>
        {/* COBANK */}
        <div>
          <div className={'cobank d-flex justify-content-center breakdiv'}>
            <div>
              <img alt={'cobank'} src={life} className={'cobank-img'} />
            </div>
            <div style={{display: 'grid'}}>
            <div style={{margin: 'auto'}}>
              <p className={'cobank-title'}>A Cobank nasceu pra mudar a sua vida</p>
              <p className={'cobank-subtitle'}>
                Somos uma fintech que desenvolve soluções simples, seguras e 100% digitais para sua vida financeira. 
                Hoje, somos o maior banco digital independente do mundo e contamos com mais de 30 milhões de clientes 
                em todos os 5.570 municípios do Brasil.
              </p>
              <Link to={'/sobre-nos'} className={'pix-btn'}>
                Venha conhecer melhor <FaTelegram/>
              </Link>
            </div>
          </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>    
      </div>
      
    </>
  );
} 

export default Home; 