export const quickSort = (list, startId, endId) => {
    let pivot = list[Math.floor((startId + endId) / 2)]
    let left = startId
    let right = endId

    while (true) {
        while (list[left] < pivot) {
            left++
        }

        while (pivot < list[right]){
            right--
        }

        if (right <= left) {
            console.log(list)
            break
        }

        let tmp = list[left]
        list[left] = list[right]
        list[right] = tmp

        left++
        right--
        console.log(list)
    }

    if (startId < left - 1) {
        quickSort(list, startId, left - 1)
    }
    if (right + 1 < endId) {
        quickSort(list, right + 1, endId)
    }
}