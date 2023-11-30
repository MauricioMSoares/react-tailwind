import Input from "../Input/Input"

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
                <Input type="text" required placeholder="Type your name" />
                <Input type="email" required placeholder="Type your e-mail" />
                <button type="submit" className="w-full max-w-sm px-5 py-1 bg-petsup_orange dark:bg-petsup_purple rounded-full dark:text-gray-200 font-semibold">Sign In</button>
            </form>
        </>
    )
}

export default Form