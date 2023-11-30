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
            <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
                <input type="text" className="petsup-input" required placeholder="Type your name" />
                <input type="email" className="petsup-input" required placeholder="Type your e-mail" />
                <button type="submit" className="w-full max-w-sm px-5 py-1 bg-petsup_orange dark:bg-petsup_purple rounded-full dark:text-gray-200 font-semibold hover:animate-pulse hover:shadow-mt hover:shadow-gray-500 hover:dark:shadow-black">Sign In</button>
            </form>
        </>
    )
}

export default Form