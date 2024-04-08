import $ from 'jquery';
import TomSelect from "tom-select";

var bands = $('.js-band').data('bands');

document.addEventListener('DOMContentLoaded', function () {
    var route = $('.js-band').data('route');

    //---

    const formInnerDiv = document.createElement('div');
    formInnerDiv.id = 'custom-musician-details'

    const formInput = document.createElement('input');
    formInput.name = 'musician_detail[bands]';
    formInput.style.visibility = 'hidden';
    formInput.style.display = 'none';

    formInnerDiv.appendChild(formInput);

    document.getElementById('musician_detail').appendChild(formInnerDiv);

    // ---

    var tomSelect = new TomSelect('#musician_detail_tom', {
        plugins: {
            remove_button: {
                title: 'Entfernen',
            }
        },
        valueField: 'bandName',
        labelField: 'bandName',
        searchField: 'bandName',
        // fetch remote data
        load: function (query, callback) {
            var url = 'http://' + window.location.hostname + route + encodeURIComponent(query);
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    callback(json.message);
                }).catch(() => {
                //callback();
            });

        },
        // custom rendering functions for options and items
        render: {
            option: function (item, escape) {
                return `<div>
							<p>${item.bandName}</p>
						</div>`;
            }
        }
    });

    // ---


    tomSelect.on("change", function () {
        formInput.innerHTML = '';
        tomSelect.items.forEach(function (item) {
            for (const option in tomSelect.options) {
                if (`${tomSelect.options[option]['bandName']}` === item) {
                    const band = document.createElement('input');
                    band.name = 'musician_detail[bands][' + `${tomSelect.options[option]['id']}` + ']';
                    band.style.visibility = 'hidden';
                    band.style.display = 'none';
                    band.setAttribute('value', `${tomSelect.options[option]['id']}`);

                    formInput.appendChild(band);
                }
            }
        });
    });

    bands.forEach(function (band){
        tomSelect.addOption({id: band.id, bandName: band.bandName});
        tomSelect.addItem(band.bandName);
    });
});

