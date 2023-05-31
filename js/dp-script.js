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
        $("#ai-recommendation-dropdown").show();
    }, 500));


    // ai textfield in docked panel and its animations
    $("#docked-panel-ai-input").on("keyup input paste", debounce(function () {
        if($("#docked-panel-ai-input").val() !== '') {
            $("#showLoader").slideDown();
            setTimeout(() => {
                $("#showLoader").slideUp();
                $("#ai-recomendation-drop").slideDown();
            },800)
        } else {
            $("#showHistory").slideDown();
        }
    }, 500));

    $('#closetextFieldDP').click(() => {
        $("#dropdown-recommendation-textfield").hide();
        $("#docked-panel-ai-input").val('');
        $("#gpt-btn-container").show();
        $("#ai-recomendation-drop").slideUp();
        $("#extra-details").slideUp();
    });

    $('#show-details').click(() => {
        if(!$('#show-details').hasClass("expanded")) {
            $("#show-details").addClass('expanded');
            $("#show-details").html('Hide details');
            $("#extra-details").slideDown();
            $("#extra-details").css('display', 'flex');
        } else {
            $("#show-details").html('Show details');
            $("#show-details").removeClass('expanded');
            $("#extra-details").slideUp();
        }
    });

    $('#acc-header1').click(() => {
        if(!$('#acc-header1').hasClass("closed")) {
            $('#acc-header1').addClass('closed');
            $("#build-insights").animate({'height': '75px'});
            $("#rec-accordion-1").css({'transform': 'rotate(180deg)'});
        } else {
            $('#acc-header1').removeClass('closed');
            $("#build-insights").animate({'height': '295px'});
            $("#rec-accordion-1").css({'transform': 'rotate(0deg)'});
        }
    });

    $('#acc-header2').click(() => {
        if(!$('#acc-header2').hasClass("closed")) {
            $('#acc-header2').addClass('closed');
            $("#devops-insights").animate({'height': '75px'});
            $("#rec-accordion-2").css({'transform': 'rotate(180deg)'});
        } else {
            $('#acc-header2').removeClass('closed');
            $("#devops-insights").animate({'height': '295px'});
            $("#rec-accordion-2").css({'transform': 'rotate(0deg)'});
        }
    });

    $('#acc-content-header-1').click(() => {
        if(!$('#acc-content-1').hasClass("expanded")) {
            $('#acc-content-1').addClass('expanded');
            $("#acc-content-1").animate({'height': '332px'});
            $("#acc-content-icon-1").css({'transform': 'rotate(0deg)'});
        } else {
            $('#acc-content-1').removeClass('expanded');
            $("#acc-content-1").animate({'height': '44px'});
            $("#acc-content-icon-1").css({'transform': 'rotate(180deg)'});
        }
    });

    $('#acc-content-header-2').click(() => {
        if(!$('#acc-content-2').hasClass("expanded")) {
            $('#acc-content-2').addClass('expanded');
            $("#acc-content-2").animate({'height': '306px'});
            $("#acc-content-icon-2").css({'transform': 'rotate(0deg)'});
        } else {
            $('#acc-content-2').removeClass('expanded');
            $("#acc-content-2").animate({'height': '44px'});
            $("#acc-content-icon-2").css({'transform': 'rotate(180deg)'});
        }
    });

    $('#acc-content-header-3').click(() => {
        if(!$('#acc-content-3').hasClass("expanded")) {
            $('#acc-content-3').addClass('expanded');
            $("#acc-content-3").animate({'height': '306px'});
            $("#acc-content-icon-3").css({'transform': 'rotate(0deg)'});
        } else {
            $('#acc-content-3').removeClass('expanded');
            $("#acc-content-3").animate({'height': '44px'});
            $("#acc-content-icon-3").css({'transform': 'rotate(180deg)'});
        }
    });
});

/* start slide button animation */
// ------------------------------------------------------------------------------------------------------------------------------------------------------
//  Button transition
// ------------------------------------------------------------------------------------------------------------------------------------------------------

const buttonB = $('#recomend-btn');
const buttonA = $('#ask-gpt-btn');

buttonA.on('mouseover', function () {
    buttonA.addClass('button-hovered');
});

buttonA.on('mouseout', function () {
    buttonA.removeClass('button-hovered');
});

function slideButton() {
    // Slide Button A from right to left
    buttonB.css('transform', 'translateX(0)');
    buttonA.css('borderTopRightRadius', '0');
    buttonA.css('borderBottomRightRadius', '0');
    buttonB.css('marginLeft', '-1px');

    // After 5 seconds, slide Button A back to the right and repeat
    setTimeout(function () {
        if (!buttonB.hasClass('button-hovered')) {
            buttonB.css('transform','translateX(-200%)');
            buttonA.css('borderRadius', '4px');
            buttonB.css('marginLeft', '0px');
            buttonA.css('borderRight', 'solid 1px var(--chilean-fire)');
        }
        setTimeout(slideButton, 15000);
    }, 5000);
}

slideButton();

/* end of slide animation of ask gpt button */


