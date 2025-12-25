const quizData = [
            {
                question: "Algoritma itu paling tepat didefinisikan sebagai...",
                options: ["Program yang sudah jadi", "Langkah-langkah logis untuk menyelesaikan masalah", "Bahasa pemrograman tertentu", "Tampilan aplikasi di layar"],
                answerIndex: 1,
                explanation: "Algoritma adalah urutan langkah logis untuk menyelesaikan masalah. Program adalah implementasi algoritma dalam bahasa tertentu."
            },
            {
                question: "\"Masukkan nilai ujian. Jika nilai >= 75 tampilkan 'Lulus', jika tidak tampilkan 'Tidak lulus'.\" Ini termasuk struktur...",
                options: ["Sekuensial", "Seleksi (percabangan)", "Perulangan", "Array"],
                answerIndex: 1,
                explanation: "Ada keputusan berdasarkan kondisi (nilai >= 75), jadi ini percabangan/seleksi."
            },
            {
                question: "Simbol flowchart untuk Mulai/Selesai adalah...",
                options: ["Persegi panjang", "Jajar genjang", "Oval (Terminator)", "Belah ketupat"],
                answerIndex: 2,
                explanation: "Start/End pada flowchart memakai simbol Terminator (oval/rounded)."
            },
            {
                question: "Simbol flowchart untuk keputusan (Ya/Tidak) adalah...",
                options: ["Oval", "Persegi panjang", "Belah ketupat", "Lingkaran kecil"],
                answerIndex: 2,
                explanation: "Simbol keputusan (decision) adalah belah ketupat, lalu bercabang Ya/Tidak."
            },
            {
                question: "Untuk kasus 'jumlahkan dua bilangan A dan B lalu tampilkan hasilnya', urutan yang benar adalah...",
                options: ["Process -> Input -> Output", "Input -> Output -> Process", "Input -> Process -> Output", "Output -> Input -> Process"],
                answerIndex: 2,
                explanation: "Ambil data dulu (Input), olah (Process), lalu tampilkan hasil (Output)."
            },
            {
                question: "Pseudocode yang paling tepat untuk mengecek bilangan n genap/ganjil adalah...",
                options: ["if n / 2 == 0 then \"Genap\" else \"Ganjil\"", "if n % 2 == 0 then print(\"Genap\") else print(\"Ganjil\")", "if n == 2 then print(\"Genap\") else print(\"Ganjil\")", "print(n % 2)"],
                answerIndex: 1,
                explanation: "Genap dicek dengan sisa bagi 2 (n % 2). Jika sisa 0 -> genap, selain itu -> ganjil."
            },
            {
                question: "Tentukan output:\n\nsum = 0\nfor i = 1 to 4:\n   sum = sum + i\nprint(sum)",
                options: ["6", "8", "10", "12"],
                answerIndex: 2,
                explanation: "Penjumlahan 1 + 2 + 3 + 4 = 10."
            },
            {
                question: "Berapa kali print(\"Hi\") dieksekusi?\n\ni = 2\nwhile i <= 9:\n   print(\"Hi\")\n   i = i + 3",
                options: ["2 kali", "3 kali", "4 kali", "5 kali"],
                answerIndex: 1,
                explanation: "i = 2 (cetak 1), 5 (cetak 2), 8 (cetak 3), 11 berhenti karena > 9."
            },
            {
                question: "Pernyataan yang benar tentang pseudocode adalah...",
                options: ["Harus mengikuti aturan ketat seperti Java", "Ditulis untuk compiler agar bisa langsung dijalankan", "Bebas bahasa, fokus ke logika, mudah dibaca manusia", "Selalu berbentuk flowchart"],
                answerIndex: 2,
                explanation: "Pseudocode dibuat untuk manusia agar logika mudah dipahami, tidak wajib bisa dijalankan."
            },
            {
                question: "Flowchart yang baik itu...",
                options: ["Boleh lompat-lompat biar cepat", "Harus rapi, jelas, urutan logis, mudah diikuti", "Wajib pakai warna-warni", "Wajib sama persis untuk semua kasus"],
                answerIndex: 1,
                explanation: "Flowchart dinilai dari kejelasan dan kelogisan alur, tidak ambigu, serta mudah dibaca."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int a = 3;\\nint b = 4;\\nint c = a++ + ++b * 2;\\nSystem.out.println(a + \" \" + b + \" \" + c);'>Copy code</button></div><pre class='code-block'>int a = 3;\nint b = 4;\nint c = a++ + ++b * 2;\nSystem.out.println(a + \" \" + b + \" \" + c);</pre></div>",
                options: ["4 5 13", "3 5 13", "4 4 12", "3 4 11"],
                answerIndex: 0,
                explanation: "Penjelasan: a++ dipakai 3 lalu a jadi 4. ++b jadi 5 dulu, 5*2=10, jadi c=3+10=13."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int x = 10;\\ndouble y = x / 4;\\ndouble z = x / 4.0;\\nSystem.out.println(y + \" \" + z);'>Copy code</button></div><pre class='code-block'>int x = 10;\ndouble y = x / 4;\ndouble z = x / 4.0;\nSystem.out.println(y + \" \" + z);</pre></div>",
                options: ["2.5 2.5", "2.0 2.5", "2.0 2.0", "2.5 2.0"],
                answerIndex: 1,
                explanation: "x/4 pembagian int -> 2 lalu jadi 2.0. x/4.0 pembagian double -> 2.5."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='String a = \"java\";\\nString b = new String(\"java\");\\nSystem.out.println(a == b);\\nSystem.out.println(a.equals(b));'>Copy code</button></div><pre class='code-block'>String a = \"java\";\nString b = new String(\"java\");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));</pre></div>",
                options: ["true true", "false false", "false true", "true false"],
                answerIndex: 2,
                explanation: "== bandingkan referensi (beda objek) -> false. equals bandingkan isi -> true."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int x = 5;\\nboolean r = (x > 3) && (++x > 5);\\nSystem.out.println(r);\\nSystem.out.println(x);'>Copy code</button></div><pre class='code-block'>int x = 5;\nboolean r = (x > 3) && (++x > 5);\nSystem.out.println(r);\nSystem.out.println(x);</pre></div>",
                options: ["true 5", "true 6", "false 5", "false 6"],
                answerIndex: 1,
                explanation: "kiri true, kanan dieksekusi: ++x jadi 6, 6 > 5 true. x berubah jadi 6."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int x = 2;\\nboolean r = (x < 1) && (++x > 2);\\nSystem.out.println(r);\\nSystem.out.println(x);'>Copy code</button></div><pre class='code-block'>int x = 2;\nboolean r = (x < 1) && (++x > 2);\nSystem.out.println(r);\nSystem.out.println(x);</pre></div>",
                options: ["false 2", "false 3", "true 3", "true 2"],
                answerIndex: 0,
                explanation: "kiri false, && short-circuit -> kanan tidak dijalankan, x tetap 2."
            },
            {
                question: "Output program berikut adalah...",
                questionHtml: "Soal: Output program berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='class Counter {\\n    static int s = 0;\\n    int i = 0;\\n    void inc() { s++; i++; }\\n}\\n\\npublic class Main {\\n    public static void main(String[] args) {\\n        Counter a = new Counter();\\n        Counter b = new Counter();\\n        a.inc();\\n        a.inc();\\n        b.inc();\\n        System.out.println(Counter.s + \" \" + a.i + \" \" + b.i);\\n    }\\n}'>Copy code</button></div><pre class='code-block'>class Counter {\n    static int s = 0;\n    int i = 0;\n    void inc() { s++; i++; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Counter a = new Counter();\n        Counter b = new Counter();\n        a.inc();\n        a.inc();\n        b.inc();\n        System.out.println(Counter.s + \" \" + a.i + \" \" + b.i);\n    }\n}</pre></div>",
                options: ["3 3 3", "2 2 1", "3 2 1", "1 2 3"],
                answerIndex: 2,
                explanation: "static s total inc = 3. a.i = 2, b.i = 1."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int x = 7;\\nString hasil = (x % 2 == 0) ? \"A\" : (x % 3 == 0) ? \"B\" : \"C\";\\nSystem.out.println(hasil);'>Copy code</button></div><pre class='code-block'>int x = 7;\nString hasil = (x % 2 == 0) ? \"A\" : (x % 3 == 0) ? \"B\" : \"C\";\nSystem.out.println(hasil);</pre></div>",
                options: ["A", "B", "C", "Error"],
                answerIndex: 2,
                explanation: "7 tidak habis dibagi 2 dan tidak habis dibagi 3 -> pilih \"C\"."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Output kode berikut adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int a = 2, b = 3, c = 4;\\nboolean r = a + b * c > 14 || a++ == 2;\\nSystem.out.println(r);\\nSystem.out.println(a);'>Copy code</button></div><pre class='code-block'>int a = 2, b = 3, c = 4;\nboolean r = a + b * c > 14 || a++ == 2;\nSystem.out.println(r);\nSystem.out.println(a);</pre></div>",
                options: ["true 2", "true 3", "false 2", "false 3"],
                answerIndex: 1,
                explanation: "2+12=14, 14>14 false -> sisi kanan || dieksekusi: a++==2 true, lalu a jadi 3."
            },
            {
                question: "Manakah yang menyebabkan compile error?",
                questionHtml: "Soal: Manakah yang menyebabkan compile error?",
                options: ["A", "B", "C", "D"],
                optionsHtml: [
                    "<div class='code-card option-code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int n;\\nSystem.out.println(n);'>Copy code</button></div><pre class='code-block'>int n;\nSystem.out.println(n);</pre></div>",
                    "<div class='code-card option-code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int n = 0;\\nSystem.out.println(n);'>Copy code</button></div><pre class='code-block'>int n = 0;\nSystem.out.println(n);</pre></div>",
                    "<div class='code-card option-code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='for (int i = 0; i < 1; i++) {}'>Copy code</button></div><pre class='code-block'>for (int i = 0; i &lt; 1; i++) {}</pre></div>",
                    "<div class='code-card option-code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='int[] a = {1,2,3};\\nSystem.out.println(a.length);'>Copy code</button></div><pre class='code-block'>int[] a = {1,2,3};\nSystem.out.println(a.length);</pre></div>"
                ],
                answerIndex: 0,
                explanation: "Variabel lokal n belum diinisialisasi tapi sudah dipakai -> compile error. Yang lain valid."
            },
            {
                question: "Output kode berikut adalah...",
                questionHtml: "Soal: Jika new Demo().test(); dipanggil, outputnya adalah...<div class='code-card'><div class='code-header'><span class='code-lang'>java</span><button type='button' class='copy-btn' data-code='class Demo {\\n    int x = 10;\\n    void test() {\\n        int x = 5;\\n        System.out.println(x);\\n        System.out.println(this.x);\\n    }\\n}'>Copy code</button></div><pre class='code-block'>class Demo {\n    int x = 10;\n    void test() {\n        int x = 5;\n        System.out.println(x);\n        System.out.println(this.x);\n    }\n}</pre></div>",
                options: ["10 10", "5 5", "5 10", "10 5"],
                answerIndex: 2,
                explanation: "x di method adalah variabel lokal (5). this.x adalah instance variable (10)."
            }
        ];

        const elements = {
            question: document.getElementById("question"),
            options: document.getElementById("options"),
            explanation: document.getElementById("explanation"),
            submit: document.getElementById("submit"),
            next: document.getElementById("next"),
            counter: document.getElementById("counter"),
            score: document.getElementById("score"),
            progressBar: document.getElementById("progress-bar"),
            indicator: document.getElementById("indicator"),
            finish: document.getElementById("finish"),
            quizCard: document.getElementById("quiz-card"),
            finalText: document.getElementById("final-text"),
            summary: document.getElementById("summary"),
            review: document.getElementById("review"),
            restart: document.getElementById("restart")
        };

        let currentIndex = 0;
        let selectedIndex = null;
        let score = 0;

        function pointsPerQuestion() {
            return 100 / quizData.length;
        }

        function updateStats() {
            elements.counter.textContent = `Soal ${currentIndex + 1}/${quizData.length}`;
            elements.score.textContent = `Skor ${score.toFixed(1)}`;
            const progress = ((currentIndex + 1) / quizData.length) * 100;
            elements.progressBar.style.width = `${progress}%`;
        }

        function buildIndicator() {
            elements.indicator.innerHTML = "";
            quizData.forEach((_, index) => {
                const item = document.createElement("div");
                item.className = "indicator-item";
                item.textContent = index + 1;
                item.dataset.index = index;
                item.addEventListener("click", () => {
                    const isFinished = elements.finish.style.display === "block";
                    if (isFinished) {
                        elements.finish.style.display = "none";
                        elements.quizCard.style.display = "block";
                    }
                    currentIndex = index;
                    renderQuestion();
                });
                elements.indicator.appendChild(item);
            });
        }

        function updateIndicator() {
            const items = Array.from(elements.indicator.children);
            items.forEach((item, index) => {
                const userAnswer = quizData[index].userAnswerIndex;
                const isCorrect = userAnswer === quizData[index].answerIndex;
                const isCurrent = currentIndex === index;

                item.classList.toggle("current", isCurrent);

                if (userAnswer === undefined) {
                    item.classList.remove("correct", "wrong");
                } else {
                    item.classList.toggle("correct", isCorrect);
                    item.classList.toggle("wrong", !isCorrect);
                }
            });
        }

        function renderQuestion() {
            const current = quizData[currentIndex];
            selectedIndex = null;
            elements.explanation.hidden = true;
            elements.explanation.textContent = "";
            elements.submit.disabled = true;
            elements.next.disabled = true;

            if (current.questionHtml) {
                elements.question.innerHTML = current.questionHtml;
                elements.question.classList.add("rich");
            } else {
                elements.question.textContent = current.question;
                elements.question.classList.remove("rich");
            }
            elements.options.innerHTML = "";

            current.options.forEach((text, idx) => {
                const option = document.createElement("button");
                option.type = "button";
                option.className = "option";
                const isCodeOption = Array.isArray(current.optionsHtml);
                const optionLabel = `${String.fromCharCode(65 + idx)}.`;
                const optionBody = isCodeOption ? current.optionsHtml[idx] : text;
                option.innerHTML = `<span class="option-letter">${optionLabel}</span>${isCodeOption ? optionBody : ` ${optionBody}`}`;
                option.classList.toggle("option-code", isCodeOption);
                option.addEventListener("click", () => selectOption(idx));
                elements.options.appendChild(option);
            });

            wireCopyButtons(elements.question);
            if (current.optionsHtml) {
                wireCopyButtons(elements.options);
            }

            if (current.userAnswerIndex !== undefined) {
                selectedIndex = current.userAnswerIndex;
                const optionEls = Array.from(elements.options.children);
                optionEls.forEach((el, i) => {
                    el.disabled = true;
                    el.classList.toggle("selected", i === selectedIndex);
                    if (i === current.answerIndex) {
                        el.classList.add("correct");
                    } else if (i === selectedIndex) {
                        el.classList.add("wrong");
                    }
                });
                elements.explanation.hidden = false;
                elements.explanation.textContent = current.explanation;
                elements.next.disabled = false;
            }

            updateStats();
            updateIndicator();
        }

        function selectOption(idx) {
            selectedIndex = idx;
            const optionEls = Array.from(elements.options.children);
            optionEls.forEach((el, i) => {
                el.classList.toggle("selected", i === idx);
            });
            elements.submit.disabled = false;
        }

        function copyToClipboard(text) {
            if (navigator.clipboard && window.isSecureContext) {
                return navigator.clipboard.writeText(text);
            }

            const temp = document.createElement("textarea");
            temp.value = text;
            temp.setAttribute("readonly", "");
            temp.style.position = "absolute";
            temp.style.left = "-9999px";
            document.body.appendChild(temp);
            temp.select();
            document.execCommand("copy");
            document.body.removeChild(temp);
            return Promise.resolve();
        }

        function wireCopyButtons(scope) {
            if (!scope) return;
            const buttons = Array.from(scope.querySelectorAll(".copy-btn"));
            buttons.forEach((button) => {
                if (button.dataset.bound === "true") return;
                button.dataset.bound = "true";
                const code = button.getAttribute("data-code") || "";
                button.addEventListener("click", () => {
                    const original = button.textContent;
                    copyToClipboard(code).then(() => {
                        button.textContent = "Tersalin";
                        setTimeout(() => {
                            button.textContent = original;
                        }, 1200);
                    });
                });
            });
        }

        function submitAnswer() {
            if (selectedIndex === null) return;
            const current = quizData[currentIndex];
            const optionEls = Array.from(elements.options.children);

            current.userAnswerIndex = selectedIndex;

            optionEls.forEach((el, i) => {
                el.disabled = true;
                if (i === current.answerIndex) {
                    el.classList.add("correct");
                } else if (i === selectedIndex) {
                    el.classList.add("wrong");
                }
            });

            if (selectedIndex === current.answerIndex) {
                score += pointsPerQuestion();
            }

            elements.explanation.hidden = false;
            elements.explanation.textContent = current.explanation;
            elements.submit.disabled = true;
            elements.next.disabled = false;
            elements.score.textContent = `Skor ${score.toFixed(1)}`;
            updateIndicator();
        }

        function nextQuestion() {
            currentIndex += 1;
            if (currentIndex >= quizData.length) {
                showFinish();
                return;
            }
            renderQuestion();
        }

        function showFinish() {
            elements.quizCard.style.display = "none";
            elements.finish.style.display = "block";
            elements.progressBar.style.width = "100%";
            updateIndicator();

            const total = quizData.length;
            const correct = quizData.filter(item => item.userAnswerIndex === item.answerIndex).length;
            const incorrect = total - correct;

            elements.finalText.textContent = `Skor akhir: ${score.toFixed(1)} / 100`;
            elements.summary.innerHTML = `
        <div>Benar: ${correct} dari ${total}</div>
        <div>Salah: ${incorrect}</div>
        <div>Persentase: ${(score).toFixed(1)}%</div>
      `;

            renderReview();
        }

        function renderReview() {
            elements.review.innerHTML = "";
            quizData.forEach((item, index) => {
                const isCorrect = item.userAnswerIndex === item.answerIndex;
                const reviewItem = document.createElement("div");
                reviewItem.className = "review-item";

                const userAnswerText = item.userAnswerIndex === undefined
                    ? "(Tidak dijawab)"
                    : item.options[item.userAnswerIndex];

                reviewItem.innerHTML = `
          <h3>Soal ${index + 1} <span class="tag ${isCorrect ? "good" : "bad"}">${isCorrect ? "Benar" : "Salah"}</span></h3>
          <p><strong>Pertanyaan:</strong> ${item.question}</p>
          <p><strong>Jawabanmu:</strong> ${userAnswerText}</p>
          <p><strong>Jawaban benar:</strong> ${item.options[item.answerIndex]}</p>
          <p><strong>Penjelasan:</strong> ${item.explanation}</p>
        `;

                elements.review.appendChild(reviewItem);
            });
        }

        function restartQuiz() {
            score = 0;
            currentIndex = 0;
            quizData.forEach(item => delete item.userAnswerIndex);
            elements.finish.style.display = "none";
            elements.quizCard.style.display = "block";
            renderQuestion();
        }

        elements.submit.addEventListener("click", submitAnswer);
        elements.next.addEventListener("click", nextQuestion);
        elements.restart.addEventListener("click", restartQuiz);
        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();
            const isQuizVisible = elements.quizCard.style.display !== "none";

            if (!isQuizVisible) return;

            if (["a", "b", "c", "d"].includes(key)) {
                const index = key.charCodeAt(0) - 97;
                if (index < quizData[currentIndex].options.length) {
                    selectOption(index);
                }
                return;
            }

            if (key === "enter") {
                if (!elements.next.disabled) {
                    nextQuestion();
                } else if (!elements.submit.disabled) {
                    submitAnswer();
                }
            }
        });

        if (quizData.length === 0) {
            elements.question.textContent = "Belum ada data soal. Isi array quizData terlebih dulu.";
            elements.submit.disabled = true;
            elements.next.disabled = true;
        } else {
            buildIndicator();
            renderQuestion();
        }
