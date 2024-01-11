// error handling- try catch

function divide(a,b){
    try{
        if(b == 0){
            throw Error("kuch toh gadbad h daya...!")
    }
    console.log(a/b);
    }
    catch(err){
        console.error(err)

    }
}

divide(12, 0);
