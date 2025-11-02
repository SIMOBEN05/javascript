let lenght;
let width;
function calculateArea (lenght, width){
    let lenght = parseFloat(document.getElementById('lenght').value);
    let width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText =`The area of the rectangle is :${area}`;

}
