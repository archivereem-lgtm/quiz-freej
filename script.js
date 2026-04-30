function goNext(q, next, ans) {
  localStorage.setItem(q, ans);
  window.location.href = next;
}

function saveAnswer(q, ans) {
  localStorage.setItem(q, ans);
}

function goToResult() {
  if (!localStorage.getItem("q8")) {
    alert("Choose an answer first 👀");
    return;
  }

  window.location.href = "result.html";
}

function calculateResult() {
  const scores = {
    "Um Khammas": 0,
    "Um Saloom": 0,
    "Um Saeed": 0,
    "Um Allawi": 0
  };

  for (let i = 1; i <= 8; i++) {
    const answer = localStorage.getItem("q" + i);
    if (answer && scores[answer] !== undefined) {
      scores[answer]++;
    }
  }

  let result = "Um Khammas";

  for (const character in scores) {
    if (scores[character] > scores[result]) {
      result = character;
    }
  }

  return result;
}

function showResult() {
  const result = calculateResult();

  const title = document.getElementById("result-title");
  const text = document.getElementById("result-text");
  const image = document.getElementById("result-image");

  title.textContent = result;

  if (result === "Um Khammas") {
    image.src = "images/khammasgloss.png";
    text.innerHTML =
`You’re the type who can’t stay quiet, even if you try. If something feels wrong, you’ll say it immediately. People might think you’re too much sometimes, but honestly, you just care deeply and don’t fake things. You have a strong personality, but you’re also generous in your own way. You’ll argue with someone… then still send them food later 😭

</b>Your Rhode match:</b>
</b>freej dates</b>

Bold, rich, and impossible to ignore. This is the gloss made for you!
Wear your match!`;
  }

  else if (result === "Um Saloom") {
    image.src = "images/saloomgloss.png";
    text.innerHTML =
`You have a soft heart and it shows in everything you do. You trust people easily and always assume good intentions, even when you probably shouldn’t 😭 You might get influenced by others, but it comes from being kind, not weak. People feel comfortable around you because you’re genuine and never judgmental.

</b>Your Rhode match:</b>
</b>berry rhode</b>

Soft, sweet, and easy to love. This is the gloss made for you!
Wear your match!`;
  }

  else if (result === "Um Saeed") {
    image.src = "images/saeedgloss.png";
    text.innerHTML =
`You’re the one people turn to when things feel messy. You don’t rush, you think. You always seem to know what to say, and somehow your words actually calm people down. You value respect and doing things properly, even if others don’t always get it. You’re not loud, but your presence is strong.

</b>Your Rhode match:</b>
</b>rhose</b>

Calm, grounded, and quietly strong. This is the gloss made for you!

Wear your match!`;
  }

  else if (result === "Um Allawi") {
    image.src = "images/allawigloss.png";
    text.innerHTML =
`You notice things others miss. Whether it’s trends, situations, or people’s behavior, you just get it. You’re more aware and open to change, but you still stay grounded. You’re the one explaining things to others or helping them understand what’s going on. Quietly smart, but not in an obvious way.

</b>Your Rhode match:</b>
</b>apricot</b>

Warm, aware, and effortlessly cool. This is the gloss made for you!
Wear your match!`;
  }
}

function restartQuiz() {
  localStorage.clear();
  window.location.href = "index.html";
}