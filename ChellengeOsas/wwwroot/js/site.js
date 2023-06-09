$('.menu').click(function () {
    var type = $(this).attr('id');

    $.ajax({
        url: '/Home/GetData',
        type: 'POST',
        data: { type: type },
        success: function (result) {
            $('#content').html(result);
            console.log(result)
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
});
