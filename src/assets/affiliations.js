export const compareAffiliations = (firstAffilation, secondAffilation) => {
    // I wrote this function because same locations has diffrent ids, which is strange.
    // If they would be the same, I should simply compare ids.

    // /* eslint-disable no-unused-vars */
    // const first = (({ id, ...rest }) => rest)(firstAffilation)
    // const second = (({ id, ...rest }) => rest)(secondAffilation)
    // /* eslint-enable no-unused-vars */
    const { name, city, country } = firstAffilation
    const {
        name: secondName,
        city: secondCity,
        country: secondCountry
    } = secondAffilation

    return (
        JSON.stringify({ name, city, country }) ===
        JSON.stringify({
            name: secondName,
            city: secondCity,
            country: secondCountry
        })
    )
}

export const reduceAffiliationList = list => {
    return list.reduce((prev, curr) => {
        const isAlreadyExist = prev.some(el => compareAffiliations(el, curr))
        if (!isAlreadyExist) {
            return [...prev, curr]
        }
        return [...prev]
    }, [])
}

export const matchSupscript = (placesList, affiliations) => {
    return affiliations.map(affiliation => {
        const [{ supscript }] = placesList.filter(place =>
            compareAffiliations(place, affiliation)
        )
        return {
            ...affiliation,
            supscript
        }
    })
}
