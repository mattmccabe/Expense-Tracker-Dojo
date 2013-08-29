define(['dojo/store/Memory', 'dojo/_base/array'], function(Memory, arrayUtil) {
	var data = {
		store: new Memory({
			idProperty: 'expenseID'
		}),
		submitForm: function (formData) {
			data.store.add({
				expenseID: data.guid(),
				expenseType: formData.expenseType,
				expenseAmount: formData.expenseAmount,
				expenseDate: formData.expenseDate
			});
		},
		guid: function () {
			var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			});
			return guid;
		},
		resetData: function () {
			// get all records
			var r = data.store.query({});
			// for each loop
			arrayUtil.forEach(r, function(item, index){
				// remove item by id
				data.store.remove(item.expenseID);
			});
		}
	};
	return data;
});