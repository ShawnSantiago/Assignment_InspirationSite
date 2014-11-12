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
            html += '<div id="checkboxSection">';
            html += '<input type="checkbox" class="checkbox" id="'+ shot.id +'_1" name="'+ shot.id +'" /><label for="'+ shot.id +'_1"><span></span></label>';
            html += '<input type="checkbox" class="checkbox" id="'+ shot.id +'_2" name="'+ shot.id +'" /><label for="'+ shot.id +'_2"><span></span></label>';
            html += '<input type="checkbox" class="checkbox" id="'+ shot.id +'_3" name="'+ shot.id +'" /><label for="'+ shot.id +'_3"><span></span></label>';
            html += '<input type="checkbox" class="checkbox" id="'+ shot.id +'_4" name="'+ shot.id +'" /><label for="'+ shot.id +'_4"><span></span></label>';
            html += '<input type="checkbox" class="checkbox" id="'+ shot.id +'_5" name="'+ shot.id +'" /><label for="'+ shot.id +'_5"><span></span></label>';
            html +='</div>';
            html += '<input type="text" id="commenttext" placeholder="Leave a comment">';
            html += '<input type="submit" id="submit" placeholder="submit">';
            html +='</li>';
        });

        document.getElementById('shotsByList').innerHTML = html;
    }

    jribbble.getShotsByList('popular', callback, {page: 1, per_page: 50});

// function checkCheckBoxes(){
//     for (var i = 0; i < 5; i++) {
//         var checkbox = document.getElementByClassName('checkbox');
//         var checkboxid = checkbox.name;
//         
//     }
// }

function deleteCheckBox() {
    var div = document.getElementById('checkboxSection');
    var child = ul.children;
    for (var i=0; i < div.length; i++) {
        if (checkbox.checkbox && checkbox.id == 5 ) {

        }
    }
}


//Pop Up Options

$('a.popup').popup();