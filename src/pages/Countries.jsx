import React from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Countries({ countries }) {
  console.log(countries);
  return (
    <div>
      <h1>Countries Information</h1>
      {/* <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
          </li>
        ))}
      </ul> */}
    </div>
  );
}


