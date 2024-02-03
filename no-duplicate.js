function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const biriyaniNeed = ['humayun', 'juyel', 'rimon', 'juyel', 'humayun']
const uniqueArray = noDuplicate(biriyaniNeed);
console.log(uniqueArray);