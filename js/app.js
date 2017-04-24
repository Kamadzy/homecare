$(document).ready(function () {

    $('#form-group').submit(function (e) {
        var subject = document.getElementById('subject');
        var name = document.getElementById('name');
        var message = document.getElementById('message');

        if (!subject.value || !name.value || !message.value) {
            alert("Check your entries");
        } else {
            $.ajax({
                method: 'POST',
                url: '//formspree.io/kam4513@gmail.com',
                data: $('#form-group').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            alert("Message sent");
        }

    });

    $("#phone-img").hide().fadeIn(1000);

});
