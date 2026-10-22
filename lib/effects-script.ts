/**
 * Inlined in <head> before first paint.
 * - Applies the saved currency (₦ or $) so prices don't flash.
 * - Flags JS support with `.js` on <html> so [data-reveal] elements start hidden
 *   (see globals.css) until PageEffects reveals them. Without JS, or with reduced
 *   motion, content is simply visible.
 * - Safety net: if PageEffects hasn't mounted (sets data-fx) within 4s, show everything.
 */
export const effectsScript = `(function(h){try{if(localStorage.getItem('currency')==='usd')h.dataset.currency='usd'}catch(e){}if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;h.classList.add('js');setTimeout(function(){if(!h.hasAttribute('data-fx'))h.classList.remove('js')},4000)})(document.documentElement)`;
