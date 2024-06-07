import Navigation from "./components/Navigation";
import Header from "./components/header/Header";

export default function NavagationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <Navigation />
            <div>
                <Header />
                {children}
            </div>

        </div>
    )
}