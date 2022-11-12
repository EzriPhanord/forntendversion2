//Comportement
// const submit = () => {
//   alert("Votre est interface va etre tester par Seliluim");
// };

export default function Form1(props) {
  return (
    <div type="text" className="box">
      <div type="text1">
        <h2>Vieullez saisir l'URL du site a tester</h2>
      </div>
      <div>
        <form className="box">
          <input type="text" placeholder="URL du site" />
          <button onClick={() => props.clickHandler("config")}>
            {" "}
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
}
