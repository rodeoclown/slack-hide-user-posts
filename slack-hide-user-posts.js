// ==UserScript==
// @name         Hide Posts
// @namespace    https://github.com/rodeoclown/hide-slack-posts
// @version      0.0.1
// @description  Hides posts from a given list of users.
// @author       rodeoclown
// @match        https://*.slack.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

var $ = window.jQuery;
var ignoreList = new Array("USLACKBOT");

if(document.body) {
    $(".p-client_container").on('DOMSubtreeModified propertychange', function() {
        ignoreList.forEach(function(user) {
            $("a[data-message-sender='"+user+"']").parents("div.c-virtual_list__item").hide();
        });
    });
}
