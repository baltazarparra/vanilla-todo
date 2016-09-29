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
                var $check = document.createElement('input');
                var $label = document.createElement('label');
                var $inputValue = $inputItem.value;
                var $inputText = document.createTextNode($inputValue);
                var $removeButton = document.createElement('button');
                var $textRemoveButton = document.createTextNode('x');
                $check.setAttribute('type', 'checkbox');
                $item.appendChild($check);
                $item.appendChild($label);
                $label.appendChild($inputText);
                $item.setAttribute("data-js", "listItem");
                $removeButton.appendChild($textRemoveButton);
                $removeButton.setAttribute("data-js", "removeButton");
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
