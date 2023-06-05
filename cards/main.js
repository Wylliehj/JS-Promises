//1.

axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(res => {
        console.log(res)
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })

//2.

axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    })
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`))

//3.
let deckID = null;
let margin = 0

axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(res => {
        deckID = res.data.deck_id
    })

$('#get-card').on('click', function(){
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        .then(res => {
            let cardIMG = res.data.cards[0].image
            $('#show-cards').append(`<img src="${cardIMG}" style="margin:${margin}px">`)
            margin += 20;
        })
})