/*
 * Discoveries, Episode 1: CRISPR. Story data (EN + AR) for the "Style A" story page (episode-01-crispr.html).
 * Look (Mo, 10-06-2026): carousel Style A "Tomorrow Poster": poster paper, navy + tomato, condensed headlines,
 *   the thumbnail's painted art on the hero and the watch screen, one paper-cut picture per screen.
 * Format: 5 takeaway screens (one picture, one big line, one short sentence; the ethics screen has three short
 *   questions) + a watch screen. Text = carousel story-v3.js / story page concept v2, word for word, minus the
 *   2023 sentence on "How it works" (Mo, 10-06-2026).
 * Fact sources per line: Previews/10-06-2026 Story Page Concept v3 Style A/10-06-2026 Story Concept v3 Content Sources.md
 *   (Script EN Final v6, Fact Check v2-v8 PASSED, Arabic Fact Check v1-v3). Standard Arabic.
 * Rules kept: "mutation" / طفرة (never mistake / خطأ), no "cure" / شفاء, "nearly every cell", "about" on 3 billion and
 *   $2.2 million, "list price" (not "costs"), no personal medical advice.
 * Launch day: put each video's link in `youtube` (en = English video, ar = Arabic video, both on @addanilabs).
 *   Until then the two buttons say "Coming soon".
 * Image licences: ../Sources/10-01-2026 Website Episode 1 Image Licenses.csv
 */
window.STORY = {
  slug: "episode-01-crispr",
  number: 1,
  title:  { en: "CRISPR", ar: "كريسبر" },
  hook:   { en: "One Mutated Letter in Your DNA Can Change Your Life", ar: "طفرة في حرف واحد من جيناتك قد تغيّر حياتك" },
  ribbon: { en: "Discoveries, Episode 1", ar: "اكتشافات علمية، الحلقة الأولى" },
  youtube: { en: "https://www.youtube.com/watch?v=N160YGAzgHM", ar: "https://www.youtube.com/watch?v=Z2E_5fjI0hg" },

  /* the thumbnail's painted art (no lettering): hero (left part, the cartoon) and watch screen (right part, the sky) */
  art: { src: "assets/ep01/art-plate.webp", small: "assets/ep01/art-plate-960.webp", w: 1280, h: 720,
         alt: { en: "A cartoon scientist waves as robot scissors cut a glowing DNA helix.",
                ar: "عالِم كرتوني يلوّح بينما يقصّ مقصّ آلي شريط حمض نووي مضيئًا." } },

  /* the side helix letter: turns red at `mutation`, back at `edit` (illustrative letters, FC v6) */
  letter: { mutation: "s2", edit: "s4" },

  scenes: [
    { id: "s1", nav: { en: "DNA", ar: "الحمض النووي" },
      image: "assets/ep01/dna-book.webp", w: 1000, h: 673,
      alt: { en: "An open book: DNA is the body's instruction manual", ar: "كتاب مفتوح: الحمض النووي هو كتاب تعليمات الجسم" },
      big:   { en: "Your DNA is your body’s instruction manual.", ar: "الحمض النووي هو كتاب التعليمات في جسمك." },
      small: { en: "It sits inside nearly every cell, written in about 3 billion letters.",
               ar: "يوجد في كل خلية من خلاياك تقريبًا، ويتكوّن من نحو 3 مليارات حرف." } },

    { id: "s2", nav: { en: "Mutation", ar: "الطفرة" },
      image: "assets/ep01/sickle-cells-nhlbi.webp", w: 372, h: 501,
      alt: { en: "Round red blood cells (top) and curved sickle cells (bottom)", ar: "خلايا دم حمراء مستديرة (أعلى) وخلايا منجلية مقوّسة (أسفل)" },
      big:   { en: "One mutated letter can cause a disease.", ar: "طفرة في حرف واحد قد تسبّب مرضًا." },
      small: { en: "Sickle cell disease is one example.", ar: "فقر الدم المنجلي مثالٌ على ذلك." } },

    { id: "s3", nav: { en: "CRISPR", ar: "كريسبر" },
      image: "assets/ep01/bacterium.webp", w: 983, h: 895,
      alt: { en: "A bacterium", ar: "بكتيريا" },
      big:   { en: "CRISPR is a tool that can edit DNA.", ar: "كريسبر أداة تستطيع تعديل الحمض النووي." },
      small: { en: "Scientists borrowed it from bacteria. It won the 2020 Nobel Prize in Chemistry.",
               ar: "استعارها العلماء من البكتيريا. وفازت بجائزة نوبل في الكيمياء عام 2020." },
      source: { label: { en: "Science, 2012", ar: "مجلة ساينس، 2012" }, doi: "10.1126/science.1225829" } },

    { id: "s4", nav: { en: "How it works", ar: "كيف تعمل" },
      image: "assets/ep01/scissors.webp", w: 1000, h: 839,
      alt: { en: "A pair of scissors: CRISPR cuts DNA", ar: "مقصّ: كريسبر يقصّ الحمض النووي" },
      big:   { en: "It finds the spot, then cuts or changes it.", ar: "تجد الموضع، ثم تقصّه أو تغيّره." },
      small: { en: "Like a “find” button attached to tiny scissors. Newer versions can change a single letter.",
               ar: "مثل زرّ «البحث» متصلًا بمقصٍّ صغير. والأنواع الأحدث منها تستطيع أن تغيّر حرفًا واحدًا فقط." } },

    { id: "s5", nav: { en: "Hard questions", ar: "أسئلة صعبة" },
      image: "assets/ep01/scales.webp", w: 1000, h: 939, small_pic: true,
      alt: { en: "A balance scale", ar: "ميزان" },
      big: { en: "Big power, hard questions.", ar: "قوةٌ كبيرة، وأسئلةٌ صعبة." },
      lines: [
        { q: { en: "Who can afford it?", ar: "من يستطيع تحمّل ثمنه؟" },
          a: { en: "The first CRISPR medicine has a U.S. list price of about $2.2 million.", ar: "السعر المعلن لأول دواء بتقنية كريسبر في أمريكا نحو 2.2 مليون دولار." } },
        { q: { en: "Is it safe?", ar: "هل هو آمن؟" },
          a: { en: "Edits in the wrong place can’t be ruled out.", ar: "لا يمكن استبعاد حدوث تعديلات في غير مكانها." } },
        { q: { en: "Should we edit embryos?", ar: "هل نعدّل الأجنّة؟" },
          a: { en: "Changes there could pass to future generations.", ar: "هذه التغييرات قد تنتقل إلى الأجيال القادمة." } }
      ] }
  ],

  /* shown in the "Sources" fold on the watch screen (English, as published) */
  sources: [
    'NHGRI. A Brief Guide to Genomics. <a href="https://www.genome.gov/about-genomics/fact-sheets/A-Brief-Guide-to-Genomics" target="_blank" rel="noopener">genome.gov</a>',
    'MedlinePlus Genetics. HBB gene (the sickle cell variant). <a href="https://medlineplus.gov/genetics/gene/hbb/" target="_blank" rel="noopener">medlineplus.gov</a>',
    'Jinek M, et al. A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. <i>Science</i> 2012. <a href="https://doi.org/10.1126/science.1225829" target="_blank" rel="noopener">doi:10.1126/science.1225829</a>',
    'The Nobel Prize in Chemistry 2020, press release (Charpentier, Doudna). <a href="https://www.nobelprize.org/prizes/chemistry/2020/press-release/" target="_blank" rel="noopener">nobelprize.org</a>',
    'Komor AC, et al. Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage. <i>Nature</i> 2016. <a href="https://doi.org/10.1038/nature17946" target="_blank" rel="noopener">doi:10.1038/nature17946</a>',
    'UK MHRA, 11-16-2023, and U.S. FDA, 12-08-2023: first approvals of a CRISPR medicine (Casgevy). <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease" target="_blank" rel="noopener">fda.gov</a>',
    'Vertex Pharmaceuticals, Form 8-K, 12-08-2023 (Casgevy U.S. list price).',
    'CASGEVY U.S. prescribing information, rev. 07/2026, section 5.4 (off-target editing). <a href="https://www.fda.gov/media/174615/download" target="_blank" rel="noopener">fda.gov/media/174615</a>',
    'Conversations in Science with Dan Rather &amp; Jennifer Doudna: CRISPR. Wonder Collaborative, 2017 (embryos, sperm or eggs; future generations).'
  ],

  share: { url: "https://www.addanilabs.com/episodes/episode-01-crispr.html",
           text: { en: "One mutated letter in your DNA can change your life. CRISPR in five short screens.",
                   ar: "طفرة في حرف واحد من جيناتك قد تغيّر حياتك. كريسبر في خمس شاشات قصيرة." } }
};
