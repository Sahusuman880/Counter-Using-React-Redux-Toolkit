function Model(props) {
  return (
    <div class="card" style={{ width: "50rem" }}>
      <div class="card-body">{props.children}</div>
    </div>
  );
}
export default Model;
