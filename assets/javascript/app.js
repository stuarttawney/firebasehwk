$(document).ready(function () {
    var now = moment();
    $("#now").text(now.format("lll"));
    $("#now").append('<br' + now.fromNow());
    $("#now").append('<br>' + JSON.stringify(now.toObject()));

    $("#check").on('click', function () {
        var start = moment($("#start").val());
        console.log('start date is valid-', start.isValid());

        var end = moment($("#end").val());
        var diff = start.diff(end);
        console.log('diff between start and end in msecs-', diff);
        var is_between = now.isBetween(start, end);
        console.log('now is between start and end-', is_between);
    });
});