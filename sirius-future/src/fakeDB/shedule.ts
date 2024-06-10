import { shedule } from "@/types/shedule";

export const shedules: shedule[] = [
    { date: "February 26, 2024" },
    {
        date: "February 27, 2024",
        lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 300000,
                date: "February 27, 2024 13:00:00",
                paid: true,
                stateLesson: 'planned'
            },
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 300000,
                date: "February 27, 2024 15:20:00",
                paid: true,
                stateLesson: 'available'
            },
        ]
    },
    { date: "February 28, 2024" },
    { date: "February 29, 2024" },
    {
        date: "March 1, 2024", lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 300000,
                date: "March 1, 2024 13:00:00",
                paid: true,
                stateLesson: 'pass'
            }
        ]
    },
    { date: "March 2, 2024" },
    { date: "March 3, 2024" },
    {
        date: "March 4, 2024",
        lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 12300000,
                date: "March 4, 2024 13:00:00",
                paid: false,
                stateLesson: 'available'
            }
        ]
    },
    { date: "March 5, 2024" },
    { date: "March 6, 2024" },
    { date: "March 7, 2024" },
    {
        date: "March 8, 2024",
        lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 300000,
                date: "March 8, 2024 13:00:00",
                paid: false,
                stateLesson: 'cansel'
            }
        ]
    },
    { date: "March 9, 2024" },
    { date: "March 10, 2024" },
    { date: "March 11, 2024" },
    { date: "March 12, 2024" },
    { date: "March 13, 2024" },
    {
        date: "March 14, 2024",
        lessons: [
            {
                name: 'Изучение Реакта',
                teacher: 'Миронова Инна',
                duration: 3500000,
                date: "March 14, 2024 13:00:00",
                paid: true,
                stateLesson: 'done'
            },
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 300000,
                date: "March 14, 2024 15:20:00",
                paid: true,
                stateLesson: 'available'
            },
        ]
    },
    { date: "March 15, 2024" },
    {
        date: "March 16, 2024",
        lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 1000000,
                date: "March 16, 2024 13:00:00",
                paid: false,
                stateLesson: 'done'
            },
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 2500000,
                date: "March 16, 2024 17:00:00",
                paid: true,
                stateLesson: 'planned'
            }
        ]
    },
    { date: "March 17, 2024" },
    { date: "March 18, 2024" },
    {
        date: "March 19, 2024",
        lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 500000,
                date: "March 19, 2024 13:00:00",
                paid: true,
                stateLesson: 'occupied'
            },
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 1500000,
                date: "March 19, 2024 17:00:00",
                paid: true,
                stateLesson: 'pass'
            }
        ]
    },
    { date: "March 20, 2024" },
    { date: "March 21, 2024" },
    { date: "March 22, 2024" },
    { date: "March 23, 2024" },
    { date: "March 24, 2024" },
    { date: "March 25, 2024" },
    { date: "March 26, 2024" },
    { date: "March 27, 2024" },
    {
        date: "March 28, 2024",
        lessons: [
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 1000000,
                date: "March 28, 2024 10:00:00",
                paid: true,
                stateLesson: 'done'
            },
            {
                name: 'Ментальная Арифметика',
                teacher: 'Белкина Инна',
                duration: 300000,
                date: "March 28, 2024 20:00:00",
                paid: true,
                stateLesson: 'occupied'
            }]
    },
    { date: "March 29, 2024" },
    { date: "March 30, 2024" },
    { date: "March 31, 2024" },
]
