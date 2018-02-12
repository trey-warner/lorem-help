# Welcome to the lorem-help wiki!

[<< Back to the main page](./index)

## Features

* When you click on an option that requires a number, it will automatically put you in the field

## Options (from [brackets-lorem-ipsum](https://github.com/lkcampbell/brackets-lorem-ipsum))  

[**_p[count]:**](_p) Inserts a certain number of random Lorem Ipsum paragraphs into
the current document.

**_s[count]:** Inserts a certain number of random Lorem Ipsum sentences into
the current document. The `count` option indicates how many sentences to insert.
For example, `lorem_s3` will insert three sentences into the document.
If the `count` option is not provided, one sentence will be inserted.

**_w[count]:** Inserts a certain number of random Lorem Ipsum words into the
current document. The `count` option indicates how many words to insert.
For example, `lorem_w40` will insert 40 random words into the document.
If the `count` option is not provided, one word will be inserted.

**_short:** Makes all sentences or paragraphs short length.

**_medium:** Makes all sentences or paragraphs medium length.
If no size options are provided, the extension will use `_medium`
as the default option.

**_long:** Makes all sentences or paragraphs long length.

**_vlong:** Makes all sentences or paragraphs very long length.

**_nowrap:** Inserts Lorem Ipsum text without any word wrapping.

**_wrap[width]:** Word wraps Lorem Ipsum text using the specified `width`
For example, `lorem_wrap40` will wrap the text at 40 characters. If a word wrap
option is not provided, the extension will use `_wrap80` as the default option.
If you want to turn word wrap off, use the `_nowrap` option.  This option has
no effect on the `_link`, `_ol`, or `_ul` options.

**_link[count]:** Inserts a certain number of random Lorem Ipsum HTML links into
the current document. The HTML link will always point to http://www.brackets.io.
The `count` option indicates how many links to insert. For example, `lorem_link3`
will insert three links, separated by page breaks, into the document. If the
`count` option is not provided, one link will be inserted. To avoid badly
formatted HTML, the `_link` option ignores any `_wrap` options and is always
set to `_nowrap`.

**_ol[count], _ul[count]:** Inserts a random Lorem Ipsum HTML list into
the current document. Use `_ol` for an ordered list and `_ul` for an unordered
list. The `count` option indicates how many list items to insert. For example,
`lorem_ol3` will insert an ordered list with three list items into the document.
If the `count` option is not provided, a list with one item will be inserted.
To avoid badly formatted HTML, both of these options ignore any `_wrap` options
and are always set to `_nowrap`.

**_orig[count]:** **DOESN'T SUPPORT THIS YET**. This option will insert the original Lorem Ipsum paragraph
into the current document. The `count` option indicates how many paragraphs to
insert. For example, `lorem_orig3` will insert three original Lorem Ipsum paragraphs
into the document. If the `count` option is not provided, one original Lorem Ipsum
paragraph will be inserted. Only the `_nowrap`, `_wrap`, and `_html` options will
work with this option.

**_fortune[count]:** For when you get sick of nonsensical Latin phrases, this
option will insert random fortunes (similar to the Unix fortune program) into
the current document.  The `count` option indicates how many fortunes to insert.
For example, `lorem_fortune3` will insert three fortunes into the document. If
the `count` option is not provided, one fortune will be inserted.

**_html:** Wraps Lorem Ipsum text in `<p></p>` tags so it displays correctly in
HTML. For options `_p`, `_s`, and `_fortune` each individual paragraph, sentence,
or fortune is wrapped. For options `_w` and `_link`, the entire collection of
words or links is wrapped. This option is not available for lists since lists
are not inline elements.
