
export function reverse(input){
    let holder = "";
    for (let i = input.length - 1; i >= 0; i--) {
        holder += input[i]
    }
    return holder;
}

export function palindrome(input) {
    input = input.replace(" ", "")
    if (input == reverse(input)) {
        return true;
    } else {
        return false;
    }
}
