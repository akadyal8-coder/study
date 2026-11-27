# PROGRESS (آخر تحديث: الجولة 6A)
ملفات: index.html، manifest.json، sw.js (cache sf-v5)، أيقونات. بيانات: localStorage (studyflow_v1) + IndexedDB (sf_files). أي حقل جديد يضاف في mig() (لا تستدع today() داخل mig لأنها تعرّف بعدها).

## الجولة 5 (مكتملة ومختبرة بـ Node ما لم يذكر خلاف ذلك)
- بنك الاختبارات: تصحيح آلي لـ match (يشترط verification=official/confirmed، والنتيجة صح فقط إذا كل الأزواج صحيحة)؛ تصحيح يدوي لـ short/case/غير المؤكد (صحيحة/جزئية/خاطئة) في شاشة النتيجة ولا يدخل في الدرجة الآلية؛ عرض المصحح آليا/يدويا/بلا إجابة؛ منع تكرار المحاولة (att.rid=وقت بدء الجلسة)؛ منع تكرار الأخطاء (src)؛ تصدير بنك المادة كاملا JSON؛ ضعف حسب الموضوع والمحاضرة؛ اختبار من الأخطاء غير المتقنة (اختبار افتراضي xm_<sid>).
- دمج الاختبارات غير المحلولة في الخطة: p.ex=[{eid,mins}] على يوم دراسة نفس المادة قبل اختبارها، بحد أقصى نصف ساعات اليوم، بعد موافقة المستخدم (زر ادمج + تأكيد). لا يغيّر مادة اليوم. يظهر في تبويب الاختبارات وفي لوحة اليوم.
- البطاقات (تبويب جديد S.cards): مصطلح/تعريف/سؤال/حالة/صورة (رابط)، إنشاء/تعديل/حذف، بحث وتصفية، قلب، خلط، الصعبة فقط، حفظ تقدم الجلسة (S.cr)، Again/Hard/Good/Easy (SM-2 مبسط، لا يتجاوز تاريخ اختبار المادة)، عدادات جديدة/مستحقة/متقنة(>=21 يوم)/صعبة، استيراد/تصدير JSON مع قالب وبرومت، تحويل أسئلة البنك والأخطاء لبطاقات بلا تكرار. حقل ai:{gen,model,ver} جاهز للذكاء الاصطناعي لاحقا. لا يعدل الخطة.
- دفتر الأخطاء: حقول (إجابتي، الصحيحة، الشرح، السبب بـ7 تصنيفات، مصدر، صفحة، محاضرة، تاريخ، عدد التكرار، موعد المراجعة، إتقان، ملاحظات)، فلترة بالمادة/الحالة، «راجعته» بفواصل 1/3/7/14/30، إعادة فتح تلقائي عند تكرار الخطأ في اختبار لاحق، تحويل لبطاقات، اختبار من الأخطاء.
- مؤشر الفهم لكل محاضرة (l.u: أحمر..أزرق) مستقل عن المراحل ويُعرض بجانب نتيجة الاختبارات الفعلية للمحاضرة.
- التحديثات: الـ SW لم يعد يفعّل skipWaiting تلقائيا ولا يعيد تحميل الصفحة؛ يظهر إشعار، والتطبيق مرفوض أثناء مؤقت/اختبار/جلسة بطاقات، ويحفظ قبل التطبيق.

## متبقٍ (بالأولوية)
1. عرض الاختبارات المدمجة داخل شاشة الخطة والتقويم (حاليا: بيانات الخطة + الاختبارات + اليوم فقط)، وإعادة بناء الخطة تحذفها (تُعاد يدويا).
2. تعديل أزواج match من واجهة بنك الأسئلة (التعديل عبر إعادة الاستيراد؛ تعديل الإجابة/التأكيد لـ mcq/tf موجود).
3. رفع صور البطاقات إلى IndexedDB (حاليا رابط http/data فقط).
4. جدولة مراجعة الأخطاء كمهام في التقويم (حاليا موعد لكل خطأ + عداد على لوحة اليوم).
5. تحليلات، heatmap، معدل جامعي موسع، Focus، XP، تأمل، طوارئ، محاكاة الخطة، بحث شامل، ICS، LTR. ثم AI.

## لم يختبر (يدوي على الآيباد/المتصفح)
واجهة الأزرار على اللمس والتخطيط (لم يُرسم في متصفح؛ اختبر توليد HTML فقط)، سلوك إشعار تحديث Service Worker الفعلي، الرفع وIndexedDB، النسخة الشاملة مع الملفات، عرض PDF، المؤقت بعد الإغلاق، التسليم التلقائي بالخلفية، التثبيت كـ PWA، عرض صور البطاقات.

## قائمة اختبار يدوي إضافية للجولة 5
9 استورد JSON فيه سؤال match بـ verification=official وحلّه 10 أنشئ بطاقات من خطأ وراجعها بـ Good ثم تأكد من تاريخ القادمة 11 انشر نسخة جديدة وافتح التطبيق: يظهر شريط التحديث ولا يعيد التحميل؛ ابدأ اختبارا وتأكد أن الزر معطل؛ أنهِ الاختبار ثم طبّق 12 ادمج اختبارا غير محلول في الخطة وتحقق من تاريخه

## اختبر آليا (Node، 56 فحصا: ترحيل بيانات قديمة ونسخة قديمة، رسم كل التبويبات، match، الدرجات، التصحيح اليدوي، منع تكرار المحاولات والأخطاء، إعادة فتح الخطأ، اختبار الأخطاء، استيراد البطاقات ورفض الخاطئ، SM-2، سقف تاريخ الاختبار، البطاقات من الأسئلة والأخطاء، دمج الخطة، النسخ الاحتياطي والاستعادة)
اختبارات الجولات 1-4 (حسب السجل الأصلي): ترحيل بيانات قديمة، رفض JSON خاطئ، قبول الصحيح، منع التكرار، حساب الدرجة، عدم تصحيح غير المؤكد، نقل الأخطاء، حفظ التقدم، اختبار مخصص، رسم كل الشاشات.

## سجل الجولات السابقة (محفوظ من الجولة 4)
ملفات: index.html، manifest.json، sw.js (cache sf-v4، network-first للصفحة، skipWaiting+claim، إعادة تحميل عند تحديث نسخة)، أيقونات. بيانات: localStorage (studyflow_v1) + IndexedDB (sf_files). أي حقل جديد يضاف في mig().
## مكتمل
- الجولات 1-3: انظر السجل السابق (خطة، مؤقت، محاضرات بمراحل مستقلة، مراجعة متباعدة، تقويم، مكتبة ملفات، حملات متعددة، درجات لكل مادة)
- الجولة 4: بنك اختبارات لكل مادة (سنة/نوع/عدد/ملف+نموذج بلا تكرار ملف، آخر سؤال، محاولات ومقارنة، أسئلة مهمة/صعبة/متكررة، موضوع/محاضرة لكل سؤال، كشف التكرار النصي، تكرار المواضيع)
- استيراد/تصدير JSON (mcq, tf, match, short, case) مع تحقق ومعاينة وتعديل وقالب وبرومت جاهز؛ الإجابات غير المؤكدة لا تُصحح آليا
- وضع تدريب (تصحيح فوري، شرح، إعادة، حفظ التقدم) ووضع اختبار (مؤقت، تنقل، تمييز، تسليم تلقائي، حفظ عند الإغلاق)؛ نتيجة بالموضوع والضعف والمحاضرات والمقارنة؛ اختبار مخصص (خاطئة/مهمة/متكررة/غير محلولة)؛ نقل الأخطاء لدفتر الأخطاء؛ جدولة إعادة الحل كمهمة في التقويم
- لوحة تحكم: محاضرات/صفحات متبقية، اختبارات غير محلولة، مراجعات، جاهزية (40% صفحات + 30% إتقان + 30% اختبارات آلية) بطريقة معروضة، ساعات لكل مادة، توقع الانتهاء، فعلي مقابل الخطة، أضعف المواضيع
## (قديم) متبقٍ بعد الجولة 4
1. إضافة الاختبارات غير المحلولة إلى الخطة نفسها (حاليا مهمة فقط)  2. match بلا تصحيح آلي  3. بطاقات، تحليلات، heatmap، تأمل يومي، XP، طوارئ، محاكاة، طاقة، بحث شامل، ICS، LTR  4. AI (البنية جاهزة: حقول verification/topic/lecture/source/page لكل سؤال)
## (قديم) اختبر آليا (Node)
ترحيل بيانات قديمة، رفض JSON خاطئ، قبول الصحيح، منع التكرار، حساب الدرجة، عدم تصحيح غير المؤكد، نقل الأخطاء، حفظ التقدم، اختبار مخصص، رسم كل الشاشات.
## (قديم) لم يختبر (يدوي على الآيباد)
IndexedDB والرفع، منع تكرار الملف، النسخة الشاملة واستعادتها، عرض PDF، Service Worker والتحديث، المؤقت بعد الإغلاق، التسليم التلقائي أثناء الخلفية، التثبيت.
## قائمة اختبار يدوي (الجولة 4)
1 افتح الرابط HTTPS في Safari وثبته 2 أضف مادة+محاضرة، أغلق وافتح: تبقى 3 فعّل وضع الطيران وافتح: يعمل 4 ارفع PDF في الملفات ثم ارفع نفسه من الاختبارات: رسالة «موجود مسبقا» 5 صدّر نسخة شاملة، احذف ملفا، استورد: يعود 6 استورد JSON القالب، أجب، سلّم: تحقق الدرجة 7 ابدأ اختبارا بوقت دقيقة، أغلق التطبيق، افتحه بعد دقيقة: يُسلَّم 8 انشر نسخة جديدة وأعد فتح التطبيق مرتين: النسخة الجديدة والملفات باقية

## الجولة 6A (جزئية)
- تبويب التحليلات: فلاتر التاريخ والمادة والنشاط والحملة، ساعات وجلسات ومخطط مقابل فعلي، رسم آخر 31 يوما، Heatmap سنوي للساعات مع تفاصيل اليوم، CSV وطباعة المتصفح.
- جاهزية بسبعة أوزان قابلة للتعديل مع تغطية البيانات؛ المراجعات تقاس بالموعد الحالي لا بتاريخ الأداء. الجاهزية الحالية منفصلة عن فلتر الأرشيف.
- عرض الاختبارات المجدولة في الخطة والتقويم، وعرض مواعيد البطاقات والأخطاء في تفاصيل التقويم مع تنبيه التعارض. إعادة بناء الخطة تحاول الحفاظ على الاختبارات وتمنع التطبيق إذا تعذر ذلك.
- اختبار Node: فحص صياغة JS وSW، 8 assertions للجاهزية والساعات والفلاتر وتوليد واجهة التحليلات والخطة. لم يختبر متصفح حقيقي أو iPad.
- متبقٍ من الجولة 6: تعديل أزواج المطابقة، صور البطاقات المحلية، سجل تاريخي للأحداث، تقسيم الجلسات عند منتصف الليل (السجلات الحالية لا تحفظ فترات التوقف)، رسوم وتحليلات الأداء الموسعة، مقارنة الحملات جنبًا لجنب، مقاييس Heatmap الأخرى، تقارير موسعة، اختبار الجدولة والتقويم والتخزين فعليا. ثم الجولات 7–17. لا AI خارجي بعد.

## Round 6B (partial extension)
Added local tools tab: GPA records and weighted normalized GPA, focus timer with a time goal, derived XP, daily reflection, read-only schedule capacity simulation, basic emergency suggestion, cross-section search, ICS study-plan export, and manually pasted AI notes. Extra fields migrate and archive with campaigns. No external AI API. These are basic implementations, not all requested rounds. Syntax checked with Node; no browser/device verification. Still pending: full analytics extensions, exact midnight session splitting, matching editor, local flashcard images, full GPA grade scale rules, Pomodoro/countdown, full energy-aware planning, robust plan simulation, locks, notifications, secure AI backend and tutor/analyzer/coach, final design and browser testing.

## Round 7
Added local AI prompt builder for tutor, exam analysis, coach and mock exams, saved responses, countdown cap and auto-finish while app runs, responsive layout adjustments. No live API, browser or iPad testing. Remaining prior gaps are not closed.

## Round 8
New timer sessions track active segments and split at local midnight; legacy paused timers retain old attribution. Fixed archive selector. Three Node assertions passed. Chromium localhost navigation blocked by administrator; browser/offline/iPad tests remain pending.

## Round 9
Optional same-origin AI endpoint and explicit consent before sending a prompt. Server-side key, request size and output caps, local-only bind and in-memory daily request cap. Manual mode remains. Prototype requires authenticated HTTPS proxy for remote use; live provider and browser not verified. Previous outstanding features remain.

## Round 10 — interface refinement
Added persistent automatic/light/dark theme selection, branded header, landscape sidebar at 900px, print styles, accessible current navigation state and countdown display consistency. Corrected obsolete AI text. JS syntax checks passed for app, worker and server. Chromium navigation blocked by administrator for both file and intercepted HTTPS URLs; no functional browser verification. Existing advanced features remain partial; AI server remains prototype, not deployed.

## Round 11
Added optional Pomodoro focus and persisted break countdown; breaks are not study sessions. Validated focus duration. Break completion is displayed while app is open; no background alarm or automatic next cycle. Syntax checks only; browser and iPad tests pending.

## Round 12
Per-subject grade targets, validation of scores and cumulative weights, lost points and maximum attainable grade, read-only remaining-score scenario. GPA input validation improved. Six grade calculation assertions and syntax checks passed. Browser and iPad testing pending; GPA scale mapping and other advanced features remain incomplete.

## Round 13
Added same-scale GPA calculation and read-only target scenario with prior credits and quality points. Mixed scales excluded from exact calculation; legacy equivalent display retained and labeled. Four calculation assertions and syntax checks passed. No browser/device verification.

## Round 14
Derived XP, nine progress badges, study streak and subject/activity time breakdown. No new persistent schema. Browser and device tests still pending.

Round 15: AI exam/mock prompts specify JSON schema; direct AI response import uses existing exam preview and duplicate handling, requires matching subject and forces all AI answers unconfirmed. Syntax checked. Browser and live API not verified. Remaining: comprehensive backup validation, local card images, matching editor, deployment and Safari tests.

## Round 16
Added GitHub Pages workflow, local card images via existing IndexedDB file store, matching pair editor, apostrophe escaping, and scoped static-only service-worker cache. Syntax checks passed. No claim of comprehensive security review or real iPad testing. Remaining: full browser/offline/backup tests, robust import validation, automatic PDF extraction, advanced analytics and live AI deployment.

## Round 17 — release candidate
Added campaign bounds validation, local-date setup, basic backup structure validation, active-session import guard and FileReader error handling. Updated service worker cache and GitHub Pages instructions. Backup validation is not a complete security audit; file restoration is not atomic with localStorage. Chromium launched but navigation to file and intercepted HTTPS was blocked by administrator policy; real browser, offline, IndexedDB and iPad tests remain outstanding. AI provider not tested. Do not describe this as production verified.

## Round 18
Added optional PDF input to AI tab, external HTTPS endpoint and ephemeral access token, authenticated server with exact-origin CORS and PDF forwarding to Responses API. Syntax checks only; live API, PDF extraction quality, browser and iPad remain unverified. Existing offline functionality retained but not prioritized.

Round 19: Node start/test scripts, environment template, clearer AI errors, PDF size and origin checks. No real provider or iPad verification.

## Round 20
Removed paid API backend and configuration; ChatGPT manual workflow, flashcard JSON import, static deployment. Prior server instructions superseded. Browser/iPad verification pending.
