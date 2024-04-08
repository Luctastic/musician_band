<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/bands' => [[['_route' => 'bands', '_controller' => 'App\\Controller\\BandController::bands'], null, ['GET' => 0], null, false, false, null]],
        '/band' => [[['_route' => 'band_category', '_controller' => 'App\\Controller\\BandController::bandCategory'], null, null, null, false, false, null]],
        '/band-listing' => [[['_route' => 'band_listing', '_controller' => 'App\\Controller\\BandController::bandListing'], null, ['POST' => 0], null, false, false, null]],
        '/' => [[['_route' => 'index', '_controller' => 'App\\Controller\\MusicianController::index'], null, null, null, false, false, null]],
        '/musicians' => [[['_route' => 'musicians', '_controller' => 'App\\Controller\\MusicianController::musicians'], null, ['GET' => 0], null, false, false, null]],
        '/musician' => [[['_route' => 'musician_category', '_controller' => 'App\\Controller\\MusicianController::musicianCategory'], null, null, null, false, false, null]],
        '/musician-listing' => [[['_route' => 'musician_listing', '_controller' => 'App\\Controller\\MusicianController::musicianListing'], null, ['POST' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/autocomplete/([^/]++)(*:191)'
                .'|/band/(?'
                    .'|([^/]++)(?'
                        .'|(*:219)'
                    .')'
                    .'|create(*:234)'
                .')'
                .'|/musician/(?'
                    .'|([^/]++)(?'
                        .'|(*:267)'
                    .')'
                    .'|create(*:282)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        191 => [[['_route' => 'ux_entity_autocomplete', '_controller' => 'ux.autocomplete.entity_autocomplete_controller'], ['alias'], null, null, false, true, null]],
        219 => [
            [['_route' => 'band_detail', '_controller' => 'App\\Controller\\BandController::bandDetail'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'band_detail_save', '_controller' => 'App\\Controller\\BandController::bandDetailSave'], ['id'], ['POST' => 0], null, false, true, null],
        ],
        234 => [[['_route' => 'band_create', '_controller' => 'App\\Controller\\BandController::bandCreate'], [], ['GET' => 0], null, false, false, null]],
        267 => [
            [['_route' => 'musician_detail', '_controller' => 'App\\Controller\\MusicianController::musicianDetail'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'musician_detail_save', '_controller' => 'App\\Controller\\MusicianController::musicianDetailSave'], ['id'], ['POST' => 0], null, false, true, null],
        ],
        282 => [
            [['_route' => 'musician_create', '_controller' => 'App\\Controller\\MusicianController::musicianCreate'], [], ['GET' => 0], null, false, false, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
