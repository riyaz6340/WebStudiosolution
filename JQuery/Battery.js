$(document).ready(function () {
    $(".btn").click(function () {
        var percent = $(".text").val();
        var color;
        if (percent < 25)
        {
            color = "red";
        } else if (percent < 50) {
            color = "yellow";
        } else
            color = "green";
        $(".Battery").css("background-image", "linear-gradient(to top, " + color + " " + percent + "%, transparent " + percent + "%)");
    })
})