import { IInfoLesson } from "./itemLesson";
import { infoStat } from "./itemStat";
import { shedule } from "./shedule";

export type typeStoreShedule = {
    data: shedule[],
    loading: boolean
}

export type typeStoreApp = {
    modalUser: boolean,
}

export interface IProfile {
    email: string,
    name: string,
    image: string,
    stat: infoStat[],
    infoLesson: IInfoLesson[],
    anotherProfile: IProfile[],
    messages: number,
    nextLessontime: number
}


export interface typeStoreUser {
    isLogin: boolean,
    profile: IProfile
}


