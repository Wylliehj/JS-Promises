const BASE_URL = 'http://numbersapi.com/'
const FAV_NUM = 7

//1.
axios.get(`${BASE_URL}${FAV_NUM}`)
    .then(res => console.log(res.data))

//2.
let favNumbers = [1, 4, 7, 8]

axios.get(`${BASE_URL}${favNumbers}`)
    .then((res) => {
        console.log('2', res)
        for(let num of favNumbers){
            $('#fav-nums').append(`<li>${res.data[num]}</li>`)
        }
    })

//3.
let fourFacts = []

for(let i = 1; i < 5; i++){
    fourFacts.push(axios.get(`${BASE_URL}${FAV_NUM}`));
}

Promise.all(fourFacts)
    .then((res) => {
        res.forEach(p => {
            $('#my-num-facts').append(`<li>${p.data}</li>`)
        })
    })


