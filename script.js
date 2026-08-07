/* ---------------------------------------------------------------
   1. KONFIGURASI BOT TELEGRAM & STORAGE
------------------------------------------------------------------ */
const TELEGRAM_BOT_TOKEN = "8861041528:AAEe6LJpQVHrvxLCgF37kF8TfuYbsesDyP8";
const TELEGRAM_CHAT_ID = "6637784123";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
const LEADERBOARD_STORAGE_KEY = "kuis_leaderboard_v1";

/* ---------------------------------------------------------------
   2. DATA SOAL KUIS LITERASI DIGITAL
------------------------------------------------------------------ */
const QUESTIONS = [
  {
    question: "Soal 1: Di antara tindakan berikut, manakah yang mencerminkan standar paling aman dalam pembuatan kata sandi (password) akun digital?",
    options: [
      "Menggunakan kombinasi tanggal lahir dan nama hewan peliharaan guna mempermudah proses mengingat.",
      "Menerapkan kata sandi yang seragam untuk seluruh akun media sosial dan platform perbankan.",
      "Mengombinasikan huruf kapital, huruf kecil, angka, serta simbol khusus dengan panjang sekurang-kurangnya 12 karakter.",
      "Mencatat informasi kata sandi pada kolom deskripsi profil media sosial secara terbuka."
    ],
    answer: 2, // C
    explanation: "Kata sandi yang kuat mensyaratkan tingkat kompleksitas tinggi (terdiri dari huruf besar, huruf kecil, angka, dan karakter khusus) serta panjang minimal 12 karakter guna meminimalisasi risiko peretasan melalui metode brute force. Penggunaan data pribadi, keseragaman kata sandi antar-platform, serta penyimpanan secara terbuka sangat rentan terhadap tindak kejahatan siber."
  },
  {
    question: "Soal 2: Rina menerima pos-el (email) dari pihak yang mengatasnamakan lembaga perbankan. Pesan tersebut menginformasikan bahwa akunnya diblokir dan menyertakan tautan untuk verifikasi data pribadi serta nomor PIN. Tindakan yang paling tepat dilakukan oleh Rina adalah...",
    options: [
      "Mengakses tautan tersebut dan mengisikan data PIN agar pemblokiran akun dapat dibatalkan.",
      "Mengabaikan pesan tersebut atau melakukan konfirmasi secara langsung melalui saluran resmi (call center) bank terkait.",
      "Membalas pesan tersebut guna memastikan identitas pengirim secara langsung.",
      "Menyebarkan tautan tersebut ke grup keluarga untuk meminta pertimbangan."
    ],
    answer: 1, // B
    explanation: "Pesan tersebut indikatif terhadap bentuk kejahatan siber berupa Phishing, yakni upaya penipuan untuk memperoleh informasi sensitif dengan menyamar sebagai institusi tepercaya. Lembaga keuangan resmi tidak pernah meminta data rahasia melalui tautan email. Langkah antisipatif yang tepat adalah mengabaikan pesan dan memverifikasi kebenarannya melalui saluran komunikasi resmi."
  },
  {
    question: "Soal 3: Mekanisme keamanan yang menyediakan lapisan perlindungan tambahan di luar kata sandi saat pengguna melakukan autentikasi masuk (login) disebut...",
    options: [
      "Single Sign-On (SSO)",
      "Two-Factor Authentication (2FA) / Autentikasi Dua Faktor",
      "Virtual Private Network (VPN)",
      "Firewall Security"
    ],
    answer: 1, // B
    explanation: "Two-Factor Authentication (2FA) merupakan metode verifikasi ganda yang mewajibkan pengguna menyediakan dua bentuk bukti identitas (seperti kata sandi dan kode OTP) sebelum diberikan akses. Sistem ini secara efektif mencegah akses tanpa hak meskipun kata sandi utama telah berhasil diidentifikasi pihak luar."
  },
  {
    question: "Soal 4: Saat terhubung dengan jaringan Wi-Fi publik di area umum, perilaku yang paling berisiko terhadap kerahasiaan data pribadi adalah...",
    options: [
      "Mengakses portal berita umum melalui jaringan Wi-Fi publik.",
      "Mengaktifkan Virtual Private Network (VPN) sebelum melakukan penjelajahan internet.",
      "Melakukan transaksi perbankan elektronik (m-banking) atau menginput data kartu kredit.",
      "Deaktivasi fitur sambungan otomatis (Auto-Connect) pada perangkat pintar."
    ],
    answer: 2, // C
    explanation: "Jaringan Wi-Fi publik umumnya tidak dilengkapi sistem enkripsi yang memadai, sehingga berpotensi dimanfaatkan oleh pelaku kejahatan siber untuk melakukan peretasan data (Man-in-the-Middle attack). Oleh karena itu, melakukan transaksi finansial atau menginput data sensitif pada jaringan terbuka sangat tidak direkomendasikan."
  },
  {
    question: "Soal 5: Konsep Jejak Digital (Digital Footprint) menekankan pemahaman dasar bahwa...",
    options: [
      "Setiap konten atau komentar yang telah dihapus dari media sosial akan hilang secara permanen tanpa tersisa di internet.",
      "Seluruh data, foto, dan aktivitas digital yang diunggah dapat direkam, didistribusikan ulang, serta memengaruhi rekam jejak dan reputasi jangka panjang.",
      "Membagikan lokasi terkini (real-time) serta dokumen identitas pribadi di media sosial tergolong aman apabila hanya dibagikan kepada kerabat dekat.",
      "Jejak digital tidak memiliki keterkaitan dengan peluang akademis maupun prospek karier seseorang di masa depan."
    ],
    answer: 1, // B
    explanation: "Jejak digital merupakan rekam jejak dari seluruh aktivitas pengguna di ruang siber. Informasi yang telah diunggah dapat disimpan atau diarsipkan oleh pihak lain. Oleh sebab itu, kesadaran akan dampak jangka panjang dari setiap interaksi digital sangat diperlukan guna menjaga privasi dan reputasi diri."
  },

  {
    question: "Soal 6: Apa yang dimaksud dengan jejak digital?",
    options: [
      "Data yang tersimpan di komputer tanpa internet",
      "Rekaman aktivitas seseorang saat menggunakan internet atau aplikasi",
      "Semua aplikasi yang ada di ponsel",
      "Nama akun media sosial"
    ],
    answer: 1, // B
    explanation: "Jejak digital adalah rekaman aktivitas pengguna di internet, seperti unggahan, komentar, pencarian, dan data yang tersimpan saat menggunakan aplikasi."
  },
  {
    question: "Soal 7: Manakah yang termasuk contoh aplikasi media sosial?",
    options: [
      "Microsoft Word",
      "Instagram",
      "Kalkulator",
      "Paint"
    ],
    answer: 1, // B
    explanation: "[Instagram adalah aplikasi media sosial yang digunakan untuk berbagi foto, video, dan berkomunikasi dengan pengguna lain.]"
  },
  {
    question: "Soal 8: Mengapa kita harus berhati-hati saat mengunggah sesuatu di media sosial?",
    options: [
      "Agar kuota internet cepat habis",
      "Karena unggahan dapat menjadi jejak digital yang sulit dihapus",
      "Agar akun menjadi terkenal",
      "Karena semua unggahan otomatis terhapus"
    ],
    answer: 1, // B
    explanation: "Unggahan di internet dapat tersimpan dan disebarkan oleh orang lain sehingga menjadi bagian dari jejak digital."
  },
  {
    question: "Soal 9: Tindakan berikut yang paling baik untuk menjaga keamanan akun aplikasi adalah...",
    options: [
      "Membagikan kata sandi kepada teman",
      "Menggunakan kata sandi yang sama pada tiap akun",
      "Menulis kata sandi di media sosial",
      "Menggunakan kata sandi yang kuat dan unik"
    ],
    answer: 3, // D
    explanation: "Kata sandi yang kuat dan berbeda untuk setiap akun membantu melindungi data pribadi dari penyalahgunaan."
  },
  {
    question: "Soal 10: Data pribadi yang sebaiknya tidak dibagikan sembarangan di aplikasi adalah...",
    options: [
      "Alamat rumah dan nomor telepon",
      "Hobi",
      "Warna Favorit",
      "Makanan kesukaan"
    ],
    answer: 0,
    explanation: "[Masukkan Pembahasan Jawaban di Sini]"
  }
];

/* ---------------------------------------------------------------
   3. STATE APLIKASI
------------------------------------------------------------------ */
const state = {
  participantName: "",
  currentIndex: 0,
  score: 0,
  isAnswering: false,
  startTime: null,
  elapsedSeconds: 0,
};

/* ---------------------------------------------------------------
   4. REFERENSI ELEMEN DOM
------------------------------------------------------------------ */
const el = {
  screenName: document.getElementById("screen-name"),
  screenQuiz: document.getElementById("screen-quiz"),
  screenResult: document.getElementById("screen-result"),
  screenLeaderboard: document.getElementById("screen-leaderboard"),

  formName: document.getElementById("form-name"),
  inputName: document.getElementById("input-name"),
  nameError: document.getElementById("name-error"),
  btnGotoLeaderboard: document.getElementById("btn-goto-leaderboard"),

  quizParticipant: document.getElementById("quiz-participant"),
  quizScoreLive: document.getElementById("quiz-score-live"),
  progressFill: document.getElementById("progress-fill"),
  questionCounter: document.getElementById("question-counter"),
  questionWrapper: document.getElementById("question-wrapper"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),

  explanationBox: document.getElementById("explanation-box"),
  explanationText: document.getElementById("explanation-text"),

  resultName: document.getElementById("result-name"),
  resultScore: document.getElementById("result-score"),
  resultTime: document.getElementById("result-time"),
  resultSendStatus: document.getElementById("result-send-status"),
  scoreCircleProgress: document.getElementById("score-circle-progress"),
  btnViewLeaderboard: document.getElementById("btn-view-leaderboard"),
  btnRestart: document.getElementById("btn-restart"),

  leaderboardList: document.getElementById("leaderboard-list"),
  leaderboardEmpty: document.getElementById("leaderboard-empty"),
  btnRefreshLeaderboard: document.getElementById("btn-refresh-leaderboard"),
  btnBackHome: document.getElementById("btn-back-home"),

  toast: document.getElementById("toast"),
};

/* ---------------------------------------------------------------
   5. UTILITAS NAVIGASI SCREEN & TOAST
------------------------------------------------------------------ */
function showScreen(screenEl) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  screenEl.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message, duration = 2600) {
  el.toast.textContent = message;
  el.toast.classList.add("visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    el.toast.classList.remove("visible");
  }, duration);
}

/* ---------------------------------------------------------------
   6. STEP 1: FORM NAMA PESERTA
------------------------------------------------------------------ */
el.formName.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = el.inputName.value.trim();

  if (!name) {
    el.inputName.classList.add("input-error");
    el.nameError.classList.add("visible");
    el.inputName.focus();
    return;
  }

  el.inputName.classList.remove("input-error");
  el.nameError.classList.remove("visible");

  state.participantName = name;
  startQuiz();
});

el.inputName.addEventListener("input", () => {
  el.inputName.classList.remove("input-error");
  el.nameError.classList.remove("visible");
});

/* ---------------------------------------------------------------
   7. STEP 2: LOGIKA KUIS
------------------------------------------------------------------ */
function startQuiz() {
  state.currentIndex = 0;
  state.score = 0;
  state.isAnswering = false;
  state.startTime = Date.now();

  el.quizParticipant.textContent = `👤 ${state.participantName}`;
  updateLiveScore();

  showScreen(el.screenQuiz);
  renderQuestion();
}

function updateLiveScore() {
  el.quizScoreLive.textContent = `Skor: ${state.score * 10}`; // 10 poin per soal x 10 soal = 100
}

function renderQuestion() {
  // Sembunyikan penjelasan setiap kali masuk soal baru
  if (el.explanationBox) el.explanationBox.classList.add("hidden");

  const total = QUESTIONS.length;
  const index = state.currentIndex;
  const questionData = QUESTIONS[index];

  const progressPercent = (index / total) * 100;
  el.progressFill.style.width = `${Math.max(progressPercent, 4)}%`;
  el.questionCounter.textContent = `Soal ${index + 1} dari ${total}`;

  el.questionText.textContent = questionData.question;

  el.optionsContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  questionData.options.forEach((optionText, optionIndex) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.option = letters[optionIndex];
    btn.dataset.index = optionIndex;
    btn.innerHTML = `
      <span class="option-letter">${letters[optionIndex]}</span>
      <span class="option-text">${optionText}</span>
    `;
    btn.addEventListener("click", () => handleAnswer(optionIndex, btn));
    el.optionsContainer.appendChild(btn);
  });

  state.isAnswering = false;
}

function handleAnswer(selectedIndex, buttonEl) {
  if (state.isAnswering) return;
  state.isAnswering = true;

  const questionData = QUESTIONS[state.currentIndex];
  const isCorrect = selectedIndex === questionData.answer;

  const allButtons = el.optionsContainer.querySelectorAll(".option-btn");
  allButtons.forEach((b) => (b.disabled = true));

  buttonEl.classList.add(isCorrect ? "correct" : "wrong");
  if (!isCorrect) {
    const correctBtn = el.optionsContainer.querySelector(
      `[data-index="${questionData.answer}"]`
    );
    if (correctBtn) correctBtn.classList.add("correct");
  }

  if (isCorrect) {
    state.score += 1;
    updateLiveScore();
  }

  // TAMPILKAN PEMBAHASAN
  if (el.explanationBox && el.explanationText) {
    el.explanationText.textContent = questionData.explanation || "Tidak ada pembahasan.";
    el.explanationBox.classList.remove("hidden");
  }
}

function nextQuestion() {
  const isLastQuestion = state.currentIndex >= QUESTIONS.length - 1;

  if (isLastQuestion) {
    finishQuiz();
    return;
  }

  el.questionWrapper.classList.add("leaving");
  setTimeout(() => {
    state.currentIndex += 1;
    renderQuestion();
    el.questionWrapper.classList.remove("leaving");
  }, 280);
}

/* ---------------------------------------------------------------
   8. STEP 3: HASIL KUIS & TELEGRAM
------------------------------------------------------------------ */
function finishQuiz() {
  el.progressFill.style.width = "100%";
  state.elapsedSeconds = Math.round((Date.now() - state.startTime) / 1000);

  renderResultScreen();
  showScreen(el.screenResult);

  saveScoreToLeaderboard();
  sendResultToTelegram();
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderResultScreen() {
  const total = QUESTIONS.length;

  el.resultName.textContent = state.participantName;
  el.resultScore.textContent = state.score * 10; // 10 poin per soal, maksimal 100
  el.resultTime.textContent = formatTime(state.elapsedSeconds);
  el.resultSendStatus.textContent = "Mengirim...";

  const circumference = 2 * Math.PI * 85;
  const percent = state.score / total;
  const offset = circumference * (1 - percent);

  el.scoreCircleProgress.style.transition = "none";
  el.scoreCircleProgress.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.scoreCircleProgress.style.transition = "";
      el.scoreCircleProgress.style.strokeDashoffset = offset;
    });
  });

  document.getElementById("result-emoji").textContent =
    percent >= 0.8 ? "🏆" : percent >= 0.5 ? "🎉" : "💪";
}

async function sendResultToTelegram() {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    el.resultSendStatus.textContent = "⚠️ Belum dikonfigurasi";
    return;
  }

  const waktuStr = formatTime(state.elapsedSeconds);
  const pesan =
    `🎓 *Hasil Kuis Baru!*\n\n` +
    `👤 Nama Peserta : *${state.participantName}*\n` +
    `🏆 Skor Akhir   : *${state.score * 10}/100*\n` +
    `⏱️ Waktu        : *${waktuStr}*\n` +
    `🕒 Selesai      : ${new Date().toLocaleString("id-ID")}`;

  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: pesan,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.description || `Status ${response.status}`);
    }

    el.resultSendStatus.textContent = "✅ Terkirim ke Telegram";
  } catch (error) {
    console.error("Gagal mengirim notifikasi ke Telegram:", error);
    el.resultSendStatus.textContent = "⚠️ Gagal terkirim";
  }
}

function saveScoreToLeaderboard() {
  const entry = {
    name: state.participantName,
    score: state.score * 10,
    total_questions: 100,
    time_taken_seconds: state.elapsedSeconds,
    completed_at: new Date().toISOString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem(LEADERBOARD_STORAGE_KEY) || "[]");
    existing.push(entry);
    localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error("Gagal menyimpan ke localStorage:", error);
  }
}

/* ---------------------------------------------------------------
   9. STEP 4: LEADERBOARD
------------------------------------------------------------------ */
function loadLeaderboard() {
  el.leaderboardList.innerHTML = "";
  el.leaderboardEmpty.textContent = "Memuat data peringkat...";
  el.leaderboardList.appendChild(el.leaderboardEmpty);

  try {
    const data = JSON.parse(localStorage.getItem(LEADERBOARD_STORAGE_KEY) || "[]");

    const sorted = [...data].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (a.time_taken_seconds || 0) - (b.time_taken_seconds || 0);
    });

    renderLeaderboard(sorted.slice(0, 20));
  } catch (error) {
    console.error("Gagal memuat leaderboard:", error);
    el.leaderboardEmpty.textContent = "⚠️ Gagal memuat data leaderboard.";
  }
}

function renderLeaderboard(items) {
  el.leaderboardList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "leaderboard-empty";
    empty.textContent = "Belum ada data. Jadilah peserta pertama!";
    el.leaderboardList.appendChild(empty);
    return;
  }

  items.forEach((item, i) => {
    const rank = i + 1;
    const row = document.createElement("div");
    row.className = `leaderboard-row rank-${rank}`;
    row.style.animationDelay = `${i * 0.05}s`;

    const rankDisplay = rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank;

    row.innerHTML = `
      <span class="rank-badge">${rankDisplay}</span>
      <div class="row-info">
        <div class="row-name">${escapeHtml(item.name)}</div>
        <div class="row-meta">${formatTime(item.time_taken_seconds || 0)} · ${formatDate(item.completed_at)}</div>
      </div>
      <span class="row-score">${item.score}/100</span>
    `;
    el.leaderboardList.appendChild(row);
  });
}

function formatDate(isoString) {
  if (!isoString) return "-";
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
  } catch {
    return "-";
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* ---------------------------------------------------------------
   10. EVENT LISTENERS TOMBOL
------------------------------------------------------------------ */
el.btnGotoLeaderboard.addEventListener("click", () => {
  showScreen(el.screenLeaderboard);
  loadLeaderboard();
});

el.btnViewLeaderboard.addEventListener("click", () => {
  showScreen(el.screenLeaderboard);
  loadLeaderboard();
});

el.btnRefreshLeaderboard.addEventListener("click", loadLeaderboard);

el.btnBackHome.addEventListener("click", () => {
  showScreen(el.screenName);
});

el.btnRestart.addEventListener("click", () => {
  el.inputName.value = "";
  showScreen(el.screenName);
});