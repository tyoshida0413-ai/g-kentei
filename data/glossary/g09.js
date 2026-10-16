/* 大項目09「AIに関する法律と契約」の用語
   条文番号は、令和2年・令和3年改正後の現行法による（e-Gov 法令検索で 2026-10-14 に確認）。 */
(function () {
  /* ── 出典（L01 個人情報保護法） ── */
  const APPI = { t: "個人情報の保護に関する法律（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/415AC0000000057" };
  const PPC_GL = { t: "個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン（通則編）」", u: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/" };
  const PPC_ANON = { t: "個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン（仮名加工情報・匿名加工情報編）」", u: "https://www.ppc.go.jp/personalinfo/legal/guidelines_anonymous/" };
  const PPC_OFF = { t: "個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン（外国にある第三者への提供編）」", u: "https://www.ppc.go.jp/personalinfo/legal/guidelines_offshore/" };
  const PPC_QA = { t: "個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン」に関するQ&A", u: "https://www.ppc.go.jp/personalinfo/faq/APPI_QA/" };
  const PPC_R2 = { t: "個人情報保護委員会「個人情報の保護に関する法律等の一部を改正する法律（概要）」（令和2年改正）", u: "https://www.ppc.go.jp/files/pdf/200612_gaiyou.pdf" };
  const PPC_R2P = { t: "個人情報保護委員会「令和2年 改正個人情報保護法について」", u: "https://www.ppc.go.jp/personalinfo/legal/kaiseihogohou/" };
  const PPC_AI = { t: "個人情報保護委員会「生成AIサービスの利用に関する注意喚起等」（2023年6月2日）", u: "https://www.ppc.go.jp/files/pdf/230602_alert_generative_AI_service.pdf" };
  const GDPR_JA = { t: "個人情報保護委員会「一般データ保護規則（GDPR）の条文」（仮日本語訳）", u: "https://www.ppc.go.jp/files/pdf/gdpr-provisions-ja.pdf" };
  const GDPR_PRE = { t: "個人情報保護委員会「一般データ保護規則（GDPR）の前文」（仮日本語訳）", u: "https://www.ppc.go.jp/files/pdf/gdpr-preface-ja.pdf" };
  const PPC_JPEU = { t: "個人情報保護委員会「日EU間・日英間のデータ越境移転について」", u: "https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/" };

  GK.addGlossary([
  /* ── L01 個人情報保護法：シラバスのキーワード ── */
  { id: "personal-info", term: "個人情報", reading: "こじんじょうほう", kw: ["個人情報"], home: "L01",
    short: "生存する個人に関する情報のうち、氏名などの記述等により特定の個人を識別できるもの（他の情報と容易に照合して識別できるものを含む）、または個人識別符号が含まれるもの（個人情報保護法2条1項）。",
    src: [APPI, PPC_GL] },
  { id: "personal-identification-code", term: "個人識別符号", reading: "こじんしきべつふごう", kw: ["個人識別符号"], home: "L01",
    short: "その符号だけで特定の個人を識別できるとして政令で定められた文字・番号等（個人情報保護法2条2項）。顔や指紋などの身体の特徴を認証用に変換したデータと、旅券番号・マイナンバーなどの番号がある。",
    src: [APPI, PPC_GL, PPC_QA] },
  { id: "special-care-personal-info", term: "要配慮個人情報", reading: "ようはいりょこじんじょうほう", kw: ["要配慮個人情報"], home: "L01",
    short: "人種・信条・社会的身分・病歴・犯罪の経歴・犯罪被害の事実など、不当な差別や偏見が生じないよう特に配慮を要する記述を含む個人情報（2条3項）。取得には原則として本人の同意が必要で、オプトアウトによる提供はできない。",
    src: [APPI, PPC_GL] },
  { id: "personal-data", term: "個人データ", reading: "こじんでーた", kw: ["個人データ"], home: "L01",
    short: "個人情報データベース等（検索できるように体系的に構成した個人情報の集合物）を構成する個人情報（個人情報保護法16条3項）。安全管理措置、委託先の監督、第三者提供の制限などの義務は個人データに課される。",
    src: [APPI, PPC_GL] },
  { id: "retained-personal-data", term: "保有個人データ", reading: "ほゆうこじんでーた", kw: ["保有個人データ"], home: "L01",
    short: "事業者が、開示・訂正・利用停止・消去・第三者提供の停止を行う権限を持つ個人データ（16条4項）。本人はこれらを請求できる。2022年4月からは、6か月以内に消去する短期保存のデータも含まれる。",
    src: [APPI, PPC_GL, PPC_R2] },
  { id: "purpose-of-use", term: "利用目的", reading: "りようもくてき", kw: ["利用目的"], home: "L01", scope: ["L01"],
    short: "個人情報を何に使うかを示す目的。事業者はできる限り特定し（17条1項）、取得時に本人に通知または公表する。特定した目的の範囲を超えて扱うには、原則として本人の事前の同意が必要である（18条1項）。",
    src: [APPI, PPC_GL, PPC_QA] },
  { id: "third-party-provision", term: "第三者提供", reading: "だいさんしゃていきょう", aliases: ["第三者への提供"], kw: ["第三者提供"], home: "L01", scope: ["L01"],
    short: "個人データを本人・事業者以外の者に渡すこと。原則として本人の事前の同意が必要である（27条1項）。法令に基づく場合などの例外のほか、委託・事業承継・共同利用に伴う提供は第三者提供に当たらない（同条5項）。",
    src: [APPI, PPC_GL] },
  { id: "entrustment", term: "委託", reading: "いたく", kw: ["委託"], home: "L01", scope: ["L01"],
    short: "（個人情報保護法で）個人データの取扱いの全部または一部を他者に任せること。利用目的の達成に必要な範囲の委託に伴う提供は第三者提供に当たらず同意は不要だが、委託元は委託先を監督する義務を負う（25条）。",
    src: [APPI, PPC_GL, PPC_QA] },
  { id: "pseudonymized-info", term: "仮名加工情報", reading: "かめいかこうじょうほう", kw: ["仮名加工情報"], home: "L01",
    short: "他の情報と照合しない限り特定の個人を識別できないよう、氏名などを削除・置換して個人情報を加工した情報（2条5項）。2020年改正で創設。事業者内部の分析を想定し、義務が緩和される一方、第三者提供は原則禁止。",
    src: [APPI, PPC_ANON, PPC_R2] },
  { id: "anonymized-info", term: "匿名加工情報", reading: "とくめいかこうじょうほう", kw: ["匿名加工情報"], home: "L01",
    short: "特定の個人を識別できず、元の個人情報を復元できないように加工した情報（2条6項）。個人情報に当たらず、項目などを公表すれば本人の同意なく第三者に提供できる。本人を識別するための照合は禁止される。",
    src: [APPI, PPC_ANON, PPC_QA] },
  { id: "gdpr", term: "一般データ保護規則", abbr: "GDPR", reading: "いっぱんでーたほごきそく", aliases: ["EU一般データ保護規則"], kw: ["GDPR"], home: "L01",
    short: "EU の個人データ保護の規則（Regulation (EU) 2016/679）。2018年5月25日から適用。EU 域内に拠点がなくても、EU 域内の人に商品・サービスを提供したり行動を監視したりする事業者に適用される（3条2項）。",
    src: [GDPR_JA, GDPR_PRE] },

  /* ── L01 個人情報保護法：本文に出てくる他の専門用語 ── */
  { id: "appi-business-operator", term: "個人情報取扱事業者", reading: "こじんじょうほうとりあつかいじぎょうしゃ", kw: [], home: "L01",
    short: "個人情報データベース等を事業に用いている者（個人情報保護法16条2項。国の機関・地方公共団体などを除く）。営利・非営利を問わず、扱う人数の多少にかかわらず該当し、法人格のない団体や個人も含む。",
    src: [APPI, PPC_GL] },
  { id: "personal-info-database", term: "個人情報データベース等", reading: "こじんじょうほうでーたべーすとう", kw: [], home: "L01",
    short: "特定の個人情報をコンピュータで検索できるように体系的に構成した、個人情報を含む情報の集合物（16条1項）。紙でも索引を付けるなどして容易に検索できるものを含む。例：氏名とメールアドレスを登録したアドレス帳。",
    src: [APPI, PPC_GL] },
  { id: "easy-collation", term: "容易照合性", reading: "よういしょうごうせい", aliases: ["容易に照合"], kw: [], home: "L01",
    short: "それだけでは個人を識別できない情報でも、事業者が通常の業務で他の情報と容易に照合して特定の個人を識別できるなら、個人情報に当たるという考え方（個人情報保護法2条1項1号のかっこ書き）。",
    src: [APPI, PPC_GL] },
  { id: "personal-related-info", term: "個人関連情報", reading: "こじんかんれんじょうほう", kw: [], home: "L01",
    short: "生存する個人に関する情報で、個人情報・仮名加工情報・匿名加工情報のいずれにも当たらないもの（2条7項）。例：Cookie で集めた閲覧履歴。提供先で個人データになると想定されるときは、本人の同意の確認が必要（31条）。",
    src: [APPI, PPC_GL] },
  { id: "opt-out", term: "オプトアウト", reading: "おぷとあうと", kw: [], home: "L01", scope: ["L01"],
    short: "（個人情報保護法の）本人の求めがあれば提供を停止することを前提に、項目などを本人に通知等し、個人情報保護委員会に届け出て、同意なく個人データを第三者提供する仕組み（27条2項）。要配慮個人情報などは対象外。",
    src: [APPI, PPC_GL] },
  { id: "joint-use", term: "共同利用", reading: "きょうどうりよう", kw: [], home: "L01", scope: ["L01"],
    short: "特定の者との間で個人データを共同して利用すること。その旨や項目、利用者の範囲、利用目的、管理責任者を本人にあらかじめ通知するなどすれば、提供先は第三者に当たらない（個人情報保護法27条5項3号）。",
    src: [APPI, PPC_GL] },
  { id: "cross-border-transfer", term: "外国にある第三者への提供", reading: "がいこくにあるだいさんしゃへのていきょう", aliases: ["越境移転"], kw: [], home: "L01",
    short: "外国にある第三者に個人データを提供すること。原則として、移転先の国の制度などを本人に示したうえで同意を得る（個人情報保護法28条）。同等の水準と認められた国（EU・英国）や基準に適合する体制を持つ提供先は例外。",
    src: [APPI, PPC_OFF] },
  { id: "adequacy-decision", term: "十分性認定", reading: "じゅうぶんせいにんてい", kw: [], home: "L01",
    short: "GDPR 45条に基づき、欧州委員会が EU 域外の国・地域について十分な個人データ保護の水準があると認める決定。認定先へは個別の許可なしに個人データを移転できる。日本は2019年1月23日に認定された。",
    src: [GDPR_JA, PPC_JPEU] },
  { id: "safety-management-measures", term: "安全管理措置", reading: "あんぜんかんりそち", kw: [], home: "L01",
    short: "個人データの漏えい・滅失・毀損を防ぐために事業者が講じる必要かつ適切な措置（個人情報保護法23条）。ガイドラインは、組織的・人的・物理的・技術的な安全管理措置などに分けて内容を示している。",
    src: [APPI, PPC_GL] },
  { id: "deleted-info", term: "削除情報等", reading: "さくじょじょうほうとう", kw: [], home: "L01",
    short: "仮名加工情報を作るときに元の個人情報から削除した記述等・個人識別符号と、加工の方法に関する情報（個人情報保護法41条2項）。本人の識別につながるため、漏えいを防ぐ安全管理措置が求められる。",
    src: [APPI, PPC_ANON] },
  { id: "statistical-info", term: "統計情報", reading: "とうけいじょうほう", kw: [], home: "L01", scope: ["L01"],
    short: "複数人の情報から共通の項目を抜き出し、同じ分類ごとに集計した情報。特定の個人との対応関係がないため個人情報に当たらない（個人情報保護委員会Q&A）。個人単位の情報を含みうる匿名加工情報とは異なる。",
    src: [PPC_QA] },
  { id: "extraterritorial-application", term: "域外適用", reading: "いきがいてきよう", kw: [], home: "L01",
    short: "国外の事業者にも法律を適用すること。個人情報保護法は、国内の人に商品・サービスを提供する事業者が国内の人の個人情報を外国で扱う場合にも適用される（171条）。GDPR も EU 域外の事業者に適用されうる（3条2項）。",
    src: [APPI, GDPR_JA] },
  { id: "profiling", term: "プロファイリング", reading: "ぷろふぁいりんぐ", kw: [], home: "L01",
    short: "個人データを自動的に処理して、個人の好み・行動・信用度などを分析・予測すること（GDPR 4条(4)）。日本では Q&A が、本人が予測できない分析処理をする場合はそれを含めて利用目的を特定するよう求めている。",
    src: [GDPR_JA, PPC_QA] },
  { id: "ppc", term: "個人情報保護委員会", abbr: "PPC", reading: "こじんじょうほうほごいいんかい", kw: [], home: "L01",
    short: "個人情報保護法に基づいて置かれる国の機関（130条）。ガイドラインや Q&A の作成、事業者への指導・助言（147条）や勧告・命令（148条）、漏えい等の報告の受付などを行う。",
    src: [APPI, PPC_R2P] }
  ]);

  /* ── 出典（L02 著作権法） ── */
  const COPY = { t: "著作権法（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/345AC0000000048" };
  const BUNKA_AI = { t: "文化審議会著作権分科会法制度小委員会「AIと著作権に関する考え方について」（2024年3月15日）", u: "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf" };
  const BUNKA_AIP = { t: "文化庁「AIと著作権について」", u: "https://www.bunka.go.jp/seisaku/chosakuken/aiandcopyright.html" };
  const BUNKA_TEXT = { t: "文化庁著作権課「著作権テキスト －令和8年度版－」", u: "https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/pdf/94436101_01.pdf" };
  const METI_AI = { t: "経済産業省「AI・データの利用に関する契約ガイドライン 1.1版」（AI編を含む全体版）", u: "https://www.meti.go.jp/policy/mono_info_service/connected_industries/sharing_and_utilization/20200619001.pdf" };
  const CIVIL = { t: "民法（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/129AC0000000089" };
  const PATENT = { t: "特許法（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/334AC0000000121" };
  const OSI_MIT = { t: "Open Source Initiative. The MIT License", u: "https://opensource.org/license/mit" };
  const GNU_CL = { t: "GNU Project. What is Copyleft?", u: "https://www.gnu.org/licenses/copyleft.html" };
  /* ── 出典（L03 特許法） ── */
  const IPBASIC = { t: "知的財産基本法（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/414AC0000000122" };
  const JPO_KIJUN_H = { t: "特許庁「特許・実用新案審査基準 第III部第1章 発明該当性及び産業上の利用可能性」", u: "https://www.jpo.go.jp/system/laws/rule/guideline/patent/tukujitu_kijun/document/index/03_0100.pdf" };
  const JPO_KIJUN_N = { t: "特許庁「特許・実用新案審査基準 第III部第2章第1節 新規性」", u: "https://www.jpo.go.jp/system/laws/rule/guideline/patent/tukujitu_kijun/document/index/03_0201.pdf" };
  const JPO_KIJUN_S = { t: "特許庁「特許・実用新案審査基準 第III部第2章第2節 進歩性」", u: "https://www.jpo.go.jp/system/laws/rule/guideline/patent/tukujitu_kijun/document/index/03_0202.pdf" };
  const JPO_SHOKUMU = { t: "特許庁「職務発明制度の概要」", u: "https://www.jpo.go.jp/system/patent/shutugan/shokumu/shokumu.html" };
  const DABUS = { t: "知的財産高等裁判所 令和7年1月30日判決（令和6年（行コ）第10006号 出願却下処分取消請求控訴事件）", u: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93757.pdf" };
  /* ── 出典（L04 不正競争防止法） ── */
  const UCPA = { t: "不正競争防止法（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/405AC0000000047" };
  const METI_TS = { t: "経済産業省「営業秘密管理指針」（最終改訂：令和7年3月31日）", u: "https://www.meti.go.jp/policy/economy/chizai/chiteki/guideline/r7ts.pdf" };
  const METI_LPD = { t: "経済産業省「限定提供データに関する指針」（最終改訂：令和6年2月）", u: "https://www.meti.go.jp/policy/economy/chizai/chiteki/guideline/h31pd.pdf" };
  const METI_UCPA = { t: "経済産業省「不正競争防止法」", u: "https://www.meti.go.jp/policy/economy/chizai/chiteki/index.html" };
  /* ── 出典（L05 独占禁止法） ── */
  const AMA = { t: "私的独占の禁止及び公正取引の確保に関する法律（e-Gov 法令検索）", u: "https://laws.e-gov.go.jp/law/322AC0000000054" };
  const JFTC_GAIYO = { t: "公正取引委員会「独占禁止法の概要」", u: "https://www.jftc.go.jp/dk/dkgaiyo/gaiyo.html" };
  const JFTC_KISEI = { t: "公正取引委員会「独占禁止法の規制内容」", u: "https://www.jftc.go.jp/dk/dkgaiyo/kisei.html" };
  const JFTC_FUKOUSEI = { t: "公正取引委員会「不公正な取引方法（昭和五十七年六月十八日公正取引委員会告示第十五号）」", u: "https://www.jftc.go.jp/dk/guideline/fukousei.html" };
  const JFTC_CPRC = { t: "公正取引委員会競争政策研究センター「競争者排除型行為に係る不公正な取引方法・私的独占について ―理論的整理―」（2008年）", u: "https://www.jftc.go.jp/cprc/reports/index_files/cr-0108.pdf" };
  const JFTC_GENAI = { t: "公正取引委員会「生成AIに関する実態調査報告書ver.2.0について」（2026年4月16日）", u: "https://www.jftc.go.jp/houdou/pressrelease/2026/apr/260416_generativeai.html" };
  /* ── 出典（L07 AIサービス提供契約） ── */
  const METI_CL = { t: "経済産業省「AIの利用・開発に関する契約チェックリスト」（2025年2月）", u: "https://www.meti.go.jp/policy/mono_info_service/connected_industries/sharing_and_utilization/20250218003-ar.pdf" };
  const NIST_CLOUD = { t: "Mell, P. & Grance, T. (2011). The NIST Definition of Cloud Computing (NIST SP 800-145)", u: "https://csrc.nist.gov/pubs/sp/800/145/final" };

  GK.addGlossary([
  /* ── L02 著作権法：シラバスのキーワード ── */
  { id: "copyrighted-work", term: "著作物", reading: "ちょさくぶつ", kw: ["著作物"], home: "L02",
    short: "思想または感情を創作的に表現したもので、文芸・学術・美術・音楽の範囲に属するもの（著作権法2条1項1号）。単なる事実やデータ、アイデア、ありふれた表現は含まれない。プログラムも著作物に当たる。",
    src: [COPY, BUNKA_TEXT] },
  { id: "originality", term: "創作性", reading: "そうさくせい", kw: ["創作性"], home: "L02",
    short: "著作物の要件の一つで、思想・感情が「創作的に」表現されていること。上手下手や芸術的な価値は問わないが、他人の作品の模倣や、誰が表現しても同じようになるありふれた表現には認められない。",
    src: [COPY, BUNKA_TEXT] },
  { id: "copyright", term: "著作権", reading: "ちょさくけん", kw: ["著作権"], home: "L02",
    short: "著作物の利用を独占できる財産的な権利（複製権・公衆送信権・翻案権など。著作権法21〜28条）。創作した時点で手続なしに発生し（無方式主義）、原則として著作者の死後70年まで続く。譲渡や利用の許諾ができる。",
    src: [COPY, BUNKA_TEXT] },
  { id: "copyright-infringement", term: "著作権侵害", reading: "ちょさくけんしんがい", kw: ["著作権侵害"], home: "L02",
    short: "権利者の許諾も権利制限規定もないまま著作物を利用すること。判例上、既存の著作物との類似性と依拠性の両方が必要とされる。差止請求・損害賠償請求などの民事上の措置や刑事罰の対象になる。",
    src: [COPY, BUNKA_AI, BUNKA_TEXT] },
  { id: "ai-generated-content", term: "AI 生成物", reading: "えーあいせいせいぶつ", aliases: ["AI生成物"], kw: ["AI 生成物"], home: "L02",
    short: "生成 AI が出力した文章・画像などのこと。AI は著作者になれず、人が AI を道具として使い創作的に寄与した場合に限り著作物となりうる。既存の著作物との類似性と依拠性があれば著作権侵害になる。",
    src: [BUNKA_AI, BUNKA_AIP] },

  /* ── L02 著作権法：本文に出てくる他の専門用語 ── */
  { id: "author", term: "著作者", reading: "ちょさくしゃ", kw: [], home: "L02",
    short: "著作物を創作した人（著作権法2条1項2号）。職業や上手下手は問わない。制作を外部に委託した場合は、代金を払っても原則として実際に創作した受注者側が著作者になる。会社が著作者になる職務著作もある。",
    src: [COPY, BUNKA_TEXT] },
  { id: "work-for-hire", term: "職務著作", reading: "しょくむちょさく", aliases: ["法人著作"], kw: [], home: "L02",
    short: "会社などの発意に基づき、その業務に従事する人が職務上作り、会社名義で公表する著作物は、契約などに別段の定めがない限り会社が著作者になる制度（著作権法15条）。プログラムは公表の要件が不要。",
    src: [COPY, BUNKA_TEXT] },
  { id: "moral-rights", term: "著作者人格権", reading: "ちょさくしゃじんかくけん", kw: [], home: "L02",
    short: "著作者の人格的な利益を守る権利で、公表権・氏名表示権・同一性保持権（無断で改変されない権利）からなる（著作権法18〜20条）。著作者の一身に専属し、譲渡できない（59条）。",
    src: [COPY, BUNKA_TEXT] },
  { id: "no-formality", term: "無方式主義", reading: "むほうしきしゅぎ", kw: [], home: "L02",
    short: "著作権が、登録や申請などの手続を一切必要とせず、著作物を創作した時点で自動的に発生するという原則（著作権法17条2項）。出願・審査・登録が必要な特許権などの産業財産権と異なる。",
    src: [COPY, BUNKA_TEXT] },
  { id: "reliance", term: "依拠性", reading: "いきょせい", kw: [], home: "L02",
    short: "著作権侵害の要件の一つで、既存の著作物に基づいて作品を作ったこと。偶然似ただけなら認められない。生成 AI では、利用者が知らなくても学習データに含まれていれば、通常は推認されると考えられている。",
    src: [BUNKA_AI] },
  { id: "similarity-copyright", term: "類似性", reading: "るいじせい", kw: [], home: "L02", scope: ["L02"],
    short: "（著作権侵害の）要件の一つで、作品から既存の著作物の表現上の本質的な特徴を直接感じ取れること。アイデアや作風・画風が共通するだけでは認められない。",
    src: [BUNKA_AI] },
  { id: "copyright-art30-4", term: "著作権法30条の4", reading: "ちょさくけんほうさんじゅうじょうのよん", aliases: ["30条の4", "非享受目的"], kw: [], home: "L02",
    short: "著作物に表現された思想・感情の享受を目的としない利用（情報解析など）を、必要な限度で許諾なく認める規定。AI 学習の主な根拠となる。享受目的が併存する場合や、著作権者の利益を不当に害する場合は適用されない。",
    src: [COPY, BUNKA_AI] },
  { id: "program-work", term: "プログラムの著作物", reading: "ぷろぐらむのちょさくぶつ", kw: [], home: "L02",
    short: "コンピュータのプログラムを表現した著作物（著作権法10条1項9号）。ソースコードもオブジェクトコードも保護されるが、プログラム言語・規約・解法（アルゴリズム）には保護が及ばない（10条3項）。",
    src: [COPY, METI_AI] },
  { id: "database-work", term: "データベースの著作物", reading: "でーたべーすのちょさくぶつ", kw: [], home: "L02",
    short: "情報の選択または体系的な構成に創作性があるデータベース（著作権法12条の2）。個々のデータが著作物でなくても、全体として保護される。学習用データセットがこれに当たる可能性もある。",
    src: [COPY, METI_AI] },
  { id: "license", term: "ライセンス", reading: "らいせんす", aliases: ["利用許諾"], kw: [], home: "L02",
    short: "知的財産の権利者が、他人にその利用を認めること（利用許諾）。著作権では63条、特許では実施権の設定・許諾（77条・78条）が根拠。利用者は許諾された方法・条件の範囲でだけ利用できる。",
    src: [COPY, PATENT, BUNKA_TEXT] },

  /* ── L03 特許法：シラバスのキーワード ── */
  { id: "invention", term: "発明", reading: "はつめい", kw: ["発明"], home: "L03", scope: ["L03", "L04", "L06", "L07"],
    short: "（特許法の）自然法則を利用した技術的思想の創作のうち高度のもの（2条1項）。自然法則そのもの、数学の公式、ゲームのルールのような人為的な取決めは当たらない。ソフトウェアも全体として自然法則を利用していれば当たる。",
    src: [PATENT, JPO_KIJUN_H] },
  { id: "novelty", term: "新規性", reading: "しんきせい", kw: ["新規性"], home: "L03", scope: ["L03"],
    short: "（特許の）要件の一つで、出願前に公然知られたり、公然実施されたり、刊行物やインターネットで公開されたりしていないこと（特許法29条1項）。自ら公開した場合も、1年以内なら例外の手続がある（30条）。",
    src: [PATENT, JPO_KIJUN_N] },
  { id: "inventive-step", term: "進歩性", reading: "しんぽせい", kw: ["進歩性"], home: "L03", scope: ["L03"],
    short: "（特許の）要件の一つで、その分野の通常の知識を持つ者（当業者）が、出願前の先行技術から容易に発明できたものではないこと（特許法29条2項）。容易なものに独占権を与えると技術の進歩を妨げるためである。",
    src: [PATENT, JPO_KIJUN_S] },
  { id: "ip-rights", term: "知的財産権", reading: "ちてきざいさんけん", kw: ["知的財産権"], home: "L03",
    short: "知的な創作の成果などを保護する権利の総称。特許権・実用新案権・意匠権・商標権（産業財産権）、著作権、育成者権のほか、法律上保護される利益に係る権利を含む（知的財産基本法2条2項）。",
    src: [IPBASIC, BUNKA_TEXT] },
  { id: "inventor", term: "発明者", reading: "はつめいしゃ", kw: ["発明者"], home: "L03",
    short: "発明をした者。発明者には特許を受ける権利が生じ、願書には発明者の氏名を書く（特許法29条1項・36条1項）。知財高裁2025年1月30日判決は、特許法上の発明者は自然人に限られ、AI は発明者になれないとした。",
    src: [PATENT, DABUS] },
  { id: "employee-invention", term: "職務発明", reading: "しょくむはつめい", kw: ["職務発明"], home: "L03",
    short: "従業者等がした発明のうち、使用者等の業務範囲に属し、従業者等の現在または過去の職務に属するもの（特許法35条1項）。定めがあれば特許を受ける権利は発生時から使用者等に帰属し、従業者等は相当の利益を受ける権利を持つ。",
    src: [PATENT, JPO_SHOKUMU] },
  { id: "patent-right", term: "特許権", reading: "とっきょけん", kw: ["特許権"], home: "L03",
    short: "特許を受けた発明を、業として独占的に実施できる権利（特許法68条）。特許庁への出願・審査・登録で発生し、原則として出願から20年存続する。内容は公開され、独自に同じ発明をした他人にも効力が及ぶ。",
    src: [PATENT, BUNKA_TEXT] },

  /* ── L03 特許法：本文に出てくる他の専門用語 ── */
  { id: "right-to-obtain-patent", term: "特許を受ける権利", reading: "とっきょをうけるけんり", kw: [], home: "L03",
    short: "発明をした者が、その発明について特許を受けることができる権利（特許法29条1項）。発明と同時に発明者に生じ、他人に移転できる（33条）。職務発明では、定めにより最初から使用者等に帰属させることができる（35条3項）。",
    src: [PATENT, DABUS] },
  { id: "person-skilled-in-the-art", term: "当業者", reading: "とうぎょうしゃ", kw: [], home: "L03", scope: ["L03"],
    short: "その発明の属する技術分野の通常の知識を持つ者（特許法29条2項）。進歩性は、当業者が出願前の先行技術から容易に発明できたかどうかで判断される。",
    src: [PATENT, JPO_KIJUN_S] },
  { id: "first-to-file", term: "先願主義", reading: "せんがんしゅぎ", kw: [], home: "L03",
    short: "同じ発明について複数の特許出願があった場合、最も先に出願した者だけが特許を受けられるという原則（特許法39条1項）。先に発明した者ではなく、先に出願した者が優先される。",
    src: [PATENT] },
  { id: "laid-open", term: "出願公開", reading: "しゅつがんこうかい", kw: [], home: "L03",
    short: "特許出願の日から1年6か月がたつと、出願の内容が特許公報で公開される制度（特許法64条）。特許制度は、発明を公開する代わりに一定期間の独占権を与える仕組みである。",
    src: [PATENT, JPO_KIJUN_N] },
  { id: "industrial-property-rights", term: "産業財産権", reading: "さんぎょうざいさんけん", kw: [], home: "L03",
    short: "特許権・実用新案権・意匠権・商標権の4つの総称。いずれも特許庁への出願と登録によって発生する点で、手続なしに発生する著作権と異なる。",
    src: [BUNKA_TEXT] },
  { id: "non-exclusive-license", term: "通常実施権", reading: "つうじょうじっしけん", kw: [], home: "L03",
    short: "特許権者の許諾や法律の規定によって、特許発明を業として実施できる権利（特許法78条）。独占的な専用実施権（77条）と異なり、独占はできない。職務発明では使用者等が法律上これを持つ（35条1項）。",
    src: [PATENT] },
  { id: "reasonable-benefit", term: "相当の利益", reading: "そうとうのりえき", kw: [], home: "L03",
    short: "職務発明について、特許を受ける権利を使用者等に取得させた場合などに、従業者等が受ける権利を持つ金銭その他の経済上の利益（特許法35条4項）。2015年の改正で「相当の対価」から改められた。",
    src: [PATENT, JPO_SHOKUMU] },
  { id: "novelty-grace-period", term: "新規性喪失の例外", reading: "しんきせいそうしつのれいがい", kw: [], home: "L03",
    short: "自らの公開などで新規性を失った発明でも、公開から1年以内に出願し、所定の手続をとるなどすれば、新規性を失わなかったものとみなす制度（特許法30条）。学会発表や論文公開の後でも出願できる場合がある。",
    src: [PATENT] },

  /* ── L04 不正競争防止法：シラバスのキーワード ── */
  { id: "trade-secret", term: "営業秘密", reading: "えいぎょうひみつ", kw: ["営業秘密"], home: "L04",
    short: "秘密として管理されている、事業活動に有用な技術上・営業上の情報で、公然と知られていないもの（不正競争防止法2条6項）。秘密管理性・有用性・非公知性の三要件を満たすと、不正な取得・使用・開示から守られる。",
    src: [UCPA, METI_TS] },
  { id: "limited-provision-data", term: "限定提供データ", reading: "げんていていきょうでーた", kw: ["限定提供データ"], home: "L04",
    short: "業として特定の者に提供するため、電磁的方法で相当量蓄積され管理されている技術上・営業上の情報（営業秘密を除く。不正競争防止法2条7項）。2018年改正で導入。秘密にしていなくても不正な取得などから守られるが、刑事罰はない。",
    src: [UCPA, METI_LPD] },

  /* ── L04 不正競争防止法：本文に出てくる他の専門用語 ── */
  { id: "unfair-competition-prevention-act", term: "不正競争防止法", reading: "ふせいきょうそうぼうしほう", kw: [], home: "L04",
    short: "事業者間の公正な競争を確保するため、他人の商品表示の盗用、商品形態の模倣、営業秘密や限定提供データの不正取得などを「不正競争」として規制する法律。差止請求・損害賠償請求のほか、一部の行為には刑事罰がある。",
    src: [UCPA, METI_UCPA] },
  { id: "secrecy-management", term: "秘密管理性", reading: "ひみつかんりせい", kw: [], home: "L04",
    short: "営業秘密の要件の一つ。会社が秘密として管理する意思を、アクセス制限や「社外秘」の表示などの措置で従業員等に明確に示し、従業員等がそれを認識できる状態にあること。内心で秘密と考えているだけでは足りない。",
    src: [UCPA, METI_TS] },
  { id: "usefulness", term: "有用性", reading: "ゆうようせい", kw: [], home: "L04", scope: ["L04"],
    short: "（営業秘密の）要件の一つで、客観的にみて事業活動に有用な情報であること。失敗した実験データなども含まれる。脱税などの反社会的な情報は除かれる。特許の進歩性のような高い水準は要らない。",
    src: [METI_TS] },
  { id: "non-publicity", term: "非公知性", reading: "ひこうちせい", kw: [], home: "L04",
    short: "営業秘密の要件の一つで、一般に知られておらず、容易に知ることもできないこと。誰でも簡単に製品を解析して取り出せる情報は、その製品を市販したことで非公知性を失うと考えられている。",
    src: [UCPA, METI_TS] },
  { id: "limited-provision", term: "限定提供性", reading: "げんていていきょうせい", kw: [], home: "L04",
    short: "限定提供データの要件の一つで、業として特定の者に提供する情報であること。例：会費を払った会員や、コンソーシアムの参加者に提供するデータ。相手を限定せず無償で公開しているデータは当たらない。",
    src: [UCPA, METI_LPD] },
  { id: "substantial-accumulation", term: "相当蓄積性", reading: "そうとうちくせきせい", kw: [], home: "L04",
    short: "限定提供データの要件の一つで、電磁的方法により、社会通念上価値を持つ程度に相当量蓄積されていること。量は、データの性質や、蓄積で生まれる付加価値、収集・解析にかけた労力などを考慮して判断される。",
    src: [UCPA, METI_LPD] },
  { id: "electromagnetic-management", term: "電磁的管理性", reading: "でんじてきかんりせい", kw: [], home: "L04",
    short: "限定提供データの要件の一つで、ID・パスワードによる認証などの電磁的なアクセス制限により、特定の者に提供するものとして管理されていること。管理の意思を外部に明確にし、第三者の予見可能性を確保する趣旨である。",
    src: [UCPA, METI_LPD] },

  /* ── L05 独占禁止法：シラバスのキーワード ── */
  { id: "restraint-of-competition", term: "競争制限", reading: "きょうそうせいげん", aliases: ["競争の実質的制限"], kw: ["競争制限"], home: "L05",
    short: "事業者の行為で市場の競争が弱められること。独占禁止法は、私的独占と不当な取引制限（カルテル）の要件として「一定の取引分野における競争を実質的に制限すること」を定め、これらを禁止している（2条5項・6項、3条）。",
    src: [AMA, JFTC_KISEI] },
  { id: "impediment-to-fair-competition", term: "公正競争阻害性", reading: "こうせいきょうそうそがいせい", kw: ["公正競争阻害性"], home: "L05",
    short: "不公正な取引方法の要件である「公正な競争を阻害するおそれ」のこと（独占禁止法2条9項6号）。自由な競争の制限のおそれ、競争手段の不公正さ、自由な競争の基盤の侵害という観点から判断される。",
    src: [AMA, JFTC_KISEI, JFTC_CPRC] },

  /* ── L05 独占禁止法：本文に出てくる他の専門用語 ── */
  { id: "antimonopoly-act", term: "独占禁止法", reading: "どくせんきんしほう", aliases: ["独禁法"], kw: [], home: "L05",
    short: "正式名は「私的独占の禁止及び公正取引の確保に関する法律」。私的独占、不当な取引制限、不公正な取引方法などを禁止し、公正かつ自由な競争を促進することを目的とする（1条）。公正取引委員会が運用する。",
    src: [AMA, JFTC_GAIYO] },
  { id: "private-monopolization", term: "私的独占", reading: "してきどくせん", kw: [], home: "L05",
    short: "事業者が単独で、または他の事業者と組んで、他の事業者の事業活動を排除または支配し、一定の取引分野における競争を実質的に制限すること（独占禁止法2条5項）。例：不当な安売りで競争相手を市場から追い出す。",
    src: [AMA, JFTC_KISEI] },
  { id: "unreasonable-restraint-of-trade", term: "不当な取引制限", reading: "ふとうなとりひきせいげん", aliases: ["カルテル"], kw: [], home: "L05",
    short: "事業者が他の事業者と共同して価格や数量などを決め、相互に事業活動を拘束して、一定の取引分野における競争を実質的に制限すること（独占禁止法2条6項）。カルテルや入札談合が典型である。",
    src: [AMA, JFTC_KISEI] },
  { id: "unfair-trade-practices", term: "不公正な取引方法", reading: "ふこうせいなとりひきほうほう", kw: [], home: "L05",
    short: "公正な競争を阻害するおそれがある取引方法（独占禁止法2条9項、19条で禁止）。法律で定めた共同の取引拒絶・不当廉売・優越的地位の濫用などと、公正取引委員会が告示で指定した排他条件付取引・抱き合わせ販売などがある。",
    src: [AMA, JFTC_KISEI, JFTC_FUKOUSEI] },
  { id: "abuse-of-superior-position", term: "優越的地位の濫用", reading: "ゆうえつてきちいのらんよう", kw: [], home: "L05",
    short: "取引上の地位が相手方に優越している事業者が、その地位を利用して、正常な商慣習に照らして不当に相手方に不利益を与えること（独占禁止法2条9項5号）。市場全体で独占的でなくても、相手方との関係で優越していれば問題になりうる。",
    src: [AMA, METI_AI] },
  { id: "jftc", term: "公正取引委員会", reading: "こうせいとりひきいいんかい", aliases: ["公取委"], kw: [], home: "L05",
    short: "独占禁止法を運用する国の行政機関（独占禁止法27条）。違反行為に対する排除措置命令や課徴金納付命令、ガイドラインや市場の実態調査報告書の公表などを行う。",
    src: [AMA, JFTC_GAIYO] },
  { id: "tying", term: "抱き合わせ販売", reading: "だきあわせはんばい", kw: [], home: "L05",
    short: "ある商品・サービスを提供する際に、相手方に不当に別の商品・サービスも購入させること。不公正な取引方法の一つ（一般指定10項）。公正取引委員会は、有力な事業者が既存サービスに生成 AI を統合する行為が、これに当たる場合があると整理している。",
    src: [JFTC_FUKOUSEI, JFTC_GENAI] },

  /* ── L06 AI開発委託契約：シラバスのキーワード ── */
  { id: "ai-data-contract-guideline", term: "AI・データの利用に関する契約ガイドライン", reading: "えーあい・でーたのりようにかんするけいやくがいどらいん", aliases: ["契約ガイドライン"], kw: ["AI・データの利用に関する契約ガイドライン"], home: "L06",
    short: "経済産業省が2018年6月に策定した契約の指針（データ編・AI編。2019年12月にデータ編を改訂し1.1版）。AI編は、開発を4段階に分ける探索的段階型の進め方、各段階の契約、権利帰属と利用条件などの考え方とモデル契約を示す。法的拘束力はない。",
    src: [METI_AI] },
  { id: "nda", term: "秘密保持契約", abbr: "NDA", reading: "ひみつほじけいやく", aliases: ["機密保持契約"], kw: ["NDA"], home: "L06",
    short: "取引の検討などのために開示する秘密情報について、目的外の使用や第三者への開示を禁じる契約（Non-Disclosure Agreement）。AI 開発では、ユーザがデータの開示を始める最初のアセスメント段階で結ぶ。",
    src: [METI_AI] },
  { id: "contract-for-work", term: "請負契約", reading: "うけおいけいやく", aliases: ["請負"], kw: ["請負契約"], home: "L06",
    short: "当事者の一方が仕事の完成を約束し、相手方がその結果に報酬を支払う契約（民法632条）。受注者は完成義務を負い、引き渡した成果物が契約の内容に適合しなければ責任を負う。作る物を事前に特定できる開発に向く。",
    src: [CIVIL, METI_AI] },
  { id: "quasi-mandate", term: "準委任契約", reading: "じゅんいにんけいやく", aliases: ["準委任"], kw: ["準委任契約"], home: "L06",
    short: "法律行為でない事務の処理を委託する契約（民法656条で委任の規定を準用）。受任者は善良な管理者の注意をもって事務を処理する義務を負うが、完成義務はない。経済産業省のガイドラインは、AI 開発の各段階にはこれが親和的とする。",
    src: [CIVIL, METI_AI] },
  { id: "accuracy-guarantee", term: "精度保証", reading: "せいどほしょう", aliases: ["性能保証"], kw: ["精度保証"], home: "L06",
    short: "学習済みモデルなどが一定の精度・性能を満たすことを契約で約束すること。未知のデータへの性能は事前に予測しにくく、保証は困難な場合が多い。評価条件の限定や、対価・支払条件の工夫と組み合わせて保証することはありうる。",
    src: [METI_AI] },
  { id: "maintenance-contract", term: "保守契約", reading: "ほしゅけいやく", aliases: ["保守運用契約"], kw: ["保守契約"], home: "L06",
    short: "納品したシステムやモデルの稼働後に、障害対応・修正・運用支援などを継続的に提供する契約。AI では入力データの性質が変わると精度が落ちることがあり、追加学習の扱いや責任分担を保守運用契約などで定めることがある。",
    src: [METI_AI] },

  /* ── L06 AI開発委託契約：本文に出てくる他の専門用語 ── */
  { id: "exploratory-staged-development", term: "探索的段階型の開発方式", reading: "たんさくてきだんかいがたのかいはつほうしき", aliases: ["探索的段階型"], kw: [], home: "L06",
    short: "経済産業省の契約ガイドライン（AI編）が提唱する開発の進め方。アセスメント、PoC、開発、追加学習の4段階に分け、段階ごとに目標を確かめて契約を結ぶ。認識のずれを防ぎ、見込みがなければ途中で中止して損失の拡大を防げる。",
    src: [METI_AI] },
  { id: "trained-model", term: "学習済みモデル", reading: "がくしゅうずみもでる", kw: [], home: "L06",
    short: "学習用データセットで学習させて得た、学習済みパラメータを組み込んだ推論プログラム（経済産業省の契約ガイドラインの整理）。新しい入力データに対して予測・判定などの結果を出力する。",
    src: [METI_AI] },
  { id: "trained-parameters", term: "学習済みパラメータ", reading: "がくしゅうずみぱらめーた", kw: [], home: "L06",
    short: "学習用データセットを使った学習の結果として得られたパラメータ（重みなどの係数）。大量の数値データで、通常は著作権などの知的財産権の対象にならない可能性が高いとされ、利用の制限は契約で定める必要がある。",
    src: [METI_AI, PPC_QA] },
  { id: "training-dataset", term: "学習用データセット", reading: "がくしゅうようでーたせっと", kw: [], home: "L06",
    short: "生データに前処理や正解ラベルの付与などを行って、機械学習に使える形にしたデータの集まり。学習済みモデルの性能はその品質に大きく依存する。情報の選択や体系的な構成に創作性があればデータベースの著作物になりうる。",
    src: [METI_AI] },
  { id: "reuse-model", term: "再利用モデル", reading: "さいりようもでる", kw: [], home: "L06",
    short: "既存の学習済みモデルに、別の学習用データセットで追加学習させて新たに作った学習済みモデル（経済産業省の契約ガイドライン）。その権利帰属や、他の顧客向けサービスへの利用の可否を契約で定めることが望ましい。",
    src: [METI_AI] },
  { id: "duty-of-due-care", term: "善管注意義務", reading: "ぜんかんちゅういぎむ", aliases: ["善良な管理者の注意"], kw: [], home: "L06",
    short: "委任・準委任の受任者が負う、その職業や地位にある人として通常求められる程度の注意を払って事務を処理する義務（民法644条）。結果の達成までは約束しない点で、請負の完成義務と異なる。",
    src: [CIVIL, METI_AI] },
  { id: "liability-for-nonconformity", term: "契約不適合責任", reading: "けいやくふてきごうせきにん", aliases: ["瑕疵担保責任"], kw: [], home: "L06",
    short: "引き渡した目的物が種類・品質・数量について契約の内容に適合しない場合に負う責任。相手方は追完（修補など）、代金・報酬の減額、損害賠償、解除を求めうる（民法562条以下、請負は559条で準用）。2020年施行の民法改正で、それまでの瑕疵担保責任に代えて設けられた。",
    src: [CIVIL] },

  /* ── L07 AIサービス提供契約：シラバスのキーワード ── */
  { id: "terms-of-service", term: "利用規約", reading: "りようきやく", kw: ["利用規約"], home: "L07",
    short: "サービス提供者が、多数の利用者との契約内容としてあらかじめ用意する共通の条件。民法の「定型約款」に当たる場合、一定の要件で個々の条項にも合意したものとみなされ、信義則に反して相手方の利益を一方的に害する条項は合意しなかったものとみなされる。",
    src: [CIVIL, METI_AI, METI_CL] },
  { id: "saas", term: "SaaS", reading: "saas", aliases: ["Software as a Service"], kw: ["SaaS"], home: "L07",
    short: "提供者のクラウド基盤上で動くアプリケーションを、利用者がウェブブラウザや API を通じて使う提供形態（Software as a Service）。利用者はサーバーなどの基盤やアプリケーションの機能そのものを管理しない（NIST の定義）。",
    src: [NIST_CLOUD, METI_AI] },
  { id: "data-use-rights", term: "データ利用権", reading: "でーたりようけん", aliases: ["データの利用権限"], kw: ["データ利用権"], home: "L07",
    short: "データを利用できる権限。データは所有権の対象にならず、知的財産権などで保護される場合を除き、誰がどの範囲で使えるかは契約で定める。AI サービスでは、入力データの学習への利用や、出力の利用条件が主な論点になる。",
    src: [METI_AI, METI_CL] },

  /* ── L07 AIサービス提供契約：本文に出てくる他の専門用語 ── */
  { id: "standard-terms", term: "定型約款", reading: "ていけいやっかん", kw: [], home: "L07",
    short: "不特定多数を相手方とし、内容が画一的であることが双方にとって合理的な取引（定型取引）で、契約の内容とする目的で準備された条項の総体（民法548条の2）。一定の要件で個々の条項に合意したものとみなされ、要件を満たせば個別の同意なく変更できる（548条の4）。",
    src: [CIVIL, METI_CL] }
  ]);
})();
