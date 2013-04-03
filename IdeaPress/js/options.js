/*
IdeaPress Version 2.0
File: options.js
Author: IdeaNotion
Description: Configures the application and the modules.  Please go to https://github.com/ideanotion/ideapress for how to apply the options
*/
(function () {
    "use strict";

    ideaPress.importModulesAndSetOptions(
        /* import module */
        ["/modules/wordpress/js/wp.module.js", "/modules/wordpressCom/js/wpcom.module.js"],

        function() {
            ideaPress.options = {
                appTitleImage: null,                      // App title image (approx. 600px x 80px)
                appTitle: "Peter's Blog",                    // App title text
                cacheTime: 3600000,                       // Global cache time to try fetch   
                mainUrl: "http://blog.peterritchie.com",         // Main promoting site
                privacyUrl: "http://blog.peterritchie.com/?page_id=741",      // Privacy URL
                modules: [
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', title: "Pages", typeId: wordpressModule.PAGES, pageIds: [311, 331] } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', title: "Recent Posts", typeId: wordpressModule.MOSTRECENT, hubItemsCount : 7 } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', title: "Bookmark", typeId: wordpressModule.BOOKMARKS } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', typeid: wordpressModule.CATEGORY, title: ".NET Development", categoryId: 51 } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', typeid: wordpressModule.CATEGORY, title: "C#", categoryId: 71 } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', typeid: wordpressModule.CATEGORY, title: "Health/Fitness", categoryId: 211 } },
                    { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', typeid: wordpressModule.CATEGORY, title: "Design/Coding Guidance", categoryId: 111 } }
                ],
                searchModule: { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', title: "Search" } },
                liveTileModule: { name: wordpressModule, options: { apiUrl: 'http://blog.peterritchie.com/', title: "Live Tile" } },
            };
        });
})();
