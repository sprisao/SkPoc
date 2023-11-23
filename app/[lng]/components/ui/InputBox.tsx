import {cn} from "@/lib/utils";

export default function InputBox({className, type, placeholder}) {
    return (
        <input
            className={cn(
                "w-full flex flex-row px-2 bg-gray-50 border-2 h-7 ",
                className
            )}
            type={type}
            placeholder={placeholder}
        />
    )
}
