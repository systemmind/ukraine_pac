var direct = "__DIRECT__";
if (direct == "__DIR" + "ECT__") direct = "DIRECT;";

var wall_proxy = function(){ return "__PROXY__"; };
var wall_v6_proxy = function(){ return "__PROXY__"; };

var nowall_proxy = function(){ return direct; };
var ip_proxy = function(){ return wall_proxy(); };
var ipv6_proxy = function(){ return wall_v6_proxy(); };

function FindProxyForURL(url, host) {
	if ( isPlainHostName(host) === true ) {
		return nowall_proxy();
	}
	if ( dnsDomainIs(host, "vk.com") === true ) {
		return wall_proxy();
	}
	return nowall_proxy();
}