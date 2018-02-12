/* Lorem Help Extension
 to help you with the lorem ipsum command
 */

define(function (require, exports, module) {
    'use strict';

    const
        CommandManager = brackets.getModule('command/CommandManager'),
        Menus = brackets.getModule('command/Menus'),
        EditorManager = brackets.getModule('editor/EditorManager'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        DocumentManager = brackets.getModule('document/DocumentManager'),
        helpsfile = require('text!loremattrs.json'),
        helpsjson = JSON.parse(helpsfile),
        COMMAND_ID = 'full.loremhelp.insert',
        loremdia = $('<div>', {class: 'lorem-help-cont full'}),

    let menu, editMenu, loremdis;

    ExtensionUtils.loadStyleSheet(module, 'style.css');

    /* Construction of popup dialog and events */
    loremdia.append(
        $('<ul>', {class: 'full'}).append(
            helpsjson.full.map(opt => {
                return $('<li>', {'title': opt.title}).append(
                    $('<a>', {
                        href: '#',
                        code: opt.code,
                        state: opt.state
                    })
                );
            })
        ),
        $('<div>', {class: 'control'}).append(
            $('<p>', {text: 'Click a Setting You Wish To Use:'}),
            loremdis = $('<input>', {
                type: 'text',
                class: 'codepreview',
                name: 'loremdis',
                value: '',
                style: 'width: 60%;'
            }),
            $('<a>', {href: '#', class: 'btn', text: 'Clear'}).on('click', function () {
                 loremdis.val('');
                var lis = $(this).parent().parent().find('ul.full').find('li');
                lis.each(function(i, e) {
                    $(e).find('a').removeClass('selectedf');
                });
            }),
            $('<a>', {href: '#', class: 'btn', text: 'CANCEL'}).on('click', function () {
                 loremdia.hide();
            }),
            $('<a>', {href: '#', class: 'btn', text: 'Done'}).on('click', function () {
                 loremdia.hide();
                console.log($(this).parent().find('input').eq(0).val());
                writeThisChar($(this).parent().find('input').eq(0).val());
            })
        )
    
    
    ).hide().appendTo('body').find('ul a').on('click', function () {
        $(this).toggleClass('selectedf');
        if ($(this).hasClass('selectedf')) {
            if (this.attributes.code.value != 'lorem') {
                if (loremdis.val().endsWith('_')) {
                    loremdis.val(loremdis.val() + this.attributes.code.value.substring(1, this.attributes.code.value.length));
                    
                } else {
                    loremdis.val(loremdis.val() + this.attributes.code.value);
                }
                
                if ($(this).parent().attr('title').match(/\(add a number to the end\)/) != null) {
                    loremdis.focus();
                }
            }
            else {
                if (loremdis.val()[0] == '_' || loremdis.val().length == 0)
                 loremdis.val('lorem' + loremdis.val());
                else
                    loremdis.val('lorem_' + loremdis.val());
            }
        } else {
            var val = loremdis.val();
            val += '_';
            val = val.replace(this.attributes.code.value, '^');
            console.log(val.substr(0, 5));
            if (this.attributes.code.value != 'lorem')
                val = val.replace(/\^.*?_/, '_');
            else
                val = val.replace('^', '');
            val = val.substring(0, val.length-1);
            if (val === '_') val = '';
            loremdis.val(val);
        }
        
        
    });

    function showFullListDialog() {
        const currentDoc = DocumentManager.getCurrentDocument();

        if (currentDoc) {
            loremdia.css({
                'margin-left': -(622 / 2),
                'margin-top': -(520 / 2),
                width: 620
            }).show();
        }
    }

    /* this function is called within the scope of the click event target */
    function writeThisChar(obj) {
        const
            doc = DocumentManager.getCurrentDocument(),
            editor = EditorManager.getCurrentFullEditor(),
            pos = editor.getCursorPos();

        doc.replaceRange(obj, pos);

        editor.focus();
    }

    CommandManager.register('Lorem Ipsum Helper', COMMAND_ID, showFullListDialog);

    
    editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    if (editMenu) {
        editMenu.addMenuDivider();
        editMenu.addMenuItem(COMMAND_ID, 'Alt-Shift-J');
    }

});
