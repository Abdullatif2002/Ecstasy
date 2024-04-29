// JavaScript to handle click events on option links
document.querySelectorAll('.option-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        // @ts-ignore
        var descriptionContent = document.getElementById(targetId + '-content').innerHTML;
        // @ts-ignore
        document.getElementById('description-container').innerHTML = descriptionContent;
    });
});