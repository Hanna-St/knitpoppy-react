import { Button } from "reactstrap";

const GoToTop = () => {

    window.onscroll = function scrollFunction() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Button onClick={topFunction} id="myBtn"></Button>
    )

}

export default GoToTop;