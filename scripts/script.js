$(document).ready(function(){
    //Hide the content
    $("#tab_content div").hide();
    $("#tabs li:first").attr("id", "current");
    //Show the content of the first tab
    $("#tab_content div:first").fadeIn();
    
    $('#tabs a').click(function(e){
        e.preventDefault();
        //Hide the content
        $("#tab_content div").hide();
        //Reset attribute id's
        $("#tabs li").attr("id","");
        //This is now the tab that has been selected
        $(this).parent().attr("id", "current");
        //Show the content for the new selected tab
        $('#' + $(this).attr('title')).fadeIn();
    
    });
});