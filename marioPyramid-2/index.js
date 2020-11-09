function doblePyramid(height){
    let str = "";
    let space;
    for(let i = height; i > 0; i--){
        space = "";
        for(let j = 0; j < i; j++){
            space += " ";
        };
        str += "#";
        console.log(`${space}${str}  ${str}${space}`);
    };
}

// const height = prompt("Height: ");
// doblePyramid(height);
doblePyramid(10);