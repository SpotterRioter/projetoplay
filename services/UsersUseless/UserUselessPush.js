import app from "../Inicialize";
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import moment from "moment";
import UserUselessPull from "./UserUselessPull";
import GlobalServices from "../GlobalServices";

export default UsersFavoritePush = async () => {
    const db = getFirestore(app);
    const hora = moment().format("HH");

    const handleCheck = async () => {
        //{"Game1Acess": 0, "Game2Acess": 0, "Game3Acess": 0, "Game4Acess": 0, "Game5Acess": 0, "Game6Acess": 0}
        let valuesFromDB = await UserUselessPull();

        const handleUpdate = async (horario) => {
            const ref = doc(db, "UsersUseless", GlobalServices.userId)
            const valueToUpdate = valuesFromDB["Pico" + horario]
            await updateDoc(ref, {
                ["Pico" + horario]: valueToUpdate + 1,
            });
            GlobalServices.userUseless = true
        }

        if (valuesFromDB) {
            switch (true) {
                case hora <= 2: handleUpdate("02"); break;
                case hora > 2 && hora <= 4: handleUpdate("04"); break;
                case hora > 4 && hora <= 6: handleUpdate("06"); break;
                case hora > 6 && hora <= 8: handleUpdate("08"); break;
                case hora > 8 && hora <= 10: handleUpdate("10"); break;
                case hora > 10 && hora <= 12: handleUpdate("12"); break;
                case hora > 12 && hora <= 14: handleUpdate("14"); break;
                case hora > 14 && hora <= 16: handleUpdate("16"); break;
                case hora > 16 && hora <= 18: handleUpdate("18"); break;
                case hora > 18 && hora <= 20: handleUpdate("20"); break;
                case hora > 20 && hora <= 22: handleUpdate("22"); break;
            }
        } else {
            const newDocRef = collection(db, 'UsersUseless');
            await setDoc(doc(newDocRef, GlobalServices.userId), {
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
            return true
        }
    }
    handleCheck().then(async(e)=>{
        if(e){ await handleCheck(); console.log("Send use game failed, sending again...") } else {
            console.log("Send userUseless sucess")
        }
    })
}