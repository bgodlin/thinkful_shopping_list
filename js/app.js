$("form").submit(function (event) {
    event.preventDefault();
    $("ul").prepend(


        "<li>" +
        '<span class="shopping-item">' + $('input').val() + '</span>' +
        '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
        
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
        '</div>' +
        "</li>"
    );
    $('input').val('') ;
}
)

$('ul').on('click', 'li > div > button.shopping-item-toggle', function () {
    event.preventDefault();
    $(this).parent('div').siblings('span').toggleClass("shopping-item__checked");
    console.log('Checked')
});

$('ul').on('click', 'li > div > button.shopping-item-delete', function () {
    
    $(this).parent('div').parent('li').remove();
    console.log('Removed')
});
