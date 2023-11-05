document.getElementById("btn-submit").addEventListener("click", function () {
    const ten = document.getElementById("name").value;
    const myemail = "ledoquocbao52@gmail.com";
    const youremail = document.getElementById("email").value;
    const message = document.getElementById("messages").value;
    const mailtoLink = `mailto:${myemail}?subject=${ten}&body=${message}`;

    window.location.href = mailtoLink;
});