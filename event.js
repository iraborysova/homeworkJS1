/**
 *Возвращает функцию event
 *@param {String} startTime         начало события
 *@param {String}endTime            конец события
 *@param {String}date               дата когда происходит событие
 *@param {String}eventName          название события
 *@param {String}movieName          название фильма
 *@param {String}movieTheatre       название кинотеатра
 *@param {String}theatreSite        сайт кинотеатра
 *@param {Number} rating            рейтинг фильма
 *
 *@return {Object}
 */
function Event(startTime, endTime, date, eventName, movieName, movieTheatre, theatreSite, rating) {
    if (typeof (startTime) == 'number' ||
        typeof (endTime) == 'number'||
        typeof (date) == 'number' ||
        typeof (eventName) == 'number' ||
        typeof (movieName) == 'number' ||
        typeof (movieTheatre) == 'number' ||
        typeof (theatreSite) == 'number'
    ){
        return console.log("wrong data type");
    }

    return {
        "starttime": startTime,
        "endtime": endTime,
        "date": date,
        "eventName": eventName || 'Cinema',
        "moviename": movieName,
        "movietheatre": movieTheatre,
        "theatresite": theatreSite || 'url:http://kievrus.megakino.com.ua/cinema/index',
        "rating": +rating
    }
}
Event('10:00:00', '12:00:00', '2016-08-21', null,
    'Cubo', 'KyivRus', null, 5);