import app from "../Inicialize";
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import moment from "moment";
import GameUsePull from "./GameUsePull";

export default GameUsePush = async (game) => {
    const db = getFirestore(app);
    const data = moment().format("YYYY") + moment().format("MM");

    const handleCheck = async () => {
        let valuesFromDB = await GameUsePull();

        const handleUpdate = async (gameIndex) => {
            const ref = doc(db, "GameUse", data)
            const valueToUpdate = valuesFromDB[gameIndex]
            await updateDoc(ref, {
                [gameIndex]: valueToUpdate + 1,
            });
        }

        if (valuesFromDB) {
            switch (true) {
                case game == "NoHumano": handleUpdate("Game1"); break;
                case game == "AcerteoCone": handleUpdate("Game2"); break;
                case game == "BolaVoadora": handleUpdate("Game3"); break;
                case game == "CuboMagico": handleUpdate("Game4"); break;
                case game == "QueimadoXadrez": handleUpdate("Game5"); break;
                case game == "SinalDeTransito": handleUpdate("Game6"); break;
            }
        } else {
            const newDocRef = collection(db, 'GameUse');
            await setDoc(doc(newDocRef, data), {
                Game1: 0,
                Game2: 0,
                Game3: 0,
                Game4: 0,
                Game5: 0,
                Game6: 0,
            })
            return true
        }
    }
    handleCheck().then(async(e)=>{
        if(e){ await handleCheck(); console.log("Send use game failed, sending again...") } else {
            console.log("Send use game to " + game + " sucess")
        }
    })
}