import { IInfoLesson } from "./itemLesson";
import { infoStat } from "./itemStat";
import { shedule } from "./shedule";

export type lang = 'RU' | 'EN';

export type typeStoreShedule = {
    data: shedule[],
    loading: boolean
}

export type typeStoreApp = {
    modalUser: boolean,
    lang: lang,
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


