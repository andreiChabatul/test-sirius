import Link from "next/link";

export default function NoLogin() {

    return (
        <div className="flex items-center justify-center w-[1087px] flex-col gap-5 mt-40">
            <h4 className="text-2xl">Для просмотра информации необходима авторизация</h4>
            <Link href={'./login'}>Войти в профиль</Link>
        </div>
    )
}