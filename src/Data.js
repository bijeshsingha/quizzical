
    fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => console.log(data.data.memes))


            <div className="questions"><h1 className="heading" >Answer the Question to know your GK</h1>{queElement}</div>

            {isStarted && <Quiz questions={questions}/>}