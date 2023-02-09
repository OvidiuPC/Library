'use strict';

const displayBooks= document.querySelector('.saved-books')
const saveBtn     = document.querySelector('.btn');
const bookTitle   = document.querySelector('.title');
const bookAuthor  = document.querySelector('.author');
const bookPubYear = document.querySelector('.pub-year');
const bookCategory= document.querySelector('.category');
const bookPrice   = document.querySelector('.price');


const library = [];

saveBtn.addEventListener('click', function(){
    const book = {
        title:bookTitle.value,
        author:bookAuthor.value,
        publishing:bookPubYear.value,
        category:bookCategory.value,
        price:bookPrice.value,


    }
    library.push(book);
    addDisplay()
    console.log(library);
})

function addDisplay(){
    const span = document.createElement('tr');
    const paragraph0El = document.createElement('td');
    const paragraph1El = document.createElement('td');
    const paragraph2El = document.createElement('td');
    const paragraph3El = document.createElement('td');
    const paragraph4El = document.createElement('td');
    const paragraph5El = document.createElement('td');
    const remove       = document.createElement('button');

    displayBooks.appendChild(span)
    span.append(paragraph0El, paragraph1El, paragraph2El, paragraph3El, paragraph4El,paragraph5El);
    span.className = 'shelf';
    remove.className = 'remove-btn';
    remove.textContent = 'Remove'
    paragraph0El.appendChild(document.createTextNode(bookTitle.value));
    paragraph1El.appendChild(document.createTextNode(bookAuthor.value));
    paragraph2El.appendChild(document.createTextNode(bookPubYear.value));
    paragraph3El.appendChild(document.createTextNode(bookCategory.value));
    paragraph4El.appendChild(document.createTextNode(bookPrice.value));
    paragraph5El.appendChild(remove);

         bookTitle.value   ='';
        bookAuthor.value  ='';
        bookPubYear.value ='';
        bookCategory.value='';
        bookPrice.value   ='';

    remove.addEventListener('click', (e) => {
       e.target.parentElement.parentElement.remove()
    })
}


