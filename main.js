(function(){

    'use strict';

    var $inputItem = document.querySelector('[data-js="inputItem"]');
    var $addButton = document.querySelector('[data-js="addButton"]');
    var $todoList = document.querySelector('[data-js="todoList"]');

    var app = (function appController() {
        return {
            init: function init() {
                app.initEvents();
            },

            initEvents: function initEvents() {
                $addButton.addEventListener('click', app.createItem);
            },

            createItem: function createItem() {
                var $item = document.createElement('li');
                var $inputValue = $inputItem.value;
                var $inputText = document.createTextNode($inputValue);
                $item.appendChild($inputText);
                $todoList.appendChild($item);
            }
        };
    })();

    app.init();

})();
