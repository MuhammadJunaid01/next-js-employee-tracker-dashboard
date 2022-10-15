import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useCheckPageReloadRouteChange = (condition) => {
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  const initBeforeUnLoad = (showExitPrompt) => {
    window.onbeforeunload = (event) => {
      // Show prompt based on state
      if (showExitPrompt) {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
          e.returnValue = "";
        }
        return "";
      }
    };
  };
  window.onload = function () {
    initBeforeUnLoad(showExitPrompt);
  };
  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);
  return [showExitPrompt, setShowExitPrompt];
};

export default useCheckPageReloadRouteChange;
