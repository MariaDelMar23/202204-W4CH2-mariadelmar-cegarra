import "./Letters.css";

const Letters = ({ abecedario, clickLetter }) => {
  return (
    <ul className="letters">
      {abecedario.map((letra) => (
        <li className="letter" key={letra} onClick={clickLetter}>
          <a href="a">{letra}</a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
