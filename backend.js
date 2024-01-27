

async function loaded(reader){
    const res = await fetch('https://aurmaza-firstspace.hf.space/--replicas/sh9d0/',
    {
        method: "POST",
        body: JSON.stringify({"data": [reader.result]}),
        headers: {"Content-Type": "application/json"}
    });
    const json = await Response.json();
    const label = json['data'][0]['confidences'][0]['label'];
    res.innerHTML 

}