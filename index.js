

let randomVidLaunched = false;
let emlId = ''

function randomVideo(decElm) {
    elmId = randomNumber(decElm)

    let srcObj = document.getElementsByTagName('source')[elmId].attributes[0];
    console.log('srcObj1: ', srcObj)

}
let elmLength = ''

function findRange(docElm) {
    elmLength = docElm -= 1
    console.log(elmLength)
    return docElm -= 1
}

function randomNumber(elmLength) {
    return Math.floor(Math.random() * (findRange(elmLength) - 0 + 1)) + 0;
}
