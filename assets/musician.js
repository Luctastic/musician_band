import $ from 'jquery';

const innerCategoryListing = document.getElementById('inner-category-listing');
const musicianSelect = document.getElementById('musician_category_Musiker_autocomplete');
const musicianCreate = document.getElementById('create-musician');
const musicianDetail = document.getElementById('modify-musician');

document.addEventListener('DOMContentLoaded', function () {
    var route = $('.js-musician').data('route');
    var routeDetail = $('.js-musician').data('routeDetail');
    routeDetail = routeDetail.slice(0, -1);

    musicianSelect.addEventListener("change", function() {
        if(musicianSelect.value === "")
        {
            musicianDetail.style.display = 'none';
            musicianDetail.style.visibility = 'hidden';

            musicianCreate.style.display = 'flex';
            musicianCreate.style.visibility = 'visible';
        } else{
            musicianCreate.style.display = 'none';
            musicianCreate.style.visibility = 'hidden';

            musicianDetail.style.display = 'flex';
            musicianDetail.style.visibility = 'visible';
            musicianDetail.href = routeDetail + musicianSelect.value;
        }
    });

    $.post(route,
        function (response) {
            response.message.forEach((element) => {
                const artistDiv = document.createElement('div');
                const lastNameDiv = document.createElement('div');
                const editDiv = document.createElement('div');
                artistDiv.className = 'inner-grid-item';
                lastNameDiv.className = 'inner-grid-item';
                editDiv.className = 'inner-grid-item';

                const artistName = document.createElement('h1');
                const lastName = document.createElement('h1');
                const editButton = document.createElement('a');
                const editButtonImg = document.createElement('img');

                artistName.className = 'inner-entity-title';
                lastName.className = 'inner-entity-title';
                editButton.className = '';

                artistName.innerHTML = element['artistName'];
                lastName.innerHTML = element['lastName'];
                editButton.href = routeDetail + element['id'];
                editButtonImg.setAttribute('src',  'https://cdn-icons-png.flaticon.com/512/6324/6324826.png');
                editButtonImg.style.width = '30px';
                editButtonImg.style.height = '30px';

                artistDiv.appendChild(artistName);
                lastNameDiv.appendChild(lastName);
                editButton.appendChild(editButtonImg);
                editDiv.appendChild(editButton);

                innerCategoryListing.appendChild(artistDiv);
                innerCategoryListing.appendChild(lastNameDiv);
                innerCategoryListing.appendChild(editDiv);
            });
        }, "json");
});




