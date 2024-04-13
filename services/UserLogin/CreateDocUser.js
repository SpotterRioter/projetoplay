import app from "../Inicialize";
import moment from "moment";
import { collection, doc, getFirestore, setDoc, updateDoc, getDoc } from 'firebase/firestore'

export default CreateDocUser = async() =>{
    const db = getFirestore(app);
    
}