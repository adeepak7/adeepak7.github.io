$(function(){

    let hash = location.hash;
    if(sessionStorage){
        var target = sessionStorage.getItem("target");
        if(target==undefined || target==null || target=="") {
            sessionStorage.setItem("target", hash.length > 0 ? hash.substr(1) : "home");
        }
    }

    function getContent(target){

        $.get(target + ".html").then(
            function(response){
                $("#content-wrapper").html(response);
            }
        );
    }

    getContent(sessionStorage.getItem("target"));


    $(".navview-menu").on(Metro.events.click, "a", function(e){

        var href = $(this).attr("href");
        var hash;

        //console.log("HREF: ", href);


        if (href === "#") {
            return false;
        }

        if (href === "/") {
            return false;
        }

        hash = href.substr(1);
        href = hash + ".html";

        getContent(hash);

        sessionStorage.setItem("target", hash);

        return false;
    });

});