export interface IInfoLesson {
    date: string;
    name: string;
    teacher: string;
    duration: number;
}


export interface infoLessonShedule extends IInfoLesson {
    stateLesson: stateLesson;
    paid: boolean;
}

export type stateLesson = 'planned' | 'cansel' | 'pass' | 'available' | 'done' | 'occupied';

