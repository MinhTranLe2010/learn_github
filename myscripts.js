const user = {
    name: "Minh",
    year: 1997,
    sex: "male",
    job: "DEV",
    age(){
        const yearOld = new Date().getFullYear()
        return yearOld - Number(this.year)
    }
}

console.log(`His name is ${user.name}, he is ${user.age()} years old`)