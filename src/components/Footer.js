import React from "react"

function Footer(props) {
    
    const isClicked = props.isClicked
    const [score, setScore] = React.useState(0)
    function clicked() {
        const que = props.questions
        que.forEach(element => {
            const opt = element.options
            opt.forEach(element => {
                if(element.id===0 && element.isSelected){
                    setScore(prev=>prev+1)
                }
            });
        });
        props.setIsClicked(prev => !prev)
        if(props.isClicked===true){
            window.location.reload()
        }
    }

    return(
        <div className="footer" >
            {isClicked && <p  className="generalText">You scored {score}/10 correct answers</p>}
            <button 
                className="checkAns-btn btn" 
                onClick={clicked}
            >{isClicked? "Play Again":"Check Answers"}</button>     
        </div>
    )
}

export default Footer;