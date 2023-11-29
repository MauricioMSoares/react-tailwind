const Petshop = ({ name, image, bio, services }) => {
    return (
        <>
            <div className="p-5 bg-gray-200 dark:bg-gray-700 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
                <h3 className="text-xl text-petsup_purple dark:text-gray-200 font-bold">{name}</h3>
                <div className="grid gap-1">
                    {services.map((content, index) => <p key={index} className="text-gray-900 dark:text-gray-300">{content}</p>)}
                </div>
            </div>
        </>
    )
}

export default Petshop