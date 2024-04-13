import app from "../Inicialize";
import moment from "moment";
import { collection, doc, getFirestore, setDoc, updateDoc, getDoc } from 'firebase/firestore'
import GlobalServices from "../GlobalServices";
import UsersAgePull from "./UsersAgePull";

export default UsersAgePush = async () => {
    const db = getFirestore(app);
    const ref = doc(db, 'UsersAge', 'Default');
    const valueFromDB = await UsersAgePull();
    console.log("ValueFromDB: "+valueFromDB)
    const handleUpdate = async ( parameter ) => {
        const valueToUpdate = valueFromDB["Idade" + parameter]
        console.log("ValueToUpdate: "+valueToUpdate)
        await updateDoc(ref, {
            ["Idade" + parameter]: valueToUpdate + 1,
        });
    }

    const userIdade = parseInt(moment().format("YYYY")) - parseInt(GlobalServices.dataNasc.substring(6))
    console.log(userIdade)

    if (valueFromDB) {
        switch (true) {
            case userIdade <= 5: handleUpdate("0_5"); break;
            case userIdade >= 6 && userIdade <= 10: handleUpdate("6_1"); break;
            case userIdade >= 11 && userIdade <= 15: handleUpdate("11_15"); break;
            case userIdade >= 16: handleUpdate("16_18"); break;
        }
    }
}