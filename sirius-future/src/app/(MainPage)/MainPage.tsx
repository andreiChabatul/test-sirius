import BalanseSection from "./components/balanseSection/BalanseSection";
import LessonsSections from "./components/lessonsSection/lessonsSection";
import ReportSection from "./components/reportSection/ReportSection";
import SaleSection from "./components/saleSection/SaleSection";
import TimerSection from "./components/timerSection/TimerSection";

export default function MainPage() {
    return (
        <div className="flex gap-5 mx-auto flex-wrap items-center justify-center h-max">
            <SaleSection />
            <TimerSection />
            <ReportSection />
            <BalanseSection />
            <LessonsSections />
        </div>
    );
}