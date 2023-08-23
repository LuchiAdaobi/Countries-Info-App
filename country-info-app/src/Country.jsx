import React from "react";

export default function Country({
  name,
  capital,
  region,
  population,
  currency,
  language,
  idd,
  timezone,
  flag,
  map,
}) {
  return (
    <div className="country">
      <h1 className="title">{name}</h1>
      {/* <p>
        <span>Country Name :</span> {name}
      </p> */}
      <p>
        <span>Capital City:</span>{" "}
        {Array.isArray(capital) ? capital.join(" ") : capital}
      </p>

      <p>
        <span>Continent :</span> {region}
      </p>
      <p>
        <span>Population :</span> {population}
      </p>
      <p>
        <span>Currency :</span>{" "}
        {currency && currency[Object.keys(currency)[0]].name}
      </p>
      <p>
        <span>Language:</span> {language && language[Object.keys(language)[0]]}
      </p>
      <p>
        <span>Calling Code :</span> {idd && idd.root}
      </p>
      <p>
        <span>Timezone :</span> {timezone && timezone[0]}
      </p>
      <img src={flag} alt={`${name.common} flag`} className="image" />
      {map && (
        <a href={map} target="_blank" rel="noopener noreferrer">
          Google Maps
        </a>
      )}
    </div>
  );
}
