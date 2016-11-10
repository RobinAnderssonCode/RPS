var socket = io();

(function() {
    $('#usernameButton').click(function() {
        $('#loginModal').css('display', 'none');
        socket.emit('userName', $('#usernameInput').val());
    });

    socket.on('connect', function() {
        console.log(this.id);
    });

    socket.on('connectUsers', function(users) {
        $('#connectUsers').html('');
        for (key in users) {
            if (users.hasOwnProperty(key)) {
                var value = users[key];
                $('#connectUsers').append($('<li>').text(value).append('<button id="btn">HEJ'));
            }
        }
    });

    socket.on('userlist', function(msg) {
        $('#userlist').text(msg);
    });

})();
