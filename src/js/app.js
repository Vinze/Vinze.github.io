$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function url(path) {
    var baseURL = $('meta[name="site-url"]').attr('content');

    if (path == '/' || ! path) {
        return baseURL;
    } else if (path.substr(0,1) != '/') {
        return baseURL + '/' + path;
    } else {
        return baseURL + path;
    }
}

$('.navigation-toggle').on('click', function() {
    $('body').toggleClass('navigation-open');
});

$('[data-tooltip]').each(function() {
    if ($(this).data('tooltip').length > 0) {
        $(this).tooltipster({
            maxWidth: 640,
            theme: 'tooltipster-light',
            side: 'bottom',
            delay: 100,
            animationDuration: 200,
            updateAnimation: null,
            contentAsHTML: true,
            interactive: true,
            content: 'Laden..',
            functionBefore: function(instance, helper) {
                var $origin = $(helper.origin);
                var url = $origin.data('tooltip');

                if ($origin.data('loaded') !== true) {
                    $.get(url, function(content) {
                        instance.content(content);
                        $origin.data('loaded', true);
                    });
                }
            }
        });
    } else {
        $(this).removeAttr('data-tooltip');
    }
});

var name = 'vincent';
var host = 'webstr';
var ext = 'nl';

$('#mail').text(name + '@' + host + '.' + ext);
$('#tel').text('06 504 909 16');
