// add debounce to the input fields
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

$(document).ready(function () {
    $('#recomend-btn, #ask-gpt-btn').on('click', function() {
        $("#gpt-btn-container").hide();
        $("#dropdown-recommendation-textfield").show();
    });

    // ----------------
    // get left position of parent input field and append the same to dropdown
    // ----------------
    $("#dropdown-ai-input").on("keyup input paste", debounce(function () {
        setDropdownPosition();
        $("#ai-recommendation-dropdown").show();
    }, 500));

    // update on resize
    $(window).resize(function(){
        setDropdownPosition();
    });

    // ----
    // close dropdown
    // ----
    $('#closeDropdown').click(() => {
        $("#dropdown-recommendation-textfield").hide();
        $("#dropdown-ai-input").val('');
        $("#ai-recommendation-dropdown").hide();
        $("#gpt-btn-container").show();
    });
});

function setDropdownPosition() {
    let leftVal = $("#dropdown-recommendation-textfield").offset().left;
    $("#ai-recommendation-dropdown").css('left', leftVal);
}

/* start slide button animation */
// ------------------------------------------------------------------------------------------------------------------------------------------------------
//  Button transition
// ------------------------------------------------------------------------------------------------------------------------------------------------------

const buttonA = $('#recomend-btn');
const buttonB = $('#ask-gpt-btn');

buttonA.on('mouseover', function () {
    buttonA.addClass('button-hovered');
});

buttonA.on('mouseout', function () {
    buttonA.removeClass('button-hovered');
});

function slideButton() {
    // Slide Button A from right to left
    buttonA.css('transform', 'translateX(0)');
    buttonB.css('marginLeft', '-1px');
    buttonB.css('borderTopLeftRadius', '0');
    buttonB.css('borderBottomLeftRadius', '0');

    // After 5 seconds, slide Button A back to the right and repeat
    setTimeout(function () {
        if (!buttonA.hasClass('button-hovered')) {
            buttonA.css('transform','translateX(200%)');
            buttonB.css('marginLeft','0');
            buttonB.css('borderRadius', '4px');
        }
        setTimeout(slideButton, 15000);
    }, 5000);
}

slideButton();

/* end of slide animation of ask gpt button */


