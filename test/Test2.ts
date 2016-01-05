var json2 = {
	"@id": "http://wellcomelibrary.org/iiif/b1818893x/manifest",
	"service": [
		{
			"@id": "http://wellcomelibrary.org/iiif/accepttermslogin",
			"profile": "http://iiif.io/api/auth/0/login",
			"label": "Archival material less than 100 years old",
			"service": [
				{
				"@id": "http://wellcomelibrary.org/iiif/tokenterms",
				"profile": "http://iiif.io/api/auth/0/token"
				},
				{
				"@id": "http://wellcomelibrary.org/iiif/logout",
				"profile": "http://iiif.io/api/auth/0/logout",
				"label": "Log out of Wellcome Library",
				"description": "Log out of Wellcome Library"
				}
			]
		}
	]
};

var id = "http://wellcomelibrary.org/iiif/logout";

var result = [json2].en()
		.traverseUnique(x => getAllArrays(x))
		.first(r => r['@id'] === id);

function getAllArrays(obj: any): exjs.IEnumerable<any> {
	if (!obj)
		return [].en();
	var all = [].en();
	for (var key in obj) {
		var val = obj[key];
		if (Array.isArray(val))
			all = all.concat(val)
	}
	return all;
}

console.log(result);