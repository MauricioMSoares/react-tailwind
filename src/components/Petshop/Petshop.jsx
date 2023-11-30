const Petshop = ({ name, image, bio, services, alt }) => {
    return (
        <>
            <div className="petshop-card">
                <h3 className="text-xl text-petsup_purple dark:text-gray-200 font-bold">{name}</h3>
                {image && <img className="sm:p-4" src={image} />}
                {image && alt && <span className="sr-only">{alt}</span>}
                <div className="hidden w-full flex-row justify-end gap-2 sm:flex">
                    {
                        services.map(service => <span key={service} className="service-tag">{service}</span>)
                    }
                </div>
                <div className="grid gap-1">
                    {bio.map((content, index) => <p key={index} className="text-gray-900 dark:text-gray-300">{content}</p>)}
                </div>
            </div>
        </>
    )
}

export default Petshop