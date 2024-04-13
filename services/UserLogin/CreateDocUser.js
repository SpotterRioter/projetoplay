import app from "../Inicialize";
import moment from "moment";
import { collection, doc, getFirestore, setDoc, updateDoc, getDoc } from 'firebase/firestore'
import GlobalServices from "../GlobalServices";

export default CreateDocUser = async () => {
    const db = getFirestore(app);
    const userId = GlobalServices.userId;
    if (!userId) { console.log("Error on create UserDoc"); return }
    const idadeUser = parseInt(moment().format("YYYY")) - parseInt(GlobalServices.dataNasc.substring(6))

    const ref = collection(db, 'Users');
    await setDoc(doc(ref, userId), {
        DataNasc: GlobalServices.dataNasc,
        Email: GlobalServices.email,
        Idade: idadeUser,
        Nome: GlobalServices.nome,
        Sexo: GlobalServices.sexo
    });
    //uSERfAVORITE =============
    console.log("Users feito")
    const favoriteRef = collection(db, 'UsersFavorite');
    await setDoc(doc(favoriteRef, userId), {
        Game1Acess: 0,
        Game2Acess: 0,
        Game3Acess: 0,
        Game4Acess: 0,
        Game5Acess: 0,
        Game6Acess: 0,
    })
    //UsersScores
    console.log("Favorite feito")
    const scoreRef = collection(db, 'UsersScore');
    await setDoc(doc(scoreRef, userId), {
        Game1Hit: 0,
        Game1Errors: 0,
        Game2Hit: 0,
        Game2Errors: 0,
        Game3Hit: 0,
        Game3Errors: 0,
        Game4Hit: 0,
        Game4Errors: 0,
        Game5Hit: 0,
        Game5Errors: 0,
        Game6Hit: 0,
        Game6Errors: 0,
    })
    //UsersUseless
    console.log("Score feito")
    const uselessRef = collection(db, 'UsersUseless');
    await setDoc(doc(uselessRef, userId), {
        Pico02: 0,
        Pico04: 0,
        Pico06: 0,
        Pico08: 0,
        Pico10: 0,
        Pico12: 0,
        Pico14: 0,
        Pico16: 0,
        Pico18: 0,
        Pico20: 0,
        Pico22: 0
    })
}