!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";const e={updateInterval:7e3,fadeTransitionMs:500,testimonials:[{quote:"Newsletters suck. This one sucks the most.",author:"John Bender",avatar:"assets/media/avatars/bender.webp",link:"https://thebreakfastclub.fandom.com/wiki/John_Bender"},{quote:"I ain't got time to read this crap",author:"Blain Cooper",avatar:"assets/media/avatars/blain.webp",link:"https://avp.fandom.com/wiki/Blain_Cooper"},{quote:"My life's been one long, glorious ‘sitting on beach earning twenty percent' vibe-fest since becoming a member of You Can't Be Serious.",author:"Hans Gruber",avatar:"assets/media/avatars/hans.webp",link:"https://en.wikipedia.org/wiki/Hans_Gruber"},{quote:"I pity the fool who don't support You Can't Be Serious.",author:"Clubber Lang",avatar:"assets/media/avatars/clubber.webp",link:"https://en.wikipedia.org/wiki/Clubber_Lang"},{quote:"This site was, is, and will always be nada",author:"Steff McKee",avatar:"assets/media/avatars/steff.webp",link:"https://en.wikipedia.org/wiki/Pretty_in_Pink"},{quote:"You're God Damn right I read You Can't Be Serious.",author:"Colonel Nathan R. Jessup",avatar:"assets/media/avatars/jessup.webp",link:"https://villains.fandom.com/wiki/Colonel_Nathan_R._Jessup"},{quote:"These people are a stain on the internet. It's best to go about your daily routine and forget they exist.",author:"Mildred Ratched",avatar:"assets/media/avatars/mildred.webp",link:"https://en.wikipedia.org/wiki/Nurse_Ratched"},{quote:"You Can't Be Serious is 90% bullshit, but it’s entertaining. That’s why I read it because it entertains me.",author:"Alonzo Harris",avatar:"assets/media/avatars/alonzo.webp",link:"https://villains.fandom.com/wiki/Alonzo_Harris"},{quote:"All I need are some tasty waves, a cool buzz, You Can't Be Serious, and I'm fine.",author:"Jeff Spicoli",avatar:"assets/media/avatars/spicoli.webp",link:"https://www.theringer.com/2020/08/26/movies/spicoli-fast-times-ridgemont-high-teen-movie"},{quote:"Listen, I don't bother nobody and nobody bothers me but these brothers are pretty cool. They see ‘em you know.",author:"Frank",avatar:"assets/media/avatars/frank.webp",link:"https://en.wikipedia.org/wiki/They_Live"},{quote:"I won't be back.",author:"Cyberdyne Model 101",avatar:"assets/media/avatars/t800.avif",link:"https://en.wikipedia.org/wiki/Terminator_(character)"},{quote:"My God, it's full of bullshit.",author:"David Bowman",avatar:"assets/media/avatars/bowman.webp",link:"https://2001.fandom.com/wiki/David_Bowman"},{quote:"I'd rather have my eyelids stapled shut than read this trash.",author:"Regina George",avatar:"assets/media/avatars/regina.webp",link:"https://en.wikipedia.org/wiki/Regina_George_(Mean_Girls)"},{quote:"Hey man, I don't wanna rain on their parade, but these guys won't last seventeen days. Easy. Game over for them man.",author:"Private William L. Hudson",avatar:"assets/media/avatars/hudson.webp",link:"https://en.wikipedia.org/wiki/Hudson_%28Aliens%29"},{quote:"This quitting thing, it's a hard habit to break once you start, but one thing I'll never quit is this website.",author:"Morris Buttermaker",avatar:"assets/media/avatars/buttermaker.webp",link:"https://en.wikipedia.org/wiki/The_Bad_News_Bears"},{quote:"Blogs are teeming petri dishes of malignant mediocrity. Written by mental maggots consuming their own predigested pablum. You Can't Be Serious is the excretion.",author:"Lydia Tár",avatar:"assets/media/avatars/tar.webp",link:"https://en.wikipedia.org/wiki/T%C3%A1r"}]},t={sunny:'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>',cloudy:'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>',"partly cloudy":'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM18 10h-1.26A4 4 0 109 20h9a5 5 0 000-10z"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>',rainy:'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25M8 13v8M16 13v8M12 15v8"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>',drizzle:'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25M8 13v8M16 13v8M12 15v8"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>',snow:'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>',foggy:'\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="weather-icon inline-icon" fill="none" stroke="currentColor">\n              <path d="M3 8h18M3 12h18M3 16h18"\n                    stroke-width="2" stroke-linecap="round"/>\n          </svg>'},n={getKey:e=>`rateLimit_${e}_${Math.floor(Date.now()/1e3/60)}`,increment(e,t){const n=this.getKey(e);let o=parseInt(sessionStorage.getItem(n)||"0");return o++,sessionStorage.setItem(n,o.toString()),o<=t},checkLimit(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return this.cleanup(),this.increment(e,t)},cleanup(){const e=Math.floor(Date.now()/1e3/60);for(let t=0;t<sessionStorage.length;t++){const n=sessionStorage.key(t);if(n&&n.startsWith("rateLimit_")){e-parseInt(n.split("_")[2])>5&&sessionStorage.removeItem(n)}}}};function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;if(!e)return"";const n=document.createElement("div");return n.textContent=e,n.textContent.slice(0,t).replace(/javascript:|data:|vbscript:|file:|blob:|ftp:|ws:|wss:/i,"").replace(/[<>'"`{}()\[\]]/g,"")}function a(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return;const n=e.closest(".dropdown");if(!n)return;const o=n.querySelector(".dropdown-content");o&&(o.style.display="none");const a=n.getBoundingClientRect(),r=document.createElement("div");r.className="copy-alert",r.setAttribute("role","alert"),r.setAttribute("aria-live","polite"),Object.assign(r.style,{position:"fixed",left:`${a.left+a.width/2}px`,bottom:window.innerHeight-a.top+10+"px",backgroundColor:t?"#ffe680":"#dc3545",boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), 0 0 0 1px rgb(17 24 39 / 0.1)",color:"#403e38",padding:"12px 24px",borderRadius:"0.5rem",zIndex:"1000",fontSize:"18px",fontFamily:"var(--display)",fontWeight:"800",opacity:"0",textTransform:"uppercase",transition:"opacity 0.3s ease-in-out",whiteSpace:"nowrap",transform:"translateX(-50%)"}),r.textContent=t?"URL copied to clipboard":"Failed to copy URL",document.body.appendChild(r),requestAnimationFrame((()=>{r.style.opacity="1",setTimeout((()=>{r.style.opacity="0",setTimeout((()=>r.remove()),350)}),2e3)}))}function r(){if(document.addEventListener("click",(e=>{if(!n.checkLimit("globalClicks",100,6e4))return void console.warn("Too many clicks detected");const t=e.target.closest(".copy-url"),r=e.target.closest(".email-share"),i=e.target.closest(".native-share"),s=e.target.closest(".whatsapp-share"),c=e.target.closest(".mastodon-share");if(t&&async function(e){if(e.preventDefault(),e.stopPropagation(),!n.checkLimit("clipboardCopy",10))return void console.warn("Too many clipboard attempts");const t=e.target.closest("article");if(!t)return;const o=t.querySelector("h2 a"),r=o?o.href:window.location.href;try{await navigator.clipboard.writeText(r),a(e.target.closest(".copy-url"),!0)}catch(t){console.error("Failed to copy URL:",t),a(e.target,!1)}}(e),r&&function(e){if(e.preventDefault(),e.stopPropagation(),!n.checkLimit("emailShare",10))return void console.warn("Too many email share attempts");const t=e.target.closest("article");if(!t)return;const a=t.querySelector("h2 a"),r=a?a.href:window.location.href,i=o(a?a.textContent:document.title),s=`I thought you might enjoy this article:\n\n${i}\n\n${r}`,c=`mailto:?subject=${encodeURIComponent(`Check out this article: ${i}`)}&body=${encodeURIComponent(s)}`,l=document.createElement("a");l.href=c,l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l)}(e),i){e.preventDefault(),e.stopPropagation();const t=e.target.closest("article");if(!t)return;const n=t.querySelector("h2 a"),a=n?n.href:window.location.href,r=o(n?n.textContent:document.title),i={title:r,text:r,url:a};navigator.canShare&&navigator.canShare(i)||navigator.share?navigator.share(i).then((()=>console.log("Shared successfully"))).catch((e=>{"AbortError"!==e.name&&console.error("Share failed:",e)})):console.log("Web Share API not supported")}if(s){e.preventDefault(),e.stopPropagation();const t=e.target.closest("article");if(!t)return;const n=t.querySelector("h2 a"),a=n?n.href:window.location.href,r=o(n?n.textContent:document.title);window.open(function(e,t){return`${/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"whatsapp://send":"https://web.whatsapp.com/send"}?text=${encodeURIComponent(`${t}\n\n${e}`)}`}(a,r),"_blank","noopener,noreferrer")}if(c){if(e.preventDefault(),e.stopPropagation(),!n.checkLimit("mastodonShare",10))return void console.warn("Too many share attempts");const t=e.target.closest("article");if(!t)return;const a=t.querySelector("h2 a"),r=a?a.href:window.location.href,i=o(a?a.textContent:document.title);let s=window.prompt("Enter your Mastodon instance URL:",localStorage.getItem("mastodon-instance")||"mastodon.social");if(s){const e=s.replace(/^https?:\/\//,"").replace(/\/$/,"").replace(/[<>'"`{}()\[\]]/g,""),t=`https://${e}/share?text=${encodeURIComponent(`${i}\n\n${r}`)}`;window.open(t,"_blank","noopener,noreferrer"),localStorage.setItem("mastodon-instance",e)}}})),navigator.share){document.querySelectorAll(".native-share").forEach((e=>{e.style.display="block"}))}}function i(e){e.preventDefault();const t=new URL(this.href);let n;if(t.hostname.includes("youtube.com")?n=t.searchParams.get("v"):t.hostname.includes("youtu.be")&&(n=t.pathname.substring(1)),n){document.getElementById("youtube-iframe").src=`https://www.youtube.com/embed/${n}?autoplay=1`;document.getElementById("youtube-modal").style.display="flex",document.body.classList.add("youtube-modal-open")}}function s(){const e=document.getElementById("youtube-modal");if(e){e.style.display="none";document.getElementById("youtube-iframe").src="",document.body.classList.remove("youtube-modal-open")}}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;try{if(window.localStorage){const n=localStorage.getItem(e);return null!==n?n:t}}catch(e){console.log("localStorage not available")}return t}function l(e,t){try{if(window.localStorage)return localStorage.setItem(e,t),!0}catch(e){console.log("localStorage not available")}return!1}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector(".menu-toggle"),t=document.querySelector(".mobile-menu"),n=document.querySelector(".overlay");if(!e||!t||!n)return;function o(){t.classList.toggle("active"),n.classList.toggle("active");const o=e.querySelectorAll("span");o[0].style.transform="rotate(45deg) translate(5px, 5px)"===o[0].style.transform?"":"rotate(45deg) translate(5px, 5px)",o[1].style.opacity="0"===o[1].style.opacity?"1":"0",o[2].style.transform="rotate(-45deg) translate(5px, -5px)"===o[2].style.transform?"":"rotate(-45deg) translate(5px, -5px)"}e.addEventListener("click",o),n.addEventListener("click",o)}(),function(){const e=document.querySelectorAll('input[name="appearance"]');e&&e.length>0?function(e){function t(e){if("auto"===e){const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.body.classList.toggle("dark-mode",e)}else"dark"===e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode");l("appearanceMode",e)}e.forEach((e=>{e.addEventListener("change",(function(){t(this.value)}))}));const n=c("appearanceMode","auto"),o=document.querySelector(`input[name="appearance"][value="${n}"]`);o&&(o.checked=!0,t(n));window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{"auto"===c("appearanceMode","auto")&&t("auto")}))}(e):function(){const e=document.querySelector(".dark-mode-toggle");if(!e)return;function t(){document.body.classList.toggle("dark-mode"),l("darkMode",document.body.classList.contains("dark-mode"))}try{("true"===c("darkMode")||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&document.body.classList.add("dark-mode")}catch(e){console.log("Unable to check dark mode preferences")}e.addEventListener("click",t)}()}(),document.documentElement.style.scrollBehavior="smooth",document.querySelectorAll("button, .page-link, .card").forEach((e=>{e.addEventListener("touchstart",(()=>{e.style.opacity="0.7"})),e.addEventListener("touchend",(()=>{e.style.opacity="1"}))})),document.querySelectorAll(".bookmark").forEach((e=>{const t=e.querySelector(".bookmark-comment");if(!t)return;const n=t.querySelector("a");if(!n)return;const o=n.href;try{const t=new URL(o);let n=t.hostname;t.origin;let a=n;a.startsWith("www.")&&(a=a.substring(4));const r=document.createElement("div");r.className="bookmark-source";const i=document.createElement("div");i.className="bookmark-favicon";const s=`https://www.google.com/s2/favicons?domain=${n}&sz=32`,c=document.createElement("img");c.src=s,c.alt="",c.className="bookmark-favicon-img",c.onerror=function(){i.innerHTML='\n           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n             <circle cx="12" cy="12" r="10"></circle>\n             <line x1="2" y1="12" x2="22" y2="12"></line>\n             <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>\n           </svg>\n         '},i.appendChild(c),r.appendChild(i),r.innerHTML+=`<span class="bookmark-source-text"><span class="bookmark-via">via</span> ${a}</span>`;const l=e.querySelector(".bookmark-header");l&&l.insertAdjacentElement("afterend",r)}catch(e){console.error("Error parsing URL:",e)}})),document.querySelectorAll(".dropdown").forEach((e=>{const t=e.querySelector(".dropbtn"),n=e.querySelector(".dropdown-content");t&&n&&(t.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(".dropdown-content").forEach((e=>{e!==n&&(e.style.display="none")}));const t="block"===n.style.display;n.style.display=t?"none":"block",t||(n.style.opacity="1",n.style.visibility="visible")})),document.addEventListener("click",(()=>{n.style.display="none"})))})),r(),function(){const e=document.querySelectorAll(".collapsible-header");if(0===e.length)return;e.forEach((e=>{const t=e.parentElement.querySelector(".collapsible-content"),n=e.querySelector(".collapsible-icon");n.classList.contains("collapsed")||n.classList.add("collapsed"),t.classList.add("hidden"),t.style.maxHeight="0px",e.addEventListener("click",(()=>{n.classList.toggle("collapsed"),t.classList.contains("hidden")?(t.classList.remove("hidden"),t.style.maxHeight=t.scrollHeight+"px"):(t.style.maxHeight="0px",setTimeout((()=>{t.classList.add("hidden")}),300))}))})),window.addEventListener("resize",(()=>{document.querySelectorAll(".collapsible-content:not(.hidden)").forEach((e=>{e.style.maxHeight=e.scrollHeight+"px"}))}))}(),function(){const t=document.getElementById("testimonal");if(!t)return;let n=Array.from({length:e.testimonials.length},((e,t)=>t)),o=0;function a(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function r(e){const t=i(e.quote),n=i(e.author),o=i(e.link),a=i(e.avatar);return`<div class="testimonial-content">\n             <q>${t.replaceAll("'","’")}</q>\n             <cite><img class="avatar"\n                  src="${a}"\n                  alt="${n}'s avatar"\n                  onerror="this.style.display='none'">\n                  <a href="${o}">${n} <svg xmlns="http://www.w3.org/2000/svg"\n                        width="16"\n                        height="16"\n                        viewBox="0 0 24 24"\n                        fill="none"\n                        stroke="currentColor"\n                        stroke-width="1.25"\n                        stroke-linecap="round"\n                        stroke-linejoin="round">\n                        <path d="M5 12h14"/>\n                        <path d="m12 5 7 7-7 7"/>\n                   </svg></a>\n             </cite>\n         </div>`}function i(e){if(!e)return"";const t=document.createElement("div");return t.textContent=e,t.innerHTML.replace(/<script[^>]*>.*?<\/script>/gi,"").replace(/on\w+="[^"]*"/g,"").replace(/href="javascript:[^"]*"/g,"").replace(/javascript:/gi,"").replace(/data:/gi,"").replace(/vbscript:/gi,"")}function s(){if(!t)return;const i=t.querySelector(".testimonial-content");i&&(i.classList.add("fade-out"),setTimeout((()=>{const i=e.testimonials[n[o]];t.innerHTML=r(i);const s=t.querySelector(".testimonial-content");s&&(s.classList.add("fade-in"),s.offsetHeight,requestAnimationFrame((()=>{requestAnimationFrame((()=>{s.classList.remove("fade-in")}))}))),o=(o+1)%n.length,0===o&&(n=a(n))}),1*e.fadeTransitionMs))}n=a(n);const c=document.createElement("style");c.textContent=`\n         .testimonial-content {\n             opacity: 1;\n             transform: translateY(0);\n             transition: opacity ${1*e.fadeTransitionMs}ms ease-in-out,\n                         transform ${1*e.fadeTransitionMs}ms cubic-bezier(0.16, 1, 0.3, 1);\n         }\n         .testimonial-content.fade-out {\n             opacity: 0;\n             transform: translateY(20px);\n         }\n         .testimonial-content.fade-in {\n             opacity: 0;\n             transform: translateY(-20px);\n         }\n     `,document.head.appendChild(c),s(),setInterval(s,e.updateInterval)}(),function(){const e=document.getElementById("current-temp"),n=document.getElementById("current-condition");if(!e||!n)return;const o={sunny:[0,1],"partly cloudy":[2],cloudy:[3],foggy:[45,48],drizzle:[51,53,55],rain:[61,63,65,80,81,82],snow:[71,73,75,77,85,86],thunderstorm:[95,96,99]};function a(e){for(const[t,n]of Object.entries(o))if(n.includes(e))return t;return"cloudy"}function r(n){const o=t[n]||t.cloudy,a=e.closest("li"),r=a.querySelector(".weather-icon");r&&r.parentElement.remove();const i=document.createElement("span");i.className="weather-icon-container",i.innerHTML=o,a.insertBefore(i,a.firstChild)}async function i(){try{localStorage.removeItem("weather_cache");const e=43.66147,t=-70.25533,n=new URL("https://api.open-meteo.com/v1/forecast");n.searchParams.set("latitude",e),n.searchParams.set("longitude",t),n.searchParams.set("current","temperature_2m,weather_code"),n.searchParams.set("temperature_unit","fahrenheit"),n.searchParams.set("_cb",Math.random());const o=await fetch(n);if(!o.ok)throw new Error("Weather API request failed");const r=await o.json(),i={temp:Math.round(r.current.temperature_2m),condition:a(r.current.weather_code),lastUpdated:(new Date).toISOString()};return console.log("Weather update:",{temp:i.temp,condition:i.condition,lastUpdated:i.lastUpdated,localTime:(new Date).toLocaleString("en-US",{timeZone:"America/New_York"})}),localStorage.setItem("weather_cache",JSON.stringify(i)),{temp:i.temp,condition:i.condition}}catch(e){return console.error("Error fetching weather:",e),{temp:"--",condition:"cloudy"}}}async function s(){try{window.weatherUpdateInterval&&clearInterval(window.weatherUpdateInterval);const t=async()=>{try{const t=await i();if(!e||!n)return void console.error("Weather elements not found");e.textContent=`${t.temp}°F`,n.textContent=` ${t.condition}`,r(t.condition),e.setAttribute("aria-label",`Current temperature is ${t.temp} degrees Fahrenheit and ${t.condition}`)}catch(e){console.error("Error updating weather display:",e)}};await t();const o=108e5;window.weatherUpdateInterval=setInterval(t,o),document.addEventListener("visibilitychange",(()=>{if(document.hidden&&window.weatherUpdateInterval)clearInterval(window.weatherUpdateInterval);else if(!document.hidden&&!window.weatherUpdateInterval){const e=localStorage.getItem("weather_cache");if(e){const n=JSON.parse(e);new Date(n.lastUpdated)<new Date(Date.now()-o)&&(t(),window.weatherUpdateInterval=setInterval(t,o))}else t(),window.weatherUpdateInterval=setInterval(t,o)}}))}catch(e){console.error("Error in weather update system:",e)}}s()}(),function(){const e=document.getElementById("knicks-counter");if(!e)return;function t(){const t=new Date("1973-05-10T00:00:00-05:00"),n=new Date,o=new Date(n.toLocaleString("en-US",{timeZone:"America/New_York"}))-t,a=Math.floor(o/864e5);e.textContent=`${a.toLocaleString()} Days Ago`}function n(){const e=new Date,n=new Date(e.toLocaleString("en-US",{timeZone:"America/New_York"})),o=new Date(n);o.setDate(o.getDate()+1),o.setHours(0,0,0,0);setTimeout((()=>{t(),setInterval(t,864e5)}),o-n)}t(),n()}(),function(){const e=document.querySelector(".site-header");if(!e)return;function t(){window.scrollY>10?e.classList.add("scrolled"):e.classList.remove("scrolled")}t(),window.addEventListener("scroll",t)}(),function(){if(!document.getElementById("youtube-modal")){const e=document.createElement("div");e.id="youtube-modal",e.className="youtube-modal",e.innerHTML='\n             <div class="youtube-modal-content">\n                 <button class="youtube-modal-close" aria-label="Close video">\n                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                         <circle cx="12" cy="12" r="10"/>\n                         <line x1="15" y1="9" x2="9" y2="15"/>\n                         <line x1="9" y1="9" x2="15" y2="15"/>\n                     </svg>\n                 </button>\n                 <div class="youtube-modal-iframe-container">\n                     <iframe id="youtube-iframe" frameborder="0" allowfullscreen\n                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">\n                     </iframe>\n                 </div>\n             </div>\n         ',document.body.appendChild(e);e.querySelector(".youtube-modal-close").addEventListener("click",s),e.addEventListener("click",(function(t){t.target===e&&s()})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&"flex"===e.style.display&&s()}))}document.querySelectorAll('a[href*="youtube.com/watch"], a[href*="youtu.be/"]').forEach((e=>{e.addEventListener("click",i)}))}(),function(){const e=document.querySelector(".membership-toggle");if(!e)return;const t=document.querySelectorAll(".toggle button"),n=document.querySelectorAll("[data-yearly]"),o=document.querySelectorAll("[data-monthly]");t.forEach((a=>{a.setAttribute("role","switch"),a.setAttribute(ARIA_ATTRS.CHECKED,"false"),a.addEventListener("click",(()=>{const r=a.getAttribute("data-price");if(!["yearly","monthly"].includes(r))return;t.forEach((e=>{e.classList.remove("active"),e.setAttribute(ARIA_ATTRS.CHECKED,"false")})),a.classList.add("active"),a.setAttribute(ARIA_ATTRS.CHECKED,"true"),e.setAttribute("data-active-price",r);const i="yearly"===r;n.forEach((e=>{e.style.display=i?"block":"none",e.setAttribute(ARIA_ATTRS.HIDDEN,(!i).toString())})),o.forEach((e=>{e.style.display=i?"none":"block",e.setAttribute(ARIA_ATTRS.HIDDEN,i.toString())}))})),a.addEventListener("keydown",(e=>{e.key!==KEYS.ENTER&&e.key!==KEYS.SPACE||(e.preventDefault(),a.click())}))}))}(),console.log("Theme JS initialized including social sharing")}))}();
//# sourceMappingURL=index.js.map
