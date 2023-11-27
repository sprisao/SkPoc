const CommonButton = ({children}) => {
    return (
        <button className="rounded-sm bg-gray-300 px-2 text-gray-100 text-sm py-0.5 shrink-0" disabled>
            {children}
        </button>
    )
}

export default CommonButton;