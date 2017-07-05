/* 
 * The MIT License
 *
 * Copyright 2016 Kenneth Tilton.
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

/*global kUnbound sid jsDom */

function obsContent (slot, md, newv, oldv, c) {
    if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    //clg('setting ihtml!!! '+ newv);
    md.dom.innerHTML = newv;
}

// referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
function obsKids (slot, md, newv, oldv, c) {
    if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    //clg(`<${md.tag}> ${c.name} changed!!! `+ newv + ' from ' + oldv +'!');
    let priork = null;
    
    for (kx=0; kx < oldv.length; ++kx) {
        let oldk = oldv[kx];
        if (!find( oldk, newv)) {
            let kdom = oldk.creDom || document.getElementById(oldk.id);
            kdom.parentNode.removeChild(kdom);
        }
    }
    
    for (kx=0; kx < newv.length; ++kx) {
        let newk = newv[kx];
        if (find( newk, oldv)) {
            priork = newk;
        } else {
            let newtag = document.createElement('div'); //(newk.tag); 
            newk.creDom = newtag; // will be parent of newk.dom!!
            // clg(`par ${md.id} gets newk!! ${newk.id} = `+newh);
            //clg(`newk!!! ${typeof newk} ${newk instanceof Goog} `+newk.name);
            if (typeof Goog !== 'undefined' && newk instanceof Goog) {
                let g = new newk.gFactory();
                g.create(newtag);
                g.id = newk.id;
                // todo check that newtag dom still extant
                // check that datepicker found by ID
            } else {
                newtag.innerHTML = newk.toHTML()
                // todo try replacing newtag with its only child
            }

            if (priork === null) {
                //clg('ibefore null');
                md.dom.insertBefore( newtag, null);
            } else {
                //clg('got priork!!! '+priork);
                md.dom.insertBefore( newtag, priork.dom.nextSibling);
            }
            //clg(`yep!! ${newtag===newk.dom.parentNode}`);
            priork = newk;
        }
    }
}

function obsDisabled (slot, md, newv, oldv, c) {
    if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    //clg('setting disabled!!! '+ newv);
    md.dom.disabled = !!newv;
}

function obsStyleProperty (property, md, newv, oldv, c) {
    if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    //clg(`setting ${property}!!! `+ newv);
    md.dom.style[property] = newv;
}

function obsTagEventHandler (property, md, newv, oldv, c) {
    if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    //clg(`setting ${property}!!! `+ newv);
    md.dom.style.set[property] = newv;
}

AttrAliases = new Map([['class','className']]);

function obsAttrGlobal (property, md, newv, oldv, c) {
    if (oldv===kUnbound) return; // on awaken all HTML is assembled at once
    //clg(`setting tag attribute ${property}!!! via ${AttrAliases.get(property)} = `+ newv);
    //clg('obsAttrGlobal md.id is '+ md.id);
    //clg('obsAttrGlobal md.dom is '+md.dom);
    let trueAttr = AttrAliases.get(property) || property;
        md.dom[trueAttr] = newv;
}

class Tag extends Model {
    constructor(parent, name, islots) {
        let superSlots = Object.assign({}, islots);
        delete superSlots.id;

        // console.log("Tag sees par "+ (gPar? gPar.name : "noPar") + " name/iname " + name + "/" + islots.name);
        super( parent, (name || islots.name), superSlots, false);
        if (islots.id) {
            console.warn(`Provided dom id ${islots.id} is your responsibility.`);
            this.id = islots.id;
        } else {
            this.id = ++sid;
        }
        
        this.slotObservers = [];
        
        // --- binding jsDom with dom -----------------
        jsDom[this.id]=this;
        this.domCache = null;
        Object.defineProperty(this
            , 'dom', {
                enumerable: true
                , get: ()=> {
                    if (this.domCache===null) {
                        this.domCache = document.getElementById(this.id);
                        ast(this.domCache);
                    }
                    return this.domCache;
                }
            });

        if (this.awakenOnInitp) {
            this.awaken();
        } else {
            withIntegrity(qAwaken, this, x=> {
                this.awaken();
            });
        }
    }
    
    toHTML() {
        let tag = this.tag
            , others = tagAttrsBuild(this)
            , s = tagStyleBuild(this)
            , attrs = `${others} ${s}`;
        ast(tag);

        return `<${tag} id="${this.id}" ${attrs}>${this.content || this.kidsToHTML()}</${tag}>`;
    }
    kidsToHTML() {
        return this.kids? this.kids.reduce((pv, kid)=>{ return pv+kid.toHTML();},''):'';
    }
    slotObserverResolve(slot) {
        let obs = this.slotObservers[slot];
        if (!obs) {
            if (slot === 'content') {
                obs = obsContent;
            } else if (slot === 'kids') {
                obs = obsKids;
            } else if (slot === 'disabled') {
                obs = obsDisabled;
            } else if (CommonCSSPropertiesJS.get(slot)) {
                obs = obsStyleProperty;
            } else if (TagEvents.has(slot)) {
                obs = obsTagEventHandler;
            } else if (TagAttributesGlobal.has(slot)) {
                obs = obsAttrGlobal;
            } else {
                console.warn(`tag ${this.tag} not resolving observer for ${slot}`);
                obs = kObserverUnresolved;
            }
            this.slotObservers[slot] = obs;
        }
        return obs;
    }
    fmTag(tag, key) {
        return this.fmUp(md=> md.tag===tag,{}, key)
    }
}

function setClick (dom, event) {
    //clg('setclick dom id '+dom.id);
    let jso = jsDom[dom.id];
    //clg('setclick jsdom '+jso.id);
    jso.click = event;
}

