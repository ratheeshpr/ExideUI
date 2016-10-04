/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'exide_icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'exd-apple': '&#xe900;',
		'exd-award': '&#xe901;',
		'exd-bag': '&#xe902;',
		'exd-box': '&#xe903;',
		'exd-box_02': '&#xe904;',
		'exd-calculator': '&#xe905;',
		'exd-calender': '&#xe906;',
		'exd-calender_01': '&#xe907;',
		'exd-call': '&#xe908;',
		'exd-chat': '&#xe909;',
		'exd-close': '&#xe90a;',
		'exd-close_box': '&#xe90b;',
		'exd-close_round': '&#xe90c;',
		'exd-doctor': '&#xe90e;',
		'exd-down': '&#xe90f;',
		'exd-down_box': '&#xe910;',
		'exd-facebook': '&#xe911;',
		'exd-google_pluse': '&#xe912;',
		'exd-graph': '&#xe913;',
		'exd-hand': '&#xe914;',
		'exd-hand_01': '&#xe915;',
		'exd-hand_02': '&#xe916;',
		'exd-hand_03': '&#xe917;',
		'exd-hand_04': '&#xe918;',
		'exd-in': '&#xe919;',
		'exd-info_01': '&#xe91a;',
		'exd-info_02': '&#xe91b;',
		'exd-leaf': '&#xe91c;',
		'exd-left': '&#xe91d;',
		'exd-light': '&#xe91e;',
		'exd-love': '&#xe91f;',
		'exd-love_hand': '&#xe920;',
		'exd-mail': '&#xe921;',
		'exd-man_01': '&#xe922;',
		'exd-man_02': '&#xe923;',
		'exd-man_03': '&#xe926;',
		'exd-map': '&#xe927;',
		'exd-medical': '&#xe928;',
		'exd-money_01': '&#xe929;',
		'exd-money_02': '&#xe92a;',
		'exd-money_03': '&#xe92b;',
		'exd-mouse': '&#xe92f;',
		'exd-news': '&#xe930;',
		'exd-note': '&#xe931;',
		'exd-note_01': '&#xe932;',
		'exd-note_02': '&#xe933;',
		'exd-note_03': '&#xe934;',
		'exd-note_04': '&#xe935;',
		'exd-note_05': '&#xe936;',
		'exd-note_search': '&#xe937;',
		'exd-pdf': '&#xe938;',
		'exd-people': '&#xe939;',
		'exd-peoples_01': '&#xe943;',
		'exd-peoples_02': '&#xe944;',
		'exd-percent_box': '&#xe945;',
		'exd-phone': '&#xe946;',
		'exd-play': '&#xe947;',
		'exd-play_round': '&#xe948;',
		'exd-right': '&#xe949;',
		'exd-right_arrow': '&#xe94a;',
		'exd-right_round': '&#xe94b;',
		'exd-round_box': '&#xe94c;',
		'exd-savings': '&#xe950;',
		'exd-search': '&#xe951;',
		'exd-settings': '&#xe952;',
		'exd-son': '&#xe953;',
		'exd-star': '&#xe954;',
		'exd-star_fill': '&#xe955;',
		'exd-tax': '&#xe956;',
		'exd-tick_01': '&#xe957;',
		'exd-tick_02': '&#xe958;',
		'exd-tour': '&#xe959;',
		'exd-twitter': '&#xe95a;',
		'exd-umbrella_02': '&#xe95b;',
		'exd-umbrlla_01': '&#xe95c;',
		'exd-video': '&#xe95d;',
		'exd-you_tube': '&#xe95e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/exd-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
