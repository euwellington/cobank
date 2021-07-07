import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';
import Controller from '../../backend/controller/auth.config';

const DrawerEdit = ({ user, toggleOpen, id }) => {

    // const [change, setChange] = useState(user);
    const [newState, setNewState] = useState(user);

    
    const saveUserInfo = () => {
        // alert(id);
        Controller.updateUser(newState, id);
        toggleOpen();
    }

    return(
        <div className={'drawer-account'}>
            <BsX onClick={() => toggleOpen()} className={'closedraweruser'} />
            <div className={'d-flex justify-content-center'}>
                <input name={'nome'} value={user && newState} onChange={ e => setNewState(e.target.value)} className={'form-control shadow-none'} id={'input-select'} />
            </div>
            
            <div className={'d-flex justify-content-center container'}>
                <button onClick={ () => saveUserInfo() } id={'btn-save-user'} className={'shadow-none from-control'}>
                    Salvar alteração
                </button>
            </div>
        </div>
    )
}

export default DrawerEdit;