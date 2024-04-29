function uploadPicture() {
    var form = document.getElementById('uploadForm');
    // @ts-ignore
    var formData = new FormData(form);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    
    xhr.onload = function() {
        if (xhr.status == 200) {
            // @ts-ignore
            document.getElementById('message').innerHTML = xhr.responseText;
        } else {
            // @ts-ignore
            document.getElementById('message').innerHTML = 'Error uploading file.';
        }
    };
    
    xhr.send(formData);
}
