const grades = [
    1, 20, 4, 33, 666, 90, '1'
]

console.log(
    grades.filter(el => typeof el === 'string')
)

// Filter implementation

Array.prototype.my_filter = function (fn) {

    const filtered = []

    for (let i = 0; i < this.length; i++) {

        console.log(this[i])

        const filterTest = fn(this[i])

        if (filterTest === true) {

            filtered.push(
                this[i], i, this
            )
        }
    }

    return filtered
}

const test = el => el >= 10

const finalGrades = grades.my_filter(test)

console.log('final grades: ', finalGrades)