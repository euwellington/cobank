import React, { useState } from 'react';
import '../../css/menu.css';
import Logo from '../../assets/logo.png';
import { FaTelegram } from 'react-icons/fa';
import { BsTextRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';

const Menu = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpen = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
    <div className="menu d-flex justify-content-between sticky-top">
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <img alt={'logo'} src={Logo} className={'logo'} />
      </Link>
      <div className={'d-flex justify-content-center'} style={{display: 'grid'}}>
          <Link to={'/'} className={'menu-item'}>Início</Link> 
          <Link to={'/conta'} className={'menu-item'}>Conta Cobank</Link>
          <Link to={'/pix'} className={'menu-item'}>Pix</Link>
          <Link to={'/sobre-nos'} className={'menu-item'}>O cobank</Link>
      </div>
      <Link to={'/login'} style={{display: 'grid', textDecoration: 'none'}}>
        <p className={'menu-item-login'}>login <FaTelegram/></p> 
      </Link>
    </div>

    <div className="menu-res d-flex justify-content-between sticky-top">
      <div style={{display: 'grid'}}>
        <Link to={'/'} style={{margin: 'auto', textDecoration: 'none'}}>
          <img alt={'logo'} src={Logo} className={'logo-res'} />
        </Link>
      </div>
      <div style={{display: 'grid'}}>
        <Link to={'/cadastro'} className={'register-mobile'} style={{margin: 'auto', textDecoration: 'none'}}>quero ser cobank</Link>
      </div>
      <div style={{display: 'grid'}} onClick={() => toggleOpen()}>
        <BsTextRight className={'menu-mobile'} style={{margin: 'auto'}} />
      </div>
    </div>

    <Drawer open={openMenu} onClose={toggleOpen}>
      <div>
        <div className={'box-menu-res'}>
          <div className={'div-item'}>
            <Link to={'/'} className={'menu-item-res'}>Início</Link> 
          </div>
          <div className={'div-item'}>
            <Link to={'/conta'} className={'menu-item-res'}>Conta Cobank</Link>
          </div>
          <div className={'div-item'}>
            <Link to={'/pix'} className={'menu-item-res'}>Pix</Link>
          </div>
          <div className={'div-item'}>
            <Link to={'/sobre-nos'} className={'menu-item-res'}>O cobank</Link>
          </div>
        </div>
      </div>
    </Drawer>
    </>
  );
}

export default Menu;