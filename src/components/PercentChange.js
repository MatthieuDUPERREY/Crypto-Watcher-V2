import React, { useEffect, useState } from "react"; // Import correct de useState depuis React
import colors from "../styles/_settings.scss"; // Assurez-vous que le chemin d'importation vers le fichier SCSS est correct

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState(colors.white1); // Utilisation de l'état initial pour setColor

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]); // Ajout de percent dans les dépendances du useEffect

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
