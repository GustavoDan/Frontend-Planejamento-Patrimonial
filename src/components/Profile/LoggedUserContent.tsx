"use client";

import { UserProfile } from "@/hooks/useUser";
import { capitalize } from "@/utils/string";
import { useMemo } from "react";

interface LoggedUserContentProps {
    userData?: UserProfile;
}

const LoggedUserContent = ({ userData }: LoggedUserContentProps) => {
    const userInfo = useMemo(() => {
        if (!userData?.email) {
            return null;
        }

        const userName = userData.email.split("@")[0];
        const nameParts = userName.split(/[._-]/).filter(Boolean);

        let initials = "";
        if (nameParts.length === 0) {
            initials = "??";
        } else if (nameParts.length > 1) {
            const firstInitial = nameParts[0][0];
            const lastInitial = nameParts[nameParts.length - 1][0];
            initials = firstInitial + lastInitial;
        } else {
            initials = nameParts[0].substring(0, 2);
        }

        return {
            userName,
            email: userData.email,
            initials: initials.toUpperCase(),
        };
    }, [userData]);

    if (!userInfo) {
        return (
            <div className="flex flex-1 items-center text-sm text-red-500">
                Falha ao carregar perfil.
            </div>
        );
    }

    return (
        <>
            <div className="size-[2.125rem] aspect-square bg-[#D97263] text-white rounded-[0.56rem] flex items-center justify-center text-xs">
                {userInfo.initials}
            </div>
            <div className="relative -top-1 text-sm flex flex-col flex-1 text-left">
                <div className="text-white">
                    {capitalize(userInfo.userName)}
                </div>
                <div className="text-[#6D6D6D]">{userInfo.email}</div>
            </div>
        </>
    );
};

export default LoggedUserContent;
