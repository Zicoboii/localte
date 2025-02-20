const btn = document.querySelector(".button");
btn.addEventListener("click" , () => {
    navigator.geolocation.getCurrentPosition(postion => {
        const {latitude , longitude } = postion.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res = res.json()).then(data => {
            console.table(data.address);
        }).catch(() => {
            console.log(`Fetching Error from API`)
        })
    })
})