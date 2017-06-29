var wall_proxy = "SOCKS5 127.0.0.1:1086;SOCKS 127.0.0.1:1086;";
var nowall_proxy = "DIRECT;";

var blocked_domains = [
"yandex.ru",
"mail.ru",
"kaspersky.ru",
"drweb.ru",
"ok.ru",
"kinopoisk.ru",
"vk.com",
"yandex.ua"
];

function isHostBlocked(host) {
	for(var i = 0; i < blocked_domains.length; i++) {
		if (dnsDomainIs(host, blocked_domains[i]) === true) {
			return true;
		}
	}

	return false;
}

function FindProxyForURL(url, host) {
	if ( isPlainHostName(host) === true ) {
		return nowall_proxy;
	}

	if ( isHostBlocked(host) === true ) {
		return wall_proxy;
	}

	return nowall_proxy;
}
