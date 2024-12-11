import React, { useState } from "react";
import "./Home.css";

function Home() {
  //declaration des variables
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  
// foncytion fleche pour calculer les calories
  const calculateCalories = () => {
    var act;
    var selectedvalue = "";
// choisir l'activite 
    const radio = document.querySelectorAll("input[type='radio'][name='act']");
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        selectedvalue = radio[i].value;
        break;
      }
    }
// l'effort a faire a l'activite
    switch (selectedvalue) {
      case "1":
        act = 1;
        break;
      case "1.2":
        act = 1.2;
        break;
      case "1.375":
        act = 1.375;
        break;
      case "1.465":
        act = 1.465;
        break;
      case "1.55":
        act = 1.55;
        break;
      case "1.725":
        act = 1.725;
        break;
      case "1.9":
        act = 1.9;
        break;
      default:
        alert("Please choose the daily activity level");
    }

    var bmr;
    var genre = "";
    var caloriesneed;
// choisir le genre 
    const radiop = document.querySelectorAll(
      "input[type='radio'][name='genre']"
    );
    for (var i = 0; i < radiop.length; i++) {
      if (radiop[i].checked) {
        genre = radiop[i].value;
        break;
      }
    }
// calculer les besoins des calories
    switch (genre) {
      case "homme":
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        caloriesneed = bmr * act;
        break;
      case "femme":
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
        caloriesneed = bmr * act;
        break;
      default:
        alert("Please choose the gender");
        return false;
    }

    var mwl = caloriesneed - 250;
    var wl = caloriesneed - 500;
    var ewl = caloriesneed - 1000;

    document.getElementById("mw").innerHTML = Math.round(caloriesneed);
    document.getElementById("mwl").innerHTML = Math.round(mwl);
    document.getElementById("wl").innerHTML = Math.round(wl);
    document.getElementById("ewl").innerHTML = Math.round(ewl);

    var mwg = caloriesneed + 250;
    var wg = caloriesneed + 500;
    var ewg = caloriesneed + 1000;

    document.getElementById("mw2").innerHTML = Math.round(caloriesneed);
    document.getElementById("mwg").innerHTML = Math.round(mwg);
    document.getElementById("wg").innerHTML = Math.round(wg);
    document.getElementById("ewg").innerHTML = Math.round(ewg);
  };

  return (
    <div id="body">
      <form action="" name="f">
        <h1 id="h1">
          Calories_Calculator<span id="span">.net</span>
        </h1>
        <section id="section1">
          <h2 id="h2">Calorie Calculator</h2>
          <label htmlFor="i1" className="label">
            Age
            <input
              type="number"
              id="i1"
              min="15"
              max="80"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <br />
          <div id="div2">
            <label className="label">Gender</label>
            <label htmlFor="h">
              Homme
              <input
                id="h"
                value="homme"
                type="radio"
                name="genre"
                onChange={() => setGender("homme")}
              />
            </label>
            <label htmlFor="f">
              Femme
              <input
                id="f"
                value="femme"
                type="radio"
                name="genre"
                onChange={() => setGender("femme")}
              />
            </label>
          </div>
          <br />
          <br />
          <label htmlFor="height" className="label">
            Height
            <input
              type="number"
              id="height"
              min="140"
              max="200"
              placeholder="Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            Cm
          </label>
          <br />
          <br />
          <label htmlFor="weight" className="label">
            Weight
            <input
              type="number"
              id="weight"
              min="25"
              max="200"
              placeholder="Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            Kg
          </label>
          <h4 className="label">Activity Level</h4>
          <label>
            <input type="radio" name="act" value={1} />
            Basal metabolic Rate (BMR)
          </label>
          <br />
          <div>
            <label>
              <input type="radio" name="act" value={1.2} /> Little or no
              exercise
            </label>
            <br />
            <label>
              <input type="radio" name="act" value={1.375} /> Exercise 1-3
              times/week
            </label>
            <br />
            <label>
              <input type="radio" name="act" value={1.465} /> Exercise 4-5
              times/week
            </label>
            <br />
            <label>
              <input type="radio" name="act" value={1.55} /> Daily exercise or
              intense exercise 3-4 times/week
            </label>
            <br />
            <label>
              <input type="radio" name="act" value={1.725} /> Intense exercise
              6-7 times/week
            </label>
            <br />
            <label>
              <input type="radio" name="act" value={1.9} /> Very intense
              exercise daily, or physical job
            </label>
            <br />
            <br />
          </div>

          <div id="div">
            <button type="button" onClick={calculateCalories} id="btn1">
              Calculate
            </button>
            <input type="reset" value="Clear" id="btn2" />
          </div>
          <div className="tableau">
  <table border="0">
    <tbody>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          Maintain Weight
        </th>
        <td>
          <p
            id="mw"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <p>Mild Weight Loss</p>
          <span id="spantb"> 0.25 kg/week</span>
        </th>
        <td>
          <p
            id="mwl"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <p>Weight Loss</p>
          <span id="spantb"> 0.5 kg/week</span>
        </th>
        <td>
          <p
            id="wl"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <p>Extreme Weight Loss</p>
          <span id="spantb"> 1 kg/week</span>
        </th>
        <td>
          <p
            id="ewl"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
    </tbody>
  </table>
  <table border="0">
    <tbody>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          Maintain Weight
        </th>
        <td>
          <p
            id="mw2"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <p>Mild Weight Gain</p>
          <span id="spantb"> 0.25 kg/week</span>
        </th>
        <td>
          <p
            id="mwg"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <p>Weight Gain</p>
          <span id="spantb"> 0.5 kg/week</span>
        </th>
        <td>
          <p
            id="wg"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
      <tr>
        <th style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <p>Extreme Weight Gain</p>
          <span id="spantb"> 1 kg/week</span>
        </th>
        <td>
          <p
            id="ewg"
            style={{
              textAlign: 'center',
              fontFamily: 'Times New Roman, Times, serif',
            }}
          ></p>
          <span id="spantb">Calories/day</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </section>
        <div id="div3">
  <ul>
    <li>
      <b>Exercise</b>: 15-30 minutes of elevated heart rate activity
    </li>
    <li>
      <b>Intense exercise</b>: 45-120 minutes of elevated heart rate activity
    </li>
    <li>
      <b>Very Intense exercise </b>: 2+ hours of elevated heart rate activity
    </li>
  </ul>
</div>

      </form>
    </div>
  );
}

export default Home;
