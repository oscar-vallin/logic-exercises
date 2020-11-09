function pyramidMario(height){
    let str = "";
    let space;
    for(let i = height; i > 0; i--){
        space = ""
        str += "#";
        for(let j = 0; j < i; j++){
            space += " ";;
        }
        console.log(`${space}${str}`)
    };
}

pyramidMario(10);