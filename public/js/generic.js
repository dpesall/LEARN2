function redirect(page) {
    let currentURL = window.location.href;
    switch(page) {
        case 'home':
            window.location.href = currentURL;
            break;
        default:
            window.location.href = currentURL.replace(page, '');
            break;
    }
}

jQuery(document).ready(function(){
    $(".targetDiv").hide();
});


jQuery(function(){


    jQuery('.showSingle').click(function(){
        jQuery('.targetDiv').hide('.cnt');
        jQuery('#GI-'+$(this).attr('target')).slideToggle();

    });
});