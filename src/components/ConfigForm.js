//Comportement
// const Select = () => {
//   alert("Votre est interface va etre tester par Seliluim");
// };
// const Retour = () => {
//   alert("Retour sur la page d'accueil");
// };

export default function ConfigForm(props) {
  return (
    <div type="text" className="box">
      <div>
        <form className="boxform">
          <fieldset className="field"> Configuration du teste</fieldset>
          <input type="checkbox" value="ligne" name="En Ligne" /> En ligne
          <input type="checkbox" value="Boutton" name="Boutton" /> Boutton
          <input type="checkbox" value="Other" name="autre" /> Autre
        </form>
        <form className="boutton">
          <button className="b1" onClick={() => props.clickHandler("loading")}>
            {" "}
            Tester
          </button>
          <button className="b2" onClick={() => props.clickHandler("home")}>
            {" "}
            Retour
          </button>
        </form>
      </div>
    </div>
  );
}
