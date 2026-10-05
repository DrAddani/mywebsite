/*
 * Discoveries, Episode 1: CRISPR. Quick-glance story (EN + AR), data only.
 * Format (Mo, 10-05-2026): "a quick glance summary", 5 slides, then "for more, watch the YouTube episode".
 *   One picture, one big line, one short sentence per slide. Each slide's source tag links to its paper (DOI),
 *   so there is no separate Papers screen.
 * Source script: 01 Scientific Content/Episode Scripts/Episode 01 - CRISPR/10-04-2026 Episode 1 CRISPR Script EN Final v6.md
 *                (= video Final v8 English); Arabic wording follows Script AR v5 in standard Arabic.
 * Fact check:    Episodes/Episode 01 - CRISPR/ Fact Check v2-v8 (all PASSED) + Arabic Fact Check v1-v3.
 * Written:       10-05-2026. Replaces the 16-screen version of the same day (archived in ~/Desktop/Archive/10-05-2026/).
 *                Zero "mistake" / "wrong letter" (EN + AR). Quotes word for word in English; Arabic quote = translation.
 * Image licences: ../Sources/10-01-2026 Website Episode 1 Image Licenses.csv
 */
window.STORY = {
  slug: "episode-01-crispr",
  number: 1,
  title: { en: "CRISPR", ar: "كريسبر" },
  subtitle: { en: "Some illnesses are written into your DNA", ar: "بعض الأمراض مكتوبة في حمضك النووي" },
  series: { en: "Discoveries", ar: "اكتشافات علمية" },
  theme: { paper: "#EEE8DA", paper2: "#E2D9C5", card: "#FBF8F1", ink: "#1F1D1A", ink2: "#4A4640", hairline: "#8C8578", accent: "#E4572E" },
  youtube: { en: null, ar: null },

  ui: {
    en: { endWatch: "For the full story, watch the episode on YouTube", endSoon: "For the full story: the episode is coming soon to YouTube" },
    ar: { endWatch: "للقصة كاملة، شاهد الحلقة على يوتيوب", endSoon: "للقصة كاملة: الحلقة قريبًا على يوتيوب" }
  },

  chapters: [
    { id: "written", label: { en: "Written in", ar: "مكتوب في داخلك" } },
    { id: "tool", label: { en: "The tool", ar: "الأداة" } },
    { id: "victoria", label: { en: "Victoria", ar: "فيكتوريا" } },
    { id: "kj", label: { en: "KJ", ar: "كي جي" } },
    { id: "now", label: { en: "Seven years later", ar: "بعد سبع سنوات" } }
  ],

  scenes: [
    {
      id: "s1", chapter: "written", layout: "title",
      kicker: { en: "Discoveries · Episode One", ar: "اكتشافات علمية · الحلقة الأولى" },
      headline: { en: "Some illnesses are written into your DNA.", ar: "بعض الأمراض مكتوبة في حمضك النووي." },
      body: {
        en: "A pill can't rewrite DNA. Now, we're learning to <mark>edit what's written</mark>.",
        ar: "لا يستطيع قرصُ دواء أن يعيد كتابة الحمض النووي. واليوم، نتعلّم كيف <mark>نعدّل ما هو مكتوب</mark>."
      }
    },
    {
      id: "s2", chapter: "tool", layout: "image",
      kicker: { en: "The tool · 2012", ar: "الأداة · 2012" },
      headline: { en: "A “find” button, attached to tiny scissors", ar: "زرّ «بحث»، متصلٌ بمقصٍّ صغير" },
      body: {
        en: "Borrowed from bacteria, it can be reprogrammed to cut <mark>almost any DNA</mark>.",
        ar: "استعرناه من البكتيريا، ويمكن إعادة برمجته ليقصّ <mark>أيَّ حمض نووي تقريبًا</mark>."
      },
      image: "assets/ep01/scissors.webp",
      imageAlt: { en: "Paper-cut pair of scissors", ar: "مقصّ من الورق المقصوص" },
      stamp: { en: "NOBEL PRIZE IN CHEMISTRY · 2020", ar: "نوبل في الكيمياء · 2020" },
      cite: { en: "Jinek et al., Science · 2012", ar: "مجلة ساينس · 2012 · Jinek وزملاؤه" },
      doi: "10.1126/science.1225829"
    },
    {
      id: "s3", chapter: "victoria", layout: "stamp",
      kicker: { en: "2019 · Victoria Gray, sickle cell disease", ar: "2019 · فيكتوريا جراي، فقر الدم المنجلي" },
      headline: { en: "The first CRISPR medicine", ar: "أول دواء بكريسبر" },
      body: {
        en: "In 2023, it became <mark>Casgevy</mark>.",
        ar: "وفي 2023، أصبح دواءً اسمه <mark>كاسجيفي</mark>."
      },
      stat: { value: 29, of: 30, suffix: "", label: { en: "patients went a year or more without a severe crisis", ar: "مريضًا أكملوا عامًا أو أكثر دون نوبة شديدة" } },
      stamp: { en: "APPROVED · 2023", ar: "معتمد · 2023" },
      image: "assets/ep01/syringe.webp",
      imageAlt: { en: "Paper-cut syringe: her edited cells go back in", ar: "حقنة من الورق المقصوص: خلاياها المعدّلة تعود إلى جسمها" },
      cite: { en: "Frangoul et al., NEJM · 2024", ar: "مجلة NEJM · 2024 · Frangoul وزملاؤه" },
      doi: "10.1056/NEJMoa2309676"
    },
    {
      id: "s4", chapter: "kj", layout: "image",
      kicker: { en: "2025 · Baby KJ", ar: "2025 · الطفل كي جي" },
      headline: { en: "A medicine built for him alone", ar: "دواءٌ صُنع له وحده" },
      body: {
        en: "A newer CRISPR changed <mark>a single letter</mark> in his liver. After more than 300 days in the hospital, he went home.",
        ar: "نوعٌ أحدث من كريسبر غيّر <mark>حرفًا واحدًا</mark> في كبده. وبعد أكثر من 300 يوم في المستشفى، عاد إلى بيته."
      },
      image: "assets/ep01/pencil-eraser.webp",
      imageAlt: { en: "Paper-cut pencil with an eraser: changing a single letter", ar: "قلم رصاص بممحاة من الورق المقصوص: تغيير حرف واحد" },
      stamp: { en: "EXPERIMENTAL · 1 PATIENT", ar: "تجريبي · مريض واحد" },
      cite: { en: "Musunuru et al., NEJM · 2025", ar: "مجلة NEJM · 2025 · Musunuru وزملاؤه" },
      doi: "10.1056/NEJMoa2504747"
    },
    {
      id: "s5", chapter: "now", layout: "quote",
      kicker: { en: "Seven years later", ar: "بعد سبع سنوات" },
      headline: { en: "Victoria hasn't had a single sickle-cell crisis", ar: "لم تُصب فيكتوريا بأي نوبة منجلية" },
      body: {
        en: "Hard questions remain: a price of about <mark>$2.2 million</mark>, and risks we're still learning.",
        ar: "وتبقى أسئلة صعبة: سعرٌ يبلغ نحو <mark>2.2 مليون دولار</mark>، ومخاطر ما زلنا نتعلّمها."
      },
      quote: {
        text: { en: "I no longer have that fear of dying…", ar: "لم يعد عندي ذلك الخوف من الموت…" },
        who: { en: "Victoria Gray · NPR, 2023", ar: "فيكتوريا جراي · إذاعة NPR، 2023" }
      },
      image: "assets/ep01/new-page.webp",
      imageAlt: { en: "Paper-cut blank page: the next chapter", ar: "صفحة من الورق المقصوص: الفصل القادم" }
    }
  ],

  papers: []
};
