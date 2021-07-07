import { db, auth } from '../firebase';

class ControllerDb {
    async logout() {
        await auth.signOut();
    }
    async login(user, password) {
        let request = await auth.signInWithEmailAndPassword(user, password);
        return request;
    }
    async updateMoney(value, id) {
        let currentUser = auth.currentUser;
        await db.ref('usuarios').child(currentUser.uid).child(id).update({ saldo: value });
    }

    async updateUser(info, id) {
        let currentUser = auth.currentUser;
        await db.ref('usuarios').child(currentUser.uid).child(id).update(info);
    } 

    async cretaeUser(content) {
        await auth.createUserWithEmailAndPassword(content.email, content.senha);
        let currentUser = auth.currentUser;
        const data = {
                content: content.nome,
                nomecompleto: content.nomecompleto,
                nome: content.nome,
                renda: content.renda,
                email: content.email,
                cartao: false,
                saldo: 0
            }
        db.ref('usuarios').child(currentUser.uid).push(data);
    }
}

export default new ControllerDb();