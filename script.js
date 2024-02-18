const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');



const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');


    xhr.onreadystatechange = function () {
        if(this.readyState === 4){
            if(this.status === 200){
                joke.innerHTML = `<strong>${JSON.parse(this.responseText).value}</strong>`;
            }else{
                joke.innerHTML = `<strong>Something went wrong</strong>`;
            }
        }
    }
    xhr.send();

}


btn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);