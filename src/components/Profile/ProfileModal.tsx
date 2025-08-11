"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import ProfileContainer from "./ProfileContainer";
import { useCallback, useState } from "react";
import LoginForm from "./LoginForm";
import { useAuth } from "@/contexts/AuthContext";
import ConfirmLogout from "./ConfirmLogout";

const ProfileModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const handleOpenChange = useCallback(
        (open: boolean) => {
            setIsOpen(open);
        },
        [setIsOpen]
    );

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger>
                <ProfileContainer />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex items-center justify-center">
                    <DialogTitle className="text-3xl">
                        {isAuthenticated ? "Logout" : "Login"}
                    </DialogTitle>
                    <DialogDescription className="flex items-center justify-center text-center w-full">
                        {isAuthenticated ? (
                            <ConfirmLogout
                                setIsOpen={setIsOpen}
                                logout={logout}
                            />
                        ) : (
                            <LoginForm isOpen={isOpen} setIsOpen={setIsOpen} />
                        )}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ProfileModal;
