window.onscroll = function() {
    ScrollFunction()
};


function ScrollFunction() {

    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById('top_button').style.display = "block";
    } else {
        document.getElementById('top_button').style.display = "none";
    }

}


function go_to_topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
}