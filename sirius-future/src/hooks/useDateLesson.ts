const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export function useDateLesson(date: string, duration?: number) {
    const lessonStart = new Date(date);
    const lessonEnd = new Date(lessonStart.getTime() + (duration || 0));
    const day = lessonStart.getDate();
    const timeLesson = `${lessonStart.getHours().toString().padStart(2, '0')}:${lessonStart.getMinutes().toString().padStart(2, '0')}-${lessonEnd.getHours().toString().padStart(2, '0')}:${lessonEnd.getMinutes().toString().padStart(2, '0')}`
    const month = MONTH[lessonStart.getMonth()];

    return { day, month, timeLesson }
}
