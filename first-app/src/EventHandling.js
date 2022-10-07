function EventHandling() {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    //target은 input태그가 됨
    console.log(txt);
  }
  return (
    <>
      <div>
        <h1>Hello</h1>
        <button onClick={showName}>Show Name</button>
        <button
          onClick={() => {
            showAge(10);
          }}
        >
          Show Age{" "}
        </button>
        <input
          type="text"
          onChange={(e) => {
            const txt = e.target.value;
            showText(txt);
          }}
        ></input>
      </div>
    </>
  );
}

export default EventHandling;
