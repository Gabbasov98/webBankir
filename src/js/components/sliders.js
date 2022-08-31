$(".calc__slider").each(function(index, el) {

    $(el).attr("data-slider", index)
    let min = +$(el).attr("data-slider-min")
    let max = +$(el).attr("data-slider-max")
    let val = +$(el).attr("data-slider-val")

    initSliders(el, min, max, val)
});


function initSliders(parent, min, max, val) {
    $(parent).find(".range-slider").slider({
        animate: "slow",
        range: "min",
        value: val,
        min: min,
        max: max,
        slide : function(event, ui) {
            setValue(+ui.value)
        },
        create : function(event, ui) {
            setValue($(this).slider("value"))
        }

    });

    function setValue(value) {
        let val = parseInt(value).toLocaleString()
        $(parent).find(".ui-slider-handle").attr("data-output", val)
        if($(parent).hasClass("calc__slider--price")){
            $(parent).parents(".calc").find(".calc__btn span").html(val)
            $(parent).parents(".calc").find(".price-output").html(val)
        }
        if($(parent).hasClass("calc__slider--days")){
            $(parent).parents(".calc").find(".day-mob-output").html(val)
            let date = new Date();
            date.setDate(date.getDate() + value)
            let outputDate = date.toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            $(parent).parents(".calc").find(".date-output").html(outputDate)
        }
    }
}



