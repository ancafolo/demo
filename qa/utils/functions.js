import {ClientFunction} from "testcafe";

export const fixture = (...args) => global.fixture(...args);

export const getPageUrl = ClientFunction(() => window.location.href);

export const getHTML = ClientFunction(selector => {
    const found = selector();
    if (found !== undefined) {
      return found.innerHTML;
    }
    return "";
  });
