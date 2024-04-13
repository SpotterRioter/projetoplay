import app from "../Inicialize";
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import moment from "moment";
import UserScorePull from "./UserScorePull";
import GlobalServices from "../GlobalServices";

export default UserScorePush = async (gameIndex, state) => {
    const db = getFirestore(app);
    const hora = moment().format("HH");

    const handleCheck = async () => {
        //{"Game1Acess": 0, "Game2Acess": 0, "Game3Acess": 0, "Game4Acess": 0, "Game5Acess": 0, "Game6Acess": 0}
        let valuesFromDB = await UserScorePull();

        const handleUpdate = async (gameIndexHU ,resposta) => {
            const ref = doc(db, "UsersScore", GlobalServices.userId)
            const valueToUpdate = valuesFromDB[gameIndexHU + resposta]
            await updateDoc(ref, {
                [gameIndexHU + resposta]: valueToUpdate + 1,
            });
        }

        if (valuesFromDB) {
            if(state){ handleUpdate(gameIndex, "Hit") } else { handleUpdate(gameIndex, "Errors") }
        } else {
            const newDocRef = collection(db, 'UsersScore');
            await setDoc(doc(newDocRef, GlobalServices.userId), {
                Game1Errors: 0,
                Game1Hit: 0,
                Game2Errors: 0,
                Game2Hit: 0,
                Game3Errors: 0,
                Game3Hit: 0,
                Game4Errors: 0,
                Game4Hit: 0,
                Game5Errors: 0,
                Game5Hit: 0,
                Game6Errors: 0,
                Game6Hit: 0,
            })
            return true
        }
    }
    handleCheck().then(async(e)=>{
        if(e){ await handleCheck(); console.log("Send use game failed, sending again...") } else {
            console.log("Send userScore sucess")
        }
    })
}