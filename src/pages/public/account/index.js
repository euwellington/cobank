import React, { useEffect } from 'react';
import '../../../css/account.css';
import Menu from '../../../components/menu';
import Footer from '../../../components/footer';
import app from '../../../assets/apphome1.png';

const Account = () => {

  useEffect(() => {
    document.title = 'cobank | Conta';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Menu/>
      <div className="account-page">
        {/* APRESENTATION */}
        <div className={'account-page-header d-flex justify-content-end'}>
          <div className={'container'}>
            <p className={'account-page-title'}>Conta Cobank</p>
            <p className={'account-page-subtitle'}>
            Tudo que você precisa para receber, movimentar e guardar seu dinheiro.
            </p>
          </div>
        </div>
        {/* INFO */}
        <div className={'d-flex justify-content-start'}>
          <p className={'account-page-header-info'}>Aproveite as vantagens da conta do Cobank do seu jeito</p>
        </div>
        <div className={'account-page-header-detal'}>
          <div className={'d-flex justify-content-center breakdiv'}>
            <div className={'account-page-header-detal-box'}>
              <p className={'account-page-header-detal-box-title'}>Cobrança entre amigos ficou mais fácil</p>
              <p className={'account-page-header-detal-box-subtitle'}>
                Mande um lembrete de pagamento com os seus dados para receber transferências.
              </p>
            </div>
            <div className={'account-page-header-detal-box'}>
              <p className={'account-page-header-detal-box-title'}>Compras online no débito</p>
              <p className={'account-page-header-detal-box-subtitle'}>
                Uber, iFood, Netflix e diversos outros sites e aplicativos com segurança e praticidade.
              </p>
            </div>
            <div className={'account-page-header-detal-box'}>
              <p className={'account-page-header-detal-box-title'}>Liberdade para escolher onde receber seu salário</p>
              <p className={'account-page-header-detal-box-subtitle'}>
                Solicite a portabilidade de salário e receba todo mês direto na conta do Cobank.
              </p>
            </div>
          </div>

          <div className={'d-flex justify-content-center breakdiv'}>
            <div className={'account-page-header-detal-box'}>
              <p className={'account-page-header-detal-box-title'}>Saques em caixas eletrônicos de todo Brasil</p>
              <p className={'account-page-header-detal-box-subtitle'}>
                Saques em Banco24horas e rede Saque e Pague. Dinheiro na mão sempre que precisar.
              </p>
            </div>
            <div className={'account-page-header-detal-box'}>
              <p className={'account-page-header-detal-box-title'}>Recarga de celular simples e rápida</p>
              <p className={'account-page-header-detal-box-subtitle'}>
                Recarga de celular pagando no cartão ou com o saldo da conta. E os créditos caem em instantes.
              </p>
            </div>
            <div className={'account-page-header-detal-box'}>
              <p className={'account-page-header-detal-box-title'}>Pagamentos de qualquer boleto</p>
              <p className={'account-page-header-detal-box-subtitle'}>
                Pague contas de água, luz ou telefone, compras online e boletos com o saldo da conta.
              </p>
            </div>
          </div>
        </div>
        {/* PLANNING */}
        <div className={'d-flex justify-content-center container planning breakdiv'}>
          <div style={{display: 'grid'}}>
            <div style={{margin: 'auto'}}>
              <p className={'planning-title'}>E quanto mais você se planeja, mais o dinheiro rende</p>
              <p className={'planning-subtitle'}>
                Com o resgate planejado, é possível escolher uma data específica para resgatar o dinheiro. 
                Com rendimento maior que 100% do CDI , a opção selecionada na hora do depósito é a que vale para todo o prazo escolhido.
              </p>
            </div>
          </div>
          <div>
            <img alt={'plan'} className={'plan-img'} src={app} />
          </div>
        </div>
        <div className={'container'}>
          <p className={'tar-title'}>E quanto mais você se planeja, mais o dinheiro rende</p>
          <p className={'tar-subtitle'}>
            A economia de quem tem a conta do Cobank é de aproximadamente R$ 370 por ano. Você 
            livre de filas nas agências e de tarifas de manutenção.
          </p>
        </div>
        {/* PLANNING */}
        <div className={'contact'}>
          <div className={'contact-back'} />
          <div className={'d-flex justify-content-center'}>
            <div className={'contact-padding breakdiv'}>
              <div className={'d-flex justify-content-center'}>
                <p className={'contact-title'}>O atendimento favorito do Brasil</p>
              </div>
              <div className={'d-flex justify-content-center'}>
                <p className={'contact-subtitle'}>
                  Atendimento humano de verdade e disponível 24 horas por dia. Todos os dias. Fale com a gente pelo meajuda@cobank.com.br ou se
                  preferir nos ligar, nosso número é 0800 465 0054
                </p>
              </div>
            </div>
          </div>
    <Footer/>

        </div>
      </div>
    </>
  ); 
}

export default Account;