var Frank = function (unordered, key) {
	var by = function (key, minor) {
	    var compare = function (a, b, o, p) {
	         if (a === b) {
	                return typeof minor === 'function' ? minor(o, p) : 0;
	            }
	            if (typeof a === typeof b) {
	                return a < b ? -1 : 1;
	            }
	            return typeof a < typeof b ? -1 : 1;
	    }
	    return function (o, p) {

	        var a, b, keys, tmp, i, l, n = 0;
	        if (o && p && typeof o === 'object' && typeof p === 'object') {
	            keys = key.split(' ');
	            if (keys.length > 1) {
	                i = keys.length-1;
	                while (n++ < i) {
	                    tmp = keys[n];
	                    for (l in o) {
	                        if (o.hasOwnProperty(l) && typeof o[l][tmp] !== 'undefined') {
	                            if (typeof o[l][tmp][keys[i]] !== 'object') {
	                                a = o[l][tmp][keys[i]];
	                                b = p[l][tmp][keys[i]];
	                                break;
	                            } else {
	                                continue;
	                            }
	                        }
	                    }
	                    
	                }
	            } else {
	                a = o[key];
	                b = p[key];
	            }
	            return compare(a, b, o, p);
	        } else {

	        	if (o === p) {
			        return 0;
			    }
			    if (typeof o === typeof p) {
			        return o < p ? -1 : 1;
			    }
			    return typeof o < typeof p ? -1 : 1;
	        }
	    }
	};
	return unordered.sort(by(key));
};

    


