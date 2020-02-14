console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Button Has Been Clicked')

        var fname = $('.fname').val()
        var lname = $('.lname').val()
        var email = $('.email').val()
        var phone = $('.phone').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append("<div>Email is Valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Email is not Valid</div>")
        }

        if(phone.length >= 2) {
            statusElm.append("<div>Phone Number is Valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Phone Number Is not valid</div>")
        }

        if(message.length >= 10) {
            statusElm.append("<div>Message Is Valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Message Is Invalid</div>")
        }

        if(fname.length >= 3) {
            statusElm.append("<div>First Name Is Valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>First Name Is Invalid</div>")
        }

        if(lname.length >= 3) {
            statusElm.append("<div>Last name Is Valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Last name Is Invalid</div>")
        }
  })
})