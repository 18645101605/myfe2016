/**
 * Created by acer on 2016/11/2.
 */
$(function() {
    $("#search").on('focus', function () {
        if (this.value == this.defaultValue) {
            this.value = "";
        };
    }).on('blur', function () {
        if (this.value == "") {
            this.value = this.defaultValue;
        };
    })
    });
