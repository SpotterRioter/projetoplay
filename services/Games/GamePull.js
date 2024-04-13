import app from "../Inicialize";
import moment from "moment";
import { collection, doc, getFirestore, setDoc, updateDoc, getDoc } from 'firebase/firestore'


export default async function GamePull( gameIndex ) {
    const db = getFirestore(app);
    const dataAtual = moment().format("YYYY") + moment().format("MM");
    const docRef = doc(db, 'Games', gameIndex);
    const docSnap = await getDoc(docRef);

    let data = null;

    if (docSnap.exists()) {
        data = docSnap.data();
        console.log("data: " + data.TotalDeAcessos)
        return data.TotalDeAcessos
    } else {
        console.log('Documento(s) não encontrado(s).')
        return undefined
    }
}