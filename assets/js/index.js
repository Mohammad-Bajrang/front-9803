$('#contact-btn').on('click', function () {
    var Name = $('#text-name').val();
    var Email = $('#text-email').val();
    var Message = $('#massage').val();
    console.log({
        name: Name,
        email: Email,
        message: Message
    });
});