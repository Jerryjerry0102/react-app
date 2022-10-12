function PropsPrac(props) {
  return (
    <>
      <div>
        FavoriteFood : <span style={{ color: "red" }}>{props.food}</span>
      </div>
    </>
  );
}

PropsPrac.defaultProps = { food: "불보쌈" };

export default PropsPrac;
