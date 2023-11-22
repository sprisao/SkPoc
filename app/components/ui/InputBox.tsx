import {cn} from "@/lib/utils";

export default function InputBox({className, type, placeholder}) {
    return (
        <input
            className={cn(
                "w-full flex flex-row items-center px-2 py-1 bg-gray-50 border-2 h-6 pb-[5px]",
                className
            )}
            type={type}
            placeholder={placeholder}
        />
    )
}