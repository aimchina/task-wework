// #ifdef H5
import $ from 'jquery'
export const ChangePageTitle = (title) => {
        var $body = $('body');
        document.title = title;
        var $iframe = $('<iframe style="display: none"></iframe>');
        $iframe.on('load', function() {
          setTimeout(function() {
            $iframe.off('load').remove();
          }, 0);
        }).appendTo($body);
    }
    // #endif