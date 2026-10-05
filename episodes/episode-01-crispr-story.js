/*
 * Discoveries, Episode 1: CRISPR. "Easy read" 5-slide summary (EN + AR), data only.
 * Format (Mo, 10-05-2026): readable by someone who has NOT watched the episode. Each slide = one main point:
 *   one picture, one big line (`big`), one or two plain sentences (`small`), optional source link (`source.doi`).
 *   One font per language; no stamps, quotes, highlights or chapter labels.
 * Source script: 01 Scientific Content/Episode Scripts/Episode 01 - CRISPR/10-04-2026 Episode 1 CRISPR Script EN Final v6.md
 *                (= video Final v8 English); Arabic follows Script AR v5, written in standard Arabic.
 * Fact check:    Episodes/Episode 01 - CRISPR/ Fact Check v2-v8 (all PASSED) + Arabic Fact Check v1-v3.
 *                Kept: "nearly every cell", "almost any", Casgevy edits a switch (does NOT fix the mutation),
 *                "list price" (not "costs"), "seven years" stated as fact (not as Victoria's words), no "cure".
 * Written:       10-05-2026. Replaces the busier 5-slide version of the same day
 *                (~/Desktop/Archive/10-05-2026/10-05-2026 Episode 1 CRISPR Web Story 5 Slides Busy Look.js).
 *                Zero "mistake" / "wrong letter" (EN + AR).
 * Image licences: ../Sources/10-01-2026 Website Episode 1 Image Licenses.csv
 */
window.STORY = {
  slug: "episode-01-crispr",
  number: 1,
  title: { en: "CRISPR", ar: "كريسبر" },
  series: { en: "Discoveries", ar: "اكتشافات علمية" },
  theme: { bg: "#F4EFE4", ink: "#1F1D1A", ink2: "#4A4640", accent: "#E4572E" },
  youtube: { en: null, ar: null },

  scenes: [
    {
      id: "s1",
      image: "assets/ep01/dna-book.webp",
      imageAlt: { en: "An open book: DNA is the body's instruction manual", ar: "كتاب مفتوح: الحمض النووي هو كتاب تعليمات الجسم" },
      big: { en: "Some illnesses are written into your DNA.", ar: "بعض الأمراض مكتوبة في حمضك النووي." },
      small: {
        en: "DNA is the instruction manual inside nearly every cell. Sometimes <b>one mutated letter</b> is enough to cause a disease.",
        ar: "الحمض النووي هو كتاب التعليمات داخل كل خلية تقريبًا. وأحيانًا تكفي <b>طفرة في حرف واحد</b> لتسبّب مرضًا."
      }
    },
    {
      id: "s2",
      image: "assets/ep01/scissors.webp",
      imageAlt: { en: "A pair of scissors: CRISPR cuts DNA", ar: "مقصّ: كريسبر يقصّ الحمض النووي" },
      big: { en: "CRISPR is a tool that can edit DNA.", ar: "كريسبر أداة تستطيع تعديل الحمض النووي." },
      small: {
        en: "It works like a “find” button attached to tiny scissors: it can be set to find <b>almost any spot</b> in DNA and cut it. Scientists borrowed it from bacteria.",
        ar: "تعمل مثل زرّ «البحث» في الكمبيوتر متصلًا بمقصٍّ صغير: يمكن برمجتها لتجد <b>أيّ موضع تقريبًا</b> في الحمض النووي وتقصّه. وقد استعارها العلماء من البكتيريا."
      },
      source: { label: { en: "Science, 2012", ar: "مجلة ساينس، 2012" }, doi: "10.1126/science.1225829" }
    },
    {
      id: "s3",
      image: "assets/ep01/sickle-cells-nhlbi.webp",
      imageAlt: { en: "Round red blood cells (top) and curved sickle cells (bottom)", ar: "خلايا دم حمراء مستديرة (أعلى) وخلايا منجلية مقوّسة (أسفل)" },
      big: { en: "In 2023, it became a real medicine.", ar: "وفي 2023، أصبح دواءً حقيقيًا." },
      small: {
        en: "Casgevy treats sickle cell disease by editing the patient's own blood-making cells. In the main study, <b>29 of 30 patients</b> went a year or more without a severe pain crisis.",
        ar: "يعالج دواء كاسجيفي فقر الدم المنجلي بتعديل الخلايا التي تصنع الدم لدى المريض نفسه. وفي الدراسة الرئيسية، أكمل <b>29 من أصل 30 مريضًا</b> عامًا أو أكثر دون نوبة ألم شديدة."
      },
      source: { label: { en: "NEJM, 2024", ar: "مجلة NEJM، 2024" }, doi: "10.1056/NEJMoa2309676" }
    },
    {
      id: "s4",
      image: "assets/ep01/hospital-crib.webp",
      imageAlt: { en: "A hospital crib", ar: "سرير أطفال في المستشفى" },
      big: { en: "In 2025, a medicine was made for just one baby.", ar: "وفي 2025، صُنع دواءٌ لطفلٍ واحد فقط." },
      small: {
        en: "Baby KJ's liver couldn't clear a waste called ammonia. A newer CRISPR changed <b>a single letter</b> in his liver, and after more than 300 days in the hospital, he went home.",
        ar: "لم يكن كبد الطفل كي جي قادرًا على التخلّص من فضلةٍ اسمها الأمونيا. فغيّر نوعٌ أحدث من كريسبر <b>حرفًا واحدًا</b> في كبده، وبعد أكثر من 300 يوم في المستشفى عاد إلى بيته."
      },
      source: { label: { en: "NEJM, 2025", ar: "مجلة NEJM، 2025" }, doi: "10.1056/NEJMoa2504747" }
    },
    {
      id: "s5",
      image: "assets/ep01/price-tag.webp",
      imageAlt: { en: "A blank price tag", ar: "بطاقة سعر فارغة" },
      big: { en: "Big hope, and hard questions.", ar: "أملٌ كبير، وأسئلةٌ صعبة." },
      small: {
        en: "Victoria Gray, one of the first patients treated, hasn't had a sickle-cell crisis in seven years. But the U.S. list price is <b>about $2.2 million</b>, and edits in the wrong place can't be ruled out.",
        ar: "فيكتوريا جراي، من أوائل من تلقّوا هذا العلاج، لم تُصب بأي نوبة منجلية منذ سبع سنوات. لكن سعره المعلن في أمريكا <b>نحو 2.2 مليون دولار</b>، ولا يمكن استبعاد حدوث تعديلات في غير مكانها."
      }
    }
  ]
};
