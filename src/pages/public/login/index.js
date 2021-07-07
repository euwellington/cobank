import React, { useState, useEffect } from 'react';
import '../../../css/login.css';
import Menu from '../../../components/menu';
import { BsArrowRight, BsX } from 'react-icons/bs';
import { Redirect } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Controller from '../../../backend/controller/auth.config';
import { useUser } from '../../../backend/contextAPI';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const Login = () => {

    const { currentUser } = useUser();

// CONFIG BACKDROPS ---------------------------
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [redirectInOut, setRedirectInOut] = React.useState(false);
    const [redirectPrivate, setRedirectPrivate] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [err, setErr] = React.useState(false);
    const [res, setRes] = React.useState(false);


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
            setRedirectInOut(true);
        }, 1000);
    }
// CONFIG INPUTS ---------------------------
    const [change, setChange] = useState({
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
    const LoginUser = async () => {
        setLoading(true);
        if(change.senha.length <= 7) {
            setLoading(false);
            setSnack(true); 
        } else {
            try {
                await Controller.login(change.email, change.senha);
                setLoading(false);
                setRedirectPrivate(true);
            } catch {
                setLoading(false);
                setErr(true);
            }
        }
    }

    useEffect(() => {
        if (window.matchMedia("(max-width: 910px)").matches) {
            setRes(true);
        } else {
            setRes(false);
        }
        return () => {

        }
    }, [])

    if(redirectInOut) {
        return <Redirect to={'/cadastro'} />
    }
    if(redirectPrivate) {
        return <Redirect to={'/painel/home'} />
    }

    if(currentUser) {
        return <Redirect to={'/painel/home'} />
    }
 
    return(
        <>
        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
        </Backdrop>
        <Menu/>
        <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
            <div className={'d-flex justify-content-center login breakdiv'}>
                {
                    res
                    ?
                    <div className={'box-res-app'}>
                        <div style={{margin: 'auto'}}>
                            <div className={'d-flex justify-content-center'}>
                                <p className={'box-res-app-title'}>
                                    Para melhor experiência baixe o nosso aplicativo acessando o link abaixo e tenha mais controle e segurança!
                                    Tudo isso para da mais facilidade e mais segurança em sua conta sem que isso possa lhe prejudicar.
                                    Com o aplicativo você tem mais acesso a configuração mais personalizada
                                </p>
                            </div>
                            <div className={'d-flex justify-content-center'}>
                                <button className={'btn-login shadow-none'}>
                                    Baixar o aplicativo
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className={'login-left'}>
                            <div style={{margin: 'auto'}}>
                                <p className={'login-title'}>Acesse agora meso a sua conta</p>
                                <p className={'login-subtitle'}>
                                    Entre na sua conta Cobank e faça as configuração nescessária ou se preferir baixe o nosso
                                    aplicativo pra facilitar ainda mais a sua vida!
                                </p>
                                <p className={'bar'} />
                                <p className={'about-go-login'}>
                                    Ainda não tem conta?
                                </p>
                                <p onClick={ () => toggleInOut() } className={'btn-register'}>
                                    Faça sua conta Cobank <BsArrowRight/>
                                </p>
                            </div>
                        </div>
                        <div className={'login-right'}>
                            <div className={'box-login'}>
                                <p className={'box-login-title'}>Cobank | Cadastro</p>
                                <div className={'box-input'}>
                                    <p className={'box-input-title'}>Email</p>
                                    <input type={'email'} name={'email'} onChange={handlechange} placeholder={'seuemail@gmail.com'} style={{border: 0}} className={'form-control input shadow-none'} />
                                </div>
                                <div className={'box-input'}>
                                    <p className={'box-input-title'}>senha</p>
                                    <input type={'password'} name={'senha'} onChange={handlechange} maxLength={8} placeholder={'********'} style={{border: 0}} className={'form-control input shadow-none'} />
                                </div>
                                <div className={'d-flex justify-content-center'}>
                                    <button disabled={change.email.length <= 0} onClick={ () => LoginUser() } className={'btn-login shadow-none'}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
            <Snackbar
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                open={snack}
                autoHideDuration={4000}
                // onClose={setSnack(false)}
                message="A senha tem que coter 8 caracteres"
                action={
                    <button onClick={ () => setSnack(false) } style={{border: 0, backgroundColor: 'transparent'}}>
                        <BsX style={{color: 'white'}} size={25} />
                    </button>
                }
            />
            <Snackbar
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                open={err}
                autoHideDuration={4000}
                // onClose={setSnack(false)}
                message="Email ou senha incorreto!"
                action={
                    <button onClick={ () => setErr(false) } style={{border: 0, backgroundColor: 'transparent'}}>
                        <BsX style={{color: 'white'}} size={25} />
                    </button>
                }
            />
        </>
    )
}

export default Login;