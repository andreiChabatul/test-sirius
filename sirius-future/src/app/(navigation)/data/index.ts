import { itemNavProps } from "@/types/navigation";

export const DataNav: Array<itemNavProps> = [
    {
        label: 'Главная',
        href: '/',
        icon: 'home'
    },
    {
        label: 'Расписание',
        href: '/shedule',
        icon: 'calendar_month'
    },
    {
        label: 'Оплата',
        href: '/payment',
        icon: 'account_balance_wallet'
    },
    {
        label: 'Достижения',
        href: '/achievements',
        icon: 'trophy'
    },
    {
        label: 'Тренажеры',
        href: '/training',
        icon: 'auto_awesome_mosaic'
    },
    {
        label: 'Библиотека',
        href: '/library',
        icon: 'folder_open'
    },
    {
        label: 'Проверка связи',
        href: '/headset',
        icon: 'headset_mic'
    },
    {
        label: 'Настройки',
        href: '/settings',
        icon: 'settings'
    },
    {
        label: 'Вопросы',
        href: '/help',
        icon: 'help'
    }

    


]