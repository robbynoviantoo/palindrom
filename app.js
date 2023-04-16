function validate(){
    let word = prompt('Check Palindrome: ');

    if(word == null || word == ""){
        alert("Masukan kalimat!");
        validate();
    } else if(!/^[a-z ]+$/.test(word)){
        alert("Hanya a-z lowercase!");
        validate();
    } else{
        let result = word.split(" ");

        function checkPalindrom (word) {
            let wordArray = word.toLowerCase().split('');
            let newArr = wordArray.join('');
            let reverseArr = [...newArr].reverse().join('');
        
            if(newArr === reverseArr){
                console.log("Kalimat ini Palindrom!");
                return result[0]
            } else{
                return false
            }
        }
        
        console.log(result.length)
        console.log(checkPalindrom(word));
    }
}

validate();