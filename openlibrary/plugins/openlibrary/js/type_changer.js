/**
 * Functionality for TypeChanger.html
 */

export function initTypeChanger() {
    // /about?m=edit - where this code is run

    //console.log('JS script loaded')
    function changeTemplate() {
        // Change the template of the page based on the selected value
        const searchParams = new URLSearchParams(window.location.search);
        const t = document.getElementById('type.key').value;
        searchParams.set('t', t);
        window.location.search = searchParams.toString();
    }
    document.getElementById('type.key').onchange = changeTemplate;
}
