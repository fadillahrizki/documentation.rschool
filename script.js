switch(window.location.hash){
    case "#documentation":
        $("#item-documentation").addClass("active")
        window.scrollTo(0,0)
        break
    case "#database":
        $("#item-database").addClass("active")
        window.scrollTo(0,1089)
        break
    case "#class-room":
        $("#item-class-room").addClass("active")
        window.scrollTo(0,1787)
        break
    case "#student":
        $("#item-student").addClass("active")
        window.scrollTo(0,2607)
        break
    case "#teacher":
        $("#item-teacher").addClass("active")
        window.scrollTo(0,3475)
        break
    case "#absent":
        $("#item-absent").addClass("active")
        window.scrollTo(0,4343)
        break
    case "#schedule":
        $("#item-schedule").addClass("active")
        window.scrollTo(0,5259)
        break
    default:
        $("#item-documentation").addClass("active")
        window.scrollTo(0,0)
}

$(window).scroll(()=>{
        if(this.pageYOffset < 1089){
            $("#item-documentation").addClass("active")

            $("#item-class-room").removeClass("active")
            $("#item-student").removeClass("active")
            $("#item-teacher").removeClass("active")
            $("#item-absent").removeClass("active")
            $("#item-schedule").removeClass("active")
            $("#item-database").removeClass("active")
        }
        if(this.pageYOffset >= 1089 && this.pageYOffset < 1787){
            $("#item-database").addClass("active")

            $("#item-documentation").removeClass("active")
            $("#item-class-room").removeClass("active")
            $("#item-student").removeClass("active")
            $("#item-teacher").removeClass("active")
            $("#item-absent").removeClass("active")
            $("#item-schedule").removeClass("active")
        }
        if(this.pageYOffset >= 1787 && this.pageYOffset < 2607){
            $("#item-class-room").addClass("active")

            $("#item-documentation").removeClass("active")
            $("#item-student").removeClass("active")
            $("#item-teacher").removeClass("active")
            $("#item-absent").removeClass("active")
            $("#item-schedule").removeClass("active")
            $("#item-database").removeClass("active")
        }
        if(this.pageYOffset >= 2607 && this.pageYOffset < 3475){
            $("#item-student").addClass("active")

            $("#item-documentation").removeClass("active")
            $("#item-class-room").removeClass("active")
            $("#item-teacher").removeClass("active")
            $("#item-absent").removeClass("active")
            $("#item-schedule").removeClass("active")
            $("#item-database").removeClass("active")
        }
        if(this.pageYOffset >= 3475 && this.pageYOffset < 4343){
            $("#item-teacher").addClass("active")

            $("#item-documentation").removeClass("active")
            $("#item-class-room").removeClass("active")
            $("#item-student").removeClass("active")
            $("#item-absent").removeClass("active")
            $("#item-schedule").removeClass("active")
            $("#item-database").removeClass("active")
        }
        if(this.pageYOffset >= 4343 && this.pageYOffset < 5259){
            $("#item-absent").addClass("active")
            
            $("#item-documentation").removeClass("active")
            $("#item-class-room").removeClass("active")
            $("#item-student").removeClass("active")
            $("#item-teacher").removeClass("active")
            $("#item-schedule").removeClass("active")
            $("#item-database").removeClass("active")
        }
        if(this.pageYOffset >= 5259){
            $("#item-schedule").addClass("active")

            $("#item-documentation").removeClass("active")
            $("#item-class-room").removeClass("active")
            $("#item-student").removeClass("active")
            $("#item-teacher").removeClass("active")
            $("#item-absent").removeClass("active")
            $("#item-database").removeClass("active")
        }
})

// Class room

$("#copy-get-cr").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/class-room").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-single-cr").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/class-room/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-create-cr").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/class-room").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-update-cr").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/class-room/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-delete-cr").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/class-room/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

// student

$("#copy-get-st").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/student").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-single-st").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/student/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-create-st").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/student").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-update-st").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/student/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-delete-st").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/student/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

// teacher

$("#copy-get-te").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/teacher").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-single-te").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/teacher/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-create-te").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/teacher").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-update-te").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/teacher/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-delete-te").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/teacher/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

// absent

$("#copy-get-ab").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/absent").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-single-ab").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/absent/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-create-ab").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/absent").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-update-ab").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/absent/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-delete-ab").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/absent/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

// schedule

$("#copy-get-sc").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/schedule").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-single-sc").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/schedule/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-create-sc").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/schedule").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-update-sc").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/schedule/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})

$("#copy-delete-sc").click(()=>{
    navigator.clipboard.writeText("http://localhost:8000/api/v1/schedule/{ID}").then(()=>{
        $(".toast").toast("show")
    })
})