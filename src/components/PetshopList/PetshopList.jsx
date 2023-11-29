import data from "../../../petshops.json"

const PetshopList = () => {
    return (
        <>
            <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(props => <p>{props.name}</p>)
                }
            </div>
        </>
    )
}

export default PetshopList