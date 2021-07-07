import React from 'react';
import '../../css/footer.css';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between breakdiv">
      {/* <div>
        <img alt={'footer-logo'} src={Logo} className={'footer-logo'} />
      </div> */}
      <div>
        <p className={'footer-title'}>Navegação</p>
         <div className={'div-item'}>
            <Link to={'/'} className={'menu-footer-res'}>Início</Link> 
          </div>
          <div className={'div-item'}>
            <Link to={'/conta'} className={'menu-footer-res'}>Conta Cobank</Link>
          </div>
          <div className={'div-item'}>
            <Link to={'/pix'} className={'menu-footer-res'}>Pix</Link>
          </div>
          <div className={'div-item'}>
            <Link to={'/sobre-nos'} className={'menu-footer-res'}>O cobank</Link>
          </div>
      </div>
      <div>
        <p className={'footer-title'}>Ouvidoria</p>
        <p className={'footer-item'}>0800 465 6654</p>
        <p className={'footer-item'}>ouvidoria@cobank.com.br</p>
        <p className={'footer-item'}>Atendimento das 9h às 18h (dias úteis)</p>
      </div>
      <div>
        <p className={'footer-title'}>Fale com a gente</p>
        <p className={'footer-item'}>0800 465 0054</p>
        <p className={'footer-item'}>meajuda@cobank.com.br</p>
        <p className={'footer-item'}>Atendimento 24h</p>
      </div>
      <div>
        <p className={'footer-title'}>Equipe</p>
        <p className={'footer-item'}>Wellington - Programador - frontend</p>
        <p className={'footer-item'}>Wellington - Programador - Backend</p>
        <p className={'footer-item'}>Wellington - Design</p>
      </div>
    </div> 
  );
}

export default Footer;