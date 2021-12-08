export function reset(obj1, obj2) {
    let result = document.querySelector('.result');
    result.textContent = "";

    
        obj1.win = 0;
        obj1.attempt = 0;
        obj1.beat = 0;

        obj2.win = 0;
        obj2.attempt = 1;
        obj2.beat = 0;

}