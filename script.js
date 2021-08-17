$(function () {
    $('*')
        .data('hovering', false)
        .mouseover(function () { $(this).data('hovering', true) })
        .mouseout(function () { $(this).data('hovering', false) });
});

window.setInterval(function () {
    $('#div-data').html("Textbox currently hovered: " +
        $('a').data('hovering'));
}, 100)