function setFrameSrc(e,t){e.src=t}var urlKey="UBPv2GatewayURL",gatewayIframeId="UBPv2MainPanelFrame",retryScreenShownStorageKey="ubpv2.retry.screen.shown",offlineGatewayURL="./offlineGatewayPanel.html",gatewayURL="";try{localStorage&&(gatewayURL=getFromLocalStorage(urlKey))}catch(error){}window&&window.navigator&&!window.navigator.onLine&&(gatewayURL=offlineGatewayURL);if(gatewayURL){var frame=document.getElementById(gatewayIframeId);frame&&(setTimeout(function(){setFrameSrc(frame,gatewayURL)},0),localStorage&&removeFromLocalStorage(retryScreenShownStorageKey))};