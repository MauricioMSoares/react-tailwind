const Form = ({ onSubmit }) => {
const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()

    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
}

    return (
        <>
            <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20">
                <input type="text" placeholder="Type your name" className="border-2 rounded-full px-2 py-1" />
                <input type="email" placeholder="Type your e-mail" className="border-2 rounded-full px-2 py-1" />
                <button type="submit" className="px-5 py-1 bg-petsup_orange dark:bg-petsup_purple rounded-full dark:text-gray-200 font-semibold">Sign In</button>
            </form>
        </>
    )
}

export default Form