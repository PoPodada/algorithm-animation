export const findDifferencesList = (list1 ,list2) => {
    let differences = [];
    console.log(list1,list2)
    for (let i=0; i<list1.length; i++) {
        if (list1[i] !== list2[i]) {
            differences.push(i);
        }
    }
    return differences
}