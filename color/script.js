const input_div = document.getElementsByClassName('color_input')
const input_box = document.querySelector('input');

// center input div
//input_box value on change 
input_box.addEventListener("input", function (e) {
    var value = e.target.value;
    //check if value is empty
    if (value == "") {
        document.body.style.backgroundColor = "white";
    } else {

        if (value.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
            document.body.style.backgroundColor = value;
            console.log('rgb');
        }
        else if (value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)) {
            document.body.style.backgroundColor = value;
            console.log('hex');
        } else if (value.match(/^[a-zA-Z]+$/)) {
            document.body.style.backgroundColor = value;
            console.log('text');
        }
        else if (value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/)) {
            document.body.style.backgroundColor = value;
            console.log('rgba');
        }

    }
    // set text color to contrast color
    document.body.style.color = getContrastYIQ(document.body.style.backgroundColor);
});

// contrast color
function getContrastYIQ(hexcolor) {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}
