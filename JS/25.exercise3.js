console.log("25//JAVASCRIPT");

let body = document.querySelector('div#container');
let heading = document.createElement('h1');
heading.id = 'h1';
heading.innerHTML = '25//JAVASCRIPT';
let heading_2 = document.createElement('h2');
heading_2.id = 'about';
heading_2.innerHTML = '<u>EXERCISE-3</u>';
let separator = document.createElement('hr');
let title = document.createElement('title');
let head_element = document.querySelector('head');
title.innerText = "EXERCISE-3";
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
          constructor(my_bookList) {
                    this.BookList = my_bookList;
                    this.MyBooks = {};
          };
          getBookList(){
                    this.BookList.forEach(element => {
                        console.log(element);
                    });
                }
          IssueBook (book,user){
                    if (this.MyBooks[book] == undefined) {
                              this.MyBooks[book] = user;
                    }         
                    else{
                              console.log("You already have this book.");
                    };
          };
          ReturnBook (book){
                    delete this.MyBooks[book];
          };
};