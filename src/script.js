

$(function () {
    $('.intro').addClass('go')

    var count = 0;
    var wordsArray = ["no", "não", "没有", "nein", "ಯಾವುದೇ", "няма", "non", "না", "jo", "არ", "nem", "nē", "नहीं", "нет", "žiadny", "いいえ", "nej", "yox", "жоқ", "គ្មាន", "ନ"];
    setInterval(function () {
        count++;
        if (count > wordsArray.length) {
            count = 0
        }
        $(".text").text(wordsArray[count % wordsArray.length]);
    }, 3000);
    
})