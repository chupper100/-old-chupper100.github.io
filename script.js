(function () {
    $('*')
        .data('hovering', false)
        .mouseover(function () { $(this).data('hovering', true) })
        .mouseout(function () { $(this).data('hovering', false) });
});

window.setInterval(function () {
    $('#div').html("Textbox currently hovered: " +
        $('input[type="text"]').data('hovering'));
}, 100)