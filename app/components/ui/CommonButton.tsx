const CommonButton = ({children}) => {
    return (
        <button className="rounded-sm bg-gray-500 px-2 text-gray-200 text-sm py-0.5 ">
            {children}
        </button>
    )
}

export default CommonButton;