require(['js/nav', 'js/data', 'js/entries', 'dojo/dom', 'dojo/query', 'dojox/widget/Toaster', 'dojo/dom-form', 'dojo/domReady!'],
	function (nav, data, entries, dom, query, Toaster, domForm, domReady) {
		query('#addExpenseLink').on('click', function () {
			nav.change('#addExpenseDiv', ['#entriesDiv', '#adminDiv']);
		});
		query('#entriesLink').on('click', function () {
			nav.change('#entriesDiv', ['#addExpenseDiv', '#adminDiv']);
		});
		query('#adminLink').on('click', function () {
			nav.change('#adminDiv', ['#addExpenseDiv', '#entriesDiv']);
		});
		query('#submitExpense').on('click', function () {
			// get the form object
			var f = dom.byId('addExpenseForm');
			// check form validity using native mathod
			var c = f.checkValidity();
			// if valid proceed
			if(c){
				// convert form data into an object
				var d = domForm.toObject('addExpenseForm');
				// send object to form submission method
				data.submitForm(d);
				// refresh the grid
				entries.grid.refresh();
				// reset the form
				f.reset();
				// select the first form element
				dom.byId('expenseType').focus();
				// init the toaster object
				new dojox.widget.Toaster({
					messageTopic: '/app/info',
					positionDirection: 'tl-right',
					duration: 5000
				});
				// send message
				dojo.publish('/app/info', ["Expense added"]);
			}
		});
		query('#resetData').on('click', function () {
			// fire the method that clears the store data
			data.resetData();
			// refresh the grid
			entries.grid.refresh();
			// navigate back to entry form
			nav.change('#addExpenseDiv', ['#entriesDiv', '#adminDiv']);
			// send message
			dojo.publish('/app/info', ["Data reset"]);
		});
	}
);