document.addEventListener("DOMContentLoaded", () => {

	const logItems = [];
	const calorieValues = [
		{name: "chicken", multiplier: 2}
	];

	const ul = document.getElementById("logItems");

	const renderLogItems = (e) => {
		e.preventDefault();
		

		const foodItemInput = document.getElementById("foodItemInput");
		const foodAmountInput = document.getElementById("foodAmountInput");

		console.log(foodItemInput, foodAmountInput);

		const foodItem = {
			foodItem: foodItemInput.value,
			amount: foodAmountInput.value * calorieValues.find(item => item.name === "chicken").multiplier
		};

		logItems.push(foodItem);

		logItems.forEach(logItem => {
			ul.innerHTML += `<li>
				<h3>${logItem.foodItem}<h3>
				<p>${logItem.amount} calories</p>
			</li>`;
		});

		foodItemInput.value = "";
		foodAmountInput.value = "";
	};


	document.getElementById ("logItemsForm").addEventListener("submit", e => renderLogItems(e));

});