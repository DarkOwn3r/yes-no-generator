(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(t,n){const o=document.createElement("img");return o.src=t,o.alt=n,o}function l(t){const n=document.createElement("h1");return n.textContent=t,n}const s=document.querySelector(".container");function f(t){console.log(t.answer,t.image);const n=u(t.image,t.answer),o=l(t.answer);s.appendChild(o),s.appendChild(n)}const d="https://yesno.wtf/api";fetch(d).then(t=>t.json()).then(t=>{f(t)});