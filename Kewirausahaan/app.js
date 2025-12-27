const quizData = [
            {
                question: "Dalam konteks digipreneur di era transformasi digital, pernyataan yang paling tepat adalah...",
                options: ["Keberhasilan usaha digital terutama ditentukan oleh modal besar sejak awal", "Digipreneur fokus memanfaatkan teknologi dan data untuk menciptakan nilai dan memenangkan persaingan", "Digipreneur hanya cocok untuk bisnis startup, bukan UMKM", "Teknologi digital berperan kecil karena keputusan bisnis tetap berdasarkan intuisi"],
                answerIndex: 1,
                explanation: "Digipreneur menekankan pemanfaatan teknologi (mis. AI, platform digital) dan data untuk meningkatkan nilai, efisiensi, dan daya saing bisnis. Ini sejalan dengan transformasi digital yang membuat bisnis lebih data-driven."
            },
            {
                question: "Contoh penerapan Big Data yang paling relevan untuk meningkatkan performa e-commerce adalah...",
                options: ["Menambah admin chat agar respon lebih cepat secara manual", "Menggunakan data perilaku pengguna untuk personalisasi rekomendasi produk dan promosi", "Mengurangi metode pembayaran agar operasional lebih mudah", "Membatasi pilihan produk agar stok sederhana"],
                answerIndex: 1,
                explanation: "Big Data dipakai untuk memahami pola dan perilaku konsumen, lalu dipakai untuk rekomendasi produk, promosi yang relevan, dan peningkatan konversi."
            },
            {
                question: "Dalam karakteristik kunci wirausahawan menghadapi era digital, karakteristik yang paling tepat menggambarkan kemampuan melihat kebutuhan jangka panjang dan mengarahkannya menjadi inovasi adalah...",
                options: ["Empati", "Visioner", "Supel", "Disiplin diri tinggi"],
                answerIndex: 1,
                explanation: "Visioner berarti mampu melihat arah masa depan dan menerjemahkan kebutuhan pasar ke strategi atau produk yang relevan."
            },
            {
                question: "Prinsip Bird-in-Hand dalam effectuation menekankan bahwa memulai usaha sebaiknya berangkat dari...",
                options: ["Perkiraan omzet dan target pasar nasional", "Sumber daya yang dimiliki: siapa saya, apa yang bisa saya lakukan, dan siapa yang saya kenal", "Rencana bisnis 5 tahun yang sangat rinci", "Modal investor agar risiko minimal"],
                answerIndex: 1,
                explanation: "Bird-in-Hand menekankan memulai dari sumber daya yang sudah ada (identitas, kemampuan, jejaring) untuk bergerak cepat tanpa menunggu kondisi ideal."
            },
            {
                question: "Dalam konteks effectuation, Affordable Loss paling tepat berarti...",
                options: ["Menargetkan keuntungan maksimal walau risikonya besar", "Menentukan batas kerugian yang bisa ditoleransi sebelum menjalankan keputusan usaha", "Menghindari risiko sepenuhnya dengan menunda usaha", "Memastikan semua keputusan berbasis prediksi masa depan yang akurat"],
                answerIndex: 1,
                explanation: "Affordable Loss fokus pada pengelolaan risiko: wirausaha menentukan batas rugi (uang, waktu, tenaga) yang masih aman sehingga tetap bisa bangkit."
            },
            {
                question: "Konsep Flow dalam memulai usaha paling kuat terjadi saat...",
                options: ["Tantangan lebih rendah daripada kemampuan sehingga cepat selesai", "Tantangan terlalu tinggi sehingga memicu stres berkepanjangan", "Tantangan seimbang dengan kemampuan, tujuan jelas, dan ada umpan balik cepat", "Aktivitas dilakukan sambil multitasking agar hasil lebih banyak"],
                answerIndex: 2,
                explanation: "Flow terjadi saat challenge-skill balance tercapai, ditambah tujuan jelas dan feedback cepat. Kondisi ini membuat pelaku usaha fokus dan konsisten."
            },
            {
                question: "Dalam Design Thinking, tahap yang paling tepat untuk memahami kebutuhan pengguna melalui observasi dan wawancara adalah...",
                options: ["Ideate", "Empathize", "Prototype", "Test"],
                answerIndex: 1,
                explanation: "Tahap Empathize fokus memahami pengguna lewat observasi, wawancara, dan insight lapangan sebagai dasar solusi yang tepat."
            },
            {
                question: "Dalam Value Proposition Canvas, bagian Customer Pains paling tepat berisi...",
                options: ["Daftar fitur produk yang akan dibuat", "Masalah, hambatan, dan risiko yang membuat pelanggan tidak nyaman atau kesulitan", "Strategi promosi yang akan dilakukan", "Struktur biaya produksi usaha"],
                answerIndex: 1,
                explanation: "Customer Pains adalah rasa sakit pelanggan: hambatan, kekhawatiran, dan hal yang mengganggu ketika mereka mencoba menyelesaikan pekerjaannya (jobs)."
            },
            {
                question: "Dalam Business Model Canvas, blok yang menjelaskan uang masuk dari mana adalah...",
                options: ["Key Activities", "Revenue Streams", "Channels", "Key Partners"],
                answerIndex: 1,
                explanation: "Revenue Streams menjelaskan sumber pendapatan: jual putus, langganan, komisi transaksi, iklan, dan lain-lain."
            },
            {
                question: "Dalam pemasaran digital, strategi pull dan push dibedakan terutama dari...",
                options: ["Pull: perusahaan mendorong iklan langsung; Push: konsumen mencari sendiri", "Pull: konsumen mencari atau mengambil info sendiri; Push: perusahaan mendorong info ke konsumen secara aktif", "Pull: selalu berbayar; Push: selalu gratis", "Pull: hanya offline; Push: hanya online"],
                answerIndex: 1,
                explanation: "Pull mengandalkan konsumen mencari informasi (website atau SEO), sedangkan Push mendorong pesan ke konsumen (email, SMS, iklan bertarget) dan punya isu privasi serta mekanisme pengiriman."
            },
            {
                question: "Dalam konsep AIDA pada pemasaran digital, tahap ketika konsumen mulai mencari informasi produk lewat Google atau media sosial setelah sadar ada produk adalah...",
                options: ["Action", "Desire", "Interest", "Awareness"],
                answerIndex: 2,
                explanation: "Pada tahap Interest, konsumen yang sudah sadar (awareness) mulai tertarik dan mencari info lebih lanjut lewat mesin pencari dan jejaring sosial."
            },
            {
                question: "Pernyataan yang paling tepat tentang strategi push dalam pemasaran digital adalah...",
                options: ["Mengandalkan konsumen datang sendiri melalui SEO", "Pasif karena bergantung pada mesin pencari", "Tidak bisa menargetkan segmen tertentu", "Informasi dipromosikan aktif ke konsumen (mis. email, SMS, iklan) dan berpotensi menimbulkan isu privasi"],
                answerIndex: 3,
                explanation: "Push berarti pesan didorong aktif ke konsumen, bisa sangat tertarget dan terukur, tetapi ada kekurangan seperti pemblokiran pesan dan isu privasi."
            },
            {
                question: "Dalam Brand Awareness, tingkat tertinggi ketika merek pertama kali muncul di pikiran konsumen untuk kategori produk tertentu disebut...",
                options: ["Top of Mind", "Brand Recognition", "Brand Recall", "Unaware Brand"],
                answerIndex: 0,
                explanation: "Urutan awareness dari rendah ke tinggi adalah: unaware, recognition, recall, lalu top of mind (merek pertama yang teringat)."
            },
            {
                question: "Perbedaan paling tepat antara segmentasi pasar dan pasar sasaran (targeting) adalah...",
                options: ["Segmentasi memilih satu segmen terbaik, targeting membagi pasar jadi kelompok", "Segmentasi dan targeting sama persis", "Segmentasi membagi pasar ke kelompok-kelompok, targeting memilih satu atau lebih segmen untuk dilayani", "Segmentasi hanya untuk pasar offline, targeting untuk online"],
                answerIndex: 2,
                explanation: "Segmentasi adalah mengelompokkan pasar berdasarkan kebutuhan atau karakteristik; targeting memilih segmen yang paling cocok untuk difokuskan."
            },
            {
                question: "Dalam Blue Ocean Strategy, tujuan utama strategi adalah...",
                options: ["Membuat persaingan menjadi tidak relevan dengan menciptakan ruang pasar baru", "Menang perang harga dengan diskon besar-besaran", "Meniru strategi kompetitor yang sudah sukses", "Memperbanyak cabang offline untuk menguasai wilayah"],
                answerIndex: 0,
                explanation: "Blue Ocean menekankan penciptaan nilai baru dan ruang pasar baru sehingga kompetisi langsung (red ocean) jadi tidak terlalu relevan."
            },
            {
                question: "Tahap perkembangan tim Tuckman ketika konflik mulai muncul karena perbedaan pendapat, ego, dan perebutan peran adalah...",
                options: ["Performing", "Storming", "Forming", "Norming"],
                answerIndex: 1,
                explanation: "Urutannya forming, storming, norming, performing, adjourning. Storming adalah fase konflik yang wajar sebelum tim solid."
            },
            {
                question: "Konsep Shared Leadership dalam kepemimpinan usaha di era digital paling tepat berarti...",
                options: ["Semua keputusan hanya oleh leader utama agar cepat", "Kepemimpinan dibagi: anggota tim juga diberi ruang mengambil inisiatif dan memimpin sesuai peran", "Tidak perlu pemimpin karena semua setara", "Kepemimpinan hanya dijalankan saat krisis"],
                answerIndex: 1,
                explanation: "Shared leadership mendorong kolaborasi dan inisiatif dari anggota tim, sehingga inovasi dan rasa memiliki meningkat dan cocok untuk dinamika era digital."
            },
            {
                question: "Dalam rencana penjualan (sales plan), bagian yang berisi penentuan segmen bawah, menengah, atas beserta kemasan dan harga termasuk komponen...",
                options: ["Anggaran biaya", "Sistem promosi", "Segmen pasar atau kelas pengguna", "Tenaga penjual"],
                answerIndex: 2,
                explanation: "Sales plan memuat penentuan segmen (low, middle, high end), termasuk harga dan kemasan untuk tiap segmen."
            },
            {
                question: "Dalam pemasaran internet via email, aturan yang benar menurut materi adalah...",
                options: ["Subjek email boleh menipu asal open rate tinggi", "Tidak perlu mencantumkan identitas bisnis", "Boleh memakai header palsu agar tidak terfilter spam", "Baris subjek harus mencerminkan isi pesan dan identitas bisnis harus jelas"],
                answerIndex: 3,
                explanation: "Materi menekankan etika dan aturan email marketing: tidak menipu header atau subjek, identitas bisnis akurat, dan subjek mencerminkan isi."
            },
            {
                question: "Dalam tingkatan produk (Kotler), manfaat sebenarnya yang dicari konsumen dari produk disebut...",
                options: ["Expected product", "Augmented product", "Generic product", "Core benefit"],
                answerIndex: 3,
                explanation: "Tingkatan produk mencakup core benefit, generic, expected, augmented, dan potential. Core benefit adalah alasan utama konsumen membeli."
            },
            {
                question: "Dalam Value Proposition Canvas, bagian Gain Creators paling tepat berisi...",
                options: ["Cara produk menambah manfaat atau hasil positif yang diharapkan pelanggan", "Daftar hambatan dan risiko yang dialami pelanggan", "Daftar kompetitor dan strategi perang harga", "Rincian biaya operasional bisnis per bulan"],
                answerIndex: 0,
                explanation: "Gain Creators menjelaskan bagaimana produk atau layanan menciptakan hasil positif (lebih cepat, lebih mudah, lebih percaya diri, lebih hemat) yang diinginkan pelanggan."
            },
            {
                question: "Dalam Design Thinking, tahap yang bertujuan menghasilkan banyak ide solusi sebelum dipilih dan dipersempit adalah...",
                options: ["Define", "Test", "Ideate", "Prototype"],
                answerIndex: 2,
                explanation: "Ideate adalah tahap menghasilkan banyak ide (divergen) agar pilihan solusi kaya, lalu dipilih untuk dibuat prototipe."
            },
            {
                question: "Prinsip Crazy Quilt (Effectuation) paling tepat diterapkan ketika wirausaha...",
                options: ["Mengutamakan rencana prediksi pasar 5 tahun", "Membangun kemitraan atau kolaborasi untuk menambah sumber daya dan mengurangi ketidakpastian", "Menunda usaha sampai modal besar terkumpul", "Menghindari pihak luar agar ide tidak dicuri"],
                answerIndex: 1,
                explanation: "Crazy Quilt menekankan kolaborasi dengan partner awal untuk memperluas peluang, akses pasar, dan sumber daya."
            },
            {
                question: "Dalam Business Model Canvas, blok yang berisi aktivitas utama yang wajib dilakukan agar value proposition sampai dan bisnis berjalan adalah...",
                options: ["Cost Structure", "Customer Relationships", "Key Activities", "Key Resources"],
                answerIndex: 2,
                explanation: "Key Activities adalah pekerjaan inti (misalnya produksi, pengembangan platform, delivery, dan customer support) agar bisnis beroperasi dan menghasilkan nilai."
            },
            {
                question: "Model bisnis subscription paling tepat ditandai dengan...",
                options: ["Pendapatan berasal dari komisi tiap transaksi jual-beli", "Pendapatan berasal dari iklan yang dilihat pengguna", "Pendapatan dari pembayaran rutin bulanan atau tahunan yang cenderung stabil", "Pendapatan hanya dari penjualan sekali bayar tanpa layanan lanjutan"],
                answerIndex: 2,
                explanation: "Subscription berarti pelanggan membayar berulang (bulanan atau tahunan), sehingga arus kas lebih stabil dan mudah diprediksi dibanding one-time purchase."
            },
            {
                question: "Dalam materi pemasaran digital, salah satu kelemahan utama strategi pull adalah...",
                options: ["Tidak ada personalisasi untuk menjaga pengunjung datang kembali dan cenderung pasif mengandalkan mesin pencari", "Selalu menimbulkan isu privasi karena pesan dipaksa masuk ke konsumen", "Tidak bisa digunakan untuk produk atau jasa", "Biayanya selalu lebih mahal daripada push"],
                answerIndex: 0,
                explanation: "Pull mengandalkan konsumen mencari sendiri (SEO atau website). Kelemahannya bisa pasif, personalisasi terbatas, dan pengukuran hasil lebih menantang."
            },
            {
                question: "Dalam ekuitas merek (Aaker), elemen yang menunjukkan keterikatan dan komitmen konsumen untuk tetap memilih merek walau banyak alternatif adalah...",
                options: ["Brand Association", "Brand Awareness", "Brand Loyalty", "Perceived Quality"],
                answerIndex: 2,
                explanation: "Brand Loyalty adalah indikator loyalitas dan komitmen konsumen terhadap merek sehingga tidak mudah pindah ke pesaing."
            },
            {
                question: "Dalam penentuan posisi (positioning), langkah pertama yang tepat adalah...",
                options: ["Mengkomunikasikan posisi yang dipilih lewat seluruh bauran pemasaran", "Mengidentifikasi keunggulan bersaing yang bisa ditawarkan ke konsumen dibanding pesaing", "Menurunkan harga serendah mungkin", "Memilih sebanyak mungkin diferensiasi tanpa pertimbangan biaya"],
                answerIndex: 1,
                explanation: "Tahap awal positioning adalah mengidentifikasi keunggulan bersaing (diferensiasi produk, jasa, personel, atau citra) yang bernilai bagi konsumen."
            },
            {
                question: "Dalam pembentukan tim efektif, kesalahan yang sering terjadi saat membangun tim startup atau bisnis baru adalah...",
                options: ["Membagi peran kerja secara jelas sejak awal", "Melakukan evaluasi kinerja secara berkala", "Asal merekrut teman atau keluarga meskipun kompetensinya tidak sesuai kebutuhan bisnis", "Menetapkan target dan standar kerja tim"],
                answerIndex: 2,
                explanation: "Kesalahan umum adalah merekrut berdasarkan kedekatan, bukan kompetensi. Dampaknya eksekusi lemah, konflik tinggi, dan sulit scale."
            },
            {
                question: "Dalam Blue Ocean Strategy, tindakan yang paling mencerminkan keluar dari red ocean adalah...",
                options: ["Ikut perang harga karena pasar sudah ramai", "Meniru fitur pesaing lalu menambahkan diskon besar", "Fokus pada segmen yang sama dengan semua kompetitor", "Menciptakan nilai unik dan ruang pasar baru sehingga persaingan langsung berkurang"],
                answerIndex: 3,
                explanation: "Blue Ocean berfokus pada value innovation: menciptakan ruang pasar baru atau penawaran unik agar tidak terjebak kompetisi berdarah."
            },
            {
                question: "Dalam effectuation, prinsip Lemonade paling tepat menggambarkan wirausaha yang...",
                options: ["Menolak perubahan agar rencana awal tidak terganggu", "Menunggu kondisi ideal baru mulai usaha", "Mengubah kejadian tak terduga atau masalah menjadi peluang inovasi baru", "Fokus pada prediksi pasar yang presisi sebelum bertindak"],
                answerIndex: 2,
                explanation: "Prinsip Lemonade menekankan kemampuan mengolah ketidakpastian dan masalah menjadi peluang, misalnya mengubah feedback negatif jadi fitur atau layanan baru."
            },
            {
                question: "Dalam Design Thinking, tahap yang paling tepat untuk merumuskan masalah secara tajam berdasarkan hasil empati (insight pengguna) adalah...",
                options: ["Define", "Prototype", "Test", "Ideate"],
                answerIndex: 0,
                explanation: "Setelah memahami pengguna (Empathize), masuk tahap Define untuk menyusun problem statement yang jelas agar solusi tidak melenceng."
            },
            {
                question: "Dalam Value Proposition Canvas, bagian yang berisi daftar fitur atau layanan yang kamu tawarkan adalah...",
                options: ["Pain Relievers", "Products & Services", "Customer Jobs", "Gains"],
                answerIndex: 1,
                explanation: "Products & Services adalah daftar produk atau layanan yang kamu sediakan. Ini sisi apa yang kamu jual."
            },
            {
                question: "Dalam konsep tingkatan produk (Kotler), produk dasar minimal yang berfungsi disebut...",
                options: ["Expected product", "Augmented product", "Potential product", "Generic product"],
                answerIndex: 3,
                explanation: "Generic product adalah bentuk minimal agar produk berfungsi. Berbeda dengan expected dan augmented."
            },
            {
                question: "Salah satu cara meningkatkan brand awareness menurut materi adalah...",
                options: ["Menggunakan pesan yang mudah diingat dan berbeda dari pesaing, ditambah simbol atau slogan menarik", "Menghindari slogan agar konsumen fokus pada harga", "Menyembunyikan identitas merek agar terlihat misterius", "Mengubah nama merek setiap bulan agar selalu baru"],
                answerIndex: 0,
                explanation: "Awareness dapat ditingkatkan dengan pesan yang mudah diingat dan berbeda, penggunaan simbol atau slogan, serta strategi lainnya seperti perluasan produk."
            },
            {
                question: "Dalam rencana penjualan, komponen yang menjelaskan alur penyaluran produk seperti produsen-distributor-agen-eceran-konsumen adalah...",
                options: ["Tenaga penjual", "Sistem distribusi", "Sistem promosi", "Pangsa pasar"],
                answerIndex: 1,
                explanation: "Sistem distribusi menjelaskan jalur penyaluran produk atau layanan sampai ke konsumen."
            },
            {
                question: "Dalam modul pemasaran digital, salah satu kekurangan strategi push adalah...",
                options: ["Tidak bisa ditargetkan sama sekali", "Selalu gratis tanpa biaya", "Tidak bisa dilacak performanya", "Pesan dapat dicegah konsumen (blocked atau ignored) dan muncul isu privasi"],
                answerIndex: 3,
                explanation: "Push butuh mekanisme pengiriman (email, SMS, ads), bisa ditolak atau diblok, dan berpotensi menimbulkan isu privasi."
            },
            {
                question: "Dalam Business Model Canvas, blok yang paling tepat untuk menjawab bagaimana bisnis menjaga hubungan dan interaksi dengan pelanggan adalah...",
                options: ["Customer Relationships", "Channels", "Key Partners", "Cost Structure"],
                answerIndex: 0,
                explanation: "Customer Relationships menjelaskan tipe relasi, misalnya personal assistance, self-service, komunitas, atau automated service."
            },
            {
                question: "Dalam pembentukan tim efektif, fase tim di mana pola kerja mulai stabil, aturan main disepakati, dan konflik mulai mereda adalah...",
                options: ["Forming", "Storming", "Norming", "Adjourning"],
                answerIndex: 2,
                explanation: "Pada fase Norming, tim mulai punya norma, komunikasi membaik, dan kerja sama mulai solid sebelum masuk Performing."
            },
            {
                question: "Menurut materi membangun merek kuat di era digital (Kartajaya), salah satu pilar penting adalah omni-channel marketing, yang paling tepat berarti...",
                options: ["Fokus hanya online karena offline sudah tidak relevan", "Mengintegrasikan online dan offline melalui berbagai media (termasuk mobile) agar pengalaman konsumen konsisten", "Mengurangi channel agar operasional lebih sederhana walau konsumen kesulitan", "Mengandalkan satu platform saja untuk semua target konsumen"],
                answerIndex: 1,
                explanation: "Omni-channel berarti integrasi kanal online dan offline sehingga perjalanan konsumen mulus dan konsisten di berbagai media, termasuk mobile commerce."
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






