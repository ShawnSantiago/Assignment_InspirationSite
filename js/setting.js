var callback = function (listDetails) {
        var html = '';

        listDetails.shots.forEach(function (shot) {
            html += '<li><h3>' + shot.title + '</h3>';
            html += '<h4>by ' + shot.player.name + '</h4><a href=' + shot.image_url + ' class="popup">';
            html += '<img src="' + shot.image_teaser_url + '" ';
            html += 'id="' + shot.id + '" ';

            html += 'alt="' + shot.title + ';"></a>';
            html += '</div>';
            html += '<div id="checkboxSection">';
            html += '<input type="checkbox" id="1" name="cc" /><label for="1"><span></span></label>';
            html += '<input type="checkbox" id="2" name="cc" /><label for="2"><span></span></label>';
            html += '<input type="checkbox" id="3" name="cc" /><label for="3"><span></span></label>';
            html += '<input type="checkbox" id="4" name="cc" /><label for="4"><span></span></label>';
            html += '<input type="checkbox" id="5" name="cc" /><label for="5"><span></span></label>';
            html +='</div>';
            html += '<input type="text" id="commenttext" placeholder="Leave a comment">';
            html +='</li>';
        });

        document.getElementById('shotsByList').innerHTML = html;
    }

    jribbble.getShotsByList('popular', callback, {page: 1, per_page: 50});

$('a.popup').popup();