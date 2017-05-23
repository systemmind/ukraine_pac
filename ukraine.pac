var direct = "__DIRECT__";
if (direct == "__DIR" + "ECT__") direct = "DIRECT;";

var wall_proxy = function(){ return "__PROXY__"; };
var wall_v6_proxy = function(){ return "__PROXY__"; };

var nowall_proxy = function(){ return direct; };
var ip_proxy = function(){ return wall_proxy(); };
var ipv6_proxy = function(){ return wall_v6_proxy(); };

var blocked_domains = {"ru":{
"ok":1,
"yandex":1,
"mail":1
},"com":{
"vk":1
}
};

function  (domain_dict, host)
{
	var suffix;
	var pos1 = host.lastIndexOf('.');

	suffix = host.substring(pos1 + 1);

	var domains = domain_dict[suffix];
	if ( domains === undefined )
	{
		return false;
	}
	
	host = host.substring(0, pos1);
	var pos = host.lastIndexOf('.');

	while(1)
	{
		if (pos <= 0)
		{
			if (hasOwnProperty.call(domains, host))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
		suffix = host.substring(pos + 1);
		if (hasOwnProperty.call(domains, suffix))
		{
			return true;
		}
		
		pos = host.lastIndexOf('.', pos - 1);
	}
}

function FindProxyForURL(url, host)
{
	if (isInDomains(blocked_domains, host) === true )
	{
		return wall_proxy();
	}
	
	return nowall_proxy();
}

function FindProxyForURLEx(url, host)
{
	if (isInDomains(blocked_domains, host) === true )
	{
		return wall_proxy();
	}
	
	return nowall_proxy();
}