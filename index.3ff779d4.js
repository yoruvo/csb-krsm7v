const logContainer=document.getElementById("log"),log=(e,n)=>{const t=document.createElement("li");t.innerHTML=e,n&&t.classList.add(n),logContainer.appendChild(t),console.log(e),logContainer.scrollTop=logContainer.scrollHeight};log("Hello world!");const explanation=document.getElementsByClassName("explanation")[0];explanation.addEventListener("click",(()=>{explanation.classList.contains("expanded")?explanation.classList.remove("expanded"):explanation.classList.add("expanded")}));const clickHandler=e=>{log("I clicked somewhere in the containing document.")},focusStatus=e=>{const n=document.getElementById("focusStatus");e?(n.classList.add("focused"),n.innerHTML="Window is FOCUSED; iframe click can be detected"):(n.classList.remove("focused"),n.innerHTML="Window is UNFOCUSED; iframe click cannot be detected")},focusHandler=()=>{focusStatus(!0)},blurHandler=()=>{focusStatus(!1)};window.addEventListener("click",clickHandler),window.addEventListener("focus",focusHandler),window.addEventListener("blur",blurHandler),focusStatus(!1);const iframeClickHandler=()=>{window.setTimeout((function(){document.activeElement instanceof HTMLIFrameElement&&"myTargetedIframe"===document.activeElement.id&&log("Success! I clicked inside the targeted ad iframe.","success")}),0)};window.addEventListener("blur",iframeClickHandler);
//# sourceMappingURL=index.3ff779d4.js.map
