var socket = io();

$(document).ready(function() {

            socket.on('userlist', function(msg) {
                $('#userlist').text(msg);
            });

            $('#usernameButton').click(function() {
                $('#loginModal').css('display', 'none');
                socket.emit('userName', $('#usernameInput').val());
            });


            socket.on('connectUsers', function(users) {
                $('#connectUsers').html('');
                for (key in users) {
                    if (users.hasOwnProperty(key)) {
                        var value = users[key];
                        $('#connectUsers').append($('<li>').text(value).append('<button id="' + key + '" class="btn btn-default">Challenge</button>'));
                    }
                }
            });

            $('body').on('click', '.btn', function(b) {
                var c = { 1: socket.id, 2: b.currentTarget.id }
                console.log(c)
                if (c[1] === c[2]) {
                    $('#' + c[2]).text('Illegal challenge').removeClass('btn-default').addClass('btn-danger');
                } else {
                    $('#' + c[2]).text('Challenged').removeClass('btn-default').addClass('btn-warning');

                    socket.emit('challenge', c);
                }
            });

            socket.on('msg', function(c) {
                    $('#' + c[1]).text('You have been challenged by this guy!').removeClass('btn-default').addClass('btn-success');
                    $('body').on('click', '#' + c[1], function(b) {
                            socket.emit('accepted', c);
                            $('#' + c[1]).text('Challenge').removeClass('btn-success btn-warning btn-danger').addClass('btn-success');
                        });
                    });

            socket.on('join room', function(c) {
                $('#findPlayerModal').css('display', 'none');
                // socket.emit('leave room', )
            });

            });
