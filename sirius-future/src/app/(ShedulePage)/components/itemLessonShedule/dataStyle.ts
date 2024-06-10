import { stateLesson } from "@/types/itemLesson";

export const dataStyle: Record<stateLesson, Record<string, string>> = {
    done: { 'background': '', 'borderColor': '#22782B' },
    planned: { 'background': '#D7F0D6', 'borderColor': '#BBE7B9' },
    cansel: { 'background': '', 'borderColor': '#79747F', 'textDecoration': 'line-through' },
    occupied: { 'background': '#F5F5F5', 'borderColor': '#C8C5CD' },
    pass: { 'background': '', 'borderColor': '#E12828' },
    available: { 'background': '#EEEEFF', 'borderColor': '#DECFFF' }
}
