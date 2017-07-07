/**
 * Created by kenneth on 9/4/16.
 */
/* global kNascent, kUntilAsked, kAlways, kAwake, qAwaken,  Cell */
//@formatter:off

function clg() {
    console.log(Array.from(arguments).join(","));
}
function ast (test, msg) {
    console.assert(test,msg);
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
                //clg('md cell named '+slot+' gets md named '+this.name);
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
    fmatch(seek) {
        //clg(`fmatch looks at ${this.name} seeking ${seek.toString()}`);
        //clg(`fmatch sees seektype ${typeof seek} ${this.mdType} ${seek.toString()}`);
        //clg(`fmatch sees seektype ${typeof seek==='symbol'} ${this.mdType===seek.toString()}`);
        let m = ((typeof seek === 'function' && seek(this))
                 || (typeof seek === 'string' && this.name === seek)
                 || (typeof seek === 'symbol' && this.mdType === seek)
                 || this === seek)? this : null;
        if (m) {
            //clg(`match!!!!!!!!!!!!!!!!!!!!!!!!!!!! ${seek.toString()}`);
        }
        return m;
    }
    fmTv( what, how) {
//        clg(`fmTv entry ${this.name} upp=${how.upp} mep=${how.mep} inside=${how.insidep}`);
//        clg(`fmTv entry par=${this.par && this.par.name}`);
//        clg(`fmTv entry kids=${this.kids}`);
        let self = this;
        try {
            return (how.mep && this.fmatch(what)) ||
                    
                    (how.insidep && this.kids
                        && this.kids.somex((elt, eltx, _)=>{
                            //clg(`${self.name} kidchks ${elt.name}`);
                            let found = (elt !== how.skip)
                                     && elt.fmTv(what, Object.assign( {}, how, { upp: false, mep: true}));
                            if (found) return found;})) ||

                    (function () {
                        //clg(`fmTv ${self.name} considers upp ${how.upp} par=${self.par}`);
                        return (how.upp
                                && self.par
                                && self.par.fmTv( what, Object.assign({}, how
                                                    , {mep: true
                                                        , insidep: true
                                                        , skip: self})));
                        })();
        } catch (e) {
            clg('fmtv caught error',e);
            return null;
        }
    }
    mDeadp() {return this.state===kDead;}
}

//module.exports.Model = Model;


function mkm( par, id, props, kids, factory=Model) {
    // clg('mkm kids '+kids);
    opts = Object.assign({}, props
        , kids ? {kids: typeof kids==='function'?
            cKids( kids)
            : kids} // TODO do these need par set? and does this ever work (hence need support)?
            : null);
    let md = new factory( par, id, opts);
    //clg(`mkm sees ids ${id} and mdid ${md.id} name ${md.name}`);
    return md;
}

function cKids(formula, options) {
    return Object.assign( new Cell(null
                                , c=>{
                                    let sgp = gPar;
                                    gPar = c.md;
                                    //clg('ckids switched gpar from '+(sgp? sgp.name : "none")+' to '+ gPar.name);
                                    ast(gPar);
                                    try {
                                        return formula(c);
                                    } finally {
                                        // clg('ckids switching gpar from '+ gPar.name +' BACK TO ' + (sgp? sgp.name : "none"));
                                        gPar = sgp;


                                    }
                                }
                                , false, false, null)
        , options);
}