import { getShedule } from "@/fakeDB/sheduleBack";
import { getUser } from "@/fakeDB/userBack";
import { shedule } from "@/types/shedule";
import { IProfile } from "@/types/store";

export default new class UserService {

    async getInfoUser(name: string): Promise<IProfile> {
        const user = await getUser(name);
        return user;
    }
}