define(['dgrid/OnDemandGrid', 'js/data'],
	function (OnDemandGrid, data) {
		var entries = {
			grid: new OnDemandGrid({
				store: data.store,
				columns: [
					{ label: "Expense Type", field: "expenseType"},
					{ label: "Expense Amount", field: "expenseAmount"},
					{ label: "Expense Date", field: "expenseDate"}
				],
			}, "gridDiv")
		};
		return entries;
	}
);