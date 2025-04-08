// BEGIN
const getSortedNames = (users) => {
    const names = [];

    for (const user of users) {
        names.push(user.name);
    }

    return names.sort();
};

export default getSortedNames;
// END