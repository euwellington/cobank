import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import logo from '../../assets/logop.png';

export const ContextUser = createContext({});

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pending, setPending] = useState(true);

    const load = async () => {
        await auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false);
        if(user) {
            const uid = auth.currentUser.uid;
            db.ref('usuarios').child(uid).once('value', item => {
                item.forEach(x => {
                    setUserInfo({id: x.key, ...x.val()});
                    setLoading(true);
                })
            })
            } 
        });
    }

    useEffect(() => {
        load();
        return () => {
            load();
        }
    }, []);

    const store = {
        currentUser,
        userInfo,
        loading,
        load
    }

    if (pending) {
        return(
          <div className={'d-flex justify-content-center'} style={{ background: 'white', height: '97vh', display: 'grid', animation: 'fade-out 0.5s forwards' }}>
            <div style={{margin: 'auto'}}>
                <img alt={'logo'} style={{ height: 160 }} src={logo} />
                <div className={'d-flex justify-content-center'}>
                    <img alt={'loading'} style={{ height: 120 }} src={'https://flevix.com/wp-content/uploads/2019/07/Line-Preloader.gif'} />
                </div>
            </div>
          </div>
        );
      }

    return(
        <ContextUser.Provider value={store}>
            {children}
        </ContextUser.Provider>
    )

}

export const  useUser = () => {
    const context = useContext(ContextUser);
    const { currentUser, userInfo, loading, load } = context;
    return {
        currentUser,
        userInfo,
        loading,
        load
    }
}