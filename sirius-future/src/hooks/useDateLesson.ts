const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export function useDateLesson(date: string, duration: number) {
    const lessonStart = new Date(date);
    const lessonEnd = new Date(lessonStart.getTime() + duration);
    const day = lessonStart.getDate();
    const timeLesson = `${lessonStart.getHours()}:${lessonStart.getMinutes()}-${lessonEnd.getHours()}:${lessonEnd.getMinutes()}`
    const month = MONTH[lessonStart.getMonth()];

    return { day, month, timeLesson }
}
