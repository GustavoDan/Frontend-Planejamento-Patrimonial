"use client";

import { useUser } from "@/hooks/useUser";
import { useAuth } from "@/contexts/AuthContext";
import LoggedUserContent from "./LoggedUserContent";
import UnloggedUserContent from "./UnloggedUserContent";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";

const ProfileContainer = () => {
    const { data: user } = useUser();
    const { isAuthenticated } = useAuth();

    return (
        <div className="w-72 h-[4.125rem] bg-profile-gradient-border p-[0.08rem] rounded-xl fixed bottom-7 left-5">
            <div className="size-full bg-background bg-profile-gradient rounded-xl p-3.5 pr-6">
                <div className="size-full flex gap-2">
                    {!isAuthenticated ? (
                        <UnloggedUserContent />
                    ) : (
                        <LoggedUserContent userData={user} />
                    )}
                    <div className="my-auto relative">
                        <ThreeDotsIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;
