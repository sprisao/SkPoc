interface ResultContainerProps {
    content: string;
}

export default function ResultContainer({content}: ResultContainerProps) {
    return (
        <div className="flex items-center justify-center w-full border h-6">
            <p className="text-center text-sm">{content != null ? content : ""}</p>
        </div>
    )
}