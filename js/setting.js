// Json Options

var callback = function (listDetails) {
        var html = '';

        listDetails.shots.forEach(function (shot) {
            html += '<li><div id="header"><h3>' + shot.title + '</h3>';
            html += '<h4>by ' + shot.player.name + '</h4><a href=' + shot.image_url + ' class="popup">';
            html += '</div><img src="' + shot.image_teaser_url + '" ';
            html += 'id="' + shot.id + '" ';

            html += 'alt="' + shot.title + ';"></a>';
            html += '</div>';
            html += '<fieldset class="rating">'
            html +=  '<input type="radio" id="star5"/><label onclick="starClicked(event)" for="star5" id="' + shot.id + '_star5" name="' + shot.id + '" value="5" >5 stars</label>'
            html +=  '<input type="radio" id="star4"/><label onclick="starClicked(event)" for="star4" id="' + shot.id + '_star4" name="' + shot.id + '" value="4" >4 stars</label>'
            html +=  '<input type="radio" id="star3"/><label onclick="starClicked(event)" for="star3" id="' + shot.id + '_star3" name="' + shot.id + '" value="3" >3 stars</label>'
            html +=  '<input type="radio" id="star2"/><label onclick="starClicked(event)" for="star2" id="' + shot.id + '_star2" name="' + shot.id + '" value="2" >2 stars</label>'
            html +=  '<input type="radio" id="star1"/><label onclick="starClicked(event)" for="star1" id="' + shot.id + '_star1" name="' + shot.id + '" value="1" >1 stars</label>'
            html +=  '</fieldset>';
            html +=  '<input onclick="starClicked(event)"type="text" id="comment" name="comment" placeholder="leave a comment" />';
            html +=  '<input type="submit" id="comment" name="submit" placeholder="submit" />';
        });

        document.getElementById('shotsByList').innerHTML = html;
    }

    jribbble.getShotsByList('popular', callback, {page: 1, per_page: 50});

//Pop Up Options

$('a.popup').popup();