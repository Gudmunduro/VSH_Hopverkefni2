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

function keydown(e)
{
    if (disabled) return;
    switch (e.which)
    {
        case 38: lastPage(); break;
        case 40: nextPage(); break;
    }
}

function nextPage()
{
    if (currentPage == pageCount) return;
    disabled = true;
    document.getElementById("page" + currentPage).className = "lastPage";
    currentPage++;
    document.getElementById("page" + currentPage).className = "page";
    setTimeout(function () { disabled = false; document.title = "Síða " + currentPage; }, 400);
}

function lastPage()
{
    if (currentPage == 1) return;
    disabled = true;
    document.getElementById("page" + currentPage).className = "nextPage";
    currentPage--;
    document.getElementById("page" + currentPage).className = "page";
    setTimeout(function () { disabled = false; document.title = "Síða " + currentPage; }, 400);
}