var currentPage = 1, pageCount = 4, disabled = false;


function onScroll(e) {
    if (disabled) return;
    if (e.wheelDelta > 0) {
        lastPage();
    }
    else {
        nextPage();
    }
}

function nextPage() {
    if (currentPage == pageCount) return;
    disabled = true;
    document.getElementById("page" + currentPage).className = "lastPage";
    currentPage++;
    document.getElementById("page" + currentPage).className = "page";
    setTimeout(function () { disabled = false; }, 400);
}

function lastPage() {
    if (currentPage == 1) return;
    disabled = true;
    document.getElementById("page" + currentPage).className = "nextPage";
    currentPage--;
    document.getElementById("page" + currentPage).className = "page";
    setTimeout(function () { disabled = false; }, 400);
}