import React, { useState } from 'react';
import '../../css/pmenu.css';
import Logo from '../../assets/logo.png';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Redirect, Link } from 'react-router-dom';
import Controller from '../../backend/controller/auth.config';
import { useUser } from '../../backend/contextAPI';
import Skeleton from '@material-ui/lab/Skeleton';

const PMenu = () => {

  const { userInfo, loading } = useUser();
  const [log, setLog] = useState(false);
  const loggout = () => {
    Controller.logout();
    setLog(true);
  }

  if(log) {
    return <Redirect to={'/login'} />
  }

  return ( 
    <>
        <div className={'pmenu d-flex justify-content-between'}>
          <div className={'d-flex justify-content-start'}>
            <div>
              <img alt={'logo'} src={Logo} className={'pmenu-logo'} />
            </div>
            <div style={{marginRight: 120}}>
              <div style={{display: 'grid'}} className={''}>
                <p className={'phome-user d-flex justify-content-start'}>Olá, <p className={'span_'}> { loading ? userInfo.nome : <Skeleton className={'skeleton'} /> } </p> </p>
              </div>
              <div style={{display: 'grid'}} className={''}>
                <p className={'phome-ballance d-flex justify-content-start'}>Saldo atual: <p className={'span_'}> { loading ? userInfo.saldo : <Skeleton className={'skeleton-b'} /> } </p> </p>
              </div>
            </div>
            <Link to={'/painel/home'} style={{display: 'grid', textDecoration: 'none'}}>
              <p className={'phome-conf-home'}> Início </p>
            </Link>
            <Link to={'/painel/saldo'} style={{display: 'grid', textDecoration: 'none'}}>
              <p className={'phome-conf-ballance'}> Ajustar Saldo </p>
            </Link>
            <Link to={'/painel/conta'} style={{display: 'grid', textDecoration: 'none'}}>
              <p className={'phome-conf-ballance'}> Configuraçao do Perfil </p>
            </Link>
            {/* <div style={{display: 'grid'}}>
              <p className={'phome-perfil'}> Configuraçao do Perfil </p>
            </div> */}
          </div>
          <div onClick={ () => loggout() } style={{display: 'grid', textDecoration: 'none'}}>
            <BsBoxArrowInRight className={'icon-loggout'} />
          </div>
        </div>
    </>
  );
}

export default PMenu;