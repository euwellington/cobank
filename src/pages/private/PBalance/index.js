import React, { useState } from 'react';
import PMenu from '../../../components/PMenu';
import '../../../css/ballance.css';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IntlCurrencyInput from "react-intl-currency-input";
import Controller from '../../../backend/controller/auth.config';
import { useUser } from '../../../backend/contextAPI';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const PBalance = () => {

  const { userInfo, load } = useUser();

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
  
  const classes = useStyles();
  const [val, setVal] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    setVal(maskedValue); // value without mask (ex: 1234.56)
  };


  const saveVal = () => {
    console.log("VALOR REAL =>" + val);
    let id = userInfo.id;
    setOpen(true);
    setTimeout(() => {
      Controller.updateMoney(val, id);
      load();
      setOpen(false);
    }, 1500);
  }

  return (
    <>
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
    <PMenu/>
      <div className="ballance d-flex justify-content-center">
        <div style={{display: 'grid'}}>
          <div style={{margin: 'auto'}}>
            <p className={'ballance-title'}>Faça o ajuste do valor do seu saldo</p>
            <p className={'ballance-subtitle'}>Configure o valor que você deseja ter no seu cartão e logo após ja pode fazer compras com o cartão.</p>
          </div>
        </div>
        <div style={{display: 'grid'}}>
          <div style={{margin: 'auto'}} className={'d-flex justify-content-start'}>
            {/* <p className={'rs'}>R$</p> */}
            <IntlCurrencyInput currency="BRL" config={currencyConfig} value={val} onChange={handleChange} id={'bal'} className={'form-control shadow-none'} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{marginTop: '-100px'}}>
        <button onClick={ () => saveVal() } className={'btn-save'}>
          Salvar alteração
        </button>
      </div>
    </>
  );
}

export default PBalance;