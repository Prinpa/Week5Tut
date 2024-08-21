
export function reverse(input){
    let holder = "";
    for (let i = input.length - 1; i >= 0; i--) {
        holder += input[i]
    }
    return holder;
}
