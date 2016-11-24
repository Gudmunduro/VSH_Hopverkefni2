var currentPage = 1, pageCount = 3, disabled = false;


function onScroll(e)
{
    if (disabled) return;
    if (e.wheelDelta > 0)
    {
        lastPage();
    }
    else
    {
        nextPage();
    }
}

function nextPage()
{
    /*if (currentPage == pageCount)
    {
        var time = 0;
        for (var i = 0; i < pageCount - 1; i++)
        {
            setTimeout(function () { lastPage(false); }, time);
            time += 400;
        }
        setTimeout(function () { disabled = false; }, time - 400);
        return;
    }*/
    if (currentPage == pageCount) return;
    disabled = true;
    document.getElementById("page" + currentPage).className = "lastPage";
    currentPage++;
    document.getElementById("page" + currentPage).className = "page";
    setTimeout(function () { disabled = false; }, 400);
}

function lastPage()
{
    if (currentPage == 1) return;
    disabled = false;
    document.getElementById("page" + currentPage).className = "nextPage";
    currentPage--;
    document.getElementById("page" + currentPage).className = "page";
    setTimeout(function () { disabled = false; }, 400);
}