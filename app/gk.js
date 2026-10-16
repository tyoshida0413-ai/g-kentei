/* G検定 学習HTML：データ登録の窓口。データファイルより先に読み込む。
   データの形は 設計書.md §5 を参照。 */
window.GK = {
  syllabus: null,
  glossary: [],
  texts: {},
  questions: [],
  setSyllabus(s) { this.syllabus = s; },
  addGlossary(list) { this.glossary.push(...list); },
  addText(list) { list.forEach(t => { this.texts[t.section] = t; }); },
  addQuestions(list) { this.questions.push(...list); }
};
