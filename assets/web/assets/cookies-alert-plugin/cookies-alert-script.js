document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("input[name=cookieData]");cookiesDirective&&t&&(new cookiesDirective({customDialogSelector:"null"===t.getAttribute("data-cookie-customDialogSelector")?null:t.getAttribute("data-cookie-customDialogSelector"),explicitConsent:!1,position:"bottom",duration:0,limit:0,message:t.getAttribute("data-cookie-text"),fontFamily:"Arial",fontColor:t.getAttribute("data-cookie-colorText"),fontSize:"13px",backgroundColor:t.getAttribute("data-cookie-colorBg"),backgroundOpacity:"",linkColor:t.getAttribute("data-cookie-colorLink"),underlineLink:t.getAttribute("data-cookie-underlineLink"),textButton:t.getAttribute("data-cookie-textButton"),colorButton:t.getAttribute("data-cookie-colorButton"),animate:"null"===t.getAttribute("data-cookie-customDialogSelector")}),t.remove())});