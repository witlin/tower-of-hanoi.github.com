$(function () {

    var steps = 0;

    $(".disk-row").draggable();

    $(".backplane-col").droppable({
        drop: function (event, ui) {
            event.stopPropagation();
            event.preventDefault();

            steps++;
            console.log("current steps: " + steps);
        }
    })
});