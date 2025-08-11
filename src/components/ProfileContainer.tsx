import { ThreeDotsIcon } from "./icons/ThreeDotsIcon";

const ProfileContainer = () => {
    return (
        <div className="w-72 h-[4.125rem] bg-profile-gradient-border p-[0.08rem] rounded-xl">
            <div className="size-full bg-background bg-profile-gradient rounded-xl p-3.5 pr-6">
                <div className="flex gap-2">
                    <div className="size-[2.125rem] aspect-square bg-[#D97263] text-white rounded-[0.56rem] flex items-center justify-center text-xs">
                        PA
                    </div>
                    <div className="relative -top-1 text-sm flex flex-col flex-1">
                        <div className="text-white">Paulo Alberto</div>
                        <div className="text-[#6D6D6D]">
                            p.alberto@gmail.com
                        </div>
                    </div>
                    <div className="my-auto relative -top-1">
                        <ThreeDotsIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileContainer;
