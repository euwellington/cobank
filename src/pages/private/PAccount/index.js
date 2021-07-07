import React, { useState } from 'react';
import PMenu from '../../../components/PMenu';
import '../../../css/paccount.css';
import { useUser } from '../../../backend/contextAPI';
import { Drawer } from '@material-ui/core';
import DrawerInfo from '../../../components/draweredit';
import Controller from '../../../backend/controller/auth.config';
import IntlCurrencyInput from "react-intl-currency-input";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const AccountP = () => {

    const classes = useStyles();
    const { userInfo, loading, load } = useUser();

    const [time, setTime] = useState(false);
    const [change, setChange] = useState(userInfo);

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    const handlechange = e => {
        const { name, value } = e.target;
        setChange(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const saveUserInfo = () => {
        setTime(true);
        setTimeout(() => {
            Controller.updateUser(change, userInfo.id);
            load();
            setTime(false);
        }, 1500);
    }
    
    const currencyConfig = {
        locale: "pt-BR",
        formats: {
          number: {
            BRL: {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      };

    return(
        <>
        <PMenu/> 
        <Backdrop className={classes.backdrop} open={time}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <Drawer open={open} onClose={ toggleOpen } anchor={'bottom'} >
            <DrawerInfo toggleOpen={toggleOpen} />
        </Drawer>
            <div className={'PAccount'}>
                <p className={'PAccount-title container'}>Conta Pessoal</p>

                <div>
                    {
                        loading
                        ?
                        <>
                            <div className={'d-flex justify-content-center container left'}>
                                <div className={'box-accoun'}>
                                    <p className={'user-title'}>Nome Social</p>
                                    <input disabled={false} name={'nome'} onChange={handlechange} defaultValue={userInfo.nome} value={ change && change.nome } className={'form-control shadow-none'} id={'input-edit1'} />
                                </div>
                                <div className={'box-accoun'}>
                                    <p className={'user-title'}>Nome Completo</p>
                                    <input disabled={false} name={'nomecompleto'} onChange={handlechange} defaultValue={userInfo.nomecompleto} value={ change && change.nomecompleto } className={'form-control shadow-none'} id={'input-edit2'} />
                                </div>
                            </div>
                            <div className={'d-flex justify-content-center container left'}>
                                <div className={'box-accoun'}>
                                    <p className={'user-title'}>Email de Cadastro</p>
                                    <input disabled={true} name={'email'} onChange={handlechange} defaultValue={userInfo.email} value={ change && change.email } className={'form-control shadow-none'} id={'input-edit3'} />
                                </div>
                                <div className={'box-accoun'}>
                                    <p className={'user-title'}>Renda</p>
                                    <IntlCurrencyInput currency="BRL" config={currencyConfig} disabled={false} name={'renda'} onChange={handlechange} defaultValue={userInfo.renda} value={ change && change.renda } className={'form-control shadow-none'} id={'input-edit4'} />
                                </div>
                            </div>
                        </>
                        :
                        "CARREGANDO"
                    }
                </div>
                <div className={'d-flex justify-content-center container'}>
                <button onClick={ () => saveUserInfo() } id={'btn-save-user'} className={'shadow-none from-control'}>
                    Salvar alteração
                </button>
            </div>

                {/* <div className={'d-flex justify-content-center container'}>
                    <p className={'userinfo-info'}>
                        Caso queira fazer qualquer tipo de alteração em cadastro basta você selecionar o item e clicar. 
                        Logo após sera aberto uma janela pra você fazer a alteração
                    </p>
                </div> */}

            </div>
        </>
    )
}

export default AccountP;