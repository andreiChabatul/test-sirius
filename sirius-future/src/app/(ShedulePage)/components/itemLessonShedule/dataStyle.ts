import { stateLesson } from "@/types/itemLesson";

export const dataStyle: Record<stateLesson, { 'background': string, 'border-color': string, 'text-decoration'?: string }> = {
    done: { 'background': '', 'border-color': '#22782B' },
    planned: { 'background': '#D7F0D6', 'border-color': '#BBE7B9' },
    cansel: { 'background': '', 'border-color': '#79747F', 'text-decoration': 'line-through' },
    occupied: { 'background': '#F5F5F5', 'border-color': '#C8C5CD' },
    pass: { 'background': '', 'border-color': '#E12828' },
    available: { 'background': '#EEEEFF', 'border-color': '#DECFFF' }
}
