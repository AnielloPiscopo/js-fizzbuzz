/* * --------------------------------------------------------------------
GENERIC INITIALIZATIONS AND DECLARATIONS */





/* * --------------------------------------------------------------------
MAIN CODE */

// * LINEAR PROGRAMM

// ? INITIALIZATION OF THE FIRST ELEMENTS IN HTML

// * Creation of the tags
const main = document.createElement('main');
const title = document.createElement('h1');
const container = document.createElement('div');

// * Adding the content in some tags
title.innerHTML = 'FizzBuzz';

// * Adding of the classes in the tags
container.classList.add('container');
document.body.append(main);
main.append(title);
main.append(container);


// ? CREATION OF THE CONTENT FOR THE CONTAINER
for(let i=1 ; i<=100 ; i++){
    // * Creation of the nodes
    const div = document.createElement('div');

    // * List of conditions
    if((i%3 === 0) && (i%5 === 0)){ 
        div.innerHTML = `
            <em><strong><span class='fizz'>Fizz</span><span class='buzz'>Buzz</span></strong></em>
        `;
    }
    else if((i%3 === 0)){
        div.innerHTML = `
            <em class='fizz'>Fizz</em>
        `
    }
    else if((i%5 === 0)){
        div.innerHTML = `
            <em class='buzz'>Buzz</em>
        `
    }
    else{
        div.innerHTML = i;
    }

    // * Appending of the various elements in the container
    container.append(div);
}