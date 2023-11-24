import cn from 'classnames';

export default function InputBox({className, type, ...props}) {
    return (
        <input
            className={cn(
                "w-full flex flex-row px-2 bg-gray-50 border-2 h-7",
                className
            )}
            type={type}
            {...props} // 추가된 부분
        />
    );
}
