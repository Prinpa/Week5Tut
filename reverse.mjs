
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

export function truncate(input, length) {
    let temp = "";
    if (length  > input.length) { 
        length = input.length;
    }
    for (let i = 0; i < length; i++) {
        temp += input[i];
    }
    if (length  < input.length) {
        temp += "...";
    }
    return temp;
}
