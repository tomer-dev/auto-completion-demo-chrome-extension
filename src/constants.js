const sentences = [
  "Do you have time to meet next week?",
  "I have forwarded this message to the appropriate service rep",
  "If you're not the right person, can you please put me in touch with whoever is?",
  "Thanks again for chatting today and I look forward to hearing from you!"
];

const earlyMatchSentences = sentences.map((sentence) =>
  sentence.substr(0, sentence.length * 0.4)
);

export const Constants = Object.freeze({
  sentences,
  earlyMatch: earlyMatchSentences,
  inputLayerSuffix: "-autocomplete-layer",
  placeholderColor: "#797979",
  tabKey: "Tab",
  matchingAttribute: "data-sentence-matching-index"
});
