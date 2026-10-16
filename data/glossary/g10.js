/* 大項目10「AI倫理・AIガバナンス」の用語 */

/* ── L08 国内外のガイドライン ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "ai-ethics", term: "AI 倫理", reading: "えーあいりんり", aliases: ["AI倫理"], kw: ["AI 倫理"], home: "L08",
  short: "AI の開発・提供・利用で尊重すべき価値と行動のあり方を考える分野。人間の尊厳、公平性、プライバシー、安全性、透明性などを扱い、法令で決まっていない場面も含めて「どう作り、どう使うべきか」を問う。",
  src: [{ t: "統合イノベーション戦略推進会議決定「人間中心の AI 社会原則」（2019年3月29日）", u: "https://www8.cao.go.jp/cstp/ai/aigensoku.pdf" }, { t: "Jobin, A., Ienca, M. & Vayena, E. (2019). The global landscape of AI ethics guidelines", u: "https://doi.org/10.1038/s42256-019-0088-2" }] },
{ id: "ai-governance", term: "AI ガバナンス", reading: "えーあいがばなんす", aliases: ["AIガバナンス"], kw: ["AI ガバナンス"], home: "L08",
  short: "AI の利活用で生じるリスクを、ステークホルダーが受け入れられる水準で管理しつつ、AI がもたらす便益を最大化するための、技術的・組織的・社会的な仕組みの設計と運用（AI事業者ガイドラインの定義）。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "value-principles", term: "価値原則", reading: "かちげんそく", kw: ["価値原則"], home: "L08",
  short: "AI のガイドラインが掲げる、尊重すべき価値を原則の形で示したもの。人間中心、公平性、透明性、プライバシー、安全性、アカウンタビリティなどが代表で、国や組織を越えて共通する部分が多い。具体的な手順を定めるルールとは区別される。",
  src: [{ t: "OECD.AI: OECD AI Principles overview", u: "https://oecd.ai/en/ai-principles" }, { t: "Jobin, A., Ienca, M. & Vayena, E. (2019). The global landscape of AI ethics guidelines", u: "https://doi.org/10.1038/s42256-019-0088-2" }] },
{ id: "hard-law", term: "ハードロー", reading: "はーどろー", kw: ["ハードロー"], home: "L08",
  short: "法律や規則のように法的な拘束力を持ち、違反すると罰則や制裁金などで強制されるルール。AI では EU の AI 法が代表例。守るべきことが明確になる一方、技術の速い変化に合わせて改正するのに時間がかかる。",
  src: [{ t: "Regulation (EU) 2024/1689 (Artificial Intelligence Act)（EUR-Lex）", u: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "soft-law", term: "ソフトロー", reading: "そふとろー", kw: ["ソフトロー"], home: "L08",
  short: "ガイドライン、原則、業界の自主基準のように、法的な拘束力はないが関係者の行動を方向づける規範。変化に合わせて柔軟に見直せる反面、守らせる強制力は弱い。日本の AI事業者ガイドラインは「非拘束的なソフトロー」とされる。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "risk-based-approach", term: "リスクベースアプローチ", reading: "りすくべーすあぷろーち", aliases: ["リスクベース・アプローチ", "リスクベースのアプローチ"], kw: ["リスクベースアプローチ"], home: "L08",
  short: "AI の用途ごとにリスクの大きさ（危害の大きさとその起こりやすさ）を見積もり、リスクが大きいものほど厳しい対策や規制を課す考え方。すべての AI に一律の規制をかけず、対策の程度をリスクに見合ったものにする。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "European Commission: AI Act（Regulatory framework on AI）", u: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }] },

/* 本文に出てくる他の専門用語 */
{ id: "ai-business-guidelines", term: "AI事業者ガイドライン", reading: "えーあいじぎょうしゃがいどらいん", aliases: ["AI 事業者ガイドライン"], kw: [], home: "L08",
  short: "総務省と経済産業省が2024年4月に策定した、AI の開発者・提供者・利用者に向けた日本の統一的なガイドライン。法的拘束力のないソフトローで、改訂を重ねており、2026年3月に第1.2版が公表された。",
  src: [{ t: "経済産業省「AI事業者ガイドライン」（第1.2版の公表ページ）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html" }] },
{ id: "human-centric-ai-principles", term: "人間中心の AI 社会原則", reading: "にんげんちゅうしんのえーあいしゃかいげんそく", aliases: ["人間中心のAI社会原則"], kw: [], home: "L08",
  short: "2019年3月に日本政府（統合イノベーション戦略推進会議）が決定した AI の基本原則。人間の尊厳、多様性と包摂、持続性の3つの基本理念と、人間中心の原則や「公平性、説明責任及び透明性の原則」など7つの原則を示す。",
  src: [{ t: "統合イノベーション戦略推進会議決定「人間中心の AI 社会原則」（2019年3月29日）", u: "https://www8.cao.go.jp/cstp/ai/aigensoku.pdf" }] },
{ id: "ai-promotion-act", term: "AI 推進法", reading: "えーあいすいしんほう", aliases: ["AI推進法", "人工知能関連技術の研究開発及び活用の推進に関する法律"], kw: [], home: "L08",
  short: "「人工知能関連技術の研究開発及び活用の推進に関する法律」（令和7年法律第53号）の通称。2025年6月公布、9月全面施行。内閣に人工知能戦略本部を置き、人工知能基本計画を定める推進のための法律で、罰則はない。",
  src: [{ t: "人工知能関連技術の研究開発及び活用の推進に関する法律（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/507AC0000000053" }, { t: "内閣府「人工知能関連技術の研究開発及び活用の推進に関する法律」", u: "https://www8.cao.go.jp/cstp/ai/ai_act/ai_act.html" }] },
{ id: "oecd-ai-principles", term: "OECD AI 原則", reading: "おーいーしーでぃーえーあいげんそく", aliases: ["OECD AI原則", "OECDのAI原則"], kw: [], home: "L08",
  short: "OECD が2019年5月に理事会勧告として採択した、AI に関する初の政府間の基準。信頼できる AI のための5つの価値に基づく原則と、各国政府への5つの勧告からなる。2024年5月に改訂された。",
  src: [{ t: "OECD.AI: OECD AI Principles overview", u: "https://oecd.ai/en/ai-principles" }, { t: "OECD Legal Instruments: Recommendation of the Council on Artificial Intelligence (OECD/LEGAL/0449)", u: "https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449" }] },
{ id: "eu-ai-act", term: "EU AI 法", reading: "いーゆーえーあいほう", aliases: ["EU AI法", "欧州AI法", "AI Act"], kw: [], home: "L08",
  short: "EU が2024年に定めた AI の包括的な規則（Regulation (EU) 2024/1689）。AI をリスクの大きさで4段階に分け、許容できないリスクの用途を禁止し、高リスクの AI に厳しい義務を課す。違反には高額の制裁金がある。",
  src: [{ t: "Regulation (EU) 2024/1689 (Artificial Intelligence Act)（EUR-Lex）", u: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" }, { t: "European Commission: AI Act（Regulatory framework on AI）", u: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }] },
{ id: "hiroshima-ai-process", term: "広島 AI プロセス", reading: "ひろしまえーあいぷろせす", aliases: ["広島AIプロセス"], kw: [], home: "L08",
  short: "2023年5月の G7 広島サミットを受けて、日本が主導して始めた生成 AI などの高度な AI に関する国際的なルール作りの枠組み。同年12月に、国際指針と国際行動規範などからなる「広島 AI プロセス包括的政策枠組み」をまとめた。",
  src: [{ t: "総務省「広島AIプロセス」", u: "https://www.soumu.go.jp/hiroshimaaiprocess/" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "unesco-ai-ethics", term: "AI の倫理に関する勧告", reading: "えーあいのりんりにかんするかんこく", aliases: ["AIの倫理に関する勧告"], kw: [], home: "L08",
  short: "UNESCO が2021年11月に、加盟193か国の採択で定めた AI 倫理の国際的な勧告。人間の尊厳と人権、平和で公正なつながりのある社会、多様性と包摂、環境と生態系の繁栄の4つを中核の価値に掲げる。",
  src: [{ t: "UNESCO: Recommendation on the Ethics of Artificial Intelligence", u: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" }] },
{ id: "agile-governance", term: "アジャイル・ガバナンス", reading: "あじゃいるがばなんす", aliases: ["アジャイルガバナンス"], kw: [], home: "L08",
  short: "ルールや手続を事前に固定せず、「環境・リスク分析」「ゴール設定」「システムデザイン」「運用」「評価」のサイクルを、多様な関係者で継続的かつ高速に回して見直し続けるガバナンスの考え方。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "nist-ai-rmf", term: "AI リスクマネジメントフレームワーク", abbr: "AI RMF", reading: "えーあいりすくまねじめんとふれーむわーく", aliases: ["AIリスクマネジメントフレームワーク", "NIST AI RMF"], kw: [], home: "L08",
  short: "米国国立標準技術研究所（NIST）が2023年1月に公表した、AI のリスク管理のための任意の枠組み。GOVERN（統治）・MAP（状況の把握）・MEASURE（測定）・MANAGE（対処）の4つの機能で組織の取組を整理する。",
  src: [{ t: "NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0)", u: "https://doi.org/10.6028/NIST.AI.100-1" }] },
{ id: "aisi", term: "AI セーフティ・インスティテュート", abbr: "AISI", reading: "えーあいせーふてぃいんすてぃてゅーと", aliases: ["AIセーフティ・インスティテュート"], kw: [], home: "L08",
  short: "AI の安全性の評価手法や基準を検討するため、2024年2月に情報処理推進機構（IPA）に設置された日本の機関。英国・米国などに置かれた同種の機関と連携して活動している。",
  src: [{ t: "AI Safety Institute（AISI）", u: "https://aisi.go.jp/" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "generative-ai", term: "生成 AI", reading: "せいせいえーあい", aliases: ["生成AI"], kw: ["生成 AI"], home: "T06",
  short: "文章・画像・音声・プログラムなどを新たに作り出す AI の総称。大規模言語モデルや拡散モデルなどを基盤とする。便利な一方で、偽情報の生成、権利の侵害、ハルシネーションといった新しいリスクも生んだ。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] }
]);

/* ── L09 プライバシー ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "camera-image-guidebook", term: "カメラ画像利活用ガイドブック", reading: "かめらがぞうりかつようがいどぶっく", aliases: ["カメラ画像利活用ガイドブックver3.0"], kw: ["カメラ画像利活用ガイドブック"], home: "L09",
  short: "総務省と経済産業省（IoT 推進コンソーシアム）が、商用目的でカメラ画像を利活用する事業者向けに、プライバシー保護の配慮事項を整理した手引き。最新は2022年3月の ver3.0。法令遵守を前提に、生活者との信頼関係づくりを促す。",
  src: [{ t: "総務省「カメラ画像利活用ガイドブックver3.0」の公表（2022年3月30日）", u: "https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000152.html" }, { t: "IoT推進コンソーシアム・総務省・経済産業省「カメラ画像利活用ガイドブック ver3.0」（2022年3月）", u: "https://www.soumu.go.jp/main_content/000803603.pdf" }] },
{ id: "privacy-by-design", term: "プライバシー・バイ・デザイン", reading: "ぷらいばしーばいでざいん", aliases: ["プライバシーバイデザイン", "Privacy by Design"], kw: ["プライバシー・バイ・デザイン"], home: "L09",
  short: "プライバシー保護を、システムやサービスの企画・設計の段階から組み込んでおく考え方。カナダ・オンタリオ州の情報・プライバシー・コミッショナーだったアン・カブキアンが提唱し、事後対処より事前予防、初期設定での保護など7原則からなる。",
  src: [{ t: "Cavoukian, A. Privacy by Design: The 7 Foundational Principles（総務省掲載の参考資料）", u: "https://www.soumu.go.jp/main_content/000196321.pdf" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },

/* 本文に出てくる他の専門用語 */
{ id: "privacy", term: "プライバシー", reading: "ぷらいばしー", kw: [], home: "L09", noAuto: true,
  short: "私生活をみだりに公開されない利益として裁判例で認められてきた権利・利益。現在は、本人の合理的な期待に反する情報の取得・推測・利用も問題とされる。個人情報保護法の規律より広く、違法でなくても問題になりうる。",
  src: [{ t: "IoT推進コンソーシアム・総務省・経済産業省「カメラ画像利活用ガイドブック ver3.0」（2022年3月）", u: "https://www.soumu.go.jp/main_content/000803603.pdf" }] },
{ id: "portrait-right", term: "肖像権", reading: "しょうぞうけん", kw: [], home: "L09",
  short: "承諾なしに、みだりに容ぼうや姿態を撮影されたり、それを公表されたりしない人格的な利益。法律に明文の規定はないが判例で認められており、侵害には損害賠償や差止めが請求できる。",
  src: [{ t: "IoT推進コンソーシアム・総務省・経済産業省「カメラ画像利活用ガイドブック ver3.0」（2022年3月）", u: "https://www.soumu.go.jp/main_content/000803603.pdf" }] },
{ id: "pia", term: "プライバシー影響評価", abbr: "PIA", reading: "ぷらいばしーえいきょうひょうか", aliases: ["Privacy Impact Assessment"], kw: [], home: "L09",
  short: "個人情報を扱うシステムや事業について、導入や変更の前に、情報の流れを整理し、プライバシーへのリスクを特定・評価して、対策を決める手法。規格に ISO/IEC 29134（JIS X 9251）がある。",
  src: [{ t: "個人情報保護委員会「PIAの取組の促進について－PIAの意義と実施手順に沿った留意点－」（2021年6月30日）", u: "https://www.ppc.go.jp/files/pdf/pia_promotion.pdf" }, { t: "IoT推進コンソーシアム・総務省・経済産業省「カメラ画像利活用ガイドブック ver3.0」（2022年3月）", u: "https://www.soumu.go.jp/main_content/000803603.pdf" },{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "face-identification", term: "顔識別", reading: "かおしきべつ", kw: [], home: "L09",
  short: "カメラに写った人の顔の特徴データを、あらかじめ登録したデータベースと照合し、登録された特定の個人を見つけ出すこと。撮影される人が、どのような照合が行われているかを認識しにくいため、特に慎重な配慮が求められる。",
  src: [{ t: "個人情報保護委員会「犯罪予防や安全確保のための顔識別機能付きカメラシステムの利用について」（2023年3月）", u: "https://www.ppc.go.jp/files/pdf/kaoshikibetsu_camera_system.pdf" }] },
{ id: "face-authentication", term: "顔認証", reading: "かおにんしょう", kw: [], home: "L09",
  short: "本人の求めに応じて、撮影した顔の特徴データを登録データと照合し、本人が主張する人物であることを確かめること。入退館の管理などに使われ、事前に本人の同意を得やすい。",
  src: [{ t: "個人情報保護委員会「犯罪予防や安全確保のための顔識別機能付きカメラシステムの利用について」（2023年3月）", u: "https://www.ppc.go.jp/files/pdf/kaoshikibetsu_camera_system.pdf" }] },
{ id: "differential-privacy", term: "差分プライバシー", reading: "さぶんぷらいばしー", aliases: ["Differential Privacy"], kw: [], home: "L09",
  short: "集計や学習の過程で、調整した雑音（ノイズ）を加え、ある1人のデータが含まれるかどうかで結果がほとんど変わらないようにして、個人の情報が推測されるのを防ぐ枠組み。Dwork らが2006年に提案した。",
  src: [{ t: "Dwork, C., McSherry, F., Nissim, K. & Smith, A. (2006). Calibrating Noise to Sensitivity in Private Data Analysis", u: "https://doi.org/10.1007/11681878_14" }] },
{ id: "data-minimization", term: "データ最小化", reading: "でーたさいしょうか", aliases: ["データの最小化"], kw: [], home: "L09",
  short: "個人データの収集・利用を、利用目的に必要な範囲に限るという原則（GDPR 5条1項(c)）。保存期間の制限は、GDPR では「記録保存の制限」という別の原則。データを持ちすぎず、漏えいや目的外利用のリスクを減らす。",
  src: [{ t: "Regulation (EU) 2016/679 (General Data Protection Regulation)（EUR-Lex）", u: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" }, { t: "IoT推進コンソーシアム・総務省・経済産業省「カメラ画像利活用ガイドブック ver3.0」（2022年3月）", u: "https://www.soumu.go.jp/main_content/000803603.pdf" }] }
]);

/* ── L10 公平性 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "algorithmic-bias", term: "アルゴリズムバイアス", reading: "あるごりずむばいあす", aliases: ["アルゴリズムのバイアス"], kw: ["アルゴリズムバイアス"], home: "L10",
  short: "AI やアルゴリズムの出力が、特定の個人や集団に系統的に不利（または有利）になる偏り。学習データの偏り、特徴量や目的関数の設計、人の使い方などから生じ、差別的な結果につながりうる。狭い意味では、データにはなく、アルゴリズムの設計だけで加わる偏りを指す。",
  src: [{ t: "NIST SP 1270 (2022). Towards a Standard for Identifying and Managing Bias in Artificial Intelligence", u: "https://doi.org/10.6028/NIST.SP.1270" }, { t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }] },
{ id: "fairness-definition", term: "公平性の定義", reading: "こうへいせいのていぎ", kw: ["公平性の定義"], home: "L10",
  short: "AI の判断が公平かどうかを測るための基準。集団ごとに陽性と判定される割合をそろえる人口統計学的パリティ、誤り率をそろえる均等化オッズ、似た個人を同様に扱う個人の公平性などがあり、互いに両立しないことがある。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }, { t: "Kleinberg, J., Mullainathan, S. & Raghavan, M. (2016). Inherent Trade-Offs in the Fair Determination of Risk Scores", u: "https://arxiv.org/abs/1609.05807" }] },
{ id: "sampling-bias", term: "サンプリングバイアス", reading: "さんぷりんぐばいあす", aliases: ["標本抽出の偏り"], kw: ["サンプリングバイアス"], home: "L10",
  short: "データ（標本）の集め方が無作為でないために、データの構成が本来対象とする集団（母集団）とずれてしまう偏り。例：顔画像のデータが肌の色の明るい人に偏り、肌の色の濃い人の認識精度が下がる。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }, { t: "Buolamwini, J. & Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification", u: "https://proceedings.mlr.press/v81/buolamwini18a.html" }] },
{ id: "sensitive-attribute", term: "センシティブ属性", reading: "せんしてぃぶぞくせい", aliases: ["センシティブな属性", "保護属性"], kw: ["センシティブ属性"], home: "L10",
  short: "人種、性別、国籍、年齢、宗教、政治的信念、障害の有無など、それを理由に不当な差別をしてはならない個人の属性。公平性を評価するときは、この属性で分けた集団ごとに AI の結果や誤り率を比べる。保護属性とも呼ぶ。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "Hardt, M., Price, E. & Srebro, N. (2016). Equality of Opportunity in Supervised Learning", u: "https://arxiv.org/abs/1610.02413" }] },
{ id: "proxy-variable", term: "代理変数", reading: "だいりへんすう", kw: ["代理変数"], home: "L10",
  short: "センシティブ属性そのものではないが、それと強く相関し、代わりの手がかりとして働いてしまう変数（例：居住地域の郵便番号が人種の手がかりになる）。センシティブ属性を除くだけでは差別を防げない原因になる。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "data-bias", term: "データの偏り", reading: "でーたのかたより", aliases: ["データバイアス"], kw: ["データの偏り"], home: "L10",
  short: "学習データが現実や対象の集団を正しく反映していないこと。特定の集団の不足（代表性の偏り）、過去の差別を含んだ記録（歴史的バイアス）、測り方やラベル付けの偏りなどがあり、AI はそれをそのまま学習してしまう。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },

/* 本文に出てくる他の専門用語 */
{ id: "fairness", term: "公平性", reading: "こうへいせい", kw: [], home: "L10",
  short: "AI の判断や結果が、人種・性別などの背景を理由に、特定の個人や集団を不当に差別しないこと。何をもって公平とするかには複数の定義があり、用途や社会の文脈に応じて選ぶ必要がある。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }] },
{ id: "group-fairness", term: "集団の公平性", reading: "しゅうだんのこうへいせい", aliases: ["グループ公平性"], kw: [], home: "L10",
  short: "センシティブ属性で分けた集団の間で、陽性と判定される割合や誤り率などの統計量をそろえることで公平性を測る考え方。人口統計学的パリティや均等化オッズが代表例である。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }] },
{ id: "individual-fairness", term: "個人の公平性", reading: "こじんのこうへいせい", aliases: ["個人公平性"], kw: [], home: "L10",
  short: "「似た個人は似たように扱う」ことを求める公平性の考え方（Dwork らが提案）。集団の統計量をそろえる集団の公平性と対になるが、何をもって似ているとするかの決め方が難しい。",
  src: [{ t: "Dwork, C., Hardt, M., Pitassi, T., Reingold, O. & Zemel, R. Fairness Through Awareness", u: "https://arxiv.org/abs/1104.3913" }] },
{ id: "demographic-parity", term: "人口統計学的パリティ", reading: "じんこうとうけいがくてきぱりてぃ", aliases: ["Demographic Parity", "統計的パリティ", "デモグラフィックパリティ"], kw: [], home: "L10",
  short: "公平性の定義の1つ。集団の間で、陽性と予測される割合（例：融資の承認率）が等しいことを求める。統計的パリティともいう。実際の結果（正解）がどうであったかは考慮しない。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }] },
{ id: "equalized-odds", term: "均等化オッズ", reading: "きんとうかおっず", aliases: ["Equalized Odds"], kw: [], home: "L10",
  short: "公平性の定義の1つ（Hardt ら, 2016年）。集団の間で、真陽性率と偽陽性率の両方が等しいことを求める。実際の結果が同じ人どうしで、AI の誤りの起こり方をそろえる考え方である。",
  src: [{ t: "Hardt, M., Price, E. & Srebro, N. (2016). Equality of Opportunity in Supervised Learning", u: "https://arxiv.org/abs/1610.02413" }] },
{ id: "equal-opportunity", term: "機会均等", reading: "きかいきんとう", aliases: ["Equal Opportunity"], kw: [], home: "L10", scope: ["L10"],
  short: "（公平性の定義の）機会均等。実際に陽性である人（例：返済できる人）のうち、正しく陽性と予測される割合（真陽性率）が集団の間で等しいことを求める（Hardt ら, 2016年）。均等化オッズの条件を緩めたもの。",
  src: [{ t: "Hardt, M., Price, E. & Srebro, N. (2016). Equality of Opportunity in Supervised Learning", u: "https://arxiv.org/abs/1610.02413" }] },
{ id: "bias-mitigation", term: "バイアス緩和", reading: "ばいあすかんわ", aliases: ["バイアスの緩和"], kw: [], home: "L10",
  short: "AI の不公平な偏りを小さくする技術。データの重み付けや再サンプリングなどの前処理、公平性の制約を加えた学習（学習中の処理）、集団ごとのしきい値の調整などの後処理の3つに大きく分けられる。",
  src: [{ t: "Mehrabi, N. et al. (2021). A Survey on Bias and Fairness in Machine Learning", u: "https://doi.org/10.1145/3457607" }, { t: "Hardt, M., Price, E. & Srebro, N. (2016). Equality of Opportunity in Supervised Learning", u: "https://arxiv.org/abs/1610.02413" }] },
{ id: "compas", term: "COMPAS", reading: "compas", kw: [], home: "L10",
  short: "米国の刑事司法で使われてきた、被告人の再犯リスクを評価するソフトウェア。2016年に報道機関 ProPublica が、再犯しなかった黒人被告が白人被告より「高リスク」と誤判定されやすいと報じ、公平性をめぐる論争の代表例になった。",
  src: [{ t: "Angwin, J. et al. (2016). Machine Bias（ProPublica）", u: "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing" }, { t: "Larson, J. et al. (2016). How We Analyzed the COMPAS Recidivism Algorithm（ProPublica）", u: "https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm" }] },
{ id: "gender-shades", term: "Gender Shades", reading: "gender shades", kw: [], home: "L10",
  short: "Buolamwini と Gebru が2018年に発表した研究。3つの商用の顔画像による性別分類システムを評価し、肌の色の濃い女性の誤り率が最大34.7%、肌の色の明るい男性では最大0.8%と、大きな差があることを示した。",
  src: [{ t: "Buolamwini, J. & Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification", u: "https://proceedings.mlr.press/v81/buolamwini18a.html" }] }
]);

/* ── L11 安全性とセキュリティ ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "adversarial-examples", term: "Adversarial Examples", reading: "adversarial examples", aliases: ["敵対的サンプル", "敵対的事例", "Adversarial Example", "Adversarial Attack", "敵対的攻撃"], kw: ["Adversarial Attack (Adversarial Examples)"], home: "L11",
  short: "人には見分けられないほど小さな加工（摂動）を入力に加えて、AI に高い確信度で誤った出力をさせる入力。これを用いる攻撃を Adversarial Attack（敵対的攻撃）という。深層ニューラルネットワークでは Szegedy ら（2013年）が報告した。",
  src: [{ t: "Szegedy, C. et al. (2013). Intriguing properties of neural networks", u: "https://arxiv.org/abs/1312.6199" }, { t: "Goodfellow, I. J., Shlens, J. & Szegedy, C. (2014). Explaining and Harnessing Adversarial Examples", u: "https://arxiv.org/abs/1412.6572" }, { t: "NIST AI 100-2e2025 (2025). Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations", u: "https://doi.org/10.6028/NIST.AI.100-2e2025" }] },
{ id: "security-by-design", term: "セキュリティ・バイ・デザイン", reading: "せきゅりてぃばいでざいん", aliases: ["セキュリティバイデザイン", "Security by Design", "Secure by Design"], kw: ["セキュリティ・バイ・デザイン"], home: "L11",
  short: "情報セキュリティを、システムの企画・設計の段階から組み込む考え方。後から対策を足すより手戻りとコストが少ない。内閣サイバーセキュリティセンター（NISC。2025年7月に国家サイバー統括室に改組）が定義し、AI事業者ガイドラインも求めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }, { t: "CISA: Secure by Design", u: "https://www.cisa.gov/securebydesign" }, { t: "金融庁「『金融分野におけるサイバーセキュリティに関するガイドライン』の一部改正について」（2025年7月4日。NISC の国家サイバー統括室への改組）", u: "https://www.fsa.go.jp/news/r7/sonota/20250704/20250704.html" }] },
{ id: "data-poisoning", term: "データ汚染", reading: "でーたおせん", aliases: ["データポイズニング", "データポイズニング攻撃", "Data Poisoning"], kw: ["データ汚染"], home: "L11",
  short: "学習データに不正なデータや誤ったラベルのデータを混ぜ込み、AI に誤った学習をさせる攻撃。性能を全体的に下げるものや、特定の入力のときだけ攻撃者の望む出力をさせる仕掛け（バックドア）を埋め込むものがある。",
  src: [{ t: "Biggio, B., Nelson, B. & Laskov, P. (2012). Poisoning Attacks against Support Vector Machines", u: "https://arxiv.org/abs/1206.6389" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "model-poisoning", term: "モデル汚染", reading: "もでるおせん", aliases: ["モデルポイズニング", "モデルポイズニング攻撃", "Model Poisoning"], kw: ["モデル汚染"], home: "L11",
  short: "学習データではなく、事前学習済みモデル、学習用のプログラム、学習済みモデル、連合学習の更新情報などを改ざんして、AI に不正な振る舞いを仕込む攻撃。汚染されたモデルを入手して使うと、バックドアを引き継ぐおそれがある。",
  src: [{ t: "Gu, T., Dolan-Gavitt, B. & Garg, S. (2017). BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain", u: "https://arxiv.org/abs/1708.06733" }, { t: "Bagdasaryan, E. et al. (2018). How To Backdoor Federated Learning", u: "https://arxiv.org/abs/1807.00459" }] },
{ id: "data-theft", term: "データ窃取", reading: "でーたせっしゅ", aliases: ["訓練データの窃取"], kw: ["データ窃取"], home: "L11",
  short: "AI の学習に使われたデータ（個人情報など）を盗み出す攻撃。不正アクセスなどの従来型の手口のほか、モデルへの問い合わせや入手したモデルの分析から推測・復元する、メンバーシップ推論攻撃、モデル反転攻撃、学習データの抽出などがある。",
  src: [{ t: "Shokri, R. et al. (2016). Membership Inference Attacks against Machine Learning Models", u: "https://arxiv.org/abs/1610.05820" }, { t: "Carlini, N. et al. (2020). Extracting Training Data from Large Language Models", u: "https://arxiv.org/abs/2012.07805" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "model-theft", term: "モデル窃取", reading: "もでるせっしゅ", aliases: ["モデル抽出攻撃", "モデル抽出", "Model Extraction"], kw: ["モデル窃取"], home: "L11",
  short: "AI モデルの機能やパラメータなどを盗む攻撃。代表例は、公開された API などに多数の問い合わせを行い、入出力の組から元のモデルとほぼ同じ働きをするモデルを複製するモデル抽出攻撃。不正アクセスでモデルそのものを盗む従来型の手口もある。",
  src: [{ t: "Tramèr, F. et al. (2016). Stealing Machine Learning Models via Prediction APIs", u: "https://arxiv.org/abs/1609.02943" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },

/* 本文に出てくる他の専門用語 */
{ id: "robustness", term: "頑健性", reading: "がんけんせい", aliases: ["ロバスト性", "堅牢性", "ロバストネス"], kw: [], home: "L11",
  short: "想定外の入力、ノイズ、環境の変化、攻撃などがあっても、AI が性能を保ち、著しく誤った判断をしない性質。AI事業者ガイドラインは「堅牢性（robustness）」として安全性の要素に挙げている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "evasion-attack", term: "回避攻撃", reading: "かいひこうげき", aliases: ["Evasion Attack"], kw: [], home: "L11",
  short: "運用中の AI に、Adversarial Examples のように細工した入力を与えて誤った判断をさせ、検知や分類をすり抜ける攻撃。AI事業者ガイドラインの別添で、機械学習に特有の脅威の1つとして整理されている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "fgsm", term: "FGSM", reading: "fgsm", aliases: ["Fast Gradient Sign Method"], kw: [], home: "L11",
  short: "Goodfellow ら（2014年）が提案した Adversarial Examples の作り方。損失関数の入力に対する勾配の符号の方向へ、入力の各値をわずかずつ動かす。1回の勾配計算で作れるため高速である。",
  src: [{ t: "Goodfellow, I. J., Shlens, J. & Szegedy, C. (2014). Explaining and Harnessing Adversarial Examples", u: "https://arxiv.org/abs/1412.6572" }] },
{ id: "adversarial-training", term: "敵対的訓練", reading: "てきたいてきくんれん", aliases: ["Adversarial Training"], kw: [], home: "L11",
  short: "Adversarial Examples を学習データに加えて訓練し、そうした入力に対しても正しく判定できるよう頑健性を高める対策。Goodfellow ら（2014年）は、FGSM の例に対する誤り率を 89.4% から 17.9% に下げた。",
  src: [{ t: "Goodfellow, I. J., Shlens, J. & Szegedy, C. (2014). Explaining and Harnessing Adversarial Examples", u: "https://arxiv.org/abs/1412.6572" }] },
{ id: "backdoor-attack", term: "バックドア攻撃", reading: "ばっくどあこうげき", kw: [], home: "L11",
  short: "特定の目印（トリガー）が入力に含まれたときだけ、攻撃者の望む誤った出力をするようにモデルを仕込む攻撃。普段は正常に動くため気づきにくい。例：特定のステッカーを貼った一時停止標識を速度制限標識と誤認させる（BadNets）。",
  src: [{ t: "Gu, T., Dolan-Gavitt, B. & Garg, S. (2017). BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain", u: "https://arxiv.org/abs/1708.06733" }] },
{ id: "membership-inference", term: "メンバーシップ推論攻撃", reading: "めんばーしっぷすいろんこうげき", aliases: ["メンバーシップ推論", "Membership Inference"], kw: [], home: "L11",
  short: "あるデータが AI の学習に使われたかどうかを、モデルの出力から推測する攻撃（Shokri ら）。たとえば病院のデータで学習したモデルなら、特定の人がその病院の患者であることが漏れるおそれがある。",
  src: [{ t: "Shokri, R. et al. (2016). Membership Inference Attacks against Machine Learning Models", u: "https://arxiv.org/abs/1610.05820" }] },
{ id: "model-inversion", term: "モデル反転攻撃", reading: "もでるはんてんこうげき", aliases: ["モデルインバージョン", "Model Inversion"], kw: [], home: "L11",
  short: "モデルの出力（確信度など）を手がかりに、学習データの特徴を復元する攻撃。顔認識モデルと人物の名前から、その人と分かる顔画像を復元できることが示された（Fredrikson ら, 2015年）。",
  src: [{ t: "Fredrikson, M., Jha, S. & Ristenpart, T. (2015). Model Inversion Attacks that Exploit Confidence Information and Basic Countermeasures", u: "https://doi.org/10.1145/2810103.2813677" }] },
{ id: "prompt-injection", term: "プロンプトインジェクション", reading: "ぷろんぷといんじぇくしょん", aliases: ["Prompt Injection", "間接プロンプトインジェクション"], kw: [], home: "L11",
  short: "大規模言語モデルへの入力や、モデルが読み込むウェブページ・文書に、開発者の意図を上書きする指示を紛れ込ませ、情報漏えいや不正な操作など想定外の動作をさせる攻撃。外部の文書に仕込むものを間接プロンプトインジェクションという。",
  src: [{ t: "OWASP Top 10 for LLM Applications 2025（LLM01:2025 Prompt Injection）", u: "https://genai.owasp.org/llm-top-10/" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "red-teaming", term: "レッドチーミング", reading: "れっどちーみんぐ", aliases: ["レッドチーム"], kw: [], home: "L11",
  short: "攻撃者の立場で AI システムを意図的に攻撃・悪用してみて、脆弱性や有害な出力などの問題を事前に洗い出す評価手法。日本の AI セーフティ・インスティテュート（AISI）も手法のガイドを公表している。",
  src: [{ t: "AISI「AI セーフティに関するレッドチーミング手法ガイド」", u: "https://aisi.go.jp/effort/effort_framework/guide_to_red_teaming_methodology_on_ai_safety/" }] }
]);

/* ── L12 悪用 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "deepfake", term: "ディープフェイク", reading: "でぃーぷふぇいく", aliases: ["Deepfake", "ディープフェイク動画"], kw: ["ディープフェイク"], home: "L12",
  short: "AI で作成・改変した、実在の人物・物・出来事に似せた画像・音声・動画で、本物と誤認されうるもの（EU AI 法の定義を要約）。GAN や拡散モデルなどで作られ、偽情報、なりすまし詐欺、同意のない性的な画像などに悪用される。",
  src: [{ t: "Regulation (EU) 2024/1689 (Artificial Intelligence Act)（EUR-Lex）", u: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" }, { t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }] },
{ id: "fake-news", term: "フェイクニュース", reading: "ふぇいくにゅーす", aliases: ["Fake News"], kw: ["フェイクニュース"], home: "L12",
  short: "ニュースの形などをとって広まる虚偽の情報のこと。国際的に定まった定義はなく、意図的な偽情報に限るか、意図しない誤情報も含むかなど、対象範囲も統一されていない。諸外国の政策文書では「偽情報（disinformation）」の語がよく使われる。",
  src: [{ t: "総務省「プラットフォームサービスに関する研究会 最終報告書」（2020年2月）", u: "https://www.soumu.go.jp/main_content/000668595.pdf" }] },

/* 本文に出てくる他の専門用語 */
{ id: "disinformation", term: "偽情報", reading: "にせじょうほう", aliases: ["Disinformation"], kw: [], home: "L12",
  short: "何らかの意図をもって作られ、広められる虚偽の情報（disinformation）。政治的・経済的な利益や社会の混乱を狙うものなどがある。意図のない誤りである誤情報（misinformation）と区別される。",
  src: [{ t: "総務省「プラットフォームサービスに関する研究会 最終報告書」（2020年2月）", u: "https://www.soumu.go.jp/main_content/000668595.pdf" }] },
{ id: "misinformation", term: "誤情報", reading: "ごじょうほう", aliases: ["Misinformation"], kw: [], home: "L12",
  short: "意図せずに広まる誤った情報（misinformation）。勘違いや確認不足によるものなど、悪意がなくても、拡散すれば社会の混乱を招きうる。",
  src: [{ t: "総務省「プラットフォームサービスに関する研究会 最終報告書」（2020年2月）", u: "https://www.soumu.go.jp/main_content/000668595.pdf" }] },
{ id: "false-info", term: "偽・誤情報", reading: "にせごじょうほう", kw: [], home: "L12",
  short: "意図的な偽情報と、意図しない誤情報をまとめた呼び方。総務省の白書や検討会の文書で、インターネット上で流通・拡散する真偽不確かな情報への対策を論じるときに使われる。",
  src: [{ t: "総務省「令和7年版 情報通信白書」第1部第2章第3節 インターネット上の偽・誤情報等への対応", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r07/pdf/n1230000.pdf" }] },
{ id: "digital-watermark", term: "電子透かし", reading: "でんしすかし", aliases: ["デジタル透かし", "ウォーターマーク"], kw: [], home: "L12",
  short: "画像・音声・文章などに、人には気づきにくい形で情報を埋め込み、後から検出できるようにする技術。AI が生成したコンテンツであることの識別に使われ、広島 AI プロセスの国際指針などでも導入が求められている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "c2pa", term: "C2PA", reading: "c2pa", aliases: ["Content Credentials", "コンテンツクレデンシャル"], kw: [], home: "L12",
  short: "Coalition for Content Provenance and Authenticity の略。デジタルコンテンツの出所や編集の履歴を検証できる形で記録・表示するための技術標準（Content Credentials）を策定している団体。",
  src: [{ t: "C2PA (Coalition for Content Provenance and Authenticity)", u: "https://c2pa.org/" }] },
{ id: "originator-profile", term: "オリジネーター・プロファイル", abbr: "OP", reading: "おりじねーたーぷろふぁいる", aliases: ["Originator Profile", "オリジネーター・プロファイル技術"], kw: [], home: "L12",
  short: "ウェブ上の記事や広告の発信者の情報を、第三者が確認した検証可能な形で付与し、信頼できる発信者を見分けやすくする日本発の技術。2022年12月にメディアや広告企業などが技術研究組合を設立した。",
  src: [{ t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }, { t: "Originator Profile 技術研究組合", u: "https://originator-profile.org/ja-JP/" }, { t: "Originator Profile 技術研究組合「組合について」", u: "https://originator-profile.org/ja-JP/about" }] },
{ id: "fact-check", term: "ファクトチェック", reading: "ふぁくとちぇっく", aliases: ["ファクトチェッキング"], kw: [], home: "L12",
  short: "社会に広まっている情報や言説の真偽・正確さを、根拠を調べて検証し、結果を公表する活動。欧米では非営利団体が中心となって進めており、日本での認知度は2022年の総務省の調査で他の調査対象国より低かった。",
  src: [{ t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }] }
]);

/* ── L13 透明性 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "data-provenance", term: "データの来歴", reading: "でーたのらいれき", aliases: ["データ来歴", "データプロベナンス", "Data Provenance"], kw: ["データの来歴"], home: "L13",
  short: "データがどこから来て、誰がどのように収集・加工・変換してきたかという履歴の情報。学習データの出所、ライセンス、前処理などを記録しておくと、品質・権利・偏りの確認や、問題が起きたときの原因の追跡に役立つ。",
  src: [{ t: "W3C PROV-Overview", u: "https://www.w3.org/TR/prov-overview/" }, { t: "Longpre, S. et al. (2023). The Data Provenance Initiative: A Large Scale Audit of Dataset Licensing & Attribution in AI", u: "https://arxiv.org/abs/2310.16787" }] },
{ id: "explainability", term: "説明可能性", reading: "せつめいかのうせい", aliases: ["Explainability"], kw: ["説明可能性"], home: "L13",
  short: "AI がどのような仕組みや根拠でその出力に至ったかを、人が理解できる形で示せること。NIST は、透明性は「何が起きたか」、説明可能性は「どのように決定されたか」、解釈可能性は「なぜその決定か（意味）」に答えるものと区別している。",
  src: [{ t: "NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0)", u: "https://doi.org/10.6028/NIST.AI.100-1" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "black-box", term: "ブラックボックス", reading: "ぶらっくぼっくす", aliases: ["ブラックボックス問題", "ブラックボックス化"], kw: ["ブラックボックス"], home: "L13",
  short: "入力と出力は分かっても、内部でどのような処理や根拠によって判断したのかが人には分からない状態。膨大なパラメータを持つ深層学習のモデルで特に問題になり、誤りの発見や説明責任を果たすことを難しくする。",
  src: [{ t: "Rudin, C. (2019). Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead", u: "https://doi.org/10.1038/s42256-019-0048-x" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },

/* 本文に出てくる他の専門用語 */
{ id: "transparency", term: "透明性", reading: "とうめいせい", aliases: ["Transparency"], kw: [], home: "L13",
  short: "AI システムについて、AI を使っている事実、データの集め方、能力と限界などの情報を、関係者に適切に提供すること。AI事業者ガイドラインは、検証可能性の確保と、ステークホルダーへの合理的な範囲での情報提供を求めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "accountability", term: "アカウンタビリティ", reading: "あかうんたびりてぃ", aliases: ["説明責任", "Accountability"], kw: [], home: "L13",
  short: "AI がもたらす結果について、関係者が事実上・法律上の責任を負い、その前提となる体制（責任者の明示、責任の分配、記録、トレーサビリティなど）を整えること。AI事業者ガイドラインは、情報開示を扱う透明性と区別している。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "interpretability", term: "解釈可能性", reading: "かいしゃくかのうせい", aliases: ["Interpretability"], kw: [], home: "L13",
  short: "AI の出力が、その用途や文脈の中で何を意味するのかを人が理解できること。また、決定木や線形回帰のように、モデルの構造そのものが人に理解しやすい性質を指すこともあり、そうしたモデルを解釈可能なモデルという。",
  src: [{ t: "NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0)", u: "https://doi.org/10.6028/NIST.AI.100-1" }, { t: "Rudin, C. (2019). Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead", u: "https://doi.org/10.1038/s42256-019-0048-x" }] },
{ id: "datasheets", term: "Datasheets for Datasets", reading: "datasheets for datasets", aliases: ["データシート"], kw: [], home: "L13",
  short: "データセットに、作成の目的、構成、収集の方法、推奨される用途などを記した文書（データシート）を添えることを提案した枠組み（Gebru ら, 2018年）。データの来歴と性質を利用者に伝え、透明性を高める。",
  src: [{ t: "Gebru, T. et al. (2018). Datasheets for Datasets", u: "https://arxiv.org/abs/1803.09010" }] },
{ id: "model-cards", term: "モデルカード", reading: "もでるかーど", aliases: ["Model Cards", "Model Card"], kw: [], home: "L13",
  short: "学習済みモデルに、想定する用途と想定しない用途、性能の評価結果（属性ごとの集団別の結果を含む）、限界などを記した短い文書を添える枠組み（Mitchell ら, 2019年）。",
  src: [{ t: "Mitchell, M. et al. (2018). Model Cards for Model Reporting", u: "https://arxiv.org/abs/1810.03993" }] }
]);

/* ── L14 民主主義 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "echo-chamber", term: "エコーチェンバー", reading: "えこーちぇんばー", aliases: ["エコーチェンバー現象", "エコー・チェンバー", "Echo Chamber"], kw: ["エコーチェンバー"], home: "L14",
  short: "SNS などで、似た興味や考えを持つ人どうしが集まってやり取りする結果、自分と似た意見ばかりが返ってきて、特定の意見や思想が増幅されていく状態。同じ意見を何度も聞くことで、それが正しいとより強く信じ込みやすくなる。",
  src: [{ t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }, { t: "Cinelli, M. et al. (2021). The echo chamber effect on social media", u: "https://doi.org/10.1073/pnas.2023301118" }] },
{ id: "filter-bubble", term: "フィルターバブル", reading: "ふぃるたーばぶる", aliases: ["Filter Bubble"], kw: ["フィルターバブル"], home: "L14",
  short: "推薦のアルゴリズムが、閲覧やクリックの履歴などから利用者が関心を持ちそうな情報を優先して表示し続ける結果、利用者が見たい情報だけに囲まれ、異なる意見から隔離される状態。イーライ・パリサーが2011年に提唱した。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "Pariser, E. (2011). Beware online \"filter bubbles\"（TED）", u: "https://www.ted.com/talks/eli_pariser_beware_online_filter_bubbles" }] },

/* 本文に出てくる他の専門用語 */
{ id: "recommender-system", term: "推薦システム", reading: "すいせんしすてむ", aliases: ["レコメンドシステム", "レコメンダーシステム", "レコメンデーション"], kw: [], home: "L14", scope: ["L14"],
  short: "利用者の行動履歴や属性、似た利用者の傾向などから、その人が関心を持ちそうな商品・記事・動画などを選んで提示する仕組み。利便性を高める一方で、フィルターバブルの原因にもなりうる。",
  src: [{ t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }] },
{ id: "attention-economy", term: "アテンション・エコノミー", reading: "あてんしょんえこのみー", aliases: ["アテンションエコノミー"], kw: [], home: "L14",
  short: "情報が過剰な社会で、人々の関心（アテンション）や消費時間が希少な資源となり、それを奪い合って広告収入などに結び付ける経済の仕組み。過激な内容や偽・誤情報の拡散、炎上を助長しやすい構造があると指摘される。",
  src: [{ t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }] },
{ id: "confirmation-bias", term: "確証バイアス", reading: "かくしょうばいあす", aliases: ["Confirmation Bias"], kw: [], home: "L14",
  short: "自分の考えや期待に合う情報ばかりを集めたり重視したりし、それに反する情報を軽視してしまう心理的な傾向。「見たいもの、信じたいものを信じる」性質であり、フィルターバブルやエコーチェンバーを強める人間の側の要因とされる。",
  src: [{ t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }] },
{ id: "group-polarization", term: "集団分極化", reading: "しゅうだんぶんきょくか", aliases: ["集団極性化"], kw: [], home: "L14",
  short: "同じような考えを持つ人どうしでやり取りを重ねると、集団の意見が以前より極端な方向へ偏っていく現象。インターネット上ではフィルターバブルやエコーチェンバーによって起きているとの指摘があり、社会の分断につながりうる。",
  src: [{ t: "Sunstein, C. R. (2002). The Law of Group Polarization", u: "https://doi.org/10.1111/1467-9760.00148" }, { t: "総務省「令和5年版 情報通信白書」第1部第2章第3節 インターネット上での偽・誤情報の拡散等", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r05/pdf/n2300000.pdf" }] },
{ id: "cambridge-analytica", term: "ケンブリッジ・アナリティカ", reading: "けんぶりっじあなりてぃか", aliases: ["ケンブリッジ・アナリティカ事件", "Cambridge Analytica"], kw: [], home: "L14",
  short: "英国の選挙コンサルティング会社。2018年、Facebook 上の性格診断アプリで集められ、利用規約に反して同社に渡された個人データ（Facebook の推計で最大8,700万人分）を選挙運動に利用していたことが明らかになり、問題となった。",
  src: [{ t: "総務省「平成30年版 情報通信白書」サイバーセキュリティに関する国際動向", u: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h30/html/nd112240.html" }, { t: "Facebook (2018). An Update on Our Plans to Restrict Data Access on Facebook（2018年4月4日）", u: "https://about.fb.com/news/2018/04/restricting-data-access/" }, { t: "英国情報コミッショナー事務局（ICO）. Letter to Julian Knight MP: ICO investigation into use of personal information and political influence（2020年10月2日）", u: "https://ico.org.uk/media2/migrated/2618383/20201002_ico-o-ed-l-rtl-0181_to-julian-knight-mp.pdf" }] }
]);

/* ── L15 環境保護 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "climate-change", term: "気候変動", reading: "きこうへんどう", kw: ["気候変動"], home: "L15",
  short: "人間活動による温室効果ガスの排出などで、地球の気温や気候が長期的に変化すること。AI は、学習や運用の電力消費を通じて排出を増やしうる一方、電力網の最適化や災害の予測などで対策にも役立つ、という両面から議論される。",
  src: [{ t: "United Nations (1992). United Nations Framework Convention on Climate Change（第1条2「気候変動」の定義）", u: "https://unfccc.int/resource/docs/convkp/conveng.pdf" }, { t: "Rolnick, D. et al. (2019). Tackling Climate Change with Machine Learning", u: "https://arxiv.org/abs/1906.05433" }, { t: "IEA (2025). Energy and AI: Executive summary", u: "https://www.iea.org/reports/energy-and-ai/executive-summary" }] },
{ id: "training-energy", term: "モデル学習の電力消費", reading: "もでるがくしゅうのでんりょくしょうひ", aliases: ["学習の電力消費"], kw: ["モデル学習の電力消費"], home: "L15",
  short: "大規模な AI モデルの学習で、多数の GPU などを長時間動かすために消費する電力。発電方法によっては多くの温室効果ガスを排出する。GPT-3 の学習では約1,287 MWh を消費し、約552トン（CO2 換算）を排出したと推計されている。",
  src: [{ t: "Patterson, D. et al. (2021). Carbon Emissions and Large Neural Network Training", u: "https://arxiv.org/abs/2104.10350" }, { t: "Strubell, E., Ganesh, A. & McCallum, A. (2019). Energy and Policy Considerations for Deep Learning in NLP", u: "https://arxiv.org/abs/1906.02243" }] },

/* 本文に出てくる他の専門用語 */
{ id: "green-ai", term: "Green AI", reading: "green ai", aliases: ["グリーン AI", "グリーンAI"], kw: [], home: "L15",
  short: "精度だけでなく、計算量や費用などの効率も研究の評価基準にすべきだとする考え方（Schwartz ら, 2019年）。精度のわずかな向上のために膨大な計算を使う傾向を Red AI と呼び、環境負荷と研究参加の格差の点で問題視した。",
  src: [{ t: "Schwartz, R., Dodge, J., Smith, N. A. & Etzioni, O. (2019). Green AI", u: "https://arxiv.org/abs/1907.10597" }] },
{ id: "data-center", term: "データセンター", reading: "でーたせんたー", kw: [], home: "L15",
  short: "サーバーや通信機器を集中して設置・運用する施設。IEA によれば、世界のデータセンターの電力消費量は2024年に約415 TWh（世界の電力消費の約1.5%）で、2030年には約945 TWh と2倍を超える見通しであり、AI がその最大の要因とされる。",
  src: [{ t: "IEA (2025). Energy and AI: Executive summary", u: "https://www.iea.org/reports/energy-and-ai/executive-summary" }] }
]);

/* ── L16 労働政策 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "labor-shortage", term: "労働力不足", reading: "ろうどうりょくぶそく", aliases: ["人手不足"], kw: ["労働力不足"], home: "L16",
  short: "働き手の数が、社会や企業が必要とする量に足りない状態。日本では少子高齢化で生産年齢人口が減り続けており、AI による業務の効率化や省力化が、不足を補う手段の1つとして期待されている。",
  src: [{ t: "国立社会保障・人口問題研究所「日本の将来推計人口（令和5年推計）」結果の概要", u: "https://www.ipss.go.jp/pp-zenkoku/j/zenkoku2023/pp2023_gaiyou.pdf" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "ai-collaboration", term: "AI との協働", reading: "えーあいとのきょうどう", aliases: ["AIとの協働", "人間と AI の協働"], kw: ["AI との協働"], home: "L16",
  short: "仕事を AI に丸ごと任せるのではなく、AI が得意な作業と人が得意な作業を組み合わせ、人の能力を広げる働き方。ILO は、生成 AI の影響として最も起こりやすいのは職の置き換えより仕事の変容だと分析している。",
  src: [{ t: "Gmyrek, P., Berg, J., Kamiński, K., Konopczyński, F. et al. (2025). Generative AI and jobs: A Refined Global Index of Occupational Exposure (ILO Working Paper 140)", u: "https://doi.org/10.54394/HETP0387" }] },
{ id: "deskilling", term: "スキルの喪失", reading: "すきるのそうしつ", aliases: ["デスキリング", "技能の低下"], kw: ["スキルの喪失"], home: "L16",
  short: "AI や自動化に作業を任せ続けるうちに、人がその作業の技能や判断力を使わなくなり、衰えること。AI の支援に慣れた内視鏡医が、AI を使わない検査で腺腫の発見率を下げたという観察研究（2025年）もある。",
  src: [{ t: "Budzyń, K. et al. (2025). Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study", u: "https://doi.org/10.1016/S2468-1253(25)00133-5" }, { t: "Bainbridge, L. (1983). Ironies of automation", u: "https://doi.org/10.1016/0005-1098(83)90046-8" }] },

/* 本文に出てくる他の専門用語 */
{ id: "technological-unemployment", term: "技術的失業", reading: "ぎじゅつてきしつぎょう", kw: [], home: "L16",
  short: "技術の進歩によって人の仕事が機械に置き換えられ、失業が生じること。AI については、職業単位で米国の雇用の約47%が代替されうるとした推計と、作業（タスク）単位で OECD 21か国の平均約9%とした推計など、方法によって結果が大きく異なる。",
  src: [{ t: "Frey, C. B. & Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerisation?", u: "https://doi.org/10.1016/j.techfore.2016.08.019" }, { t: "Arntz, M., Gregory, T. & Zierahn, U. (2016). The Risk of Automation for Jobs in OECD Countries: A Comparative Analysis (OECD Social, Employment and Migration Working Papers No. 189)", u: "https://doi.org/10.1787/5jlz9h56dvq7-en" }] },
{ id: "reskilling", term: "リスキリング", reading: "りすきりんぐ", aliases: ["学び直し"], kw: [], home: "L16",
  short: "技術や事業の変化で求められる新しい仕事や役割に就けるよう、新しい知識や技能を身につけ直すこと。AI事業者ガイドラインは、生成 AI の普及で AI と人間の作業の棲み分けが変わると見込み、教育・リスキリングの検討を求めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] },
{ id: "working-age-population", term: "生産年齢人口", reading: "せいさんねんれいじんこう", aliases: ["15〜64歳人口"], kw: [], home: "L16",
  short: "15〜64歳の人口。働き手の中心となる年齢層とされる。日本では1995年の8,726万人をピークに減り、2020年は7,509万人で、2070年には4,535万人になると推計されている（令和5年推計の出生中位・死亡中位）。",
  src: [{ t: "国立社会保障・人口問題研究所「日本の将来推計人口（令和5年推計）」結果の概要", u: "https://www.ipss.go.jp/pp-zenkoku/j/zenkoku2023/pp2023_gaiyou.pdf" }] },
{ id: "ironies-of-automation", term: "自動化の皮肉", reading: "じどうかのひにく", aliases: ["Ironies of Automation"], kw: [], home: "L16",
  short: "Bainbridge（1983年）が指摘した自動化の逆説。自動化が進むと人の役割は監視と異常時の対応に限られるが、普段は自分で操作しないため技能が衰え、肝心の異常時にうまく対処できなくなる。",
  src: [{ t: "Bainbridge, L. (1983). Ironies of automation", u: "https://doi.org/10.1016/0005-1098(83)90046-8" }] },
/* 詳しい解説は L18（人間の関与） */
{ id: "automation-bias", term: "自動化バイアス", reading: "じどうかばいあす", aliases: ["オートメーションバイアス", "Automation Bias"], kw: [], home: "L18",
  short: "自動化されたシステムや AI の出力を過度に信頼し、依存してしまう傾向。人が最終確認をする仕組みがあっても、確認が形だけになるおそれがある。AI事業者ガイドラインや EU AI 法は、この傾向への対策を求めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "AI Act Service Desk: Article 14 Human oversight（European Commission）", u: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14" }] }
]);

/* ── L17 その他の重要な価値 ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "inclusion", term: "インクルージョン", reading: "いんくるーじょん", aliases: ["包摂", "包摂性", "Inclusion"], kw: ["インクルージョン"], home: "L17",
  short: "性別、年齢、障害、言語、経済状況などにかかわらず、誰もが社会に参加し、AI の恩恵を受けられるようにすること（包摂）。AI事業者ガイドラインは「多様性・包摂性の確保」として、情報弱者や技術弱者を生じさせないよう求めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "統合イノベーション戦略推進会議決定「人間中心の AI 社会原則」（2019年3月29日）", u: "https://www8.cao.go.jp/cstp/ai/aigensoku.pdf" }] },
{ id: "military-use", term: "軍事利用", reading: "ぐんじりよう", aliases: ["AI の軍事利用", "AIの軍事利用"], kw: ["軍事利用"], home: "L17",
  short: "AI を兵器や軍事活動に使うこと。情報の収集・分析や無人機の運用などで活用が進む。特に、人の関与なしに標的を選んで攻撃しうる自律型致死兵器システム（LAWS）について、国際的なルールづくりが議論されている。",
  src: [{ t: "防衛省「装備品等の研究開発における責任あるAI適用ガイドライン（第1版）」（2025年6月）", u: "https://www.mod.go.jp/atla/soubiseisaku/ai_guideline/ai_guideline_ver.01.pdf" }] },
{ id: "respect-for-the-dead", term: "死者への敬意", reading: "ししゃへのけいい", kw: ["死者への敬意"], home: "L17",
  short: "亡くなった人の尊厳や生前の意思、遺族の感情を尊重すること。AI で故人の声や姿、話し方を再現する技術が広がり、本人の同意のない再現、広告などへの利用、遺族の心理的な負担などが論点になっている。",
  src: [{ t: "University of Cambridge (2024). Call for safeguards to prevent unwanted 'hauntings' by AI chatbots of dead loved ones", u: "https://www.cam.ac.uk/research/news/call-for-safeguards-to-prevent-unwanted-hauntings-by-ai-chatbots-of-dead-loved-ones" }, { t: "ヤマハ株式会社「美空ひばりの新曲ライブを支援 あの歌声を当社最新の歌声合成技術『VOCALOID:AI』で再現」（2019年9月3日）", u: "https://archive.yamaha.com/ja/news_release/2019/19090302/" }] },
{ id: "human-autonomy", term: "人間の自律性", reading: "にんげんのじりつせい", aliases: ["個人の自律", "人間の自律"], kw: ["人間の自律性"], home: "L17",
  short: "人が自分の意思で考え、選び、決める力と自由。AI による気づかれない誘導や感情の操作、AI への過度な依存によって損なわれうる。AI事業者ガイドラインは「人間の尊厳及び個人の自律」の尊重を求めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },

/* 本文に出てくる他の専門用語 */
{ id: "laws", term: "自律型致死兵器システム", abbr: "LAWS", reading: "じりつがたちしへいきしすてむ", aliases: ["自律型致死兵器", "Lethal Autonomous Weapons Systems"], kw: [], home: "L17",
  short: "人の関与なしに標的を選び、致死的な攻撃を行いうる兵器システム。特定通常兵器使用禁止制限条約（CCW）の枠組みで2014年から議論され、2019年に11項目の指針が採択された。定義は長く定まらず、2026年9月に政府専門家会合が「特徴づけ」に合意した。",
  src: [{ t: "防衛省「装備品等の研究開発における責任あるAI適用ガイドライン（第1版）」（2025年6月）", u: "https://www.mod.go.jp/atla/soubiseisaku/ai_guideline/ai_guideline_ver.01.pdf" }, { t: "内閣「参議院議員熊谷裕人君提出自律型致死兵器システムに関する質問に対する答弁書」（2019年10月18日）", u: "https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/200/touh/t200015.htm" }, { t: "CCW Group of Governmental Experts on LAWS: Report of the 2024-2025-2026 sessions (CCW/GGE.1/2026/3, advance copy, 2026)", u: "https://docs-library.unoda.org/Convention_on_Certain_Conventional_Weapons_-Group_of_Governmental_Experts_on_Lethal_Autonomous_Weapons_Systems_(2026)/CCW-GGE.1-2026-3-Advance_copy.pdf" }] },
{ id: "dual-use", term: "デュアルユース", reading: "でゅあるゆーす", aliases: ["軍民両用", "Dual-use"], kw: [], home: "L17",
  short: "同じ技術が、民生と軍事の両方の用途、さらに広くは有益な用途と有害な用途の両方に使えること。AI もその1つで、例えば荷物を届ける自律型ドローンと、爆発物を運ぶドローンの能力の差は大きくないと指摘されている。",
  src: [{ t: "Brundage, M. et al. (2018). The Malicious Use of Artificial Intelligence: Forecasting, Prevention, and Mitigation", u: "https://arxiv.org/abs/1802.07228" }, { t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },
{ id: "deadbot", term: "デッドボット", reading: "でっどぼっと", aliases: ["グリーフボット", "Deadbot", "Griefbot"], kw: [], home: "L17",
  short: "故人が残した文章や音声などのデジタルな記録をもとに、その人の話し方や人柄をまねて会話する AI（チャットボット）。グリーフボットとも呼ばれる。遺族の慰めになりうる一方、本人の同意や悪用、遺族の心理的な負担などが問題とされる。",
  src: [{ t: "Hollanek, T. & Nowaczyk-Basińska, K. (2024). Griefbots, Deadbots, Postmortem Avatars: on Responsible Applications of Generative AI in the Digital Afterlife Industry", u: "https://doi.org/10.1007/s13347-024-00744-w" }, { t: "University of Cambridge (2024). Call for safeguards to prevent unwanted 'hauntings' by AI chatbots of dead loved ones", u: "https://www.cam.ac.uk/research/news/call-for-safeguards-to-prevent-unwanted-hauntings-by-ai-chatbots-of-dead-loved-ones" }] },
{ id: "accessibility", term: "アクセシビリティ", reading: "あくせしびりてぃ", aliases: ["Accessibility"], kw: [], home: "L17",
  short: "高齢者や障害のある人を含め、できるだけ多くの人が製品やサービスを支障なく利用できること。AI事業者ガイドラインは、多様性・包摂性の確保の取組として、ユニバーサルデザインやアクセシビリティの確保を挙げている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }] }
]);

/* ── L18 AIガバナンス ── */
GK.addGlossary([
/* シラバスのキーワード */
{ id: "ai-policy", term: "AI ポリシー", reading: "えーあいぽりしー", aliases: ["AIポリシー", "AI 倫理原則", "AI 倫理指針"], kw: ["AI ポリシー"], home: "L18",
  short: "組織が AI の開発・提供・利用で守る原則や取組の方針を定めたもの。AI事業者ガイドラインは、AI ガバナンス・ゴールの例として挙げ、経営層のリーダーシップのもとで設定し、ステークホルダーに公開することを期待している。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "diversity", term: "ダイバーシティ", reading: "だいばーしてぃ", aliases: ["チームの多様性", "Diversity"], kw: ["ダイバーシティ"], home: "L18",
  short: "性別、文化、年齢、専門分野などが異なる人々が参加していること（多様性）。AI の開発チームや倫理の審議の場を多様な人で構成すると、さまざまな視点やニーズが反映され、偏りや見落としに気づきやすくなるとされる。",
  src: [{ t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "ai-audit", term: "AI に対する監査", reading: "えーあいにたいするかんさ", aliases: ["AI 監査", "AIの監査", "AI の監査"], kw: ["AI に対する監査"], home: "L18",
  short: "AI システムや、AI のリスクを管理する仕組み（AI マネジメントシステム）が適切に設計・運用されているかを、その設計・運用から独立した者が評価すること。内部監査部門による監査と、外部の専門家による監査がある。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }, { t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },
{ id: "ethics-assessment", term: "倫理アセスメント", reading: "りんりあせすめんと", aliases: ["倫理影響評価", "AI 倫理アセスメント"], kw: ["倫理アセスメント"], home: "L18",
  short: "AI の開発・導入の前や運用中に、人権、公平性、プライバシー、安全性などの倫理的なリスクを洗い出し、その大きさを評価して対策を決めること。UNESCO の倫理影響評価（EIA）や EU の ALTAI などの評価の道具がある。",
  src: [{ t: "UNESCO: Ethical Impact Assessment: a tool of the Recommendation on the Ethics of Artificial Intelligence", u: "https://www.unesco.org/en/articles/ethical-impact-assessment-tool-recommendation-ethics-artificial-intelligence" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "human-involvement", term: "人間の関与", reading: "にんげんのかんよ", aliases: ["人間の判断の介在", "人間による監視"], kw: ["人間の関与"], home: "L18",
  short: "AI の判断や動作に人がかかわり、必要に応じて確認・修正・停止できるようにすること。関与の仕方により、ヒューマン・イン・ザ・ループなどに分けられる。EU AI 法は高リスク AI に、人が効果的に監視できる設計を求めている。",
  src: [{ t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }, { t: "AI Act Service Desk: Article 14 Human oversight（European Commission）", u: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14" }] },
{ id: "ai-monitoring", term: "モニタリング", reading: "もにたりんぐ", aliases: ["AI のモニタリング"], kw: ["モニタリング"], home: "L18",
  short: "運用中の AI の性能・出力・利用状況や、AI のリスク管理の仕組みが機能しているかを継続的に確かめること。データの変化による性能の低下や想定外の使われ方、新たなリスクを早く見つけ、対処につなげる。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "AI Act Service Desk: Article 72 Post-market monitoring（European Commission）", u: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-72" }] },
{ id: "reproducibility", term: "再現性", reading: "さいげんせい", aliases: ["Reproducibility"], kw: ["再現性"], home: "L18",
  short: "同じ条件で実験や処理を繰り返したときに、同じ結果が得られること。AI では、データ、コード、乱数のシード、ハイパーパラメータ、実行環境などを記録・管理しないと結果を再現できず、検証や原因究明が難しくなる。",
  src: [{ t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }, { t: "Pineau, J. et al. (2021). Improving Reproducibility in Machine Learning Research (A Report from the NeurIPS 2019 Reproducibility Program)", u: "https://arxiv.org/abs/2003.12206" }] },
{ id: "traceability", term: "トレーサビリティ", reading: "とれーさびりてぃ", aliases: ["追跡可能性", "Traceability"], kw: ["トレーサビリティ"], home: "L18",
  short: "データの出所や、AI の開発・提供・利用の過程でなされた判断を、後からたどれるようにすること（追跡可能性）。AI事業者ガイドラインはアカウンタビリティの一部として求めており、ログの記録・保存などで確保する。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },

/* 本文に出てくる他の専門用語 */
{ id: "hitl", term: "ヒューマン・イン・ザ・ループ", abbr: "HITL", reading: "ひゅーまんいんざるーぷ", aliases: ["Human-in-the-Loop", "human-in-the-loop", "ヒューマンインザループ"], kw: [], home: "L18",
  short: "AI のシステムが判断を行うたびに、人が介入できるようにする方式。EU の倫理ガイドラインは人間による監視の方式として、HITL、ヒューマン・オン・ザ・ループ（HOTL）、ヒューマン・イン・コマンド（HIC）を挙げている。",
  src: [{ t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },
{ id: "hotl", term: "ヒューマン・オン・ザ・ループ", abbr: "HOTL", reading: "ひゅーまんおんざるーぷ", aliases: ["Human-on-the-Loop", "human-on-the-loop"], kw: [], home: "L18",
  short: "AI の判断のたびには介入せず、システムの設計の段階で人がかかわり、運用中は人が動作を監視して、必要なときに介入する方式。EU の信頼できる AI のための倫理ガイドラインが挙げる人間による監視の方式の1つ。",
  src: [{ t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },
{ id: "hic", term: "ヒューマン・イン・コマンド", abbr: "HIC", reading: "ひゅーまんいんこまんど", aliases: ["Human-in-Command", "human-in-command"], kw: [], home: "L18",
  short: "人が、経済・社会・法・倫理への影響を含めて AI システムの活動全体を監督し、どの場面でどう使うか（使わないか）を決め、AI の判断を覆すことができるようにする方式。EU の倫理ガイドラインが挙げる方式の1つ。",
  src: [{ t: "High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI", u: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" }] },
{ id: "ai-ethics-committee", term: "AI 倫理委員会", reading: "えーあいりんりいいんかい", aliases: ["AI 倫理審査委員会", "AI倫理委員会"], kw: [], home: "L18",
  short: "組織の中で AI の倫理的な課題を審議し、方針づくり、個別の案件の審査、経営への助言などを行う会議体。AI事業者ガイドラインの別添は、取締役会に対して責任を負う AI 倫理委員会などの設置を例示している。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "ai-management-system", term: "AI マネジメントシステム", reading: "えーあいまねじめんとしすてむ", aliases: ["AIマネジメントシステム"], kw: [], home: "L18",
  short: "AI ガバナンス・ゴール（AI ポリシーなど）を達成するために、組織が AI のリスクを管理する体制、規程、手順などを整え、運用・評価・改善していく仕組み。国際規格 ISO/IEC 42001 はその要求事項を定めている。",
  src: [{ t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "iso-42001", term: "ISO/IEC 42001", reading: "iso/iec 42001", aliases: ["ISO/IEC42001"], kw: [], home: "L18",
  short: "AI マネジメントシステムに関する国際規格。国際標準化機構（ISO）と国際電気標準会議（IEC）の合同専門委員会で検討され、2023年12月に発行された。この規格に基づく第三者の認証を受けた日本企業もある。",
  src: [{ t: "IEC Webstore: ISO/IEC 42001:2023 Information technology - Artificial intelligence - Management system", u: "https://webstore.iec.ch/en/publication/90574" }, { t: "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」別添（溶け込み版）（2026年3月31日）", u: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_3.pdf" }] },
{ id: "altai", term: "ALTAI", reading: "altai", aliases: ["信頼できる AI のための評価リスト", "Assessment List for Trustworthy AI"], kw: [], home: "L18",
  short: "EU の AI に関する高レベル専門家グループが2020年7月に公表した、信頼できる AI のための自己評価リスト。倫理ガイドラインの7つの要件に沿った問いに答えることで、開発者や導入者が自らの AI を点検できる。",
  src: [{ t: "European Commission: Assessment List for Trustworthy Artificial Intelligence (ALTAI) for self-assessment", u: "https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment" }] },
{ id: "fria", term: "基本権影響評価", abbr: "FRIA", reading: "きほんけんえいきょうひょうか", aliases: ["Fundamental Rights Impact Assessment"], kw: [], home: "L18",
  short: "EU AI 法が、公的機関や公共サービスを提供する民間事業者などに、高リスク AI の利用を始める前に行うよう求める評価（第27条）。影響を受ける人々の範囲、想定される危害のリスク、人間による監視の措置などを示す。",
  src: [{ t: "AI Act Service Desk: Article 27 Fundamental rights impact assessment for high-risk AI systems（European Commission）", u: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-27" }] },
{ id: "concept-drift", term: "コンセプトドリフト", reading: "こんせぷとどりふと", aliases: ["概念ドリフト", "Concept Drift"], kw: [], home: "L18",
  short: "運用中に、入力データと予測したい対象との関係が時間とともに変わる現象。学習したときと状況が変わるため、モデルの予測性能が下がる原因になる。モニタリングで検知し、再学習などで対応する。",
  src: [{ t: "Gama, J., Žliobaitė, I., Bifet, A., Pechenizkiy, M. & Bouchachia, A. (2014). A survey on concept drift adaptation", u: "https://doi.org/10.1145/2523813" }] }
]);
