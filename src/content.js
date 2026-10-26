/* BFHI Learn — content. Sources: WHO/UNICEF Implementation Guidance (2018) & revised Ten Steps;
   WHO Acceptable medical reasons for use of breast-milk substitutes (2009); Neo-BFHI (Nyqvist et al., 2015);
   KKM Manual Pembimbing Penyusuan Susu Ibu (2019); JKN Sarawak "Penyusuan Susu Ibu Pilihan Terbaik Anda";
   National Lactation Centre (KKM) infographics. */

const SECTIONS = [
  { id: 'found', title: 'Foundations', sub: 'What BFHI is and how it is assessed' },
  { id: 'steps', title: 'The Ten Steps (2018)', sub: 'Critical management procedures and key clinical practices' },
  { id: 'skills', title: 'Bedside skills', sub: 'What every staff member must be able to show a mother' },
];

const LESSONS = [
  /* ---------------- FOUNDATIONS ---------------- */
  { id: 'intro', sec: 'found', badge: 'BFHI', title: 'What is BFHI?', short: 'The global programme behind "Hospital Rakan Bayi"',
    body: `
<p>The <b>Baby-friendly Hospital Initiative (BFHI)</b> was launched by WHO and UNICEF in 1991 to protect, promote and support breastfeeding in facilities that provide maternity and newborn services. In Malaysia these facilities are known as <b>Hospital Rakan Bayi</b>.</p>
<p>In 2018 the Ten Steps were revised. The changes that matter most at ward level:</p>
<ul>
<li>The steps are split into <b>critical management procedures</b> (Steps 1–2) and <b>key clinical practices</b> (Steps 3–10).</li>
<li>Step 1 now has three parts: <b>1a</b> the Code, <b>1b</b> a written policy, <b>1c</b> monitoring and data.</li>
<li>Training shifted from counting hours to <b>verified competency</b>.</li>
<li>Step 9 changed from "give no artificial teats or pacifiers" to <b>counselling mothers on their use and risks</b>.</li>
<li>The steps now apply explicitly to <b>small, sick and preterm newborns</b>, not only healthy term babies.</li>
</ul>
<h3>The Ten Steps along a mother's journey</h3>
{{w:journey}}
<div class="callout"><b>Malaysian policy</b> — Exclusive breastfeeding for the first 6 months, complementary foods from 6 months, and continued breastfeeding to 2 years and beyond.</div>`,
    checks: ['Staff can explain what BFHI / Hospital Rakan Bayi means for their own ward', 'Staff know the national breastfeeding policy (exclusive 6 months, continue to 2 years)'],
    bm: 'Hospital ini ialah Hospital Rakan Bayi. Kami akan bantu puan menyusukan bayi dengan susu ibu sahaja selama 6 bulan, dan teruskan sehingga 2 tahun.' },

  { id: 'assess', sec: 'found', badge: '80%', title: 'How assessment works', short: 'Indicators, thresholds and who gets interviewed',
    body: `
<p>BFHI assessment checks whether the Ten Steps actually happen, not just whether they are written down. Assessors gather evidence from four sources:</p>
<ul>
<li><b>Documents</b> — the infant feeding policy, training records, purchase records for formula, monitoring data.</li>
<li><b>Observation</b> — the wards, labour room, antenatal clinic, NICU: displays, formula storage, rooming-in, how staff help with feeds.</li>
<li><b>Staff interviews</b> — clinical and non-clinical staff are asked to describe and demonstrate skills.</li>
<li><b>Mother interviews</b> — antenatal and postnatal mothers, including mothers of babies in NICU/SCN.</li>
</ul>
<p>Most clinical indicators in the 2018 guidance use an <b>80% threshold</b>: at least 80% of mothers (or staff) sampled must report or demonstrate the practice.</p>
<div class="callout warm"><b>Assessment tip</b> — Mothers are the main source of evidence for Steps 3–10. If a mother cannot name two feeding cues or does not know where to get help after discharge, the step fails for her, even if staff taught it. Teach back, then check understanding.</div>`,
    checks: ['Mothers can repeat back what staff taught them', 'Records match what staff and mothers report'],
    bm: 'Boleh puan tunjukkan kepada saya bagaimana puan meletakkan bayi untuk menyusu?' },

  { id: 'code', sec: 'found', badge: 'Code', title: 'The International Code', short: 'Marketing of breast-milk substitutes, simply explained',
    body: `
<p>The <b>International Code of Marketing of Breast-milk Substitutes</b> (WHA, 1981) and later WHA resolutions protect families from commercial pressure. Malaysia applies it through the national <b>Code of Ethics for the Marketing of Infant Foods and Related Products</b>.</p>
<p><b>Products covered:</b> infant formula, follow-on and growing-up milks marketed for young children, other foods or drinks marketed as partial or full replacements for breast milk, and feeding bottles and teats.</p>
<p><b>In a Baby-friendly facility:</b></p>
<ul>
<li>No advertising, posters, calendars, pens, notepads or gifts carrying formula or bottle brands.</li>
<li>No free or low-cost supplies of formula. The facility <b>buys</b> formula through normal procurement.</li>
<li>No samples or gift packs given to mothers.</li>
<li>Company staff do not contact pregnant women or mothers, and do not run "education" sessions.</li>
<li>Formula is stored out of sight of mothers and visitors.</li>
<li>Information given to health workers must be scientific and factual. Gifts and sponsorship that create conflicts of interest are not accepted.</li>
</ul>
<h3>Try it: allowed or a Code violation?</h3>
{{w:codeSort}}`,
    checks: ['No branded formula/bottle items anywhere in clinical areas (look in drawers and nurses’ stations)', 'Invoices show formula purchased at not less than wholesale price', 'Staff can name at least two Code provisions'],
    bm: 'Hospital ini tidak menerima sampel atau hadiah daripada syarikat susu formula.' },

  { id: 'neo', sec: 'found', badge: 'Neo', title: 'Neo-BFHI for NICU & SCN', short: 'The Ten Steps adapted for small and sick newborns',
    body: `
<p>The <b>Neo-BFHI</b> (Nordic and Quebec Working Group, 2012; updated 2015) expands the Ten Steps for neonatal wards. The 2018 WHO guidance absorbed much of it. It adds three guiding principles:</p>
<ol>
<li><b>Staff attitudes</b> focus on each individual mother and her situation.</li>
<li><b>Family-centred care</b>, supported by the ward environment.</li>
<li><b>Continuity of care</b> from pregnancy to after the infant’s discharge.</li>
</ol>
<p><b>What it looks like in a NICU:</b></p>
<ul>
<li>Mothers start expressing <b>within 1–2 hours</b> of birth when the baby cannot feed, and express <b>at least 8 times in 24 hours</b>.</li>
<li>Colostrum is given early, including oral immune therapy where unit protocol allows.</li>
<li><b>Kangaroo mother care</b> (skin-to-skin) is encouraged early, continuously and for as long as possible, without unjustified restrictions.</li>
<li>Parents have unrestricted access 24 hours a day.</li>
<li>Feeding moves from scheduled feeds toward <b>semi-demand</b> and then cue-based feeding as the baby matures.</li>
<li>Bottles are avoided while breastfeeding is being established; cup or other methods are used. Pacifiers are used only for good reasons, such as pain relief or non-nutritive sucking during tube feeds.</li>
</ul>
<div class="callout">Hospital Miri FICare practice fits here: parents as partners in care support Neo-BFHI principles 1 and 2.</div>`,
    checks: ['NICU mothers report being helped to express within 1–2 hours', 'Parents can stay with their baby day and night', 'Skin-to-skin is offered daily to stable babies'],
    bm: 'Puan boleh mula perah susu dalam masa 1–2 jam selepas bersalin, sekurang-kurangnya 8 kali sehari, walaupun bayi berada di NICU.' },

  /* ---------------- TEN STEPS ---------------- */
  { id: 's1a', sec: 'steps', badge: '1a', title: 'Comply with the Code', short: 'No promotion of formula, bottles or teats',
    body: `
<p><b>Step 1a.</b> Comply fully with the International Code of Marketing of Breast-milk Substitutes and relevant World Health Assembly resolutions.</p>
<p>See the <a data-go="code">International Code</a> lesson for what is covered. The facility must:</p>
<ul>
<li>Purchase all breast-milk substitutes, bottles and teats it uses.</li>
<li>Have no display of products or brand items.</li>
<li>Keep staff free from company gifts, sponsorship and contact with mothers.</li>
</ul>
<p><b>Why:</b> Marketing undermines a mother’s confidence in her own milk and influences staff behaviour.</p>`,
    checks: ['No Code violations seen during the ward walk-through', 'Procurement records for formula exist', 'Staff can explain why company gifts are refused'],
    bm: 'Kami tidak mempromosikan susu formula, botol atau puting tiruan.' },

  { id: 's1b', sec: 'steps', badge: '1b', title: 'Written feeding policy', short: 'A policy everyone knows and can explain',
    body: `
<p><b>Step 1b.</b> Have a written infant feeding policy that is routinely communicated to staff and parents.</p>
<ul>
<li>The policy covers all Ten Steps, Code implementation, and support for mothers who are not breastfeeding.</li>
<li>A summary is <b>displayed</b> where pregnant women, mothers and families can see it, in languages they understand (BM, English, Chinese, and local languages where relevant).</li>
<li>Staff are oriented to the policy when they join.</li>
</ul>
<p><b>Assessor expectation:</b> Staff can describe at least two elements of the policy that affect their own work.</p>`,
    checks: ['Policy summary visible in antenatal clinic, labour room, postnatal wards and NICU', 'Staff can describe two parts of the policy', 'New staff orientation includes the policy'],
    bm: 'Polisi penyusuan susu ibu hospital ini dipamerkan di dinding wad. Puan boleh tanya saya jika ada soalan.' },

  { id: 's1c', sec: 'steps', badge: '1c', title: 'Monitoring & data', short: 'Measure the practices, review them, act on them',
    body: `
<p><b>Step 1c.</b> Establish ongoing monitoring and data-management systems.</p>
<p>The facility collects data on key practices and reviews them regularly with staff. Useful indicators:</p>
<ul>
<li>Exclusive breastfeeding / breast milk only throughout the stay</li>
<li>Skin-to-skin within 5 minutes, lasting ≥1 hour</li>
<li>Breastfeeding initiated within 1 hour</li>
<li>Rooming-in rates</li>
<li>Supplementation with documented medical reason</li>
<li>For NICU: mothers expressing within 1–2 hours, infants discharged on breast milk</li>
</ul>
<p>Data drive quality improvement: identify the gap, change the process, re-measure.</p>`,
    checks: ['Monitoring data exist and are recent', 'Data have been discussed with ward staff', 'Action plans exist for indicators below target'],
    bm: '' },

  { id: 's2', sec: 'steps', badge: '2', title: 'Staff competency', short: 'Knowledge, competence and skills, verified',
    body: `
<p><b>Step 2.</b> Ensure that staff have sufficient knowledge, competence and skills to support breastfeeding.</p>
<ul>
<li>All staff caring for mothers and babies receive pre-service or in-service breastfeeding training appropriate to their role.</li>
<li>Competency is <b>assessed</b>, for example by observing a staff member help a mother with positioning and attachment, or teach hand expression.</li>
<li>Non-clinical staff (clerks, attendants, cleaners) receive orientation so they can refer mothers and avoid undermining breastfeeding.</li>
</ul>
<div class="callout"><b>2018 indicator</b> — At least 80% of health professionals who provide feeding services report receiving training on breastfeeding during the previous 2 years.</div>`,
    checks: ['Training register up to date', 'Staff can demonstrate positioning, attachment and hand expression', 'Competency assessment records exist'],
    bm: '' },

  { id: 's3', sec: 'steps', badge: '3', title: 'Antenatal discussion', short: 'Prepare pregnant women and families',
    body: `
<p><b>Step 3.</b> Discuss the importance and management of breastfeeding with pregnant women and their families.</p>
<p>Antenatal counselling should cover:</p>
<ul>
<li>Importance of breastfeeding for baby and mother</li>
<li>Immediate skin-to-skin contact and early initiation</li>
<li>Colostrum and its value</li>
<li>Rooming-in and feeding on cue</li>
<li>Positioning and attachment basics</li>
<li>Exclusive breastfeeding for 6 months; risks of formula, bottles and pacifiers</li>
<li>Continued breastfeeding to 2 years and beyond</li>
</ul>
<p>Involve the husband and family: support from them is one of the strongest predictors of success. No group instruction on formula preparation is given antenatally.</p>`,
    checks: ['≥80% of postnatal mothers say they received breastfeeding counselling during pregnancy', 'Antenatal records document counselling'],
    bm: 'Selepas bersalin, bayi akan diletakkan terus di atas dada puan, kulit ke kulit, sekurang-kurangnya 1 jam.' },

  { id: 's4', sec: 'steps', badge: '4', title: 'Skin-to-skin & early initiation', short: 'Immediately after birth, uninterrupted, ≥1 hour',
    body: `
{{fig:img/skin.jpg|Newborn lying skin-to-skin on the mother's chest|Skin-to-skin immediately after birth}}
<p><b>Step 4.</b> Facilitate immediate and uninterrupted skin-to-skin contact and support mothers to initiate breastfeeding as soon as possible after birth.</p>
<ul>
<li>Dry the baby and place naked on the mother’s bare chest <b>immediately or within 5 minutes</b> of birth.</li>
<li>Keep contact <b>uninterrupted for at least 1 hour</b>, or until the first breastfeed. Routine procedures (weighing, vitamin K, examination) can wait.</li>
<li>After caesarean: start as soon as the mother is alert and responsive, including in theatre or recovery where possible.</li>
<li>Help the mother recognise when the baby is ready to feed. Do not force the baby to the breast.</li>
</ul>
<h3>The first hour: tap each point</h3>
{{w:goldenHour}}
<div class="callout warm"><b>Safety</b> — Observe the baby throughout: face visible, nose and mouth clear, colour pink, breathing normally. This protects against sudden unexpected postnatal collapse. Never leave mother and baby alone if the mother is drowsy.</div>
<p><b>Benefits:</b> warms and calms the baby, stabilises breathing and heart rate, colonises the baby with the mother’s skin bacteria, and stimulates milk flow.</p>`,
    checks: ['≥80% of mothers report skin-to-skin within 5 minutes, lasting ≥1 hour', '≥80% report breastfeeding within 1 hour of birth', 'Caesarean mothers also offered skin-to-skin'],
    bm: 'Biarkan bayi di atas dada puan. Bayi akan cari payudara sendiri apabila sudah bersedia.' },

  { id: 's5', sec: 'steps', badge: '5', title: 'Support & manage difficulties', short: 'Positioning, attachment, expression',
    body: `
<p><b>Step 5.</b> Support mothers to initiate and maintain breastfeeding and manage common difficulties.</p>
<ul>
<li>Within 6 hours of birth, staff observe a feed and help with <a data-go="position">positioning</a> and <a data-go="latch">attachment</a>.</li>
<li>Teach every mother <a data-go="express">hand expression</a> before discharge.</li>
<li>Mothers of preterm or sick babies start expressing <b>within 1–2 hours</b>, and at least 8 times in 24 hours, including at night.</li>
<li>Help with sore or cracked nipples, engorgement and perceived low supply. Most problems come from poor attachment.</li>
<li>Mothers who are not breastfeeding are taught safe preparation and responsive feeding individually.</li>
</ul>`,
    checks: ['≥80% of mothers can demonstrate positioning and attachment', '≥80% can describe or demonstrate hand expression', 'NICU mothers report early help with expressing'],
    bm: 'Mari saya tunjukkan cara memerah susu dengan tangan. Puan cuba sendiri ya.' },

  { id: 's6', sec: 'steps', badge: '6', title: 'Breast milk only', short: 'No other food or fluids unless medically indicated',
    body: `
<p><b>Step 6.</b> Do not provide breastfed newborns any food or fluids other than breast milk, unless medically indicated.</p>
<p>Not even water: breast milk is about 88% water. Vitamins, minerals and medicines prescribed by health staff are allowed.</p>
<p><b>Acceptable medical reasons (WHO 2009), summary:</b></p>
<ul>
<li><b>Infant, no breast milk:</b> classic galactosaemia, maple syrup urine disease. PKU: specialised formula with some breastfeeding under monitoring.</li>
<li><b>Infant, may need supplement with breast milk:</b> birth weight &lt;1500 g, gestation &lt;32 weeks, risk of hypoglycaemia not responding to optimal breastfeeding or breast milk.</li>
<li><b>Mother:</b> severe illness preventing care; HSV-1 lesions on the breast (avoid that breast); some medications (e.g. radioactive iodine-131, cytotoxic chemotherapy); maternal HIV where national guidance advises replacement feeding.</li>
</ul>
<p>When a supplement is needed: use expressed breast milk first, record the reason, give by cup or spoon, and counsel the mother.</p>`,
    checks: ['≥80% of breastfed term babies receive only breast milk during the stay', 'Every supplement has a documented medical reason', 'Formula kept out of view'],
    bm: 'Bayi tidak perlu air kosong. Susu ibu sudah mengandungi 88% air.' },

  { id: 's7', sec: 'steps', badge: '7', title: 'Rooming-in 24 hours', short: 'Mother and baby together, day and night',
    body: `
<p><b>Step 7.</b> Enable mothers and their infants to remain together and to practise rooming-in 24 hours a day.</p>
<ul>
<li>Mother and baby stay together from birth, including at night and after caesarean.</li>
<li>Separation only for a justified medical reason, and it is documented.</li>
<li>When a baby is admitted to NICU, the mother has unrestricted access and is helped to be with the baby as much as possible.</li>
</ul>
<p><b>Benefits:</b> the mother learns her baby’s cues, feeds on demand, milk comes in faster, the baby sleeps better and cries less, and infection risk is lower.</p>`,
    checks: ['≥80% of mothers report not being separated from their baby for more than 1 hour since birth', 'No routine nursery for healthy babies'],
    bm: 'Bayi akan tinggal bersama puan 24 jam supaya puan boleh susukan bila-bila masa bayi mahu.' },

  { id: 's8', sec: 'steps', badge: '8', title: 'Responsive feeding', short: 'Recognise and respond to feeding cues',
    body: `
<p><b>Step 8.</b> Support mothers to recognise and respond to their infants’ cues for feeding.</p>
<ul>
<li>Feed on demand: no restrictions on frequency or length of feeds.</li>
<li>Teach <a data-go="cues">feeding cues</a> so mothers feed before the baby cries. Crying is a late cue.</li>
<li>Expect 8–12 feeds in 24 hours in the early days. Wake a baby who sleeps too long.</li>
<li>Let the baby finish the first breast and come off by itself before offering the second.</li>
</ul>
{{w:cueSlider}}
<div class="callout"><b>Key message:</b> Watch the baby, not the clock.</div>`,
    checks: ['≥80% of mothers can describe at least two feeding cues', 'No fixed feeding schedules for healthy term babies'],
    bm: 'Perhatikan tanda awal bayi lapar: membuka mulut, memusingkan kepala, menghisap tangan. Jangan tunggu sehingga bayi menangis.' },

  { id: 's9', sec: 'steps', badge: '9', title: 'Bottles, teats & pacifiers', short: 'Counsel on use and risks',
    body: `
<p><b>Step 9.</b> Counsel mothers on the use and risks of feeding bottles, teats and pacifiers.</p>
<p>The 2018 revision changed this from a prohibition to <b>counselling</b>. Mothers should know:</p>
<ul>
<li>Bottles and teats can interfere with learning to breastfeed (nipple confusion) and reduce milk supply.</li>
<li>Bottles are hard to clean and carry contamination risk.</li>
<li>Pacifiers can mask feeding cues and reduce feeds.</li>
</ul>
<p><b>Alternatives</b> when supplements or expressed milk are needed: <a data-go="cupfeed">cup</a>, spoon or syringe.</p>
{{fig:img/cupfeed.jpg|Two photos of a newborn being cup-fed|Cup feeding expressed milk}}
<p>In NICU, pacifiers may be used for <b>justifiable reasons</b>: pain relief during procedures and non-nutritive sucking for tube-fed preterm babies.</p>`,
    checks: ['≥80% of mothers report being taught the risks of bottles, teats and pacifiers', 'Cups available on the ward'],
    bm: 'Elakkan botol dan puting tiruan supaya bayi tidak keliru puting. Kalau perlu, berikan susu perahan dengan cawan kecil.' },

  { id: 's10', sec: 'steps', badge: '10', title: 'Discharge & ongoing support', short: 'Timely access to support after going home',
    body: `
<p><b>Step 10.</b> Coordinate discharge so that parents and their infants have timely access to ongoing support and care.</p>
<ul>
<li>Before discharge, tell every mother where and how to get breastfeeding help.</li>
<li>Refer to the <b>Klinik Kesihatan</b> for postnatal follow-up and home visits, and to the <b>Kumpulan Sokongan Penyusuan Susu Ibu</b>.</li>
<li>Give contact details of the ward, lactation counsellor or hotline.</li>
<li>Explain signs of adequate intake and danger signs that need review.</li>
<li>For NICU graduates: coordinate with the clinic for continued expressing and breastfeeding support.</li>
</ul>`,
    checks: ['≥80% of mothers report that a staff member told them where to get breastfeeding support in the community', 'Discharge summary includes feeding status and referral'],
    bm: 'Jika ada masalah menyusu selepas pulang, hubungi Klinik Kesihatan atau Kumpulan Sokongan Penyusuan Susu Ibu berhampiran.' },

  /* ---------------- BEDSIDE SKILLS ---------------- */
  { id: 'position', sec: 'skills', badge: 'Pos', title: 'Positioning', short: 'Four key points of a good position', img: 'img/positioning.jpg', imgAlt: 'Illustration: mother holding baby close, baby’s whole body facing her, body straight and supported',
    body: `
<p>The four key points:</p>
<ol>
<li><b>Head and body in line</b> — the baby’s body is straight, not twisted.</li>
<li><b>Close</b> — the baby is held close to the mother’s body.</li>
<li><b>Facing</b> — the baby’s whole body faces the mother, nose opposite the nipple.</li>
<li><b>Supported</b> — the whole body is supported, not just the head and shoulders (especially in newborns).</li>
</ol>
<p><b>Common positions:</b> cradle, cross-cradle (good for newborns and small babies), football/underarm (good after caesarean or for twins), side-lying (rest at night).</p>
<p>The mother should be comfortable with back supported. Bring the baby to the breast, not the breast to the baby.</p>
{{fig:img/positions-4.jpg|Line drawings of football, lying, cross-cradle and cradle positions|Football · Lying · Cross-cradle · Cradle}}
<h3>Spot the difference</h3>
{{fig:img/positions-ok-x.jpg|Two correct and two incorrect breastfeeding positions|Top: correct. Bottom: incorrect}}
<ul><li><b>Top, correct:</b> baby turned toward the mother, body close and in line, whole body supported by arm and pillow.</li>
<li><b>Bottom, incorrect:</b> baby held away with neck twisted, or mother leaning over the baby instead of bringing the baby to the breast.</li></ul>`,
    checks: ['Staff can name all four key points', 'Mother can demonstrate a good position'],
    bm: 'Pastikan badan bayi lurus, rapat dengan badan puan, menghadap puan, dan disokong sepenuhnya.' },

  { id: 'latch', sec: 'skills', badge: 'Att', title: 'Attachment (latch)', short: 'Signs of good attachment and effective suckling', img: 'img/latch-signs.jpg', imgAlt: 'Photo: signs of good attachment labelled in Malay', img2: 'img/latch-steps.jpg', img2Alt: 'Photo sequence: four steps of bringing baby onto the breast',
    body: `
<p><b>Steps to attach:</b> touch the baby’s lips with the nipple → wait until the mouth opens wide → quickly bring the baby onto the breast, lower lip aiming well below the nipple.</p>
{{w:latchSteps}}
<p><b>Four signs of good attachment:</b></p>
<ul>
<li>Mouth wide open</li>
<li>Lower lip turned outward</li>
<li>Chin touching the breast</li>
<li>More areola visible above the mouth than below</li>
</ul>
<p><b>Effective suckling:</b> slow deep sucks with pauses, rounded cheeks, swallowing heard or seen, baby releases the breast by itself and looks satisfied.</p>
<h3>Which baby is well attached?</h3>
{{w:latchCompare}}
<p><b>Cracked nipples</b> are usually caused by poor position or attachment, the baby sucking on the nipple only, or pulling the baby off before it releases. To break suction, slide a little finger into the corner of the baby’s mouth.</p>`,
    checks: ['Staff can list all four attachment signs', 'Staff can help a mother re-attach without taking over (hands-off where possible)'],
    bm: 'Tunggu mulut bayi terbuka luas, kemudian bawa bayi rapat ke payudara. Dagu bayi patut menyentuh payudara.' },

  { id: 'cues', sec: 'skills', badge: 'Cue', title: 'Feeding cues', short: 'Early, mid and late signs of hunger',
    body: `
{{w:cueSlider}}
<div class="cue-grid">
<div class="cue early"><b>Early</b><span>"I’m hungry"</span><ul><li>Stirring</li><li>Mouth opening</li><li>Turning head, rooting</li></ul></div>
<div class="cue mid"><b>Mid</b><span>"I’m really hungry"</span><ul><li>Stretching</li><li>More movement</li><li>Hand to mouth</li></ul></div>
<div class="cue late"><b>Late</b><span>"Calm me, then feed me"</span><ul><li>Crying</li><li>Agitated movements</li><li>Turning red</li></ul></div>
</div>
<p>Feed at early cues. A crying baby is harder to attach: calm the baby first with skin-to-skin, then feed.</p>
<p>Other cues: eye movements under closed or open eyelids, sucking on fingers or blanket, soft whimpering.</p>`,
    checks: ['Mother can name two early feeding cues'],
    bm: 'Tanda awal bayi lapar: bergerak-gerak, membuka mulut, memusingkan kepala mencari payudara.' },

  { id: 'enough', sec: 'skills', badge: 'Out', title: 'Is baby getting enough?', short: 'Signs of adequate intake',
    body: `
<ul>
<li>Baby releases the breast by itself and looks satisfied and calm</li>
<li>Breast feels softer and lighter after the feed</li>
<li><b>More than 6 wet nappies in 24 hours</b> (after the first few days), and frequent stools</li>
<li>Steady weight gain</li>
</ul>
<h3>A newborn's stomach is small</h3>
{{w:stomach}}
<p>Colostrum is produced in small amounts that match a newborn’s small stomach. Frequent feeding, not supplementation, builds supply.</p>
<div class="callout"><b>Supply rule:</b> More breastfeeding means more milk. Less breastfeeding means less milk.</div>
<h3>Why frequent feeding makes more milk</h3>
{{w:supplyLoop}}`,
    checks: ['Mother can describe two signs her baby is getting enough'],
    bm: 'Bayi cukup susu jika kencing lebih 6 kali sehari, kerap berak dan berat badan bertambah.' },

  { id: 'express', sec: 'skills', badge: 'Exp', title: 'Hand expression', short: 'Step by step, and how long to express',
    body: `
{{w:expressSteps}}
<h3>Helping the milk flow</h3>
{{fig:img/massage.jpg|Helper massaging the back of a seated mother leaning forward on a table|Back massage helps the let-down reflex}}
<p>Sit relaxed, think about or look at the baby, and ask a helper to massage along both sides of the spine.</p>
<h3>Step by step</h3>
<ol>
<li>Wash hands. Sit comfortably and relax; think about or look at the baby. A gentle back massage helps milk flow.</li>
<li>Place the thumb above the areola and the first finger opposite, below it. Support the breast with the other fingers.</li>
<li>Press thumb and finger back toward the chest wall, then compress and release. Repeat rhythmically. Do not slide fingers along the skin.</li>
<li>Rotate position around the areola to empty all segments.</li>
<li>Repeat on the other breast.</li>
</ol>
<table class="tbl"><thead><tr><th>Purpose</th><th>How often</th></tr></thead><tbody>
<tr><td>Colostrum when baby cannot attach</td><td>5–10 min every 1–2 h</td></tr>
<tr><td>Build supply</td><td>20 min every 2 h (≥6 times/24 h)</td></tr>
<tr><td>Soften areola before feeding</td><td>3–4 expressions</td></tr>
<tr><td>Blocked duct</td><td>Massage and express until lump clears</td></tr>
<tr><td>Working mother</td><td>15–30 min per session</td></tr>
</tbody></table>`,
    checks: ['Mother can demonstrate hand expression', 'Staff can demonstrate on a breast model'],
    bm: 'Letak ibu jari di atas areola dan jari telunjuk di bawah. Tekan ke arah dada, picit dan lepas.' },

  { id: 'storage', sec: 'skills', badge: 'EBM', title: 'Storing expressed milk', short: 'Storage times, thawing and warming',
    body: `
<p>Times from the KKM / JKN Sarawak guide. Use the <a data-go="tool:ebm">EBM label tool</a> to calculate a use-by time.</p>
{{w:storageChart}}
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Where</th><th>Healthy baby</th><th>Preterm / sick</th></tr></thead><tbody>
<tr><td>Room 25–37 °C</td><td>4 h</td><td>4 h</td></tr>
<tr><td>Air-conditioned 15–25 °C</td><td>8 h</td><td>—</td></tr>
<tr><td>Air-conditioned &lt;15 °C</td><td>24 h</td><td>—</td></tr>
<tr><td>Fridge 2–4 °C</td><td>&lt;8 days</td><td>48 h</td></tr>
<tr><td>1-door fridge freezer</td><td>2 weeks</td><td>2 weeks</td></tr>
<tr><td>2-door fridge freezer −20 °C</td><td>3 months</td><td>3 months</td></tr>
<tr><td>Deep freezer −20 °C</td><td>6 months</td><td>3 months</td></tr>
<tr><td>Thawed in fridge</td><td>24 h</td><td>12 h</td></tr>
</tbody></table></div>
<ul>
<li>Store one feed per container; label with date and time expressed. Do not overfill containers for freezing.</li>
<li>If fridge milk will not be used within 5 days, freeze it.</li>
<li>Thaw the oldest first, overnight on the top shelf of the fridge. Warm in a bowl of warm water. Swirl gently to mix separated fat.</li>
<li>Thawed milk: do not refreeze. Warmed milk: use within 1 hour.</li>
<li><b>Never</b> heat milk in a microwave or on the stove.</li>
</ul>`,
    checks: ['Mother knows how long milk keeps in the fridge', 'Ward EBM fridge has labelled, dated containers'],
    bm: 'Susu perahan boleh disimpan dalam peti sejuk (ruang am) kurang daripada 8 hari. Jangan panaskan dalam microwave.' },

  { id: 'cupfeed', sec: 'skills', badge: 'Cup', title: 'Cup feeding', short: 'Giving expressed milk without a bottle',
    body: `
{{fig:img/cupfeed.jpg|Two photos of a newborn being cup-fed|Baby upright, cup resting on the lower lip}}
<ol>
<li>Hold the baby upright or semi-upright (about 45°) on your lap, wrapped so hands do not knock the cup.</li>
<li>Rest the small cup on the baby’s lower lip, edges touching the upper lip.</li>
<li>Tip the cup so milk just reaches the lip. <b>Do not pour</b> milk into the mouth. Let the baby lap or sip at its own pace.</li>
<li>The baby stops when full. A little spillage at first is normal.</li>
</ol>
<p>Cup feeding avoids nipple confusion and keeps the baby in control of the feed. It suits preterm babies from about 30–32 weeks when unit protocol allows.</p>`,
    checks: ['Staff can demonstrate cup feeding', 'Cups available on the ward and in NICU'],
    bm: 'Jangan tuang susu ke dalam mulut bayi. Biarkan bayi menghirup sendiri.' },

  { id: 'work', sec: 'skills', badge: 'Work', title: 'Returning to work', short: 'Keep breastfeeding after maternity leave',
    body: `
<ol>
<li>Start practising expression around 2 weeks after birth, or whenever comfortable.</li>
<li>Build a stock of frozen expressed milk.</li>
<li>Two weeks before returning to work, practise replacing feeds with expressed milk, one daytime feed at a time.</li>
<li>Train the caregiver to cup-feed expressed milk.</li>
<li>At work, express every 3 hours or so to prevent engorgement and protect supply. Breastfeed on demand after work, at night and on rest days.</li>
</ol>
<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Feed time</th><th>Day 1–3</th><th>4–6</th><th>7–9</th><th>10–13</th></tr></thead><tbody>
<tr><td>7.30–9.00</td><td class="e">EBM</td><td class="e">EBM</td><td class="e">EBM</td><td class="e">EBM</td></tr>
<tr><td>10.00–11.30</td><td>Breast</td><td class="e">EBM</td><td class="e">EBM</td><td class="e">EBM</td></tr>
<tr><td>12.00–1.30</td><td>Breast</td><td>Breast</td><td class="e">EBM</td><td class="e">EBM</td></tr>
<tr><td>3.30–4.30</td><td>Breast</td><td>Breast</td><td>Breast</td><td class="e">EBM</td></tr>
</tbody></table></div>`,
    checks: ['Mother has a plan for expressing at work'],
    bm: 'Mulakan latihan memerah susu 2 minggu selepas bersalin dan simpan sebagai stok.' },

  { id: 'myths', sec: 'skills', badge: 'Myth', title: 'Myths vs facts', short: 'Common misconceptions mothers raise',
    body: `
{{fig:img/colostrum.jpg|Drops of yellow colostrum collected on a spoon|Colostrum: thick, yellow and precious}}
<dl class="myths">
<dt>Colostrum is stale milk because it is yellow.</dt><dd>The yellow colour comes from beta-carotene. Colostrum is rich in antibodies, protein and vitamins A and E: the baby’s first immunisation.</dd>
<dt>Breastfeeding makes breasts sag.</dt><dd>Pregnancy and ageing cause sagging, not breastfeeding. A supportive bra helps.</dd>
<dt>Adding formula keeps the baby fuller.</dt><dd>Breast milk digests quickly so babies feed often; this is normal. Formula reduces demand and lowers supply.</dd>
<dt>Formula is almost the same as breast milk.</dt><dd>Live cells, antibodies and enzymes in breast milk cannot be replicated. Added ingredients may not be absorbed in the same way.</dd>
<dt>Flat or inverted nipples prevent breastfeeding.</dt><dd>Babies breastfeed from the areola, not the nipple alone. Good positioning solves most cases.</dd>
<dt>Mothers must avoid certain foods to prevent colic.</dt><dd>Colic has no identifiable cause and improves with age. Wind often comes from prolonged crying, shallow latch or teats. If one food seems linked, stop it for a week and retry.</dd>
<dt>A sick mother or one on medicine must stop breastfeeding.</dt><dd>Most illnesses and most medicines are compatible with breastfeeding. Exceptions include chemotherapy and radioactive drugs. Check with a doctor or pharmacist.</dd>
</dl>`,
    checks: ['Staff can correct common myths with accurate information'],
    bm: 'Kolostrum bukan susu basi. Warna kuning datang daripada beta-karotena dan sangat berkhasiat untuk bayi.' },
];

/* Quiz bank. step = lesson id; a = index of correct option (options are shuffled on display). */
const QUESTIONS = [
  { id: 'q1', step: 'intro', q: 'In the 2018 revision, Steps 1 and 2 are called…', o: ['Critical management procedures', 'Key clinical practices', 'Core competencies', 'Facility standards'], a: 0, w: 'Steps 1–2 are critical management procedures; Steps 3–10 are key clinical practices.' },
  { id: 'q2', step: 'intro', q: 'Malaysian policy recommends exclusive breastfeeding for…', o: ['6 months, then continue to 2 years', '4 months, then continue to 1 year', '6 months, then stop', '12 months'], a: 0, w: 'Exclusive for 6 months, complementary food from 6 months, continue breastfeeding to 2 years and beyond.' },
  { id: 'q3', step: 'intro', q: 'Which change did the 2018 revision make to Step 9?', o: ['From banning teats and pacifiers to counselling on their use and risks', 'Pacifiers became recommended', 'It was merged with Step 6', 'It now applies only to NICU'], a: 0, w: 'Step 9 now asks staff to counsel mothers on the use and risks of bottles, teats and pacifiers.' },
  { id: 'q4', step: 'assess', q: 'Most clinical indicators in BFHI assessment use which threshold?', o: ['80%', '50%', '90%', '100%'], a: 0, w: 'The 2018 guidance sets 80% for most indicators.' },
  { id: 'q5', step: 'assess', q: 'The main source of evidence for Steps 3–10 is…', o: ['Interviews with mothers', 'The written policy', 'Training records', 'Formula invoices'], a: 0, w: 'Mothers report whether clinical practices actually happened.' },
  { id: 'q6', step: 'code', q: 'Which of these is allowed in a Baby-friendly facility?', o: ['Buying formula through normal procurement', 'Free formula supplies from a company', 'Branded pens from a formula company', 'Giving mothers sample gift packs'], a: 0, w: 'Facilities purchase formula. Free supplies, branded items and samples violate the Code.' },
  { id: 'q7', step: 'code', q: 'Feeding bottles and teats are covered by the Code.', o: ['True', 'False'], a: 0, w: 'The Code covers breast-milk substitutes, feeding bottles and teats.' },
  { id: 'q8', step: 'code', q: 'Where should formula stock be kept on a postnatal ward?', o: ['Out of sight of mothers and visitors', 'On a shelf near the nurses’ station', 'At each bedside', 'In the waiting area'], a: 0, w: 'Formula should not be visible to mothers or visitors.' },
  { id: 'q9', step: 'neo', q: 'Mothers of preterm babies who cannot feed should start expressing within…', o: ['1–2 hours of birth', '6 hours', '24 hours', 'When milk comes in on day 3'], a: 0, w: 'Early expression (within 1–2 h) improves long-term supply.' },
  { id: 'q10', step: 'neo', q: 'How often should a NICU mother express to build supply?', o: ['At least 8 times in 24 hours', '3 times a day', 'Only when breasts feel full', 'Once every 6 hours'], a: 0, w: 'At least 8 times/24 h, including once at night.' },
  { id: 'q11', step: 'neo', q: 'Which is a Neo-BFHI guiding principle?', o: ['Continuity of care from pregnancy to after discharge', 'Strict visiting hours', 'Scheduled 3-hourly feeds until discharge', 'Separate nursery for all preterms'], a: 0, w: 'The three principles: individual focus on the mother, family-centred care, continuity of care.' },
  { id: 'q12', step: 'neo', q: 'In NICU, a pacifier may be justified for…', o: ['Pain relief during procedures', 'Settling a baby to delay feeds', 'Every baby at night', 'Replacing skin-to-skin'], a: 0, w: 'Justifiable uses include procedural pain relief and non-nutritive sucking during tube feeds.' },
  { id: 'q13', step: 's1a', q: 'Step 1a requires the facility to…', o: ['Comply fully with the International Code', 'Train staff for 20 hours', 'Display the policy', 'Collect monitoring data'], a: 0, w: '1a = Code; 1b = policy; 1c = monitoring.' },
  { id: 'q14', step: 's1b', q: 'The infant feeding policy summary should be displayed…', o: ['Where mothers and families can see it, in languages they understand', 'In the director’s office only', 'On the intranet only', 'In the staff room only'], a: 0, w: 'Displayed in maternity and newborn areas in relevant languages.' },
  { id: 'q15', step: 's1b', q: 'The policy should also cover support for mothers who are not breastfeeding.', o: ['True', 'False'], a: 0, w: 'All mothers get feeding support, including individual teaching on safe preparation.' },
  { id: 'q16', step: 's1c', q: 'Which is a useful Step 1c monitoring indicator?', o: ['Skin-to-skin within 5 minutes lasting ≥1 hour', 'Number of formula brands stocked', 'Staff overtime hours', 'Bed occupancy'], a: 0, w: 'Monitor the clinical practices that make up the Ten Steps.' },
  { id: 'q17', step: 's2', q: 'The 2018 Step 2 indicator asks whether health professionals received breastfeeding training within the previous…', o: ['2 years', '5 years', '6 months', '10 years'], a: 0, w: '≥80% of relevant health professionals trained within the previous 2 years.' },
  { id: 'q18', step: 's2', q: 'How does the 2018 guidance prefer to verify staff skills?', o: ['Competency assessment', 'Counting course hours only', 'Written exam only', 'Self-report only'], a: 0, w: 'The emphasis moved to competency verification.' },
  { id: 'q19', step: 's2', q: 'Non-clinical staff such as clerks and attendants…', o: ['Need orientation appropriate to their role', 'Need no breastfeeding knowledge', 'Must complete the full clinical course', 'Should advise on formula'], a: 0, w: 'They should know the policy and how to refer mothers.' },
  { id: 'q20', step: 's3', q: 'Which topic should NOT be part of antenatal group education?', o: ['How to prepare formula', 'Skin-to-skin contact', 'Rooming-in', 'Feeding on cue'], a: 0, w: 'No group instruction on formula preparation is given antenatally.' },
  { id: 'q21', step: 's3', q: 'Why involve husbands and family in antenatal counselling?', o: ['Their support strongly predicts breastfeeding success', 'They must sign consent for breastfeeding', 'It is required by law', 'To teach them formula preparation'], a: 0, w: 'Support from husband, family and community is a key success factor.' },
  { id: 'q22', step: 's4', q: 'After a normal birth, skin-to-skin should start…', o: ['Immediately or within 5 minutes', 'After weighing', 'Within 30 minutes', 'After the first bath'], a: 0, w: 'Immediately or within 5 minutes, uninterrupted for at least 1 hour.' },
  { id: 'q23', step: 's4', q: 'Minimum duration of uninterrupted skin-to-skin after birth?', o: ['1 hour', '10 minutes', '30 minutes', '4 hours'], a: 0, w: 'At least 1 hour, or until the first breastfeed.' },
  { id: 'q24', step: 's4', q: 'After caesarean, skin-to-skin should start…', o: ['As soon as the mother is alert and responsive', 'Only after 24 hours', 'Only when she reaches the ward', 'It is not recommended'], a: 0, w: 'Start in theatre or recovery as soon as the mother can respond.' },
  { id: 'q25', step: 's4', q: 'During skin-to-skin, staff should check that…', o: ['The baby’s face is visible, airway clear and colour pink', 'The baby is swaddled', 'The baby is lying on its back', 'The mother is asleep'], a: 0, w: 'Observation protects against sudden unexpected postnatal collapse.' },
  { id: 'q26', step: 's4', q: 'Which routine procedure should be delayed until after the first hour of skin-to-skin?', o: ['Weighing the baby', 'Drying the baby', 'Checking breathing', 'Placing baby on mother'], a: 0, w: 'Weighing, examination and injections can wait.' },
  { id: 'q27', step: 's5', q: 'Every mother should be taught which skill before discharge?', o: ['Hand expression', 'Formula preparation', 'Bottle sterilising', 'Using a pacifier'], a: 0, w: 'Hand expression is required for all mothers under Step 5.' },
  { id: 'q28', step: 's5', q: 'The most common cause of sore nipples is…', o: ['Poor positioning and attachment', 'Breastfeeding too often', 'Fair skin', 'Large breasts'], a: 0, w: 'Fix the attachment and soreness usually improves.' },
  { id: 'q29', step: 's6', q: 'A healthy term breastfed baby seems thirsty on a hot day. You advise…', o: ['Breastfeed more often; no water needed', 'Give 30 ml of water', 'Give glucose water', 'Give formula'], a: 0, w: 'Breast milk is about 88% water.' },
  { id: 'q30', step: 's6', q: 'Which is an acceptable medical reason to avoid breast milk entirely?', o: ['Classic galactosaemia', 'Neonatal jaundice', 'Caesarean birth', 'Mother has a cold'], a: 0, w: 'Classic galactosaemia and maple syrup urine disease require special formula.' },
  { id: 'q31', step: 's6', q: 'Which infant may need supplementation in addition to breast milk?', o: ['Birth weight under 1500 g', 'Birth weight 3000 g', 'Baby born by caesarean', 'Baby who cries at night'], a: 0, w: 'VLBW (<1500 g) or <32 weeks may need fortification or supplements.' },
  { id: 'q32', step: 's6', q: 'If a supplement is medically needed, the first choice is…', o: ['The mother’s own expressed milk', 'Glucose water', 'Plain water', 'Any formula by bottle'], a: 0, w: 'Use expressed breast milk first, by cup or spoon, and document the reason.' },
  { id: 'q33', step: 's6', q: 'Which maternal medicine is a reason to temporarily stop breastfeeding?', o: ['Radioactive iodine-131', 'Paracetamol', 'Iron tablets', 'Amoxicillin'], a: 0, w: 'Radioactive iodine and cytotoxic chemotherapy are examples.' },
  { id: 'q34', step: 's7', q: 'The Step 7 indicator asks mothers whether they were separated from their baby for more than…', o: ['1 hour', '6 hours', '12 hours', '24 hours'], a: 0, w: '≥80% report no separation longer than 1 hour (unless justified).' },
  { id: 'q35', step: 's7', q: 'Which is a benefit of rooming-in?', o: ['Mother learns her baby’s feeding cues', 'Baby gets more formula', 'Fewer feeds at night', 'Mother sleeps undisturbed'], a: 0, w: 'Rooming-in supports cue-based feeding and faster milk production.' },
  { id: 'q36', step: 's8', q: 'Which is a LATE feeding cue?', o: ['Crying', 'Mouth opening', 'Turning head', 'Stirring'], a: 0, w: 'Crying is late. Calm the baby first, then feed.' },
  { id: 'q37', step: 's8', q: 'How many feeding cues should a mother be able to describe for Step 8?', o: ['At least 2', 'At least 5', 'Only 1', 'None; she should follow the clock'], a: 0, w: '≥80% of mothers can describe at least two cues.' },
  { id: 'q38', step: 's8', q: 'For a healthy term baby, feeds should be…', o: ['On demand, no limit on frequency or length', 'Every 3 hours for 10 minutes', 'Every 4 hours', 'Only during the day'], a: 0, w: 'Responsive feeding: watch the baby, not the clock.' },
  { id: 'q39', step: 's9', q: 'Which is a recommended alternative to a bottle for giving expressed milk?', o: ['Small cup', 'Pacifier dipped in milk', 'Large teat', 'Sippy cup with spout'], a: 0, w: 'Cup, spoon or syringe.' },
  { id: 'q40', step: 's9', q: 'A risk of early pacifier use is…', o: ['Masking feeding cues and fewer feeds', 'Better latch', 'More milk', 'Less jaundice'], a: 0, w: 'Pacifiers can mask hunger cues and reduce breastfeeding frequency.' },
  { id: 'q41', step: 's10', q: 'Step 10 is met when the mother…', o: ['Knows where to get breastfeeding support after discharge', 'Has bought a breast pump', 'Has a formula plan', 'Has been weighed'], a: 0, w: '≥80% of mothers report being told where to access community support.' },
  { id: 'q42', step: 's10', q: 'Which is an appropriate community referral in Malaysia?', o: ['Klinik Kesihatan and the breastfeeding support group', 'A formula company hotline', 'Pharmacy formula counter', 'None needed'], a: 0, w: 'Klinik Kesihatan postnatal care and Kumpulan Sokongan Penyusuan Susu Ibu.' },
  { id: 'q43', step: 'position', q: 'Which is NOT one of the four key points of positioning?', o: ['Baby’s head tilted down to the chest', 'Head and body in line', 'Close to the mother', 'Whole body supported'], a: 0, w: 'The four are: in line, close, facing the breast, supported.' },
  { id: 'q44', step: 'position', q: 'Which position is often comfortable after caesarean?', o: ['Football (underarm)', 'Cradle with baby on the wound', 'Standing', 'Baby lying flat beside mother on the back'], a: 0, w: 'Football/underarm keeps the baby off the abdomen.' },
  { id: 'q45', step: 'latch', q: 'With good attachment, more areola is visible…', o: ['Above the baby’s top lip', 'Below the lower lip', 'Equally above and below', 'No areola is visible'], a: 0, w: 'The lower lip takes in more of the lower areola.' },
  { id: 'q46', step: 'latch', q: 'Which is a sign of good attachment?', o: ['Lower lip turned outward', 'Cheeks sucked in', 'Clicking sounds', 'Lips pursed forward'], a: 0, w: 'Wide mouth, lower lip out, chin touching, more areola above.' },
  { id: 'q47', step: 'latch', q: 'Effective suckling looks like…', o: ['Slow deep sucks with audible swallowing', 'Rapid shallow sucks only', 'Dimpled cheeks', 'Baby falling asleep at once every time'], a: 0, w: 'Slow deep sucks, rounded cheeks, swallowing heard.' },
  { id: 'q48', step: 'enough', q: 'After the first few days, how many wet nappies suggest adequate intake?', o: ['More than 6 in 24 hours', '2 in 24 hours', '1 per day', '3 in 24 hours'], a: 0, w: 'More than 6 wet nappies plus frequent stools and weight gain.' },
  { id: 'q49', step: 'express', q: 'When hand expressing, fingers should…', o: ['Press back toward the chest, compress and release', 'Slide along the skin toward the nipple', 'Squeeze the nipple', 'Pull the breast outward'], a: 0, w: 'Press back, compress, release. Avoid sliding or squeezing the nipple.' },
  { id: 'q50', step: 'express', q: 'To build supply, a mother should express about…', o: ['20 minutes every 2 hours (≥6 times/24 h)', '5 minutes twice a day', 'Once a day for an hour', 'Only when leaking'], a: 0, w: 'Per the KKM guide: 20 min every 2 h, at least 6 times in 24 hours.' },
  { id: 'q51', step: 'storage', q: 'Fresh EBM for a healthy baby in the fridge (2–4 °C) keeps for…', o: ['Less than 8 days', '24 hours', '1 month', '4 hours'], a: 0, w: 'Less than 8 days; freeze if not used within 5 days.' },
  { id: 'q52', step: 'storage', q: 'Fresh EBM for a preterm or sick baby in the fridge keeps for…', o: ['48 hours', '8 days', '2 weeks', '4 hours'], a: 0, w: '48 hours for preterm/sick babies.' },
  { id: 'q53', step: 'storage', q: 'Thawed EBM for a healthy baby must be used within…', o: ['24 hours, never refrozen', '7 days', '1 hour', '3 days, may refreeze'], a: 0, w: '24 h for healthy babies (12 h for preterm/sick). Do not refreeze.' },
  { id: 'q54', step: 'storage', q: 'Warmed EBM must be used within…', o: ['1 hour', '4 hours', '12 hours', '24 hours'], a: 0, w: 'Warmed milk cannot be stored again.' },
  { id: 'q55', step: 'storage', q: 'Which warming method is safe?', o: ['Container in a bowl of warm water', 'Microwave on low', 'Boiling on the stove', 'Direct gas flame'], a: 0, w: 'Never microwave or heat on the stove.' },
  { id: 'q56', step: 'cupfeed', q: 'During cup feeding you should…', o: ['Let the baby lap or sip; never pour', 'Pour milk steadily into the mouth', 'Lay the baby flat', 'Use a large cup to finish fast'], a: 0, w: 'Baby upright, cup on lower lip, baby controls the pace.' },
  { id: 'q57', step: 'work', q: 'When should a mother start practising expression before returning to work?', o: ['About 2 weeks after birth', 'On the day she returns', 'Never; switch to formula', 'Only after 6 months'], a: 0, w: 'Start around 2 weeks postpartum and build a stock.' },
  { id: 'q58', step: 'myths', q: 'Colostrum is yellow because of…', o: ['Beta-carotene', 'Staleness', 'Infection', 'Bilirubin'], a: 0, w: 'Beta-carotene; colostrum is safe and highly nutritious.' },
  { id: 'q59', step: 'myths', q: 'A mother with flat nipples asks if she can breastfeed. You say…', o: ['Yes; babies feed from the areola, and position helps', 'No; she must use formula', 'Only with a nipple shield always', 'Only after surgery'], a: 0, w: 'Babies attach to the areola, not the nipple alone.' },
  { id: 'q60', step: 'myths', q: 'Most maternal medicines are compatible with breastfeeding.', o: ['True', 'False'], a: 0, w: 'Only a small amount passes into milk. Exceptions include chemotherapy and radioactive drugs.' },
  { id: 'qi1', step: 'cues', img: 'img/cue-01.jpg', q: 'This baby is opening the mouth. What should the mother do?', o: ['Feed now: this is an early cue', 'Wait until the baby cries', 'Give a pacifier', 'Wait for the next scheduled feed'], a: 0, w: 'Mouth opening is an early cue. Feed now, before crying starts.' },
  { id: 'qi2', step: 'cues', img: 'img/cue-02.jpg', q: 'Turning the head like this is…', o: ['An early feeding cue', 'A late feeding cue', 'A sign of pain', 'A sign the baby is full'], a: 0, w: 'Rooting and turning the head are early cues.' },
  { id: 'qi3', step: 'cues', img: 'img/cue-12.jpg', q: 'Hand to mouth, as shown, is…', o: ['A mid feeding cue', 'An early cue only seen at night', 'A late cue', 'Not a feeding cue'], a: 0, w: 'Hand to mouth is a mid cue: "I’m really hungry".' },
  { id: 'qi4', step: 'cues', img: 'img/cue-20.jpg', q: 'What is the best response to this baby?', o: ['Calm the baby first, then feed', 'Attach to the breast immediately while crying', 'Give water', 'Leave the baby to settle alone'], a: 0, w: 'Crying is a late cue. Calm with skin-to-skin or cuddling, then feed.' },
  { id: 'qi5', step: 'latch', img: 'img/latch-good.jpg', q: 'Look at the chin and the dark areola. Is this good attachment?', o: ['Yes: chin touching, more areola above the mouth', 'No: the nipple only is in the mouth', 'No: the chin is too close', 'Cannot tell from this view'], a: 0, w: 'Chin close to the breast and more areola visible above the top lip are signs of good attachment.' },
  { id: 'qi6', step: 'latch', img: 'img/latch-poor.jpg', q: 'Look at the chin and the dark areola. Is this good attachment?', o: ['No: chin away and most of the areola is outside the mouth', 'Yes: this is ideal attachment', 'Yes: the nipple is well placed', 'No: the baby is too close'], a: 0, w: 'Chin away from the breast and the whole areola visible means the baby is sucking on the nipple: risk of sore nipples and poor milk transfer.' },
  { id: 'qi7', step: 's4', img: 'img/skin.jpg', q: 'After a normal birth, this contact should begin within…', o: ['5 minutes, lasting at least 1 hour', '30 minutes, lasting 10 minutes', '1 hour, after weighing', '2 hours, after the bath'], a: 0, w: 'Immediately or within 5 minutes, uninterrupted for at least 1 hour.' },
  { id: 'qi8', step: 'cupfeed', img: 'img/cupfeed.jpg', q: 'In cup feeding, the milk should be…', o: ['Brought to the lip so the baby sips or laps it', 'Poured steadily into the mouth', 'Given with the baby lying flat', 'Mixed with water first'], a: 0, w: 'Never pour. The baby controls the pace.' },
  { id: 'qi9', step: 'myths', img: 'img/colostrum.jpg', q: 'A grandmother says this yellow milk is stale and should be thrown away. You explain…', o: ['It is colostrum: rich in antibodies, give it to the baby', 'She is right: discard it', 'Give it only after boiling', 'Give formula until white milk comes'], a: 0, w: 'The yellow colour is beta-carotene. Colostrum is the baby’s first immunisation.' },
];

/* Assessor interview drill */
const INTERVIEW = [
  { who: 'Staff', step: 's1b', q: 'Tell me about your hospital’s infant feeding policy. How does it affect your work?', a: 'Name the policy and give two specific elements, e.g. skin-to-skin within 5 min for ≥1 h after every birth, rooming-in 24 h, no formula without a documented medical reason, no Code violations.' },
  { who: 'Staff', step: 's1a', q: 'A formula company representative offers free samples for your ward. What do you do?', a: 'Refuse. Explain the hospital complies with the International Code and the Malaysian Code of Ethics; formula is purchased, not accepted free. Report to the unit manager.' },
  { who: 'Staff', step: 's2', q: 'When did you last receive breastfeeding training, and what did it include?', a: 'Within the last 2 years; state the course and key skills (positioning, attachment, hand expression, counselling, Code).' },
  { who: 'Staff', step: 's3', q: 'What do you discuss with pregnant women about breastfeeding?', a: 'Importance; skin-to-skin and early initiation; colostrum; rooming-in; feeding on cue; positioning and attachment; exclusive breastfeeding 6 months; risks of formula, bottles and pacifiers; continue to 2 years.' },
  { who: 'Staff', step: 's4', q: 'Describe what happens to a healthy baby in the first hour after a vaginal birth.', a: 'Dried and placed naked on mother’s chest within 5 min; uninterrupted ≥1 h; observed (face visible, breathing, colour); routine procedures delayed; mother helped to recognise readiness and initiate breastfeeding.' },
  { who: 'Staff', step: 's4', q: 'How do you support skin-to-skin after a caesarean section?', a: 'Start in theatre or recovery as soon as the mother is alert; staff stay to keep the baby safe; if the mother cannot, the father can provide skin-to-skin until she can.' },
  { who: 'Staff', step: 's5', q: 'Show me how you would help a mother position and attach her baby.', a: 'Four positioning points: in line, close, facing, supported. Wait for wide mouth, bring baby to breast, lower lip below nipple. Check: chin touching, lower lip out, more areola above. Prefer hands-off coaching.' },
  { who: 'Staff', step: 's5', q: 'How would you teach a mother to hand express?', a: 'Wash hands, relax; thumb above, finger below the areola; press back to chest, compress, release; rotate around; switch breasts. Have her try it herself.' },
  { who: 'Staff', step: 's5', q: 'A mother of a 30-week baby in NICU asks when she should start expressing.', a: 'Within 1–2 hours of birth if possible, at least 8 times in 24 h including at night; collect colostrum in a syringe; help her with hand expression and then pump.' },
  { who: 'Staff', step: 's6', q: 'Name some acceptable medical reasons for giving a supplement to a breastfed baby.', a: 'Infant: galactosaemia, MSUD, PKU (with monitoring), <1500 g or <32 weeks, hypoglycaemia not responding to breastfeeding. Mother: severe illness, HSV-1 lesions on breast, radioactive iodine or chemotherapy, HIV per national guidance.' },
  { who: 'Staff', step: 's6', q: 'A breastfed baby needs a supplement. How do you give it and what do you record?', a: 'Expressed breast milk first; by cup, spoon or syringe; document the medical reason and volume; counsel mother; continue supporting breastfeeding.' },
  { who: 'Staff', step: 's7', q: 'When would a baby be separated from the mother on your ward?', a: 'Only for a medical reason, documented. Otherwise rooming-in 24 h a day including nights. If the baby goes to NICU, the mother has unrestricted access.' },
  { who: 'Staff', step: 's8', q: 'What are the early signs that a baby wants to feed?', a: 'Stirring, eye movements, mouth opening, tongue out, turning head/rooting, sucking hand or fingers. Crying is late.' },
  { who: 'Staff', step: 's9', q: 'What do you tell mothers about bottles, teats and pacifiers?', a: 'They can interfere with learning to breastfeed, reduce supply, mask cues and carry contamination risk; use cup or spoon if expressed milk is needed.' },
  { who: 'Staff', step: 's10', q: 'Before discharge, what do you tell a mother about support at home?', a: 'Where to get help: Klinik Kesihatan follow-up/home visit, breastfeeding support group, ward or lactation contact; signs of adequate intake; danger signs.' },
  { who: 'Mother', step: 's3', q: 'Did anyone talk to you about breastfeeding during your pregnancy? What did they say?', a: 'Expected answer: yes, with at least two topics (e.g. skin-to-skin after birth, colostrum, feeding on demand).' },
  { who: 'Mother', step: 's4', q: 'After your baby was born, when was the baby placed on your chest, and for how long?', a: 'Expected answer: immediately / within 5 minutes, skin to skin, for at least 1 hour.' },
  { who: 'Mother', step: 's5', q: 'Can you show me how you hold your baby to breastfeed?', a: 'Mother demonstrates the four positioning points and a good latch.' },
  { who: 'Mother', step: 's5', q: 'Has anyone shown you how to express milk by hand? Can you show me?', a: 'Mother describes or demonstrates hand expression.' },
  { who: 'Mother', step: 's6', q: 'Has your baby had anything other than breast milk since birth?', a: 'Expected answer: no, or yes with a medical reason she understands.' },
  { who: 'Mother', step: 's7', q: 'Has your baby been with you all the time since birth?', a: 'Expected answer: yes, never separated more than 1 hour (unless medically needed).' },
  { who: 'Mother', step: 's8', q: 'How do you know when your baby wants to feed?', a: 'Names at least two cues, e.g. opening mouth, turning head, sucking hand.' },
  { who: 'Mother', step: 's9', q: 'What were you told about using bottles or pacifiers?', a: 'Can explain at least one risk (nipple confusion, less milk, hygiene).' },
  { who: 'Mother', step: 's10', q: 'If you have a breastfeeding problem after going home, where will you get help?', a: 'Names a specific place: Klinik Kesihatan, support group, ward phone number.' },
];

/* Ward self-audit (based on 2018 indicators) */
const AUDIT = [
  { step: 's1a', items: ['No formula, bottle or teat branding anywhere in clinical areas', 'Formula purchased, not received free or at low cost', 'Staff accept no gifts or sponsorship from formula companies'] },
  { step: 's1b', items: ['Policy summary displayed in maternity, postnatal and NICU areas in local languages', 'Staff can describe two policy elements', 'New staff are oriented to the policy'] },
  { step: 's1c', items: ['Key practice data collected (skin-to-skin, exclusive BF, rooming-in)', 'Data reviewed with ward staff recently', 'Action plan exists for indicators below target'] },
  { step: 's2', items: ['≥80% of clinical staff trained in the past 2 years', 'Competency of staff assessed and recorded', 'Non-clinical staff oriented'] },
  { step: 's3', items: ['Antenatal breastfeeding counselling documented', 'No group instruction on formula preparation'] },
  { step: 's4', items: ['Skin-to-skin within 5 min for ≥1 h after vaginal births', 'Skin-to-skin offered after caesarean as soon as mother responsive', 'Babies observed for safety during skin-to-skin'] },
  { step: 's5', items: ['Mothers helped with positioning and attachment within 6 h', 'All mothers taught hand expression', 'NICU mothers helped to express within 1–2 h'] },
  { step: 's6', items: ['Every supplement has a documented medical reason', 'Supplements given by cup, spoon or syringe', 'Formula stored out of sight'] },
  { step: 's7', items: ['Rooming-in 24 h for healthy babies, including nights', 'Separations documented with reason', 'NICU parents have unrestricted access'] },
  { step: 's8', items: ['Mothers can name two feeding cues', 'No fixed feeding schedules for healthy term babies'] },
  { step: 's9', items: ['No routine bottles, teats or pacifiers', 'Mothers counselled on risks', 'Feeding cups available'] },
  { step: 's10', items: ['Mothers told where to get help after discharge', 'Referral to Klinik Kesihatan / support group documented'] },
];

/* Facts for the daily card */
const FACTS = [
  ['Skin-to-skin', 'Within 5 minutes of birth, uninterrupted for at least 1 hour.'],
  ['The 80% rule', 'Most BFHI indicators need at least 80% of sampled mothers or staff to meet them.'],
  ['NICU expressing', 'Start within 1–2 hours, at least 8 times in 24 hours.'],
  ['Breast milk is 88% water', 'Healthy breastfed babies need no water, even in hot weather.'],
  ['Late cue', 'Crying means "calm me first, then feed me".'],
  ['Wet nappies', 'More than 6 in 24 hours (after the first days) suggests enough milk.'],
  ['EBM in the fridge', 'Healthy baby: under 8 days. Preterm or sick: 48 hours.'],
  ['Warmed EBM', 'Use within 1 hour. Never microwave.'],
  ['Training', '≥80% of health professionals trained in the previous 2 years.'],
  ['Rooming-in', 'Mothers should not be separated from their baby for more than 1 hour without a medical reason.'],
  ['Step 9 in 2018', 'Counsel on the use and risks of bottles, teats and pacifiers.'],
  ['Colostrum', 'Yellow from beta-carotene; the baby’s first immunisation.'],
  ['Attachment', 'Wide mouth, lower lip out, chin touching, more areola above.'],
  ['Discharge', 'Every mother must know where to get breastfeeding help at home.'],
];

/* EBM storage rules (KKM / JKN Sarawak).
   Each rule: {h: hours} | {d: days, counted inclusively as in the KKM label example} | {m: months}; null = not recommended.
   healthy = term healthy baby, pre = preterm / sick baby. */
const EBM = [
  { id: 'room', label: 'Room temperature (25–37 °C)', healthy: { h: 4 }, pre: { h: 4 } },
  { id: 'ac', label: 'Air-conditioned room (15–25 °C)', healthy: { h: 8 }, pre: null },
  { id: 'cold', label: 'Air-conditioned room (below 15 °C)', healthy: { h: 24 }, pre: null },
  { id: 'fridge', label: 'Fridge, main compartment (2–4 °C)', healthy: { d: 7 }, pre: { h: 48 }, note: 'If it will not be used within 5 days, move it to the freezer.' },
  { id: 'f1', label: '1-door fridge, freezer compartment', healthy: { d: 14 }, pre: { d: 14 } },
  { id: 'f2', label: '2-door fridge freezer (−20 °C)', healthy: { m: 3 }, pre: { m: 3 } },
  { id: 'deep', label: 'Deep freezer (−20 °C)', healthy: { m: 6 }, pre: { m: 3 } },
  { id: 'thaw', label: 'Thawed in fridge (from frozen)', healthy: { h: 24 }, pre: { h: 12 }, note: 'Thawed milk must not be refrozen. Once warmed, use within 1 hour.' },
];
