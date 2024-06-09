import { shedule } from "@/types/shedule";
import { shedules } from "./shedule";
import { IProfile } from "@/types/store";
import { mockUser } from "./user";

export async function getUser(email: string): Promise<IProfile> {

    return new Promise((resolve) => {
        //типо бэк
        setTimeout(() => {
            resolve({ ...mockUser, email });
        }, 500);
    })
}