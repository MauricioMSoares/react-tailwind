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
            <form onSubmit={safeSubmit}>
                <input type="text" placeholder="Type your name" />
                <input type="email" placeholder="Type your e-mail" />
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}

export default Form