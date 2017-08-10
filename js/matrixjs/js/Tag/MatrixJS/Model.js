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

/* global kNascent, kUntilAsked, kAlways, kAwake, qAwaken,  Cell */
//@formatter:off

function clg() {
	console.log(Array.from(arguments).join(","));
}
function ast (test, msg) {
	console.assert(test,msg);
}

Object.defineProperty(Array.prototype,'packedFlat'
    ,{ value: function(r) {
        for (var a=this, i=0, r = r || []; i < a.length; ++i)
            if ( a[i] != null)
                a[i] instanceof Array ? a[i].packedFlat(r) : r.push(a[i]);
        return r}});

function cdrArgs(args) {
    // expects a special arguments instance, array-like but not really
    return Array.apply(null, args).slice(1)
}

function cddrArgs(args) {
    // expects a special arguments instance, array-like but not really
    return Array.apply(null, args).slice(2)
}

//var UU = require('node-uuid');

const kAwakening = "md-awakening";
const kDoomed = "md-doomed";
const kDead = "md-dead";

var sid = 0; // aka "serial ID"

class Model {
	constructor(parent, name, islots, awakenp=true) {
		/*
		 * Note that we begin by initializing some slots
		 * but next will be processing islots
		 * and those may well overwrite what we see next.
		 *
		 * eg, we set id to next sequential value, but may overwrite that
		 * with an icell. Mind you, that may be daft. We have the separate
		 * name property for search by name (where dups are cool) so why am
		 * I messing with the sid?
		 *
		 * OK, I'll stop that, but this warning stands in re other initializations.
		 *
		 */
		// clg("Model entry name=" + name + ", par= "+ parent + ', gPar=' + gPar);
		this.par = parent || gPar; // we build models as parent<->>kids
		// clg("Model this " + islots.name + " gets par " + this.par + " named " + (this.par? this.par.name : "unnamed"));
		this.name = name;
		this.mdType = null; // eg, "selMgr" for list items to seek out
		this.cells = {};
		this.others = {}; // cache here other models tracked down by formulas
		// so we have them handy if the rule runs again
		// todo not-to-be has to lose these references

		this.state = kNascent;
		this.doomed = false; // aka in mid-notToBe
		// this.fnz = false; // dunno. short for finalization? not in play
		this.awakenOnInitp = false; // ie, bypass qAwaken
		this.adoptCt = 0; // rare case of non-child but "hosted"

		for (let slot in islots) {
			if (!islots.hasOwnProperty(slot))
				continue;

			//console.log(slot + " -> " + islots[slot]);
			let value = islots[slot];

			if (value instanceof Cell) {
				value.name = slot;
				// clg('md cell named '+slot+' gets md named '+this.name);
				value.md = this; // md aka model
				//clg('md cell named '+slot+' has md named '+value.md.name);
				this.cells[slot] = value;
				Object.defineProperty(this
					, slot, {
						enumerable: true
						, get: () =>  value.slotValue()
					, set: (newv) => value.slotValueSet(newv)
			});
			} else {
				Object.defineProperty(this
					, slot, {
						enumerable: true
						, get: () =>  value
					, set: (newv) => {
					throw `Slot ${slot} cannot be set to ${newv} because it is not mediated by an input Cell`;
				}
			});
			}
		}

		if (awakenp) {
			if (this.awakenOnInitp) {
				this.awaken();
			} else {
				withIntegrity(qAwaken, this, x=> {
					this.awaken();
			});
			}
		}
	}
    static cname() { return "Model"}

	awaken() {
		if (this.state !== kNascent) return this;
		this.state = kAwakening;
		//clg(`md awaken ${this.name}`);
		for (let slot in this.cells) {
			let c = this.cells[slot];
			console.assert(c.md,`No md for cell ${c.name} at md awaken`);
			//clg(`md wakes ${c.name} st=${c.state.toString()}`);
			let lz = find(c.lazy, [true, kAlways, kUntilAsked]);
			if (lz) {
				; //clg('lazy!!!!', c.lazy, lz);
			} else {
				c.awaken();
			}
		}
		this.state = kAwake;
	}
	slotObserverResolve (slot) {
		// see how Tag in ciWeb overrides this
		return null;
	}
	fmd (what, key, how) {
//        clg('fmd sees '+ (how && how.mustp));
		return this.fm( what,
			Object.assign({mep: false, upp: false, insidep: true} , how),
			key);
	}
	fm( what, how, key) {
		// todo an up-only option to just search ascendants
		if (false) { //(how) {
			clg(how.insidep);
			clg('fm mustp' + how.mustp);
			clg(`fm entry this=${this.name} mustp=${how.mustp}`);
		}
		let found = null;
		if (key) {
			let known = this.others[key];
			if (known) {
				clg(`md.fm reusing known!!!!!!!! ${key}`);
				return known;
			}
		}
		how = Object.assign({mep: false
				, mustp: true
				, insidep: false
				, upp: true
				, wocd: true} // without-c-dependency
			, how);
		let sd = depender;
		depender = how.wocd? null : depender;
		try {
			let bingo = this.fmTv( what, how);
			if (bingo) {
				//clg('fm bingo!!! '+bingo.name);
				this.others[key] = bingo;
				found = bingo;
			} else {
				//clg('fm failed!!! '+what);
				if (how.mustp) {
					throw `fget failed what = ${what.toString()}, id ${this.id}, where = ${this.name}`;
				}
			}
		} finally {
			depender = sd;
		}
		//clg('fm returns!!!!! '+ (found && found.name));
		return found;
	}

	fmUp(what, how, key) {
		return this.fm( what, Object.assign({upp: true, mep: false}, how), key)
	}
	fmDown(what, how, key) {
		return this.fm( what, Object.assign({upp: false, insidep: true, mep: false}, how), key)
	}

	fmatch(seek) {
		let m = ((typeof seek === 'function' && seek(this))
		|| (typeof seek === 'string' && this.name === seek)
		|| (typeof seek === 'symbol' && this.mdType === seek)
		|| this === seek)? this : null;
		return m;
	}
	fmTv( what, how) {
		let self = this;
		return (how.mep && this.fmatch(what)) ||

			(how.insidep
			&& this.kids
			&& this.kids.somex((eltx, elt)=>{
				//clg(`${self.name} kidchks ${elt.name}`);
				// todo this bombed when undefined (via no-return bug) got into kids (they need packed-flat)
				// clg(`somex passed eltx ${eltx} and elt ${elt}`)
				let found = (elt !== how.skip)
					&& elt.fmTv(what, Object.assign( {}, how, { upp: false, mep: true}));
		if (found) return found;})) ||

		(function () {
			// clg(`fmTv ${self.name} considers upp ${how.upp} par=${self.par}`);
			return (how.upp
			&& self.par
			&& self.par.fmTv( what, Object.assign({}, how
				, {mep: true
					, insidep: true
					, skip: self})));
		})();
	}
	mDeadp() {return this.state===kDead;}
}

//module.exports.Model = Model;

function mkm( par, id, props, kids, factory=Model) {
	clg('mkm ',par, factory.cname());
	opts = Object.assign({}
	                    , props
		                , kids ? {kids: cKids( kids)} : null);
	let md = new factory( par, id, opts);
	//clg(`mkm sees ids ${id} and mdid ${md.id} name ${md.name}`);
    clg('mkm made', md);
	return md;
}

function cKids( kidFactories, options) {
    // kidFactories can be one generative function or an array of such.
    // These functions can return null, models, kidFactories, or arrays of such.
    // Thus they must return null, a Model, an array, or a function.
    // All functions will be called recursively.
    // In the end we have a tree of Models or nulls.
    // That tree then gets packed into a flat array with all nulls cleared.
    // The array then be empty or not.
    // Note that if only one function is passed as kids and one model results, the
    // final result is still an array (of one kid).

	return Object.assign( new Cell(null
			, c=>{ let ks = kfsRun( c.md, kidFactories);
			        clg('ckids kids',ks);
			        return ks instanceof Array? ks.packedFlat():ks
            }
			, false, false, null)
			, options);
}

function kfsRun( parent, kfs) {
    let kfRun = kf => kf(parent);
    ast( kfs instanceof Array);
    clg('kfsRun top', kfs instanceof Array, typeof kfs);
    kfs.map( kf => {
        let k = kfRun(kf)
        , ktype = typeof k;

        if (k === null) {
            return null;
        } else if ( ktype === 'function') {
            return kfRun(k);
        } else if (k instanceof Array) {
            return k.map(k => kfRun(k));
        } else {
            ast(ktype==='Model');
            return k;
        }
    })
}