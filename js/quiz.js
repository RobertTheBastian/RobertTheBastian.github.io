var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}

function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}

$(document).ready(function () {


    $.getJSON('https://opentdb.com/api_token.php?command=request', function (tokenData) {
        // token = tokenData.token;
    });


    $.getJSON('https://opentdb.com/api.php?amount=20&type=multiple', function (answerData) {

        var number = answerData.results.length;
        var answers = [number];
        var htmlString = "";
        var answersString = "";

        for (var i = 0; i < number; i++) {

            var question = answerData.results[i].question;
            answers[i] = answerData.results[i].correct_answer;

            var options = answerData.results[i].incorrect_answers;
            options[3] = answerData.results[i].correct_answer;
            options = shuffle(options);

            htmlString += '<div style="height:75px" class="row">' +
                (i + 1) + ') ' + question + '<br />' +
                ' a) ' + options[0] + '   ' +
                ' b) ' + options[1] + '   ' +
                ' c) ' + options[2] + '   ' +
                ' d) ' + options[3] + '   ' +

                '</div>';

            answersString += '<div class="row">' + (i + 1) + ') ' + answers[i] + '</div>';
        }



        document.getElementById('bleh').innerHTML = htmlString;
        document.getElementById('answersContainer').innerHTML = answersString;
    });

});


function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}