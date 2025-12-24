const quizData = [
            {
                question: "Di sistem arsip kampus, petugas menginput surat masuk baru (nomor surat, tanggal, pengirim, perihal) lalu klik Simpan. Operasi yang terjadi adalah...",
                options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
                answerIndex: 1,
                explanation: "Menambah data/record baru ke tabel = INSERT."
            },
            {
                question: "Tim akreditasi mencari dokumen \"SK Prodi 2023\" dengan kata kunci dan filter tahun. Operasi yang paling tepat...",
                options: ["UPDATE", "DELETE", "SELECT", "DROP"],
                answerIndex: 2,
                explanation: "Mengambil/menampilkan data berdasarkan kriteria = SELECT."
            },
            {
                question: "Tahap pertama saat membuat ERD dari sebuah studi kasus adalah...",
                options: ["Menentukan kardinalitas", "Menentukan primary key semua tabel", "Mengidentifikasi entitas (entity) yang terlibat", "Menentukan indeks untuk query cepat"],
                answerIndex: 2,
                explanation: "ERD dimulai dari mengenali entity (objek utama yang datanya disimpan), baru lanjut atribut dan relasi."
            },
            {
                question: "Relasi Mahasiswa-MataKuliah pada KRS umumnya adalah...",
                options: ["1:1", "1:N", "M:N", "N:1"],
                answerIndex: 2,
                explanation: "Mahasiswa bisa ambil banyak MK, dan satu MK bisa diambil banyak mahasiswa -> M:N, perlu tabel penghubung (misal KRS)."
            },
            {
                question: "Tujuan utama normalisasi adalah...",
                options: ["Menambah redundansi agar query cepat", "Mengurangi redundansi dan mencegah anomali (update/insert/delete)", "Menghapus kebutuhan primary key", "Mengubah semua tabel jadi 1 tabel besar"],
                answerIndex: 1,
                explanation: "Normalisasi merapikan struktur tabel agar data tidak dobel-dobel dan mencegah anomali."
            },
            {
                question: "Kasus: data \"nama_unit\" tersimpan berulang di banyak baris. Saat nama unit berubah, sebagian baris belum ikut berubah. Ini disebut...",
                options: ["Insertion anomaly", "Update anomaly", "Delete anomaly", "Join anomaly"],
                answerIndex: 1,
                explanation: "Update anomaly terjadi karena data yang sama tersebar di banyak baris, sehingga perubahan rawan tidak konsisten."
            },
            {
                question: "Perintah SQL yang termasuk DDL adalah...",
                options: ["INSERT", "UPDATE", "CREATE TABLE", "SELECT"],
                answerIndex: 2,
                explanation: "DDL mengatur struktur (CREATE/ALTER/DROP), sedangkan DML mengolah data (INSERT/UPDATE/DELETE/SELECT)."
            },
            {
                question: "Query yang tepat untuk mencari arsip dengan perihal yang mengandung kata \"Akreditasi\" adalah...",
                options: ["WHERE perihal = 'Akreditasi'", "WHERE perihal LIKE 'Akreditasi'", "WHERE perihal LIKE '%Akreditasi%'", "WHERE perihal ORDER BY 'Akreditasi'"],
                answerIndex: 2,
                explanation: "LIKE '%...%' dipakai untuk mencari teks yang mengandung kata tertentu."
            },
            {
                question: "Makna Atomicity pada ACID adalah...",
                options: ["Setelah commit data pasti tersimpan walau crash", "Transaksi harus selalu cepat", "Semua langkah transaksi berhasil semua atau batal semua", "Data harus disimpan di banyak lokasi"],
                answerIndex: 2,
                explanation: "Atomicity = all-or-nothing. Kalau ada satu langkah gagal, transaksi dibatalkan (rollback)."
            },
            {
                question: "Basis data terdistribusi adalah...",
                options: ["Database yang hanya bisa diakses 1 komputer", "Satu database yang tersebar secara fisik di beberapa lokasi/komputer dan terhubung jaringan", "Database yang tidak punya tabel relasi", "Database khusus file multimedia"],
                answerIndex: 1,
                explanation: "Distributed DB = satu basis data, tetapi penyimpanannya tersebar di beberapa komputer/lokasi yang terhubung jaringan."
            },
            {
                question: "Concurrency control pada DBMS berfungsi untuk...",
                options: ["Membuat tabel baru otomatis", "Mengatur transaksi agar tidak saling mengganggu sehingga data tetap konsisten", "Mengubah ERD menjadi tabel", "Menghapus data duplikat tanpa normalisasi"],
                answerIndex: 1,
                explanation: "Concurrency control mengatur transaksi yang berjalan bersamaan agar tidak merusak konsistensi data."
            },
            {
                question: "Dua teknik concurrency control yang dibahas adalah...",
                options: ["JOIN dan GROUP BY", "Locking dan Timestamp", "Backup dan Restore", "Indexing dan Partitioning"],
                answerIndex: 1,
                explanation: "Materi menyebut Locking dan Timestamp sebagai metode concurrency control."
            },
            {
                question: "Deadlock adalah kondisi ketika...",
                options: ["DBMS tidak bisa membuat index", "Dua/lebih transaksi saling menunggu lock yang dipegang transaksi lain", "Query SELECT berjalan terlalu cepat", "Database tersimpan di satu lokasi"],
                answerIndex: 1,
                explanation: "Deadlock = kebuntuan karena transaksi saling menunggu lock."
            },
            {
                question: "Salah satu cara menangani deadlock adalah...",
                options: ["Membiarkan transaksi menunggu selamanya", "Rollback transaksi tertentu (deadlock recovery)", "Menghapus seluruh tabel yang terkait", "Mengganti semua query jadi SELECT"],
                answerIndex: 1,
                explanation: "Deadlock recovery bisa dilakukan dengan rollback transaksi yang deadlock untuk memulihkan kondisi database."
            },
            {
                question: "Basis data terdistribusi adalah...",
                options: ["Database yang hanya ada di satu komputer", "Database tunggal yang tersebar secara fisik di beberapa komputer/lokasi terhubung jaringan", "Database tanpa schema", "Database khusus offline"],
                answerIndex: 1,
                explanation: "Satu basis data, namun fisiknya tersebar di beberapa lokasi dan dihubungkan jaringan."
            },
            {
                question: "Yang bukan termasuk alasan penerapan basis data terdistribusi adalah...",
                options: ["Unit bisnis terdistribusi", "Berbagi data", "Sinkronisasi data", "Menghapus kebutuhan keamanan data"],
                answerIndex: 3,
                explanation: "Alasan yang disebut: unit bisnis terdistribusi, berbagi data, sinkronisasi, recovery, dll—keamanan tetap diperlukan, bukan dihapus."
            },
            {
                question: "Yang termasuk opsi pada basis data terdistribusi adalah...",
                options: ["Replikasi data, partisi horizontal, partisi vertikal", "Normalisasi 1NF, 2NF, 3NF", "SELECT, INSERT, UPDATE", "CREATE, ALTER, DROP"],
                answerIndex: 0,
                explanation: "Opsi distributed DB: replikasi data, partisi horizontal, partisi vertikal, dan kombinasi."
            },
            {
                question: "Denormalisasi dilakukan terutama untuk...",
                options: ["Mengurangi performa agar database aman", "Meningkatkan performa (misal mempercepat laporan) walau ada redundansi terkontrol", "Menghapus semua foreign key", "Mengubah data tipe int jadi varchar"],
                answerIndex: 1,
                explanation: "Denormalisasi dipakai untuk performa (misal tabel rekap), namun harus menjaga konsistensi karena ada redundansi."
            },
            {
                question: "Yang termasuk fungsi DBMS adalah...",
                options: ["Video editing dan rendering", "Menjaga integritas data dan manajemen transaksi", "Menggambar ERD otomatis tanpa data", "Mengubah OS Windows jadi Linux"],
                answerIndex: 1,
                explanation: "DBMS berfungsi menjaga integritas data, keamanan, transaksi, multi-user, dll."
            },
            {
                question: "Konsep \"Link to the data source by creating a linked table\" (Access ke MySQL) berarti...",
                options: ["Data MySQL dicopy permanen ke Access lalu putus koneksi", "Access membuat tabel terhubung ke MySQL; data tetap di MySQL, Access jadi antarmuka", "Access hanya bisa membuka file .pdf", "MySQL otomatis berubah jadi file Access"],
                answerIndex: 1,
                explanation: "Linked table = Access terhubung ke MySQL via ODBC, data tetap di MySQL, Access untuk tampilan/akses."
            },
            {
                question: "Dalam relasi 1:N (misal: Kategori 1:N Arsip), penempatan foreign key yang benar adalah...",
                options: ["FK diletakkan di sisi \"1\"", "FK diletakkan di sisi \"N\"", "FK harus dibuat tabel penghubung selalu", "FK tidak diperlukan"],
                answerIndex: 1,
                explanation: "Pada relasi 1:N, FK ditempatkan di tabel sisi N (contoh: arsip.id_kategori)."
            },
            {
                question: "Relasi M:N (misal: Arsip-Tag) diimplementasikan dengan...",
                options: ["Menambah id_tag di tabel arsip saja", "Menambah id_arsip di tabel tag saja", "Membuat tabel penghubung berisi FK dari kedua tabel", "Menggabungkan dua tabel jadi satu tabel besar"],
                answerIndex: 2,
                explanation: "Relasi M:N wajib dibuat tabel penghubung yang menyimpan FK dari kedua entitas."
            },
            {
                question: "Normalisasi paling tepat bertujuan untuk...",
                options: ["Membuat data makin banyak duplikat agar laporan cepat", "Mengurangi redundansi dan mencegah anomali (update/insert/delete)", "Menghapus kebutuhan primary key", "Menyatukan semua tabel jadi satu"],
                answerIndex: 1,
                explanation: "Normalisasi mencegah anomali (update, insert, delete) akibat data berulang."
            },
            {
                question: "Kamu ingin menampilkan kategori yang jumlah arsipnya > 5. Bagian yang tepat untuk kondisi COUNT(*) > 5 adalah...",
                options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
                answerIndex: 1,
                explanation: "HAVING dipakai untuk filter hasil agregasi (COUNT/SUM), sedangkan WHERE untuk filter baris sebelum agregasi."
            },
            {
                question: "Query yang benar untuk menampilkan nomor_surat dan nama_kategori adalah...",
                options: ["SELECT nomor_surat, nama_kategori FROM arsip, kategori;", "SELECT a.nomor_surat, k.nama_kategori FROM arsip a JOIN kategori k ON a.id_kategori = k.id_kategori;", "SELECT nomor_surat, nama_kategori FROM arsip WHERE id_kategori = nama_kategori;", "SELECT nomor_surat, nama_kategori FROM arsip GROUP BY nama_kategori;"],
                answerIndex: 1,
                explanation: "Perlu JOIN + ON untuk menghubungkan FK arsip.id_kategori dengan PK kategori.id_kategori."
            },
            {
                question: "Perintah yang termasuk DDL adalah...",
                options: ["SELECT", "INSERT", "CREATE TABLE", "UPDATE"],
                answerIndex: 2,
                explanation: "DDL mengatur struktur (CREATE/ALTER/DROP), DML mengolah data (INSERT/UPDATE/DELETE/SELECT)."
            },
            {
                question: "Concurrency control adalah...",
                options: ["Teknik menggambar ERD cepat", "Aturan mengatur transaksi agar tidak mengganggu transaksi lain sehingga data konsisten", "Cara membagi tabel menjadi partisi vertikal", "Proses menyalin database ke Access"],
                answerIndex: 1,
                explanation: "Concurrency control menjaga transaksi yang berjalan bersamaan tetap aman dan konsisten."
            },
            {
                question: "Dua teknik concurrency control yang dibahas adalah...",
                options: ["Locking dan Timestamp", "Backup dan Restore", "Index dan View", "Normalize dan Denormalize"],
                answerIndex: 0,
                explanation: "Teknik yang disebut: Locking dan Timestamp."
            },
            {
                question: "Saat terjadi deadlock, salah satu penanganan yang benar adalah...",
                options: ["Memaksa semua transaksi lanjut tanpa aturan", "Rollback transaksi tertentu (recovery)", "Menghapus seluruh database", "Mengganti semua tabel jadi 1 tabel"],
                answerIndex: 1,
                explanation: "Deadlock recovery dapat dilakukan dengan rollback transaksi yang deadlock."
            },
            {
                question: "Pada praktik menghubungkan Access ke MySQL via ODBC, driver yang dipilih adalah...",
                options: ["PostgreSQL Unicode Driver", "MySQL ODBC 8.0 ANSI Driver", "SQLite3 Driver", "Oracle ODBC Driver"],
                answerIndex: 1,
                explanation: "Contoh konfigurasi DSN menggunakan MySQL ODBC 8.0 ANSI Driver."
            },
            {
                question: "Narasi: \"Mahasiswa mendaftar menjadi anggota perpustakaan, lalu anggota dapat meminjam buku.\" Entity yang paling tepat adalah...",
                options: ["Mahasiswa, Anggota, Buku, Pinjam", "Mahasiswa, Alamat, Tahun, Judul", "Buku, Penerbit, Tahun, Warna", "Anggota, Nama, NIM, Alamat"],
                answerIndex: 0,
                explanation: "Entity = objek utama yang disimpan sebagai data berulang. Pada contoh kasus perpustakaan, entitas utamanya termasuk anggota, buku, pinjam."
            },
            {
                question: "Manakah contoh primary key yang paling tepat untuk tabel anggota?",
                options: ["nama", "alamat", "id_anggota", "fakultas"],
                answerIndex: 2,
                explanation: "Primary key harus unik untuk tiap record; id_anggota paling tepat."
            },
            {
                question: "Pada tabel pinjam, kolom yang paling tepat sebagai foreign key adalah...",
                options: ["id_pinjam -> anggota", "id_anggota -> anggota dan id_buku -> buku", "nama_anggota -> anggota", "judul_buku -> buku"],
                answerIndex: 1,
                explanation: "FK menunjuk PK di tabel lain. Contoh tabel pinjam memakai FK id_anggota dan id_buku."
            },
            {
                question: "Untuk menampilkan nama_kategori dan jumlah_arsip, query yang tepat adalah...",
                options: ["SELECT nama_kategori, COUNT(*) FROM arsip;", "SELECT k.nama_kategori, COUNT(*) AS jumlah FROM arsip a JOIN kategori k ON a.id_kategori = k.id_kategori GROUP BY k.nama_kategori;", "SELECT k.nama_kategori FROM kategori k WHERE COUNT(*) > 0;", "SELECT * FROM arsip ORDER BY COUNT(*);"],
                answerIndex: 1,
                explanation: "Perlu JOIN untuk ambil nama kategori, lalu agregasi COUNT dan GROUP BY per kategori."
            },
            {
                question: "Kamu ingin menampilkan kategori yang jumlah arsipnya lebih dari 10. Bagian SQL yang tepat adalah...",
                options: ["WHERE COUNT(*) > 10", "HAVING COUNT(*) > 10", "ORDER BY COUNT(*) > 10", "LIMIT COUNT(*) > 10"],
                answerIndex: 1,
                explanation: "Filter hasil agregasi (COUNT/SUM) harus memakai HAVING."
            },
            {
                question: "Tabel besar: KRS(nim, nama_mhs, kode_mk, nama_mk, sks). Jika nama_mk berubah, kamu harus update banyak baris KRS. Ini anomali...",
                options: ["Insertion anomaly", "Update anomaly", "Delete anomaly", "Deadlock"],
                answerIndex: 1,
                explanation: "Data nama_mk berulang di banyak baris -> perubahan harus update banyak tempat -> update anomaly."
            },
            {
                question: "Denormalisasi biasanya dilakukan saat...",
                options: ["Data belum konsisten dan ingin makin banyak duplikasi", "Ingin meningkatkan performa query laporan/rekap, meski ada redundansi terkontrol", "Ingin menghilangkan semua JOIN agar data aman", "Ingin menghapus primary key agar insert cepat"],
                answerIndex: 1,
                explanation: "Denormalisasi dipakai untuk performa (misal membuat tabel rekap), tapi harus menjaga konsistensi data."
            },
            {
                question: "Durability berarti...",
                options: ["Semua langkah transaksi harus sukses semua atau batal semua", "Setelah COMMIT, hasil transaksi tetap tersimpan walau sistem gagal", "Transaksi tidak boleh bersamaan", "Setiap transaksi harus punya lock"],
                answerIndex: 1,
                explanation: "Durability: hasil transaksi yang sudah commit tidak hilang walau sistem crash (bagian ACID)."
            },
            {
                question: "Deadlock terjadi ketika...",
                options: ["Query SELECT tanpa WHERE", "Dua transaksi saling menunggu lock yang dipegang transaksi lain", "Database punya banyak tabel", "Ada tabel yang belum dinormalisasi"],
                answerIndex: 1,
                explanation: "Deadlock = kebuntuan karena transaksi saling menunggu lock."
            },
            {
                question: "Yang termasuk opsi/strategi pada basis data terdistribusi adalah...",
                options: ["Replikasi data dan partisi (horizontal/vertikal)", "Normalisasi 1NF-3NF", "CRUD dan ACID", "DDL dan DML"],
                answerIndex: 0,
                explanation: "Strategi distributed DB mencakup replikasi dan partisi (horizontal/vertikal) serta kombinasi."
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

            elements.question.textContent = current.question;
            elements.options.innerHTML = "";

            current.options.forEach((text, idx) => {
                const option = document.createElement("button");
                option.type = "button";
                option.className = "option";
                option.innerHTML = `<span>${String.fromCharCode(65 + idx)}</span> ${text}`;
                option.addEventListener("click", () => selectOption(idx));
                elements.options.appendChild(option);
            });

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
