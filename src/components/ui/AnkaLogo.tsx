"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const AnkaLogo = () => {
    const router = useRouter();
    return (
        <div
            className="relative h-14 w-44 bg-anka-gradient-border p-[0.08rem] rounded-[2.44rem] flex-shrink-0 overflow-hidden"
            onPointerUp={() => router.push("/")}
        >
            <div className="size-full rounded-[2.44rem] bg-background bg-anka-gradient" />
            <Image
                src="/anka-logo.svg"
                alt="Logo da Anka"
                className="absolute top-1 left-[2.313rem]"
                width={96}
                height={42}
                priority
            />
        </div>
    );
};
export default AnkaLogo;
