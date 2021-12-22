const input_box = document.querySelector('input');
//center input_box
input_box.style.left = (window.innerWidth - input_box.offsetWidth) / 2 + 'px';
//input_box value on change 
input_box.addEventListener("input", function (e) {
    var value = e.target.value;
    //check if value is empty
    if (value == "") {
        //change background color
        document.body.style.backgroundColor = "white";
    } else {
        //check if value is a rgb color
        if (value.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
            document.body.style.backgroundColor = value;
            console.log('rgb');
        } //check if value is a hex color
        else if (value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)) {
            //change background color
            document.body.style.backgroundColor = value;
            console.log('hex');
        } else if (value.match(/^[a-zA-Z]+$/)) {
            console.log('text');
            document.body.style.backgroundColor = value;

        } //rgba
        else if (value.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/)) {
            console.log('rgba');
            document.body.style.backgroundColor = value;
        }

    }
});
