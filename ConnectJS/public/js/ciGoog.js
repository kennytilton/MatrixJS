/* 
 * The MIT License
 *
 * Copyright 2016 Kenneth.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

goog.require('goog.dom');
goog.require('goog.ui.DatePicker');

class Goog extends Model {
    constructor(parent, name, islots) {
        super( parent, name, islots, false);
        this.mtype = 'datepicker';
        this.gFactory = goog.ui.DatePicker;
    }
    toHTML() {

        return `<div id="${this.id}"></div>`;
    }
}
function datePicker( initargs, parent) {
    return mkm( parent, null
            , Object.assign({googFactory: goog.ui.DatePicker}
                        , initargs)
            , null
            , Goog);
// next goes in kids observer JIT            
//    picker = new goog.ui.DatePicker();
//    picker.create(parent.dom);
}
