/********
* Bootstrap Alert Extension
*
* By Jonathan Lambert
* Github: http://github.com/jonnerz
*
* Parameters:
*
* Status (string): success, warning, danger, info
* Message (string)
* Duration (int) [optional] (Default: 3000 ms)
*
*********/

jQuery.fn.extend({
    alert: function(status, msg, duration) {

        /* Settings */
        var offsetX = 130; //Vertical offset from the top of the page
        var durationDef = 3000; //Default duration if not set

        var id = Date.now();

        $('.alert-wrapper').each(function(i,v) {
            offsetX += $(v).outerHeight();
        });

        $('body').append($('<div class="alert-wrapper" data-id="'+id+'"><div class="alert alert-'+status+' alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>'+msg+'</div></div>').css({top: offsetX}).hide().fadeIn(300, 'easeInBack'));

        if(typeof duration == 'undefined')
            duration = durationDef;

        setTimeout(function() {
            $('.alert-wrapper[data-id="'+id+'"]').fadeOut(1000, 'linear', function() {

                $('.alert-wrapper').css('top', function() {
                    return parseInt($(this).css('top'), 10) - $(this).outerHeight();
                });

                $(this).remove();

            });
        }, duration);

    }
});