const Notification = (props) => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} alt="image" />
      <p>{props.message}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <ul>
      <Notification
        className="box1"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="box2"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="box3"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Danger Message"
      />
      <Notification
        className="box4"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
