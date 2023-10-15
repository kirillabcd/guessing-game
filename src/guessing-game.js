class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max
        this.min = min

        this.array = []

        for (let i = this.min; i <= this.max; i++) {
            this.array.push(i)
        }
    }

    guess() {
        return this.array[Math.round((this.array.length - 1) / 2)]
    }

    lower() {
        this.max = this.guess()
        this.array = []

        for (let i = this.min; i <= this.max; i++) {
            this.array.push(i)
        }
    }

    greater() {
        this.min = this.guess()
        this.array = []

        for (let i = this.min; i <= this.max; i++) {
            this.array.push(i)
        }
    }
}

module.exports = GuessingGame
