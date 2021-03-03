const comment = document.querySelector('.comment');
const commentButton = document.querySelector('.comment-submit');
const count = document.querySelector('.count');
const countResult = document.querySelector('.count-result');
const commentDel = document.querySelector('.comment-del');

// Event Listener
commentButton.addEventListener('click', requestCount);
// commentDel.addEventListener('click', commentClear);
document.addEventListener('keyup', sayHello);

//Functions
function requestCount(event){
    event.preventDefault();
    countResult.innerHTML = "";
    if(isValid() == false){
        return;
    }
    const countDiv = document.createElement('li');
    countDiv.classList.add('count');
    countDiv.innerText = countVowels(comment.value.toLowerCase());
    countResult.appendChild(countDiv);
}

function isCommentEmpty(){
    if(comment.value == ""){
        return true;
    }
    else return false;
}
function isValid(){
    if(isCommentEmpty() == true){
        window.alert("Comment can't be empty!");
        return false;
    }
    if(comment.value.length >= 50){
        window.alert("Comment characters can't be more than 50");
        return false;
    }
    return true;
}

function countVowels(str){
    var count = 0;
    console.log(str)
    for(var index = 0;index<str.length;index++){
        if(str[index] == 'a' || str[index] == 'e' || str[index] == 'o' || str[index] == 'u' || str[index] == 'i'){
            count++;
        }
        // else if(str[index] == 'A' || str[index] == 'E' || str[index] == 'O' || str[index] == 'U' || str[index] == 'I'){
        //     count++;
        // }
    }
    return count;
}

function commentClear(event){
    event.preventDefault();
    if(isCommentEmpty() == true){
        window.alert('Comment Section Already clear!');
    }
    comment.value = "";
}

function sayHello(){
    console.log("h")
}