document.getElementById("expenseForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Example of processing
    console.log("Submitted Expense:", data);
    alert("Expense saved successfully!");
  
    this.reset();
  });
  
  function resetForm() {
    document.getElementById("expenseForm").reset();
  }
  