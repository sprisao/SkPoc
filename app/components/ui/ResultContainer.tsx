interface ResultContainerProps {
    content: string;
    key: number | string;
}
export default function ResultContainer({content, key} : ResultContainerProps) {
    return (
        <div key={key} className="flex items-center justify-center w-full border h-6">
            <p className="text-center text-sm">{content}</p>
        </div>
    )
}