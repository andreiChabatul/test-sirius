import { IInfoLesson } from "@/types/itemLesson";
import { infoStat } from "@/types/itemStat";
import { IProfile } from "@/types/store";

const stat: infoStat[] = [
    {
        nameLesson: 'Ментальная Арифметика',
        value: 32
    },
    {
        nameLesson: 'Программирование',
        value: 0
    },
    {
        nameLesson: 'Скорочтение',
        value: 4
    },
    {
        nameLesson: 'Изучение реакт',
        value: 15
    },
]

const infoLesson: IInfoLesson[] = [
    {
        name: 'Ментальная Арифметика',
        teacher: 'Белкина Инна',
        duration: 300000,
        date: "December 17, 1995 13:24:00"

    },
    {
        name: 'Программирование',
        teacher: 'Животновская Оксана',
        duration: 3000000,
        date: "April 1, 1995 12:15:00"

    },
    {
        name: 'Изучение React',
        teacher: 'Владислав Игорев',
        duration: 10000000,
        date: "March 4, 1995 9:00:00"

    }]

export const mockUserTwo: IProfile = {
    email: '',
    name: 'Алла',
    image: 'avatar',
    anotherProfile: [],
    messages: 3,
    nextLessontime: 345234234,
    stat,
    infoLesson
}

export const mockUserThree: IProfile = {
    email: '',
    name: 'Dimon',
    image: 'avatar',
    anotherProfile: [],
    messages: 3,
    nextLessontime: 345234234,
    stat,
    infoLesson
}

export const mockUser: IProfile = {
    email: '',
    name: 'Андрей',
    image: 'avatar',
    anotherProfile: [mockUserTwo, mockUserThree],
    messages: 3,
    nextLessontime: 345234234,
    stat,
    infoLesson
}


