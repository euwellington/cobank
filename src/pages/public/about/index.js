import React, { useEffect } from 'react';
import '../../../css/about.css';
import Menu from '../../../components/menu';
import Footer from '../../../components/footer';
import hand from '../../../assets/hand.png';
import life from '../../../assets/life.png';
import about from '../../../assets/about.png';

const About = () => {

  useEffect(() => {
    document.title = 'cobank | Sobre Nos';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Menu/>
      <div className="about-page">
        {/* HEADER */}
        <div className={'about-page-header'}>
          <p className={'about-pageheader-title'}>Sobre nos</p>
          <p className={'about-pageheader-subtitle'}>Surgimos para ajudar você a conquistar a sua vida financeira</p>
          <div className={'d-flex justify-content-between breakdiv'}>
            <div>
              <p className={'about-pageheader-content'}>O Cobank é seu amigo ideal pra te ajudar com as suas conquista e aqui você vai saber mais sobre a gente</p>
            </div>
            <div>
              <img alt={'hand'} src={hand} className={'hand'} />
            </div>
          </div>
        </div>
        {/* DEFE */}
        <div className={'about-page-def d-flex justify-content-center'} style={{flexWrap: 'wrap-reverse'}}>
          <div>
            <img alt={'def'} className={'defimg'} src={life} />
          </div>
          <div style={{display: 'grid'}}>
            <div style={{margin: 'auto'}}>
              <p className={'def-title'}>
                É diferente
              </p>
              <p className={'def-subtitle'}>
                Somos COs, ou seja: justos e transparentes na conduta, diretos e objetivos na comunicação, e tratamos cada cliente 
                como uma pessoa.
                <br/>
                <br/>
                Somos contra burocracia, papelada, agências e centrais de atendimento caras e ineficientes.
                <br/>
                <br/>
                Somos a favor de ouvir e valorizar a sua opinião, e de merecer a sua confiança como cliente.
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE */}
        <div className={'about-page-you d-flex justify-content-center breakdiv'}>
          <div style={{display: 'grid'}}>
            <div style={{margin: 'auto'}}>
              <p className={'you-title'}>É para você</p>
              <p className={'you-subtitle'}>
                Se você cansou das mesmas soluções para problemas antigos, se você quer ter e testar novas ideias e
                se você acredita que design, tecnologia e um bom atendimento resolvem qualquer problema, conheça as
                nossas carreiras. Procuramos pessoas para simplificar o mundo e reinventar o possível com a gente.
              </p>
            </div>
          </div>
          <div>
            <img alt={'you'} className={'youimg'} src={about} />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default About;