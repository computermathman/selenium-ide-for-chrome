/**
 * Created with JetBrains PhpStorm.
 * User: curtishessing
 * Date: 7/22/13
 * Time: 12:42 PM
 * To change this template use File | Settings | File Templates.
 */
function init() {
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        IDEViewInstance.addNewCommand(request.command, request.target, request.value);
        sendResponse({})
    });
}
$(document).ready(init);
window.onbeforeunload = window.save;