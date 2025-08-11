import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex flex-col items-center justify-center p-24">
                <h1 className="text-4xl font-bold">MFO</h1>
            </main>
        </div>
    );
}
