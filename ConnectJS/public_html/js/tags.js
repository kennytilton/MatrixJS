/* global Tag TagEvents CommonCSSPropertiesJS */
const TagAttributesGlobal =  new Set(['accesskey','autofocus','class','contenteditable'
    ,'contextmenu','dir'
    ,'draggable','dropzone','hidden','id','itemid','itemprop','itemref','itemscope'
    ,'itemtype','lang','spellcheck','style','tabindex','title','translate']);

const TagEvents =  new Set(['onabort','onautocomplete','onautocompleteerror','onblur','oncancel'
    ,'oncanplay','oncanplaythrough','onchange','onclick','onclose','oncontextmenu','oncuechange'
    ,'ondblclick','ondrag','ondragend','ondragenter','ondragexit','ondragleave','ondragover'
    ,'ondragstart','ondrop','ondurationchange','onemptied','onended','onerror','onfocus'
    ,'oninput','oninvalid','onkeydown','onkeypress','onkeyup','onload','onloadeddata'
    ,'onloadedmetadata','onloadstart','onmousedown','onmouseenter','onmouseleave','onmousemove'
    ,'onmouseout','onmouseover','onmouseup','onmousewheel','onpause','onplay','onplaying'
    ,'onprogress','onratechange','onreset','onresize','onscroll','onseeked','onseeking'
    ,'onselect','onshow','onsort','onstalled','onsubmit','onsuspend','ontimeupdate','ontoggle'
    ,'onvolumechange','onwaiting']);

HtmlProperties = new Set([
    'contentEditable','dataset','dir','isContentEditable','lang'
    ,'offsetHeight','offsetLeft','offsetParent','offsetTop','offsetWidth','onabort','onblur'
    ,'onchange','onclick','onclose','oncontextmenu','oncopy','oncut','ondblclick'
    ,'onerror','onfocus','oninput','onkeydown'
    ,'onkeypress','onkeyup','onload','onmousedown'
    ,'onmousemove','onmouseout','onmouseover','onmouseup','onpaste','onpointercancel'
    ,'onpointerdown','onpointerenter','onpointerleave','onpointermove','onpointerout'
    ,'onpointerover','onpointerup','onreset','onresize','onscroll','onselect','onselectstart'
    ,'onsubmit','ontouchcancel','ontouchmove','ontouchstart','outerText','style','tabIndex'
    ,'title']);

CSSProperties = new Set(['align-content','align-items','align-self','all','<angle>','animation'
    ,'animation-delay','animation-direction','animation-duration','animation-fill-mode','animation-iteration-count'
    ,'animation-name','animation-play-state','animation-timing-function','backface-visibility'
    ,'background','background-attachment','background-blend-mode','background-clip','background-color'
    ,'background-image','background-origin','background-position','background-repeat','background-size'
    ,'block-size','border','border-block-end','border-block-end-color','border-block-end-style'
    ,'border-block-end-width','border-block-start','border-block-start-color'
    ,'border-block-start-style','border-block-start-width','border-bottom','border-bottom-color'
    ,'border-bottom-left-radius','border-bottom-right-radius','border-bottom-style','border-bottom-width'
    ,'border-collapse','border-color','border-image','border-image-outset','border-image-repeat'
    ,'border-image-slice','border-image-source','border-image-width','border-inline-end'
    ,'border-inline-end-color','border-inline-end-style','border-inline-end-width','border-inline-start'
    ,'border-inline-start-color','border-inline-start-style','border-inline-start-width','border-left'
    ,'border-left-color','border-left-style','border-left-width','border-radius','border-right'
    ,'border-right-color','border-right-style','border-right-width','border-spacing','border-style','border-top'
    ,'border-top-color','border-top-left-radius','border-top-right-radius','border-top-style','border-top-width'
    ,'border-width','bottom','box-decoration-break','box-shadow','box-sizing','break-after','break-before'
    ,'break-inside','caption-side','ch','clear','clip','clip-path','cm','color','column-count','column-fill'
    ,'column-gap','column-rule','column-rule-color','column-rule-style','column-rule-width','column-span'
    ,'column-width','columns','content','counter-increment','counter-reset','cursor','direction','display'
    ,'empty-cells','filter','flex','flex-basis','flex-direction','flex-flow','flex-grow','flex-shrink'
    ,'flex-wrap','float','font','font-family','font-feature-settings','font-kerning','font-language-override'
    ,'font-size','font-size-adjust','font-stretch','font-style','font-synthesis','font-variant'
    ,'font-variant-alternates','font-variant-caps','font-variant-east-asian','font-variant-ligatures'
    ,'font-variant-numeric','font-variant-position','font-weight','grid','grid-area','grid-auto-columns'
    ,'grid-auto-flow','grid-auto-rows','grid-column','grid-column-end','grid-column-gap','grid-column-start'
    ,'grid-gap','grid-row','grid-row-end','grid-row-gap','grid-row-start','grid-template','grid-template-areas'
    ,'grid-template-columns','grid-template-rows','height','hyphens','hz','image-orientation','image-rendering'
    ,'image-resolution','ime-mode','initial','inline-size','isolation','justify-content','left','letter-spacing'
    ,'line-break','line-height','list-style','list-style-image','list-style-position','list-style-type','margin'
    ,'margin-block-end','margin-block-start','margin-bottom','margin-inline-end','margin-inline-start','margin-left'
    ,'margin-right','margin-top','mask','mask-clip','mask-composite','mask-image','mask-mode','mask-origin'
    ,'mask-position','mask-repeat','mask-size','mask-type','max-block-size','max-height','max-inline-size'
    ,'max-width','min-block-size','min-height','min-inline-size','min-width','mix-blend-mode','object-fit'
    ,'object-position','offset-block-end','offset-block-start','offset-inline-end','offset-inline-start'
    ,'opacity','order','orphans','outline','outline-color','outline-offset','outline-style','outline-width'
    ,'overflow','overflow-wrap','overflow-x','overflow-y','padding','padding-block-end','padding-block-start'
    ,'padding-bottom','padding-inline-end','padding-inline-start','padding-left','padding-right','padding-top'
    ,'page-break-after','page-break-before','page-break-inside','perspective','perspective-origin','pointer-events'
    ,'position','quotes','resize','revert','right','ruby-align','ruby-merge','ruby-position','scroll-behavior'
    ,'scroll-snap-coordinate','scroll-snap-destination','scroll-snap-type','shape-image-threshold','shape-margin'
    ,'shape-outside','tab-size','table-layout','text-align','text-align-last','text-combine-upright'
    ,'text-decoration','text-decoration-color','text-decoration-line','text-decoration-style','text-emphasis'
    ,'text-emphasis-color','text-emphasis-position','text-emphasis-style','text-indent','text-orientation'
    ,'text-overflow','text-rendering','text-shadow','text-transform','text-underline-position','top','touch-action'
    ,'transform','transform-box','transform-origin','transform-style','transition','transition-delay'
    ,'transition-duration','transition-property','transition-timing-function','unicode-bidi','unset'
    ,'vertical-align','vh','visibility','vmax','vmin','vw','white-space','widows','width','will-change','word-break'
    ,'word-spacing','word-wrap','writing-mode','z-index','zoom']);

CommonCSSPropertiesJS = new Map([['background','background'], ['backgroundAttachment','background-attachment']
    , ['backgroundColor','background-color'], ['backgroundImage','background-image']
    , ['backgroundPosition','background-position'], ['backgroundRepeat','background-repeat']
    , ['border','border'], ['borderBottom','border-bottom'], ['borderBottomColor','border-bottom-color']
    , ['borderBottomStyle','border-bottom-style'], ['borderBottomWidth','border-bottom-width']
    , ['borderColor','border-color'], ['borderLeft','border-left'], ['borderLeftColor','border-left-color']
    , ['borderLeftStyle','border-left-style'], ['borderLeftWidth','border-left-width']
    , ['borderRight','border-right'], ['borderRightColor','border-right-color']
    , ['borderRightStyle','border-right-style'], ['borderRightWidth','border-right-width']
    , ['borderStyle','border-style'], ['borderTop','border-top'], ['borderTopColor','border-top-color']
    , ['borderTopStyle','border-top-style'], ['borderTopWidth','border-top-width'], ['borderWidth','border-width']
    , ['clear','clear'], ['clip','clip'], ['color','color'], ['cursor','cursor'], ['display','display']
    , ['filter','filter'], ['font','font'], ['fontFamily','font-family'], ['fontSize','font-size']
    , ['fontVariant','font-variant'], ['fontWeight','font-weight'], ['height','height'], ['left','left']
    , ['letterSpacing','letter-spacing'], ['lineHeight','line-height'], ['listStyle','list-style']
    , ['listStyleImage','list-style-image'], ['listStylePosition','list-style-position']
    , ['listStyleType','list-style-type'], ['margin','margin'], ['marginBottom','margin-bottom']
    , ['marginLeft','margin-left'], ['marginRight','margin-right'], ['marginTop','margin-top']
    , ['overflow','overflow'], ['padding','padding'], ['paddingBottom','padding-bottom']
    , ['paddingLeft','padding-left'], ['paddingRight','padding-right'], ['paddingTop','padding-top']
    , ['pageBreakAfter','page-break-after'], ['pageBreakBefore','page-break-before'], ['position','position']
    , ['cssFloat','float'], ['textAlign','text-align'], ['textDecoration','text-decoration']
    , ['textIndent','text-indent'], ['textTransform','text-transform'], ['top','top']
    , ['verticalAlign','vertical-align'], ['visibility','visibility']
    , ['width','width'], ['zIndex','z-index']]);

function tagAttrsBuild(md) {
    let attrs = '';
    for (let prop in md) {
        if (md.hasOwnProperty(prop)) {
            if (TagEvents.has(prop)) {
                //clg('bingo event!!!!!!!!!! '+prop);
                attrs += ` ${prop}="${md[prop]}(this, event)"`;
            } else {
                switch (prop) {
                    case 'disabled':
                    case 'autofocus':
                    case 'checked':
                        // booleans can stand alone. So weird.
                        if (md[prop]) {
                            attrs += ` ${prop}`;
                        }
                        break;                        
                    case 'value': // todo make tagSpecificAttrs a class attribute of appropriate tags
                        attrs += ` ${prop}="${md[prop]}"`;
                        break;
                    case 'placeholder': // todo make tagSpecificAttrs a class attribute of appropriate tags
                        attrs += ` ${prop}="${md[prop]}"`;
                        break;
                    default: {
                        /*if (md.tag=='button') {
                            clg(md.tag + ' def prop ' + prop +'='+ md[prop]);
                            clg(TagAttributesGlobal.has(prop));
                        }*/
                        if (TagAttributesGlobal.has(prop) && md[prop]) {
                            // clg('bingo attr global '+prop+'='+md[prop]);
                            attrs += ` ${prop}="${md[prop]}"`;
                        }
                    }
                }
            }
        }
    }
    // clg(md.tag + ' attrs ' + attrs);
    return attrs;
}

function tagStyleBuild(md) {
    let ss = '';
    for (let prop in md) {
        if (md.hasOwnProperty(prop)) {
            let cssProp = CommonCSSPropertiesJS.get(prop);
            //clg('md prop '+prop+'='+cssProp);
            if (cssProp) {
                let cssValue = md[prop];
                // note the shift from js prop name to CSS name
                ss += `${cssProp}:${cssValue};`;

            }
        }
    }
    return ss===''? '' : ` style="${ss}"`;
}

function tag( tag, islots, kids) {
    // clg(`tag ${tag} ${islots.name} sees parent ${parent}, kids ` + kids);
    return mkm( gPar, null // todo fully lose this idea of supplying id initargs.id
            , Object.assign({tag: tag}
                        , islots)
            , kids
            , Tag);
}

function div(islots, kids) {
    return tag('div', islots, kids);
}
function header(islots, kids) {
    return tag('header', islots, kids);
}
function footer(islots, kids) {
    return tag('footer', islots, kids);
}
function h1(content, islots, kids) {
    return tag('h1', Object.assign( {content: content}, islots), kids);
}
function h2(content, islots, kids) {
    return tag('h2', Object.assign( {content: content}, islots), kids);
}
function h3(content, islots, kids) {
    return tag('h3', Object.assign( {content: content}, islots), kids);
}
function h4(content, islots, kids) {
    return tag('h4', Object.assign( {content: content}, islots), kids);
}
function h5(content, islots, kids) {
    return tag('h5', Object.assign( {content: content}, islots), kids);
}
function h6(content, islots, kids) {
    return tag('h6', Object.assign( {content: content}, islots), kids);
}
function section(islots, kids) {
    return tag('section', islots, kids);
}

function ul(islots, kids) {
    return tag('ul', islots, kids);
}

function li(islots, kids) {
    return tag('li', islots, kids);
}
// todo Standardize all these so islots precedes content
function label(content, islots, kids) { // can a label have kids?
    return tag('label', Object.assign( {content: content}, islots), kids);
}
function button(content, islots, kids) {
    return tag('button', Object.assign( {content: content}, islots), kids);
}
function span( islots) {
    return tag('span', islots);
}
function input(islots, kids) {
    return tag('input', islots, kids);
}
function p(islots, content) {
    return tag('p', Object.assign( {content: content}, islots));
}

