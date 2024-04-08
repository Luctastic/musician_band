import $ from 'jquery';
import TomSelect from "tom-select";

var musicians = $('.js-musician').data('musicians');

document.addEventListener('DOMContentLoaded', function () {
    var route = $('.js-musician').data('route');

    //---

    const formInnerDiv = document.createElement('div');
    formInnerDiv.id = 'custom-band-details'

    const formInput = document.createElement('input');
    formInput.name = 'band_detail[musicians]';
    formInput.style.visibility = 'hidden';
    formInput.style.display = 'none';

    formInnerDiv.appendChild(formInput);

    document.getElementById('band_detail').appendChild(formInnerDiv);

    // ---

    var tomSelect = new TomSelect('#band_detail_tom', {
        plugins: {
            remove_button: {
                title: 'Entfernen',
            }
        },
        valueField: 'artistName',
        labelField: 'artistName',
        searchField: 'artistName',
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
							<p>${item.artistName}</p>
						</div>`;
            }
        }
    });

    // ---

    tomSelect.on("change", function () {
        formInput.innerHTML = '';
        tomSelect.items.forEach(function (item) {
            for (const option in tomSelect.options) {
                if (`${tomSelect.options[option]['artistName']}` === item) {
                    const musician = document.createElement('input');
                    musician.name = 'band_detail[musicians][' + `${tomSelect.options[option]['id']}` + ']';
                    musician.style.visibility = 'hidden';
                    musician.style.display = 'none';
                    musician.setAttribute('value', `${tomSelect.options[option]['id']}`);

                    formInput.appendChild(musician);
                }
            }
        });
    });

    musicians.forEach(function (musician){
        tomSelect.addOption({id: musician.id, artistName: musician.artistName});
        tomSelect.addItem(musician.artistName);
    });
});

