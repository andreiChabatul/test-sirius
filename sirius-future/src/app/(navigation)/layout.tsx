import Navigation from "./components/Navigation";

export default function NavagationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <Navigation />
            {children}
        </div>
    )
}