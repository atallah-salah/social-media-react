import React, { useState } from "react";
import "./Searchbar.css";

// import dependencies
// import { FormControl, Button } from "react-bootstrap";
import { AsyncTypeahead, Highlighter } from "react-bootstrap-typeahead";

const Searchbar = () => {
  // set fake data
  let options = [
    {
      label: "Alabama",
      population: 4780127,
      capital: "Montgomery",
      region: "South"
    },
    { label: "Alaska", population: 710249, capital: "Juneau", region: "West" },
    {
      label: "Arizona",
      population: 6392307,
      capital: "Phoenix",
      region: "West"
    },
    {
      label: "Arkansas",
      population: 2915958,
      capital: "Little Rock",
      region: "South"
    },
    {
      label: "California",
      population: 37254503,
      capital: "Sacramento",
      region: "West"
    },
    {
      label: "Colorado",
      population: 5029324,
      capital: "Denver",
      region: "West"
    },
    {
      label: "Connecticut",
      population: 3574118,
      capital: "Hartford",
      region: "Northeast"
    },
    {
      label: "Delaware",
      population: 897936,
      capital: "Dover",
      region: "South"
    },
    {
      label: "Florida",
      population: 18804623,
      capital: "Tallahassee",
      region: "South"
    },
    {
      label: "Georgia",
      population: 9688681,
      capital: "Atlanta",
      region: "South"
    },
    {
      label: "Hawaii",
      population: 1360301,
      capital: "Honolulu",
      region: "West"
    },
    { label: "Idaho", population: 1567652, capital: "Boise", region: "West" },
    {
      label: "Illinois",
      population: 12831549,
      capital: "Springfield",
      region: "Midwest"
    },
    {
      label: "Indiana",
      population: 6484229,
      capital: "Indianapolis",
      region: "Midwest"
    },
    {
      label: "Iowa",
      population: 3046869,
      capital: "Des Moines",
      region: "Midwest"
    },
    {
      label: "Kansas",
      population: 2853132,
      capital: "Topeka",
      region: "Midwest"
    },
    {
      label: "Kentucky",
      population: 4339349,
      capital: "Frankfort",
      region: "South"
    },
    {
      label: "Louisiana",
      population: 4533479,
      capital: "Baton Rouge",
      region: "South"
    },
    {
      label: "Maine",
      population: 1328361,
      capital: "Augusta",
      region: "Northeast"
    },
    {
      label: "Maryland",
      population: 5773785,
      capital: "Annapolis",
      region: "South"
    },
    {
      label: "Massachusetts",
      population: 6547817,
      capital: "Boston",
      region: "Northeast"
    },
    {
      label: "Michigan",
      population: 9884129,
      capital: "Lansing",
      region: "Midwest"
    },
    {
      label: "Minnesota",
      population: 5303925,
      capital: "Saint Paul",
      region: "Midwest"
    },
    {
      label: "Mississippi",
      population: 2968103,
      capital: "Jackson",
      region: "South"
    },
    {
      label: "Missouri",
      population: 5988927,
      capital: "Jefferson City",
      region: "Midwest"
    },
    {
      label: "Montana",
      population: 989417,
      capital: "Alberta",
      region: "West"
    },
    {
      label: "Nebraska",
      population: 1826341,
      capital: "Lincoln",
      region: "Midwest"
    },
    {
      label: "Nevada",
      population: 2700691,
      capital: "Carson City",
      region: "West"
    },
    {
      label: "New Hampshire",
      population: 1316466,
      capital: "Concord",
      region: "Northeast"
    },
    {
      label: "New Jersey",
      population: 8791936,
      capital: "Trenton",
      region: "Northeast"
    },
    {
      label: "New Mexico",
      population: 2059192,
      capital: "Santa Fe",
      region: "West"
    },
    {
      label: "New York",
      population: 19378087,
      capital: "Albany",
      region: "Northeast"
    },
    {
      label: "North Carolina",
      population: 9535692,
      capital: "Raleigh",
      region: "South"
    },
    {
      label: "North Dakota",
      population: 672591,
      capital: "Bismarck",
      region: "Midwest"
    },
    {
      label: "Ohio",
      population: 11536725,
      capital: "Columbus",
      region: "Midwest"
    },
    {
      label: "Oklahoma",
      population: 3751616,
      capital: "Oklahoma City",
      region: "South"
    },
    { label: "Oregon", population: 3831073, capital: "Salem", region: "West" },
    {
      label: "Pennsylvania",
      population: 12702887,
      capital: "Harrisburg",
      region: "Northeast"
    },
    {
      label: "Rhode Island",
      population: 1052931,
      capital: "Providence",
      region: "Northeast"
    },
    {
      label: "South Carolina",
      population: 4625401,
      capital: "Columbia",
      region: "South"
    },
    {
      label: "South Dakota",
      population: 814191,
      capital: "Pierre",
      region: "Midwest"
    },
    {
      label: "Tennessee",
      population: 6346275,
      capital: "Nashville",
      region: "South"
    },
    {
      label: "Texas",
      population: 25146105,
      capital: "Austin",
      region: "South"
    },
    {
      label: "Utah",
      population: 2763888,
      capital: "Salt Lake City",
      region: "West"
    },
    {
      label: "Vermont",
      population: 625745,
      capital: "Montpelier",
      region: "Northeast"
    },
    {
      label: "Virginia",
      population: 8001045,
      capital: "Richmond",
      region: "South"
    },
    {
      label: "Washington",
      population: 6724543,
      capital: "Olympia",
      region: "West"
    },
    {
      label: "West Virginia",
      population: 1853011,
      capital: "Charleston",
      region: "South"
    },
    {
      label: "Wisconsin",
      population: 5687289,
      capital: "Madison",
      region: "West"
    },
    {
      label: "Wyoming",
      population: 563767,
      capital: "Cheyenne",
      region: "West"
    }
  ];

  let [isLoading, setLoading] = useState(false);
  let [users, setUsers] = useState([]);

  const _handleSearch = query => {
    setLoading(true);

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(resp => resp.json())
      .then(json => {
        setLoading(false);
        // setUsers(json.items);
        setUsers(options);
      });
  };

  return (
    <div className="Searchbar">
      <AsyncTypeahead
        allowNew={false}
        isLoading={isLoading}
        multiple={false}
        labelKey="label"
        minLength={1}
        id={1}
        options={users}
        onSearch={_handleSearch}
        placeholder="Search for people..."
        renderMenuItemChildren={(option, props, idx) => (
          <div>
            <Highlighter search={props.text}>
              {option[props.labelKey]}
            </Highlighter>
          </div>
        )}
      />
    </div>
  );
};

export default Searchbar;
