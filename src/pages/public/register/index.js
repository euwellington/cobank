import React, { useState } from 'react';
import '../../../css/login.css';
import Menu from '../../../components/menu';
import { BsArrowRight, BsX } from 'react-icons/bs';
import { Redirect, Link } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Controller from '../../../backend/controller/auth.config';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const Register = () => {

// CONFIG BACKDROP ---------------------------
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const toggleInOut = () => {
        handleToggle();
        setTimeout(() => {
            handleClose();
            setRedirect(true);
        }, 1000);
    }
  
// CONFIG INPUTS ---------------------------
    const [change, setChange] = useState({
        nome: '',
        nomecompleto: '',
        renda: '',
        email: '',
        senha: ''
    });
    const handlechange = e => {
        const { name, value } = e.target;
        setChange(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
// CONFIG VALIDATION ---------------------------
    const [snack, setSnack] = useState(false); 
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);
    const registerUser = (e) => {
        e.preventDefault();
        setLoading(true);
        if(change.senha.length <= 7) {
            setLoading(false);
            setSnack(true); 
        } else {
            setTimeout( async () => {
                await Controller.cretaeUser(change);
                await Controller.logout();
                setLoading(false);
                setOk(true);
                setChange({});
            }, 1500);
        }
    }

    if(redirect) {
        return <Redirect to={'/login'} />
    }

    return(
        <>
        {/* BACKDROP */}
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <Menu/>
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
            <div className={'d-flex justify-content-center login breakdiv'}>
            <>
            {
                ok
                ?
                <div style={{display: 'grid'}}>
                    <div style={{margin: 'auto'}}>
                        <div className={'d-flex justify-content-center'}>
                            <img alt={'success'} className={'success'} src={'https://salesloopx.com/images/ce46d9_3f38fd870f0e44df928485e2e1c7686b_mv2.gif'} />
                        </div>
                        <p className={'success-title'}>Cadastro feito com sucesso</p>
                        <p className={'success-subtitle'}>Agora é so acessar a sua conta e fazer o resto das configurações</p>
                        <div className={'d-flex justify-content-center'}>
                            <Link style={{textDecoration: 'none'}} className={'btn-accesslogin shadow-none'} to={'/login'}>
                                Fazer login
                            </Link>
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className={'login-left'}>
                        <div style={{margin: 'auto'}}>
                            <p className={'login-title'}>Venha ser Cobank!</p>
                            <p className={'login-subtitle'}>
                                Venha fazer parte do nosso time para que nós possamos juntos ajudar você a conquistar sua vida financeira
                            </p>
                            <p className={'bar'} />
                            <p className={'about-go-login'}>
                                Acessar sua conta
                            </p>
                            <p onClick={ () => toggleInOut() } className={'btn-register'}>
                                Go Cobank <BsArrowRight/>
                            </p>
                        </div>
                    </div>
                    <div className={'register-right'}>
                        <form className={'box-login'} onSubmit={ e => registerUser(e) }>
                            <p className={'box-login-title'}>Cobank | Login</p>

                            <div className={'box-input'}>
                                <p className={'box-input-title'}>Nome</p>
                                <input type={'text'} name={'nome'} onChange={handlechange} placeholder={'Ex: Wellington'} style={{border: 0}} className={'form-control input shadow-none'} />
                            </div>
                            <div className={'box-input'}>
                                <p className={'box-input-title'}>Nome completo</p>
                                <input type={'text'} name={'nomecompleto'} onChange={handlechange} placeholder={'wellington De Sousa Rodrigues'} style={{border: 0}} className={'form-control input shadow-none'} />
                            </div>
                            <div className={'box-input'}>
                                <p className={'box-input-title'}>Renda Mensal</p>
                                <input type={'text'} name={'renda'} onChange={handlechange} placeholder={'R$1.104,00'} style={{border: 0}} className={'form-control input shadow-none'} />
                            </div>
                            <div className={'box-input'}>
                                <p className={'box-input-title'}>Email</p>
                                <input required type={'email'} name={'email'} onChange={handlechange} placeholder={'seuemail@gmail.com'} style={{border: 0}} className={'form-control input shadow-none'} />
                            </div>
                            <div className={'box-input'}>
                                <p className={'box-input-title'}>senha</p>
                                <input type={'password'} name={'senha'} onChange={handlechange} maxLength={8} placeholder={'********'} style={{border: 0}} className={'form-control input shadow-none'} />
                            </div>
                            <div className={'d-flex justify-content-center'}>
                                <button className={'btn-login shadow-none'}
                                    disabled={
                                        change.nome.length <= 0 || change.nomecompleto.length <= 0 || change.renda.length <= 0 || 
                                        change.email.length <= 0
                                    }
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            }
            </>
            </div>
        {/* SNACKBAR */}
        <Snackbar
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            open={snack}
            autoHideDuration={4000}
            // onClose={setSnack(false)}
            message="A senha tem que ter no mínimo 8 caracteres"
            action={
                <button onClick={ () => setSnack(false) } style={{border: 0, backgroundColor: 'transparent'}}>
                    <BsX style={{color: 'white'}} size={25} />
                </button>
            }
        />
        </>
    )
}

export default Register;