const CommonButton = ({children}) => {
    return (
        <button className="flex justify-center items-center w-full rounded-sm bg-gray-400 px-1 text-gray-200 text-sm ">
            {children}
        </button>
    )
}

export default CommonButton;