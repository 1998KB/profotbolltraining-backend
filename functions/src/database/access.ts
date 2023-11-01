import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import {db} from './init';
import { randomUUID } from 'crypto';
import { logger } from 'firebase-functions/v1';

export const test = () => {
    return "test2";
}

export const newTraining = async(body: any) => {
    const id = randomUUID();
    logger.info("newTraining: " + id);
    await setDoc(doc(db, "trainings", id), body);
    return {...body, id: id}
}

export const getTrainings = async() => {
    logger.info("getTrainings");
    const trainings: any = [];
    const querySnapshot = await getDocs(collection(db, "trainings"));
    querySnapshot.forEach((doc) => {
        trainings.push({...doc.data(), id: doc.id});
    });
    return trainings;
}