interface SolidProgressBarProps {
    progress: number;
}

const SolidProgressBar = ({ progress }: SolidProgressBarProps) => {
    return (
        <div className="h-10 w-full rounded-lg bg-indigo-900/50 relative">
            <div
                className="h-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default SolidProgressBar;
