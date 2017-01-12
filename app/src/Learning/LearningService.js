(function () {
    'use strict';

    angular.module('mainApp')
            .service('learningService', ['$q', '$http', 'appConfig', LearningService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function LearningService($q, $http, appConfig, $location) {

        // Promise-based API
        return {
            loadCards: function (categoryId) {

                // Simulate async nature of real remote calls
                var def = $q.defer();

                $http.get(appConfig.backend + "/learning/cards/category/" + categoryId)
                        .success(function (data) {
                            def.resolve(data);
                        })
                        .error(function () {
                            def.reject("Failed to get courses")
                        });
                return def.promise;
            },
            loadTags: function () {

                var def = $q.defer();

                $http.get(appConfig.backend + "/quiz/tags")
                        .success(function (data) {
                            def.resolve(data);
                        })
                        .error(function () {
                            def.reject("Failed to get tags")
                        });
                return def.promise;
            }
//            ,loadMenu: function () {
//                var sections = [];
//
//                var learningSection = {
//                    name: 'Cours',
//                    type: 'heading',
//                    children: []
//                };
//
//                $http.get(appConfig.backend + '/learning/categories')
//                        .success(function (data) {
//
//                            // Transerve all category tree
//                            data.forEach(function (category) {
//
//                                var pages = [];
//
//                                category.children.forEach(function (subCategory) {
//
//                                    var page = {
//                                        name: subCategory.name,
//                                        url: '/learning/categorie/' + subCategory.id,
//                                        type: 'link'
//                                    };
//
//                                    pages.push(page);
//                                });
//
//                                var section = {
//                                    name: category.name,
//                                    type: 'toggle',
//                                    pages: pages
//                                };
//
//                                learningSection.children.push(section);
//
//                            });
//
//                            sections.push(learningSection);
//
//                            onLocationChange();
//                        })
//                        .error(function () {
//
//                        });
//                return sections;
//            }
        };
//        function onLocationChange() {
//
//            var path = $location.path();
//
//            var introLink = {
//                name: "Introduction",
//                url:  "/",
//                type: "link"
//            };
//
//            if (path == '/') {
//                self.selectSection(introLink);
//                self.selectPage(introLink, introLink);
//                return;
//            }
//
//            var matchPage = function(section, page) {
//
//                if (path === page.url) {
//
//                    self.selectSection(section);
//                    self.selectPage(section, page);
//                }
//            };
//
//            sections.forEach(function(section) {
//                if(section.children) {
//                    // matches nested section toggles, such as API or Customization
//                    section.children.forEach(function(childSection){
//
//                        if (childSection.type === 'link') {
//                            matchPage(childSection, childSection);
//                        }
//
//                        if(childSection.pages){
//                            childSection.pages.forEach(function(page){
//                                matchPage(childSection, page);
//                            });
//                        }
//                    });
//                }
//                else if(section.pages) {
//                    // matches top-level section toggles, such as Demos
//                    section.pages.forEach(function(page) {
//                        matchPage(section, page);
//                    });
//                }
//                else if (section.type === 'link') {
//                    // matches top-level links, such as "Getting Started"
//                    matchPage(section, section);
//                }
//            });
//        }        
    }

})();
