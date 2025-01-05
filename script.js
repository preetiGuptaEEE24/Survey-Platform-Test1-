function loadGoogleForm(formUrl, containerId) {
    const formContainer = document.getElementById(containerId);
    formContainer.style.display = 'block';  // Show the form container

    // Create an iframe and load the Google Form URL
    const iframe = document.createElement('iframe');
    iframe.src = formUrl;
    iframe.width = "100%";
    iframe.height = "1200";
    iframe.frameborder = "0";
    iframe.marginheight = "0";
    iframe.marginwidth = "0";
    
    // Clear any existing content in the container and append the iframe
    formContainer.innerHTML = '';  // Remove any previous iframe
    formContainer.appendChild(iframe);
}
