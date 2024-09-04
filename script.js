document.addEventListener("DOMContentLoaded",
    function(e){
        let configId = document.querySelector("#id i")
        let textId = document.querySelector("#id span")

        configId.addEventListener("click",
            function(e){
                textId.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )

        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false;

        profileEditButton.addEventListener("click",
            function(e){
                if(changing){
                    let _userInfo = userInfo.querySelector("input").value       //id=userInfo인 태그에서의 input태그가 있다면 거기에 입력된 값을 반환하라.
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo                              //반환한 값을 html코드에 넣음
                    summary.innerHTML = _summary
                    if(_profileDetail.startsWith("http")){
                        profileDetail.innerHTML = "<a href="+_profileDetail+">"+_profileDetail+"</a>"   //링크와 표시값도 작성
                    }
                    e.target.textContent = "프로필 편집"            //e=profileEditButton이고 target은 button객체이다.
                    changing = false
                }else{                                              //changing 먼저이므로 else 먼저 돌게된다.
                    let _userInfo = userInfo.textContent            //일단 userInfo의 내용을 새로운 변수에 담음
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value"+_userInfo+"></input>"           //입력창을 표시하기 위해 input 태그를 만듬
                    summary.innerHTML = "<input value"+_summary+"></input>"
                    profileDetail.innerHTML = "<input value"+_profileDetail+"></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )

        let profilepic = document.querySelector("#profile_pic .circle_pic")

        profilepic.addEventListener("mouseover",
            function(e){
                e.target.style.filter = "grayscale(50%)"
            }
        )

        profilepic.addEventListener("mouseleave",
            function(e){
                e.target.style.filter = "grayscale(0%)"
            }
        )
        profilepic.addEventListener("click",
            function(e){
                profilepic.setAttribute("src",prompt("이미지를 불러오세요"))
            }
        )

    }
)