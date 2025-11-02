let lenght;
let width;
function calculateArea (lenght, width){
    lenght = parseFloat(document.getElementById('lenght').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText =`The area of the rectangle is :${area}`;

}