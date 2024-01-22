// * 6 : What is Event Delegation ?  !⁡⁢⁣⁢Important⁡
//Parent element handling events on the behalf of its child elements
//reducing the need for individual event handlers on each child


//It is doing the same job as done by useParams hooks and dynamic
//url in react-router-dom to get the details page
document
  .querySelector(".electronic-devices")
  .addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
      window.location.href += "/" + event.target.className;
    }
  });
