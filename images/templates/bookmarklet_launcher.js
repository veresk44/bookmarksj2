(function () {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    } else  {
        document.body.appendChild(
            document.createElement('script')
        ).src='https://d59c4e28.ngrok.io/static/js/bookmarklet.js?r=' +
            Math.floor(Math.random()*99999999999999999999);

    }
})();