import { generateId, getWebsiteSpecificZIndex } from "../utils";
import { Constants } from "../constants";

export function dangerouslyAppendAutoCompleteInputLayer() {
  document
    .querySelectorAll("input[type=text]")
    .forEach(addAutoCompleteInputLayer);
}

export function normalizeInputIds() {
  document.querySelectorAll("input[type=text]").forEach((input) => {
    if (!input.id) {
      input.id = generateId();
    }
  });
}

export function activateAutoComplete() {
  document.querySelectorAll("input[type=text]").forEach((input) => {

    input.addEventListener("input", (event) =>
      onInputChangeEvent(event.target)
    );
  });

  document.addEventListener("keydown", (event) => onKeyPressEvent(event));
}

function onKeyPressEvent(event) {
  const sentenceIndex = event.target.getAttribute(Constants.matchingAttribute);

  if (event.key !== Constants.tabKey) return;

  event.preventDefault();

  if (sentenceIndex !== "-1") {
    event.target.value = Constants.sentences[sentenceIndex];
  }
}

function onInputChangeEvent(input) {
  const sentenceIndex = Constants.earlyMatch.findIndex((sentence) =>
    input.value.startsWith(sentence)
  );
  const sentence = sentenceIndex !== -1 ? Constants.sentences[sentenceIndex] : null;
  const hasMatch =
    sentence && input.value === sentence.substr(0, input.value.length);
  const hasStrictMatch =
    hasMatch && input.value.length >= sentence.length / 2;

  input.setAttribute(Constants.matchingAttribute, hasStrictMatch ? sentenceIndex : -1);

  const extraInput = document.getElementById(input.id + Constants.inputLayerSuffix);
  if (!extraInput) return;
  extraInput.style.width =
    (input.getBoundingClientRect().width ?? extraInput.style.width) + "px";
  extraInput.innerText = hasMatch ? sentence : "";
}

function addAutoCompleteInputLayer(input) {
  input.parentElement.style.position = "relative";
  input.style.direction = 'ltr';
  input.style.textAlign = "left";
  if (!input.id) input.id = generateId();

  const layeredInput = createLayeredInput(input);

  input.style.zIndex = Math.max(input.style.zIndex, 1);
  input.style.backgroundColor = "transparent";

  input.parentElement.append(layeredInput);
}

function createLayeredInput(input) {
  const layeredInput = document.createElement('div');
  layeredInput.className = input.className;
  layeredInput.id = input.id + Constants.inputLayerSuffix;
  layeredInput.innerText = "";
  layeredInput.style.direction = 'ltr';
  layeredInput.style.textAlign = "left";
  layeredInput.style.color = Constants.placeholderColor;
  layeredInput.style.zIndex = getWebsiteSpecificZIndex();
  layeredInput.style.position = "absolute";
  layeredInput.style.left =
    input.getBoundingClientRect().left -
    input.parentElement.getBoundingClientRect().left +
    "px";
  layeredInput.style.top =
    input.getBoundingClientRect().top -
    input.parentElement.getBoundingClientRect().top +
    "px";
  layeredInput.style.margin = 0;

  layeredInput.style.height = input.getBoundingClientRect().height+"px";
  layeredInput.style.width = input.getBoundingClientRect().width + "px";

  return layeredInput;
}
