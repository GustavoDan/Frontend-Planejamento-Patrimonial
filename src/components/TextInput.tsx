import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { forwardRef, InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ className, error, ...rest }: TextInputProps, ref) => {
        return (
            <div>
                <Input
                    ref={ref}
                    className={cn(
                        "bg-[#101010] text-white border border-[#C9C9C9]",
                        className
                    )}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;
