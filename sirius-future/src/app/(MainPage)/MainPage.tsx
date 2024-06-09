'use client'

import { useAppSelector } from "@/hooks/hookStore";
import BalanseSection from "./components/balanseSection/BalanseSection";
import LessonsSections from "./components/lessonsSection/lessonsSection";
import ReportSection from "./components/reportSection/ReportSection";
import SaleSection from "./components/saleSection/SaleSection";
import TimerSection from "./components/timerSection/TimerSection";
import NoLogin from "../login/components/noLogin/NoLogin";

export default function MainPage() {

    const isLogin = useAppSelector((state) => state.user.isLogin);

    return (
        <div className="flex gap-5 mx-auto flex-wrap items-center justify-center h-max">
            {isLogin
                ? <>
                    <SaleSection />
                    <TimerSection />
                    <ReportSection />
                    <BalanseSection />
                    <LessonsSections />
                </>
                : <NoLogin />
            }

        </div>
    );
}