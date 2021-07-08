import { activateAutoComplete, dangerouslyAppendAutoCompleteInputLayer, normalizeInputIds } from "./auto-complete.logic";

normalizeInputIds();

dangerouslyAppendAutoCompleteInputLayer();

activateAutoComplete();
