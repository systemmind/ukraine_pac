var direct = "__DIRECT__";
if (direct == "__DIR" + "ECT__") direct = "DIRECT;";

var wall_proxy = function(){ return "__PROXY__"; };
var wall_v6_proxy = function(){ return "__PROXY__"; };

var nowall_proxy = function(){ return direct; };
var ip_proxy = function(){ return wall_proxy(); };
var ipv6_proxy = function(){ return wall_v6_proxy(); };

var blocked_domains = [
"yandex.ru",
"mail.ru",
"vk.com"
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
		return nowall_proxy();
	}

	if ( isHostBlocked(host) === true ) {
		return wall_proxy();
	}

	return nowall_proxy();
}