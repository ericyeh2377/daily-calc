const feedbackForm = document.querySelector("#feedback-form");
const message = feedbackForm.elements.message;
const submit = feedbackForm.querySelector("button");
const feedbackStatus = document.querySelector("#feedback-status");

feedbackForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const description = message.value.trim();
  if (!description) {
    feedbackStatus.textContent = "請先寫下發生了什麼。";
    message.focus();
    return;
  }
  submit.disabled = true;
  feedbackStatus.textContent = "送出中…";
  try {
    const response = await fetch(feedbackForm.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({ message: description }),
    });
    if (!response.ok || !(await response.json()).ok) {
      throw new Error("Submission failed");
    }
    feedbackForm.reset();
    feedbackStatus.textContent = "回報已送出，謝謝！";
  } catch {
    feedbackStatus.textContent = "送出失敗，請稍後再試。你填寫的內容仍保留在欄位中。";
  } finally {
    submit.disabled = false;
  }
});
