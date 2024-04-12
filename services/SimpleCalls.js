import app from "./Inicialize";
import { collection, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import moment from "moment";
import SimplePull from "./SimplePull";

export default async function SimpleCalls(parameter) {
    const db = getFirestore(app);
    const data = moment().format("YYYY") + moment().format("MM");
    const hora = moment().format("HH");

    switch (parameter) {
        //Check-in=====================================
        case "checkin":
            const ref = doc(db, 'AppUse', data);
            let itemToPush = "Error";
            //Fazendo a condicionalizacao do horario
            const handleUpdateCheckIn = async () => {
                const picos = await SimplePull()
                const handleUpdate = async ( parameter ) => {
                    const ref = doc(db, 'AppUse', data);
                    const valueToUpdate = picos["Pico" + parameter]
                    await updateDoc(ref, {
                        ["Pico" + parameter]: valueToUpdate + 1,
                    });
                }
                if (picos) {
                    switch(true){
                        case hora <= 2:handleUpdate("02");break;
                        case hora > 2 && hora <= 4:handleUpdate("04");break;
                        case hora > 4 && hora <= 6:handleUpdate("06");break;
                        case hora > 6 && hora <= 8:handleUpdate("08");break;
                        case hora > 8 && hora <= 10:handleUpdate("10");break;
                        case hora > 10 && hora <= 12:handleUpdate("12");break;
                        case hora > 12 && hora <= 14:handleUpdate("14");break;
                        case hora > 14 && hora <= 16:handleUpdate("16");break;
                        case hora > 16 && hora <= 18:handleUpdate("18");break;
                        case hora > 18 && hora <= 20:handleUpdate("20");break;
                        case hora > 20 && hora <= 22:handleUpdate("22");break;
                    }
                } else {
                    const newDocRef = collection(db, 'AppUse');
                    await setDoc(doc(newDocRef, data), {
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

            handleUpdateCheckIn().then(async (e) => {
                if (e) { await handleUpdateCheckIn(); console.log("Send use data failed, sending again...") } else {
                    console.log("Send use complete :)")
                }
            })


            break;
            //Check-in=====================================

            
            
            //Default=====================================
        default:
            console.log("SimpleCalls parameter blanked");
            break;
    }
}