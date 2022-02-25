export const compareAffiliations = (firstAffilation, secondAffilation) => {
    // I wrote this function because same locations has diffrent ids, which is strange.
    // If they would be the same, I should simply compare ids.

    /* eslint-disable no-unused-vars */
    const first = (({ id, ...rest }) => rest)(firstAffilation)
    const second = (({ id, ...rest }) => rest)(secondAffilation)
    /* eslint-enable no-unused-vars */

    return Object.is(first, second)
}

export const reduceAffiliationList = list => {
    return list.reduce((prev, curr) => {
        const isAlreadyExist = prev.some(el => compareAffiliations(el, curr))
        if (!isAlreadyExist) {
            return [...prev, curr]
        }
    }, [])
}
