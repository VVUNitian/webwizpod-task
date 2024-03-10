document.getElementById('check-btn').addEventListener("click",checkPalindrome);
function checkPalindrome() {
    let s;
    const nonAlphanumericPattern = /[^a-zA-Z0-9]/g;//regex pattern....very important..
    const textInput = document.getElementById('text-input');
    const result = document.getElementById('result');
    const text = textInput.value.trim().toLowerCase();
    console.log(`${text}`);
    s=text.replaceAll(nonAlphanumericPattern,'');
    console.log(s);
    
    const reversedText = s.split('').reverse().join('');
    console.log(`${reversedText}`);

    if (text === '') {
        alert('Please input a value');
        return;
    }
    function checkplrome() {
        if (s === reversedText){
        return true;
        }
        else
        return false; 
    }
        const reply= checkplrome() ?  'Yes,It is a Palindrome' : 'No,It is not a Palindrome';
       // Displaying the output in HTML page...
        result.innerHTML = reply;
        result.classList.remove("success","error");
        setTimeout(() => {
            result.classList.add(checkplrome()? "success":"error");
          },10);
}