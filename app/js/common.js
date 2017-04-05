$(document).ready(function () {
    $('#selectSubCategory').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: false,
        placeholder: 'Sub-category'
    });
    $('#selectSize').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: false,
        placeholder: 'Size'
    });
    $('#selectMaterial').scombobox({
        filterDelay: 300,
        // empty: true,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: false,
        placeholder: 'Material'
    });
    $('#selectFinish').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: false,
        placeholder: 'Finish'
    });
    $('#selectMore').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: false,
        placeholder: 'More'
    });

    // CHANGE BACKGROUND COLOR
    $(document).mousemove(function(e){
        var opacity = 1;
        $('#blueBg').css('opacity', ''+(opacity - e.pageY/1000));
        console.log(e);
    });
    // CHANGE BACKGROUND COLOR END
});


