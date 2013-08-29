define(['dojo/query'], function (query) {
	var nav = {
		change: function (show, hide) {
			query(show)[0].style.display = 'block';
			query(hide[0])[0].style.display = 'none';
			query(hide[1])[0].style.display = 'none';
			return false;
		}
	};
	return nav;
});