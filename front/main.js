// variables
let fromLang = ""
let toLang = ""


// Into Screen
document.getElementById('path1').addEventListener('animationend', () => {
    document.getElementById("path1").style.transform = "translateX(70px)"
    document.getElementById("path2").style.transform = "translateX(-70px)"
    document.getElementById("path-text").style.opacity = "0"

    document.getElementById("path1").addEventListener("transitionend", () => {
        document.getElementById("card").style.scale = "0.09"
        document.getElementById("card").style.width = "900px"
        document.getElementById("path1").style.transform = "translateX(0px)"
        document.getElementById("path2").style.transform = "translateX(0px)"
    })

})


// Main Page Load
document.getElementById('card').addEventListener("transitionend", () => {
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            document.getElementById('space').style.transform = "translateY(3px)"
            document.getElementById('space').addEventListener("transitionend", () => {
                
                document.getElementById('space').style.transform = "translateY(0px)"
                document.getElementById('space').addEventListener("transitionend", () => {
                    document.getElementById('space').style.transform = "translateY(0px)"
                    document.getElementById('space').style.opacity = "0"
                    document.getElementById("path1").style.opacity = "0"
                    document.getElementById("path2").style.opacity = "0"
                    document.getElementById("card").style.width = "400px"
                    document.getElementById("card").style.borderRadius = "300px"
                    document.getElementById('path2').addEventListener('transitionend', () => {
                        document.getElementById('card').style.scale = "6"
                        document.getElementById('circle1').style.scale = "60"
                        document.getElementById('circle2').style.scale = "60"
                        document.getElementById('circle3').style.scale = "60"
                        document.getElementById('circle3').addEventListener('transitionend', () => {
                            document.getElementById('svg2').style.opacity = "1"
                            document.getElementById('svg2').addEventListener('transitionend', () => {
                                document.getElementById('svg2b1').style.transform = "translateX(0px)"
                                document.getElementById('svg2b2').style.transform = "translateX(0px)"

                                document.getElementById('svg2b1').addEventListener('transitionend', () => {
                                    document.getElementById('svg2-text').style.opacity = "1"
                                    document.getElementById('obj1').style.display = "grid"
                                    document.getElementById('obj2').style.display = "grid"
                                    document.getElementById('obj3').style.display = "grid"
                                    document.getElementById('svg2-text').addEventListener('transitionend', () => {
                                        document.getElementById('obj1').style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                                        document.getElementById('obj1').style.backgroundColor = "#C9D4E7"
                                        document.getElementById('obj2').style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                                        document.getElementById('obj2').style.backgroundColor = "#C9D4E7"
                                        document.getElementById('obj3').style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                                        document.getElementById('obj3').style.backgroundColor = "#C9D4E7"
                                        document.getElementById('obj1').addEventListener('transitionend', () => {
                                            document.getElementById("translate-svg").style.opacity = "1"
                                            
                                        })
                                    })
                                })
                                
                                
                            })
                            
                        })
                    })
                    
                })
                
            })
        }
      })
})








document.getElementById("dropimgfrompy").addEventListener("click", () => {
    fromLang = "Python"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logopy").src
})

document.getElementById("dropimgfromjs").addEventListener("click", () => {
    fromLang = "JavaScript"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logojs").src
})

document.getElementById("dropimgfromja").addEventListener("click", () => {
    fromLang = "Java"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logoja").src
})

document.getElementById("dropimgfromcsha").addEventListener("click", () => {
    fromLang = "C#"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logocsha").src
})

document.getElementById("dropimgtopy").addEventListener("click", () => {
    toLang = "Python"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logopy").src
})

document.getElementById("dropimgtojs").addEventListener("click", () => {
    toLang = "JavaScript"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logojs").src
})

document.getElementById("dropimgtoja").addEventListener("click", () => {
    toLang = "Java"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logoja").src
})
document.getElementById("dropimgtocsha").addEventListener("click", () => {
    toLang = "C#"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logocsha").src
})



