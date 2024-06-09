import { infoLessonShedule } from "./itemLesson";

export interface shedule {
    date: string;
    lessons?: Array<infoLessonShedule>
}