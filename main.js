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
                $inputItem.addEventListener('keypress', function(e) {
                    if (e.keyCode == 13)
                        app.createItem();
                });
            },

            createItem: function createItem() {

                var $item = document.createElement('li');
                $item.setAttribute("data-js", "listItem");

                var $check = document.createElement('input');
                $check.setAttribute('type', 'checkbox');

                var $label = document.createElement('label');

                $item.appendChild($check);
                $item.appendChild($label);

                var $removeButton = document.createElement('button');
                var $textRemoveButton = document.createTextNode('x');
                $removeButton.setAttribute("data-js", "removeButton");

                var $inputValue = $inputItem.value;
                var $inputText = document.createTextNode($inputValue);
                $label.appendChild($inputText);

                $removeButton.appendChild($textRemoveButton);
                $todoList.appendChild($item);
                $item.appendChild($removeButton);

                $removeButton.addEventListener('click', app.removeItem);
                $inputItem.value = '';
            },

            removeItem: function removeItem() {
                $todoList.removeChild(document.querySelector('[data-js="listItem"]'));
            }
        };
    })();

    app.init();

})();
