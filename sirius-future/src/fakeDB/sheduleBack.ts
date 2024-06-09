import { shedule } from "@/types/shedule";
import { shedules } from "./shedule";

export async function getShedule(): Promise<shedule[]> {

    return new Promise((resolve) => {
        //типо бэк
        setTimeout(() => {
            resolve(shedules);
        }, 500);
    })
}