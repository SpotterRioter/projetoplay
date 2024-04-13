import app from "../Inicialize";
import moment from "moment";
import { collection, doc, getFirestore, setDoc, updateDoc, getDoc } from 'firebase/firestore'
import GlobalServices from "../GlobalServices";

export default async function UserScorePull() {
    const db = getFirestore(app);
    const docRef = doc(db, "UsersScore", GlobalServices.userId);
    const docSnap = await getDoc(docRef);

    let data = null;

    if (docSnap.exists()) {
        data = docSnap.data();
        return data
    } else {
        console.log('Documento(s) não encontrado(s).')
        return undefined
    }
}