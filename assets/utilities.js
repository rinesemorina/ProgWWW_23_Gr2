function navigateTo(wrapper_selector, destination_path){
    $(function(){
        $(wrapper_selector).load(destination_path, function(){
            $(this).css('opacity',0).stop(1000).animate({"opacity": 1}); });
    });
}