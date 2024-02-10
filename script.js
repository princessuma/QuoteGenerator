const Quotes=[
    {
        id:1,
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        author:"~Oscar Wilde"
    },

    {
        id:2,
        quote:'That it will never come again is what makes life so sweet.',
        author: "~Emily Dickinson"
    },

    {
        id:3,
        quote:'It is never too late to be what you might have been.',
        author:"~George Eliot"
    },



    {
        id:4,
        quote:'Pain is inevitable. Suffering is optional.',
        author:"~Haruki Murakami"
    },
    {
        id:5,
        quote:`Don't let your happiness depend on something you may lose.`,
        author:" ~C.S. Lewis"
    },
    {
        id:6,
        quote:`It's always a nice day above the clouds.`,
        author:" ~JAMES STODDAH"
    },
    {
        id:7,
        quote:`Happiness can be found, even in the darkest of times, if one only remembers to turn on the  light.`,
        author:" ~ALBUS DUMBLEDORE"
    },
    {
        id:8,
        quote:`I will always find a way and a way will always find me.`,
        author:" ~CHARLES F. GLASSMAN"
    },
    {
        id:9,
        quote:`N"othing is impossible. The word itself says ‘I’m possible`,
        author:" ~AUDREY HEPBURN"
    },
    {
        id:10,
        quote:`No one is perfect - that’s why pencils have erasers.`,
        author:"~Wolfgang Riebe"
    }
    

]

// accesing html elements 
const quoteElem=document.getElementById('quote')
const authorElem=document.getElementById('author')
const btnElem=document.getElementById('btn')
console.log(Quotes.length)
// function to generate random quotes
btnElem.addEventListener('click',()=>{
    let i= Math.floor(Math.random()* Quotes.length)
    quoteElem.innerText=Quotes[i].quote
    authorElem.innerText=Quotes[i].author
})









// math.random  function 
// Math.floor(math.random()*3)s