const Input = props => {
    return <input type="text" className="w-full max-w-lg dark:bg-gray-100 border-2 rounded-full pl-2 py-1 outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:font-semibold focus:border-2 focus:border-gray-300 focus:dark:border-petsup_purple invalid:focus:border-2 invalid:focus:border-red-400 invalid:focus:dark:border-2 invalid:focus:dark:border-red-400" {...props} />
}

export default Input