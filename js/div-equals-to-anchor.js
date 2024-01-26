$(document).ready(function () {
    $(".header-navbar-button-ul-li-container").on('click', function () {
        // Find the anchor within the clicked div
        var anchor = $(this).find('a');

        // Check if the anchor exists
        if (anchor.length > 0) {
            // Trigger a click on the anchor
            anchor[0].click();
        }
    });
});