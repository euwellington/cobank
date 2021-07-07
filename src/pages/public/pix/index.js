import React, { useEffect } from 'react';
import '../../../css/pix.css';
import Menu from '../../../components/menu';
import Footer from '../../../components/footer';
import imgpix from '../../../assets/aboutpix.png';
import apppix from '../../../assets/app.png';
import PixLogo from '../../../assets/logopix.png';
import { BsArrowDown, BsArrowDownRight, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Pix = () => {

  useEffect(() => {
    document.title = 'cobank | Pix';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Menu/>
      <div className="App">
        {/* HEADER */}
        <div className={'pix-header d-flex justify-content-start'}>
          <div className={'box-header'}>
            <img alt={'logopix'} src={PixLogo} className={'logopix'} />
            <p className={'pix-page-title'}>O Cobank tem pix</p>
            <p className={'pix-page-subtitle'}>
              Um novo jeito de fazer pagamentos instantâneos. Use o Pix no Cobank com um cartão de crédito
              sem anuidade e uma conta 100% digital.
            </p>

            <div>
              <p className={'about-pix'} onClick={() => window.scrollTo(0, 650)} >
                Conheça o pix <BsArrowDown id={'icon-down'} />
              </p>
            </div>
            
          </div>
        </div>
        {/* ABOUT PIX */}
        <div className={'about-pix-page d-flex justify-content-center breakdiv'}>
          <div>
            <p className={'about-pix-page-title'}>O que é pix?</p>
            <p className={'about-pix-page-subtitle'}>
              Pix é o novo meio de pagamentos do Banco Central. Com ele, você poderá fazer e 
              receber transferências instantâneas, pagar contas e compras do dia a dia a qualquer hora pelo celular.
              Uma alternativa rápida e gratuita ao boleto, TED, DOC e até ao cartão de débito.
            </p>
          </div>
          <div>
            <img alt={'imgpix'} className={'imgpix'} src={imgpix} />
          </div>
        </div>
        <div className={'box-info-back'}>
            <BsArrowDownRight className={'icon-pix'} />
          </div>
        <div className={'box-info-back'}>
          <div className={'d-flex justify-content-center container breakdiv'}>
            <div className={'box-info-pix'}>
              <p className={'info-pix-title'}>Dinheiro chega em segundos</p>
              <p className={'info-pix-subtitle'}>Mesmo entre bancos e instituições financeiras diferentes.</p>
            </div>
            <div className={'box-info-pix'}>
              <p className={'info-pix-title'}>Com mais facilidade e segurança</p>
              <p className={'info-pix-subtitle'}>Receba transferências somente com um dado, chamado chave.</p>
            </div>
          </div>
          <div className={'d-flex justify-content-center container breakdiv'}>
            <div className={'box-info-pix'}>
              <p className={'info-pix-title'}>Transfira a qualquer momento</p>
              <p className={'info-pix-subtitle'}>Até em feriados e finais de semana, de dia e de madrugada.</p>
            </div>
            <div className={'box-info-pix'}>
              <p className={'info-pix-title'}>Não custa nada</p>
              <p className={'info-pix-subtitle'}>Você não paga para fazer nem para receber transferências.</p>
            </div>
          </div>
        </div>
        {/* APP PIX */}
        <div className={'app-pix d-flex justify-content-center container breakdiv'}>
          <div>
            <img alt={'app-pix'} src={apppix} className={'apppix'} />
          </div>
          <div style={{display: 'grid'}}>
            <div style={{margin: 'auto'}}>
              <p className={'app-pix-title'}>
                O Pix é prático e gratuito. Como o Cobank sempre foi.
              </p>
              <p className={'app-pix-subtitle'}>
                Aproveite o Pix com a conta digital e cartão de crédito sem anuidade do Cobank.
              </p>
              <Link to={'/login'} className={'app-pix-btn'}>Venha ser cobank <BsArrowRight/></Link>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Pix;