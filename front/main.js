// variables
let fromLang = ""
let toLang = ""


let translationText = ""

// Intro Screen
document.getElementById('path1').addEventListener('animationend', () => {
    document.getElementById("path1").style.transform = "translateX(70px)"
    document.getElementById("path2").style.transform = "translateX(-70px)"
    document.getElementById("path-text").style.opacity = "0"

    document.getElementById("path1").addEventListener("transitionend", () => {
        document.getElementById("card").style.scale = "0.09"
        document.getElementById("card").style.width = "900px"
        document.getElementById("path1").style.transform = "translateX(0px)"
        document.getElementById("path2").style.transform = "translateX(0px)"
    }, {once: true})

}, {once: true})


// Main Page Load
document.getElementById('card').addEventListener("transitionend", () => {
    runLoad()
})

document.getElementById("card").removeEventListener("transitionend", () => {
    runLoad()
})

const runLoad = () => {
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

                                    }, {once:true})
                                }, {once:true})
                            }, {once:true})  
                        }, {once:true})
                    }, {once: true})                  
                }, {once: true})

            }, {once: true})
        }
      }, {once: true})
}


document.getElementById("obj1").addEventListener("click", () => {
    
    document.getElementById("obj1").style.opacity = "0"
    document.getElementById("obj2").style.opacity = "0"
    document.getElementById("obj3").style.opacity = "0"
    document.getElementById("svg2").style.opacity = "0"
    document.getElementById("obj3").addEventListener("transitionend", () => {
        document.getElementById('obj1').style.display = "none"
        document.getElementById('obj2').style.display = "none"
        document.getElementById('obj3').style.display = "none"
        document.body.style.transform = "scale(0.2)" 
        document.body.addEventListener("transitionend", () => {
            document.getElementById("circle3").style.scale = "0"
            document.getElementById("circle3").addEventListener("transitionend", () => {
                document.body.style.transform = "scale(1)"
                document.getElementById("translate-wrap").style.display = "block"
                document.getElementById("backBtn").addEventListener("click", () => {
                    document.body.style.transform = "scale(0.2)"
                    document.getElementById("translate-wrap").style.display = "none"
                    document.body.addEventListener("transitionend", () => {
                        document.getElementById("circle3").style.scale = "60"
                        document.getElementById("circle3").addEventListener("transitionend", () => {
                            document.body.style.transform = "scale(1)"
                            document.getElementById('obj1').style.display = "grid"
                            document.getElementById('obj2').style.display = "grid"
                            document.getElementById('obj3').style.display = "grid"
                            document.getElementById("obj1").style.opacity = "1"
                            document.getElementById("obj2").style.opacity = "1"
                            document.getElementById("obj3").style.opacity = "1"
                            document.getElementById("svg2").style.opacity = "1"
                        }, {once: true})
                    }, {once: true})
                }, {once: true})
            }, {once: true})
        }, {once: true})
    }, {once: true})
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

document.getElementById("dropimgfromc").addEventListener("click", () => {
    fromLang = "C"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logoc").src
})

document.getElementById("dropimgfromcplus").addEventListener("click", () => {
    fromLang = "C++"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logocplus").src
})

document.getElementById("dropimgfromdart").addEventListener("click", () => {
    fromLang = "Dart"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logodart").src
})

document.getElementById("dropimgfromgo").addEventListener("click", () => {
    fromLang = "GO"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logogo").src
})

document.getElementById("dropimgfromkotlin").addEventListener("click", () => {
    fromLang = "Kotlin"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logokotlin").src
})

document.getElementById("dropimgfromphp").addEventListener("click", () => {
    fromLang = "PHP"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logophp").src
})

document.getElementById("dropimgfromruby").addEventListener("click", () => {
    fromLang = "Ruby"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logoruby").src
})

document.getElementById("dropimgfromrust").addEventListener("click", () => {
    fromLang = "Rust"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logorust").src
})

document.getElementById("dropimgfromswift").addEventListener("click", () => {
    fromLang = "Swift"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logoswift").src
})

document.getElementById("dropimgfromts").addEventListener("click", () => {
    fromLang = "TypeScript"
    document.getElementById("from-image").style.display = "block"
    document.getElementById("from-image").src = document.getElementById("logots").src
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

document.getElementById("dropimgtoc").addEventListener("click", () => {
    toLang = "C"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logoc").src
})

document.getElementById("dropimgtocplus").addEventListener("click", () => {
    toLang = "C++"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logocplus").src
})

document.getElementById("dropimgtodart").addEventListener("click", () => {
    toLang = "Dart"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logodart").src
})

document.getElementById("dropimgtogo").addEventListener("click", () => {
    toLang = "GO"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logogo").src
})

document.getElementById("dropimgtokotlin").addEventListener("click", () => {
    toLang = "Kotlin"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logokotlin").src
})

document.getElementById("dropimgtophp").addEventListener("click", () => {
    toLang = "PHP"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logophp").src
})

document.getElementById("dropimgtoruby").addEventListener("click", () => {
    toLang = "Ruby"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logoruby").src
})

document.getElementById("dropimgtorust").addEventListener("click", () => {
    toLang = "Rust"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logorust").src
})

document.getElementById("dropimgtoswift").addEventListener("click", () => {
    toLang = "Swift"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logoswift").src
})

document.getElementById("dropimgtots").addEventListener("click", () => {
    toLang = "TypeScript"
    document.getElementById("to-image").style.display = "block"
    document.getElementById("to-image").src = document.getElementById("logots").src
})



document.getElementById("convertButton").addEventListener("click", () => {
    if (fromLang === "") {
        return
    }
    if (toLang === "") {
        return
    }
    if (document.getElementById("fromtext").value === "") {
        return
    }
    translationText = document.getElementById("fromtext").value
    document.getElementById("fromtext").style.display = "none"
    document.getElementById("lds-roller").style.display = "inline-block"
    document.getElementById("convertButton").style.display = "none"
    apiCall(translationText, fromLang, toLang)

})

const apiCall = async (text,from,to) => {
    let query = `Convert the following code from ${from} to ${to}: \n`  + text

    let encode = encodeURIComponent(query)

    const url = `/api?q=${encode}`
    const res = await fetch(url)
    const data = await res.json()
    document.getElementById("totext").innerText = data
    document.getElementById("lds-roller").style.display = "none"
    document.getElementById("totext").style.display = "block"
    document.getElementById("goAgainBtn").style.display = "block"
}

document.getElementById("goAgainBtn").addEventListener("click", () => {
    document.getElementById("goAgainBtn").style.display = "none"
    document.getElementById("convertButton").style.display = "block"
    document.getElementById("totext").style.display = "none"
    document.getElementById("fromtext").value = ""
    document.getElementById("fromtext").style.display = "block"
})