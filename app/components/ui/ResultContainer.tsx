interface ResultContainerProps {
    content: string;
    key: number;
}
export default function ResultContainer({content, key} : ResultContainerProps) {
    return (
        <div key={key} className="w-full border h-6">
            <p className="text-center">{content}</p>
        </div>
    )
}