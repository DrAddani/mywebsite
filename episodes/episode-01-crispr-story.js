/*
 * Discoveries, Episode 1: CRISPR. Scroll-story content (EN + AR), data only.
 * Source script: 01 Scientific Content/Episode Scripts/Episode 01 - CRISPR/10-04-2026 Episode 1 CRISPR Script EN Final v6.md
 *                (= the official video, Final v8 English). Arabic follows Script AR v5 (standard-Arabic wording; the UAE
 *                dialect is for Mo's narration only, on-screen text stays standard Arabic).
 * Fact check:    Episodes/Episode 01 - CRISPR/ Fact Check v3-v8 (all PASSED) + Arabic Fact Check v1-v3.
 *                GBD 2021 paper (sub-Saharan Africa) re-opened on PubMed 10-05-2026 (PMID 37331373).
 * Written:       10-05-2026, replacing the 10-01-2026 version built from Script EN v3 (archived in ~/Desktop/Archive/10-05-2026/).
 *                Only the science story: Mo's personal lines stay on YouTube. Zero "mistake" / "wrong letter" (EN + AR).
 *                Quotes are word for word (English); Arabic quote text is a translation.
 * Image licences: ../Sources/10-01-2026 Website Episode 1 Image Licenses.csv
 */
window.STORY = {
  slug: "episode-01-crispr",
  number: 1,
  title: { en: "CRISPR", ar: "كريسبر" },
  subtitle: { en: "Some illnesses are written into you", ar: "بعض الأمراض مكتوبة في داخلك" },
  series: { en: "Discoveries", ar: "اكتشافات علمية" },
  theme: { paper: "#EEE8DA", paper2: "#E2D9C5", card: "#FBF8F1", ink: "#1F1D1A", ink2: "#4A4640", hairline: "#8C8578", accent: "#E4572E" },
  youtube: { en: null, ar: null },

  chapters: [
    { id: "sick", label: { en: "Getting sick", ar: "حين نمرض" } },
    { id: "genetic", label: { en: "Genetic disease", ar: "المرض الوراثي" } },
    { id: "victoria", label: { en: "Victoria", ar: "فيكتوريا" } },
    { id: "bacteria", label: { en: "A tool from bacteria", ar: "أداة من البكتيريا" } },
    { id: "surprise", label: { en: "The surprise", ar: "المفاجأة" } },
    { id: "kj", label: { en: "KJ", ar: "كي جي" } },
    { id: "hard", label: { en: "Hard questions", ar: "أسئلة صعبة" } },
    { id: "next", label: { en: "What comes next", ar: "ما القادم" } },
    { id: "end", label: { en: "Back to the beginning", ar: "عودة إلى البداية" } }
  ],

  scenes: [
    {
      id: "s1", chapter: "sick", layout: "title",
      kicker: { en: "Discoveries · Episode One", ar: "اكتشافات علمية · الحلقة الأولى" },
      headline: { en: "Think about the last time you got sick.", ar: "تذكّر آخر مرة مرضتَ فيها." },
      body: {
        en: "The flu, maybe, or an infection. Something got into your body. Your body fought back, medicine helped, and in a few days, you were better.",
        ar: "ربما كانت إنفلونزا، أو زكامًا. شيءٌ دخل جسمك من الخارج، فحاربه جسمك، وساعده الدواء، وبعد أيام قليلة تحسّنت."
      }
    },
    {
      id: "s2", chapter: "sick", layout: "split",
      kicker: { en: "Outside or inside?", ar: "من الخارج أم من الداخل؟" },
      headline: { en: "But some illnesses don't come from outside at all", ar: "لكن بعض الأمراض لا تأتي من الخارج أصلًا" },
      body: {
        en: "They come from a change in your own DNA, often there since birth. When a change like that can cause disease, we call it a <mark>genetic disease</mark>.",
        ar: "بل تأتي من تغيّرٍ في حمضك النووي نفسه، يكون موجودًا في الغالب منذ الولادة. وحين يمكن لتغيّرٍ كهذا أن يسبّب مرضًا، نسمّيه <mark>مرضًا وراثيًا</mark>."
      },
      images: [
        { src: "assets/ep01/thermometer.webp", alt: { en: "Paper-cut thermometer: an illness that comes from outside", ar: "ميزان حرارة من الورق المقصوص: مرض يأتي من الخارج" } },
        { src: "assets/ep01/hospital-bracelet.webp", alt: { en: "Paper-cut newborn's hospital bracelet: a change there since birth", ar: "سوار مستشفى لمولود من الورق المقصوص: تغيّر موجود منذ الولادة" } }
      ]
    },
    {
      id: "s3", chapter: "genetic", layout: "image",
      kicker: { en: "Written into you", ar: "مكتوبٌ في داخلك" },
      headline: { en: "Your DNA: an instruction manual about three billion letters long", ar: "حمضك النووي: دليل تعليمات طوله نحو ثلاثة مليارات حرف" },
      body: {
        en: "It's inside nearly every cell. Sometimes it carries a <mark>mutation</mark>: a missing piece, or even one mutated letter. And it's in nearly every cell you have.",
        ar: "يوجد داخل كل خلية تقريبًا في جسمك. وأحيانًا يحمل <mark>طفرة</mark>: قطعةً ناقصة، أو حتى حرفًا واحدًا متغيّرًا. وتكون الطفرة في كل خلية تقريبًا من خلاياك."
      },
      image: "assets/ep01/dna-book.webp",
      imageAlt: { en: "Paper-cut open book: DNA as an instruction manual", ar: "كتاب مفتوح من الورق المقصوص: الحمض النووي كدليل تعليمات" }
    },
    {
      id: "s4", chapter: "genetic", layout: "image",
      kicker: { en: "The wall", ar: "الجدار" },
      headline: { en: "A pill can't rewrite your DNA", ar: "لا يستطيع قرصُ دواء أن يعيد كتابة حمضك النووي" },
      body: {
        en: "For most genetic diseases, medicine can ease the symptoms. So could there be a way to treat them <mark>by fixing the instructions themselves</mark>? At the end of 2015, one new technology was named the breakthrough of the year: CRISPR-Cas9.",
        ar: "في معظم الأمراض الوراثية، يستطيع الدواء تخفيف الأعراض. فهل توجد طريقة لعلاجها <mark>بإصلاح التعليمات نفسها</mark>؟ في نهاية عام 2015، اختارت مجلة ساينس تقنيةً جديدة اسمها CRISPR-Cas9 إنجازَ العام."
      },
      image: "assets/ep01/pill.webp",
      imageAlt: { en: "Paper-cut capsule pill", ar: "كبسولة دواء من الورق المقصوص" }
    },
    {
      id: "s5", chapter: "victoria", layout: "quote",
      kicker: { en: "July 2019 · Nashville, Tennessee", ar: "يوليو 2019 · ناشفيل، تينيسي" },
      headline: { en: "Victoria Gray, a mother of four born with sickle cell disease", ar: "فيكتوريا جراي، أمٌّ لأربعة أطفال وُلدت مصابةً بفقر الدم المنجلي" },
      body: {
        en: "She became the first person in America treated with CRISPR for a genetic disease. <mark>One mutated letter</mark> makes her red blood cells hard, sticky and curved. They jam in her blood vessels and cause attacks of terrible pain.",
        ar: "أصبحت أول شخص في أمريكا يُعالَج بكريسبر من مرض وراثي. <mark>حرفٌ واحد متغيّر</mark> يجعل كريات دمها الحمراء صلبةً ولزجةً ومنحنية، فتعلق في أوعيتها الدموية وتسبّب نوبات من ألم شديد."
      },
      quote: {
        text: { en: "Sometimes it feels like lightning strikes in my chest…", ar: "أحيانًا أشعر وكأن صاعقةً تضرب صدري…" },
        who: { en: "Victoria Gray · NPR, 2019", ar: "فيكتوريا جراي · إذاعة NPR، 2019" }
      },
      image: "assets/ep01/sickle-cells-nhlbi.webp",
      imageAlt: { en: "NHLBI illustration: normal red blood cells flowing (top) and sickle cells blocking a blood vessel (bottom)", ar: "رسم توضيحي من المعهد الوطني الأمريكي للقلب والرئة والدم: كريات دم حمراء طبيعية تتدفق (أعلى) وخلايا منجلية تسدّ وعاءً دمويًا (أسفل)" }
    },
    {
      id: "s6", chapter: "bacteria", layout: "image",
      kicker: { en: "A tool borrowed from bacteria", ar: "أداةٌ استعرناها من البكتيريا" },
      headline: { en: "A “find” button, attached to a tiny pair of scissors", ar: "مثل زرّ «البحث» في الكمبيوتر، متصلٌ بمقصٍّ صغير" },
      body: {
        en: "Bacteria use it to find viruses and destroy them. In 2012, a team led by Jennifer Doudna and Emmanuelle Charpentier showed it could be reprogrammed to cut <mark>almost any DNA</mark>. It won them the Nobel Prize.",
        ar: "تستخدمه البكتيريا لتجد الفيروسات وتدمّرها. وفي 2012، أثبت فريق بقيادة جينيفر داودنا وإيمانويل شاربنتييه أنه يمكن إعادة برمجته ليقصّ <mark>أيَّ حمض نووي تقريبًا</mark>. وفازتا بفضله بجائزة نوبل."
      },
      image: "assets/ep01/scissors.webp",
      imageAlt: { en: "Paper-cut pair of scissors", ar: "مقصّ من الورق المقصوص" },
      stamp: { en: "NOBEL PRIZE IN CHEMISTRY · 2020", ar: "نوبل في الكيمياء · 2020" },
      cite: { en: "Jinek et al., Science · 2012", ar: "مجلة ساينس · 2012 · Jinek وزملاؤه" }
    },
    {
      id: "s7", chapter: "surprise", layout: "image",
      kicker: { en: "The surprise", ar: "المفاجأة" },
      headline: { en: "Doctors didn't fix Victoria's mutated letter", ar: "لم يُصلح الأطباء الحرف المتغيّر عند فيكتوريا" },
      body: {
        en: "Before birth, we make a different hemoglobin (HbF), one that keeps red cells from sickling. After birth, <mark>a switch in our DNA</mark> turns it down. So researchers collected her own blood-making cells, cut that switch with CRISPR, and gave the cells back.",
        ar: "قبل الولادة، نصنع هيموغلوبينًا مختلفًا (HbF) يحمي كريات الدم الحمراء من أن تصير منجلية. وبعد الولادة، يطفئه <mark>مفتاحٌ في حمضنا النووي</mark>. فجمع الباحثون خلاياها المكوِّنة للدم، وقصّوا هذا المفتاح بكريسبر، ثم أعادوا إليها الخلايا."
      },
      image: "assets/ep01/switch.webp",
      imageAlt: { en: "Paper-cut light switch", ar: "مفتاح كهربائي من الورق المقصوص" }
    },
    {
      id: "s8", chapter: "surprise", layout: "stamp",
      kicker: { en: "Casgevy", ar: "كاسجيفي" },
      headline: { en: "The first CRISPR medicine ever approved", ar: "أول دواء بكريسبر يُعتمد في العالم" },
      body: {
        en: "In the main study, <mark>29 of 30</mark> patients went a full year or more without a severe crisis. In 2023, it became Casgevy.",
        ar: "في الدراسة الرئيسية، أكمل <mark>29 من أصل 30</mark> مريضًا عامًا كاملًا أو أكثر دون أي نوبة ألم شديدة. وفي 2023، أصبح العلاج دواءً اسمه كاسجيفي."
      },
      stat: { value: 29, of: 30, suffix: "", label: { en: "patients went a year or more without a severe crisis", ar: "مريضًا أكملوا عامًا أو أكثر دون نوبة شديدة" } },
      stamp: { en: "APPROVED · 2023", ar: "معتمد · 2023" },
      image: "assets/ep01/syringe.webp",
      imageAlt: { en: "Paper-cut syringe: the edited cells go back in", ar: "حقنة من الورق المقصوص: الخلايا المعدّلة تعود إلى الجسم" },
      cite: { en: "Frangoul et al., NEJM · 2024", ar: "مجلة NEJM · 2024 · Frangoul وزملاؤه" }
    },
    {
      id: "s9", chapter: "kj", layout: "split",
      kicker: { en: "2024 · Philadelphia", ar: "2024 · فيلادلفيا" },
      headline: { en: "A bolder step: editing DNA inside the body", ar: "خطوةٌ أجرأ: تعديل الحمض النووي داخل الجسم" },
      body: {
        en: "Baby KJ was born with an extremely rare genetic disease, <mark>CPS1 deficiency</mark>: his liver couldn't break down ammonia, a waste our body makes when it breaks down protein. Too much ammonia can damage the brain for life, and about half of babies with the severe form die in early infancy.",
        ar: "وُلد الطفل كي جي بمرض وراثي نادر جدًا اسمه <mark>نقص إنزيم CPS1</mark>: كبده لا يستطيع تفكيك الأمونيا، وهي فضلات يصنعها الجسم حين يفكّك البروتين. والأمونيا الزائدة قد تضرّ الدماغ ضررًا يبقى مدى الحياة، ونحو نصف الأطفال المولودين بالنوع الشديد يموتون في أشهر حياتهم الأولى."
      },
      images: [
        { src: "assets/ep01/liver.webp", alt: { en: "Paper-cut liver: it couldn't break down ammonia", ar: "كبد من الورق المقصوص: لم يستطع تفكيك الأمونيا" } },
        { src: "assets/ep01/brain.webp", alt: { en: "Paper-cut brain: too much ammonia can damage it", ar: "دماغ من الورق المقصوص: الأمونيا الزائدة قد تضرّه" } }
      ]
    },
    {
      id: "s10", chapter: "kj", layout: "image",
      kicker: { en: "Not a cure, his doctors say. But a first.", ar: "ليس شفاءً، كما يقول أطباؤه. لكنه الأول من نوعه." },
      headline: { en: "A medicine built for him alone", ar: "دواءٌ صُنع له وحده" },
      body: {
        en: "A newer kind of CRISPR called <mark>base editing</mark>, which changes a single letter, carried to his liver in tiny fat particles. After more than 300 days in the hospital, KJ went home.",
        ar: "نوعٌ أحدث من كريسبر اسمه <mark>تحرير القواعد</mark>، يغيّر حرفًا واحدًا فقط، وصل إلى كبده داخل جسيمات دهنية صغيرة. وبعد أكثر من 300 يوم في المستشفى، عاد كي جي إلى بيته."
      },
      image: "assets/ep01/pencil-eraser.webp",
      imageAlt: { en: "Paper-cut pencil with an eraser: changing a single letter", ar: "قلم رصاص بممحاة من الورق المقصوص: تغيير حرف واحد" },
      stamp: { en: "EXPERIMENTAL · 1 PATIENT", ar: "تجريبي · مريض واحد" },
      cite: { en: "Musunuru et al., NEJM · 2025", ar: "مجلة NEJM · 2025 · Musunuru وزملاؤه" }
    },
    {
      id: "s11", chapter: "hard", layout: "image",
      kicker: { en: "The hard questions", ar: "أسئلة صعبة" },
      headline: { en: "Every breakthrough comes with hard questions", ar: "كل إنجاز كبير تأتي معه أسئلة صعبة" },
      body: {
        en: "In the U.S., Casgevy's list price is about <mark>2.2 million dollars</mark>. The chemotherapy it requires can leave patients unable to have children.",
        ar: "في الولايات المتحدة، يبلغ السعر المعلن لكاسجيفي نحو <mark>2.2 مليون دولار</mark>. والعلاج الكيميائي الذي يحتاجه قد يترك المرضى غير قادرين على الإنجاب."
      },
      image: "assets/ep01/price-tag.webp",
      imageAlt: { en: "Paper-cut blank price tag", ar: "بطاقة سعر فارغة من الورق المقصوص" }
    },
    {
      id: "s12", chapter: "hard", layout: "quote",
      kicker: { en: "A line scientists warn about", ar: "خطٌّ يحذّر منه العلماء" },
      headline: { en: "Doudna herself has raised concerns about editing human embryos, sperm or eggs", ar: "داودنا نفسها عبّرت عن قلقها من تعديل الأجنّة البشرية أو الحيوانات المنوية أو البويضات" },
      body: {
        en: "In 2018, a scientist in China crossed that line. Three children were born from embryos he had edited, and <mark>he went to prison</mark>.",
        ar: "في 2018، تجاوز عالمٌ في الصين هذا الخط: وُلد ثلاثة أطفال من أجنّةٍ عدّلها بنفسه، <mark>ودخل السجن</mark>."
      },
      quote: {
        text: { en: "…changes to DNA that could be inherited by future generations… It means really altering human evolution.", ar: "…تغييرات في الحمض النووي يمكن أن تَرِثها الأجيال القادمة… وهذا يعني تغيير التطوّر البشري فعلًا." },
        who: { en: "Jennifer Doudna · Wonder Collaborative, 2017 (CC BY 3.0)", ar: "جينيفر داودنا · Wonder Collaborative، 2017 (CC BY 3.0)" }
      },
      image: "assets/ep01/embryo-cells.webp",
      imageAlt: { en: "Paper-cut cluster of embryo cells", ar: "مجموعة خلايا جنينية من الورق المقصوص" }
    },
    {
      id: "s13", chapter: "hard", layout: "image",
      kicker: { en: "Safety is still being learned", ar: "ما زلنا نتعلّم عن السلامة" },
      headline: { en: "And even for patients, there are risks", ar: "وحتى للمرضى، هناك مخاطر" },
      body: {
        en: "Casgevy's label warns that <mark>edits in the wrong place</mark> can't be ruled out.",
        ar: "تحذّر النشرة الرسمية لدواء كاسجيفي من أنه لا يمكن استبعاد <mark>حدوث تعديلات في غير مكانها</mark>."
      },
      image: "assets/ep01/scales.webp",
      imageAlt: { en: "Paper-cut balance scale: weighing hope and risk", ar: "ميزان من الورق المقصوص: الأمل في كفّة والمخاطر في كفّة" },
      cite: { en: "CASGEVY U.S. prescribing information · 2026", ar: "النشرة الأمريكية لدواء كاسجيفي · 2026" }
    },
    {
      id: "s14", chapter: "next", layout: "timeline",
      kicker: { en: "What comes next", ar: "ما القادم" },
      headline: { en: "Now, we're learning to edit what's written", ar: "واليوم، نتعلّم كيف نعدّل ما هو مكتوب" },
      body: {
        en: "Casgevy is already the first CRISPR treatment on the market, and the first one given inside the body could be approved by <mark>March 2027</mark>.",
        ar: "كاسجيفي هو أول علاج بكريسبر في الأسواق، وأول علاج يُعطى داخل الجسم قد يُعتمد بحلول <mark>مارس 2027</mark>."
      },
      timeline: [
        { year: "2012", label: { en: "CRISPR reprogrammed to cut almost any DNA", ar: "إعادة برمجة كريسبر ليقصّ أي حمض نووي تقريبًا" } },
        { year: "2015", label: { en: "Named the breakthrough of the year", ar: "اختير إنجازَ العام" } },
        { year: "2019", label: { en: "Victoria Gray: first in America treated with CRISPR for a genetic disease", ar: "فيكتوريا جراي: أول من عولج بكريسبر من مرض وراثي في أمريكا" } },
        { year: "2023", label: { en: "Casgevy: the first CRISPR medicine approved", ar: "كاسجيفي: أول دواء بكريسبر يُعتمد" } },
        { year: "2025", label: { en: "Baby KJ: a CRISPR medicine built for him alone", ar: "الطفل كي جي: دواء بكريسبر صُنع له وحده" } },
        { year: "2027", label: { en: "FDA decision due by March on the first CRISPR treatment given inside the body", ar: "قرار إدارة الغذاء والدواء الأمريكية متوقَّع بحلول مارس، لأول علاج بكريسبر يُعطى داخل الجسم" } }
      ],
      image: "assets/ep01/iv-bag.webp",
      imageAlt: { en: "Paper-cut IV bag on a stand", ar: "كيس محلول وريدي على حامل من الورق المقصوص" },
      cite: { en: "Cohn et al., NEJM · 2026", ar: "مجلة NEJM · 2026 · Cohn وزملاؤه" }
    },
    {
      id: "s15", chapter: "next", layout: "image",
      kicker: { en: "For everyone", ar: "للجميع" },
      headline: { en: "Most babies born with sickle cell disease are born in sub-Saharan Africa", ar: "معظم الأطفال الذين يولدون بفقر الدم المنجلي يولدون في إفريقيا جنوب الصحراء" },
      body: {
        en: "To reach them, these treatments must become <mark>far simpler, and far cheaper</mark>.",
        ar: "ولكي تصل إليهم هذه العلاجات، يجب أن تصبح <mark>أبسط بكثير، وأرخص بكثير</mark>."
      },
      cite: { en: "GBD 2021, Lancet Haematology · 2023", ar: "مجلة Lancet Haematology · 2023 · GBD 2021" }
    },
    {
      id: "s16", chapter: "end", layout: "quote",
      kicker: { en: "Back to the beginning", ar: "عودة إلى البداية" },
      headline: { en: "Seven years after her treatment, Victoria Gray hasn't had a single sickle-cell crisis", ar: "بعد سبع سنوات من علاجها، لم تُصب فيكتوريا جراي بأي نوبة من نوبات فقر الدم المنجلي" },
      body: {
        en: "What was written on her very first day is no longer the end of her story. <mark>The next chapter is ours to write: carefully, and for everyone.</mark>",
        ar: "وما كُتب في جيناتها من أول يوم في حياتها، لم يعد نهاية قصتها. <mark>والفصل القادم نكتبه نحن: بحذر، وللجميع.</mark>"
      },
      quote: {
        text: { en: "I no longer have that fear of dying… and leaving my children without a mother.", ar: "لم يعد عندي ذلك الخوف من الموت… ومن أن أترك أطفالي بلا أم." },
        who: { en: "Victoria Gray · NPR, 2023", ar: "فيكتوريا جراي · إذاعة NPR، 2023" }
      },
      image: "assets/ep01/new-page.webp",
      imageAlt: { en: "Paper-cut blank page: the next chapter", ar: "صفحة من الورق المقصوص: الفصل القادم" }
    }
  ],

  papers: [
    {
      journal: "Science", year: 2012,
      title: "A Programmable Dual-RNA–Guided DNA Endonuclease in Adaptive Bacterial Immunity",
      authors: "Jinek M, et al.", doi: "10.1126/science.1225829",
      note: {
        en: "Showed, in a test tube, that the bacterial cutter Cas9 can be reprogrammed to cut almost any chosen DNA.",
        ar: "أظهرت، في أنبوب اختبار، أن المقص البكتيري Cas9 يمكن إعادة برمجته ليقصّ أي حمض نووي مختار تقريبًا."
      }
    },
    {
      journal: "New England Journal of Medicine", year: 2024,
      title: "Exagamglogene Autotemcel for Severe Sickle Cell Disease",
      authors: "Frangoul H, et al.", doi: "10.1056/NEJMoa2309676",
      note: {
        en: "The main sickle cell study behind Casgevy: 29 of 30 patients went a year or more without a severe crisis.",
        ar: "الدراسة الرئيسية لفقر الدم المنجلي وراء كاسجيفي: أكمل 29 من أصل 30 مريضًا عامًا أو أكثر دون نوبة شديدة."
      }
    },
    {
      journal: "New England Journal of Medicine", year: 2025,
      title: "Patient-Specific In Vivo Gene Editing to Treat a Rare Genetic Disease",
      authors: "Musunuru K, et al.", doi: "10.1056/NEJMoa2504747",
      note: {
        en: "Baby KJ's treatment: a base editor built for one patient, carried to his liver in tiny fat particles.",
        ar: "علاج الطفل كي جي: محرّر قواعد صُنع لمريض واحد، ووصل إلى كبده داخل جسيمات دهنية صغيرة."
      }
    },
    {
      journal: "New England Journal of Medicine", year: 2026,
      title: "Lonvoguran Ziclumeran — In Vivo CRISPR Gene Editing in Hereditary Angioedema",
      authors: "Cohn DM, et al.", doi: "10.1056/NEJMoa2600931",
      note: {
        en: "The study behind the first CRISPR treatment given inside the body (one IV infusion): 87% fewer attacks of a rare swelling disease than placebo (80 patients).",
        ar: "الدراسة وراء أول علاج بكريسبر يُعطى داخل الجسم (تسريب وريدي واحد): نوبات أقل بنسبة 87% من الدواء الوهمي في مرض تورّم نادر (80 مريضًا)."
      }
    },
    {
      journal: "The Lancet Haematology", year: 2023,
      title: "Global, regional, and national prevalence and mortality burden of sickle cell disease, 2000–2021: a systematic analysis from the Global Burden of Disease Study 2021",
      authors: "GBD 2021 Sickle Cell Disease Collaborators", doi: "10.1016/S2352-3026(23)00118-7",
      note: {
        en: "In 2021, 79% of babies born with sickle cell disease were born in sub-Saharan Africa.",
        ar: "في 2021، وُلد 79% من الأطفال المصابين بفقر الدم المنجلي في إفريقيا جنوب الصحراء."
      }
    }
  ]
};
