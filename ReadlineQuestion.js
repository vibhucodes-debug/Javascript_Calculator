
const readline = require('readline').createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)

readline.question("What is your name? - ",(Name)=>{
    console.log(`Hello, ${Name}`)
})