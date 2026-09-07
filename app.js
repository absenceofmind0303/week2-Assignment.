document.addEventListener("DOMContentLoaded", () => {
  const focusBtn = document.querySelector("#focusBtn");
  if (focusBtn) {
    focusBtn.addEventListener("click", () => {
      const next = document.querySelector('.task-row:not(.done)');
      if (next) {
        next.scrollIntoView({behavior:"smooth", block:"center"});
        next.focus();
      }
    });
  }

  const filterBtn = document.querySelector("#filterBtn");
  if (filterBtn) {
    let showingCompleted = false;
    filterBtn.addEventListener("click", () => {
      showingCompleted = !showingCompleted;
      document.querySelectorAll(".task-row").forEach(row => {
        row.style.display = showingCompleted && !row.classList.contains("done") ? "none" : "grid";
      });
      filterBtn.textContent = showingCompleted ? "Completed ✓" : "All tasks ▾";
    });
  }

  const saveBtn = document.querySelector("#saveBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const status = document.querySelector("#status").value;
      const message = document.querySelector("#saveMessage");
      const bar = document.querySelector("#progressBar");
      const value = document.querySelector("#progressValue");
      const progress = status === "Ready for review" ? 100 : status === "Not started" ? 0 : 65;
      bar.style.width = progress + "%";
      value.textContent = progress + "%";
      message.textContent = "Saved locally — status changed to " + status + ".";
      saveBtn.textContent = "Saved ✓";
      setTimeout(() => saveBtn.textContent = "Save progress", 1600);
    });
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("task") === "wireframe") {
    const title = document.querySelector("#taskTitle");
    if (title) {
      title.textContent = "Submit wireframe review";
      document.querySelector(".tag").textContent = "DESIGN";
      document.querySelector(".progress-pill").textContent = "Completed";
      document.querySelector(".progress-pill").style.background = "#e8f0ec";
      document.querySelector(".progress-pill").style.color = "#2f5d50";
    }
  }
});