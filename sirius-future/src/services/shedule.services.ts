import { getShedule } from "@/fakeDB/sheduleBack";
import { shedule } from "@/types/shedule";

export default new class SheduleService {

    async getallShedule(): Promise<shedule[]> {
        const shedules = await getShedule();
        return shedules;
    }
}