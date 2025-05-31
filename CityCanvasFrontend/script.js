document.addEventListener("DOMContentLoaded", async () => {
	const btn = document.getElementById("raffleBtn");
	const status = document.getElementById("raffleStatus");

	async function getStatus() {
		try {
			const res = await fetch(
				"https://citycanvas-backendapi.onrender.com/api/raffle-status?userId=123"
			);
      const data = await res.json();
			status.textContent = `✅ You have ${data.tickets} tickets`;
		} catch (err) {
			status.textContent = "❌ Error, try again.";
		}
	}

	btn.addEventListener("click", async () => {
		try {
			const res = await fetch("https://citycanvas-backendapi.onrender.com/api/raffle-entry", {
				method: "POST"
			});
			const data = await res.json();
			if (data.success) {
				status.textContent = `✅ You have ${data.tickets} tickets`;
			} else {
				status.textContent = "❌ Error, try again.";
			}
		} catch (err) {
			status.textContent = "❌ Error, try again.";
		}
	});

	getStatus();
});
