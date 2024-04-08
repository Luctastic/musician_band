import $ from 'jquery';

const innerCategoryListing = document.getElementById('inner-category-listing');
const bandSelect = document.getElementById('band_category_Band_autocomplete');
const bandCreate = document.getElementById('create-band');
const bandDetail = document.getElementById('modify-band');

document.addEventListener('DOMContentLoaded', function () {
    var route = $('.js-band').data('route');
    var routeDetail = $('.js-band').data('routeDetail');
    routeDetail = routeDetail.slice(0, -1);

    bandSelect.addEventListener("change", function() {
        if(bandSelect.value === "")
        {
            bandDetail.style.display = 'none';
            bandDetail.style.visibility = 'hidden';

            bandCreate.style.display = 'flex';
            bandCreate.style.visibility = 'visible';
        } else{
            bandCreate.style.display = 'none';
            bandCreate.style.visibility = 'hidden';

            bandDetail.style.display = 'flex';
            bandDetail.style.visibility = 'visible';
            bandDetail.href = routeDetail + bandSelect.value;
        }
    });

    $.post(route,
        function (response) {
            response.message.forEach((element) => {
                const bandNameDiv = document.createElement('div');
                const editDiv = document.createElement('div');
                bandNameDiv.className = 'inner-grid-item';
                editDiv.className = 'inner-grid-item';

                const bandName = document.createElement('h1');
                const editButton = document.createElement('a');
                const editButtonImg = document.createElement('img');

                bandName.className = 'inner-entity-title';
                editButton.className = '';

                bandName.innerHTML = element['bandName'];
                editButton.href = routeDetail + element['id'];
                editButtonImg.setAttribute('src',  'https://cdn-icons-png.flaticon.com/512/6324/6324826.png');
                editButtonImg.style.width = '30px';
                editButtonImg.style.height = '30px';

                bandNameDiv.appendChild(bandName);
                editButton.appendChild(editButtonImg);
                editDiv.appendChild(editButton);

                innerCategoryListing.appendChild(bandNameDiv);
                innerCategoryListing.appendChild(editDiv);
            });
        }, "json");
});




