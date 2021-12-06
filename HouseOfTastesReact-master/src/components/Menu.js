import React from 'react';

function Menu() {
  return (
    <>
      <div className="container">
        <p className="category">Shakes</p>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="banana.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Banana Shake</h1>
                <p className="card_p">Rs.40</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="strawberrry.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Strawberry Shake</h1>
                <p className="card_p">Rs.50</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="mangoo.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Mango Shake</h1>
                <p className="card_p">Rs.60</p>
              </div>
            </div>
          </div>
        </div>
        <p className="category">Main Course</p>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="shahipaneer.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Shahi Paneer</h1>
                <p className="card_p">Rs.120</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="mixveg.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Mixed Veg</h1>
                <p className="card_p">Rs.90</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="dakmakhni.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Dal Makhani</h1>
                <p className="card_p">Rs.100</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="tanduri.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Tandoori Roti</h1>
                <p className="card_p">Rs.5</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="butternaaan.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Butter Naan</h1>
                <p className="card_p">Rs.22</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img className="card_imgg" src="mixprantha.jpg" alt="My pic" />
              <div className="card_infoo">
                <h1 className="card_titlee">Mixed Prantha</h1>
                <p className="card_p">Rs.38</p>
              </div>
            </div>
          </div>
          <p className="category">Combos</p>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img className="card_imgg" src="paneercombo.jpg" alt="My pic" />
                <div className="card_infoo">
                  <h1 className="card_titlee">Paneer Combo</h1>
                  <p className="card_p">Paneer special + 3 roti + salad</p>
                  <p className="card_p">Rs. 150</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img className="card_imgg" src="dalmkhnicombo.jpg" alt="My pic" />
                <div className="card_infoo">
                  <h1 className="card_titlee">Dal Makhni Combo</h1>
                  <p className="card_p">Dal Makhni + rice + 2 naan</p>
                  <p className="card_p">Rs.120</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img className="card_imgg" src="biryanicombo.jpg" alt="My pic" />
                <div className="card_infoo">
                  <h1 className="card_titlee">Biryani Combo</h1>
                  <p className="card_p">Veg Biryani + raita + salad</p>
                  <p className="card_p">Rs.120</p>
                </div>
              </div>
            </div>
          </div>
          <p className="category">Dessert</p>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img className="card_imgg" src="kheer.jpg" alt="My pic" />
                <div className="card_infoo">
                  <h1 className="card_titlee">Kheer</h1>
                  <p className="card_p">Rs.100 per bowl</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img className="card_imgg" src="rabdi.jpg" alt="My pic" />
                <div className="card_infoo">
                  <h1 className="card_titlee">Rabdi</h1>
                  <p className="card_p">Rs.30 per piece</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img className="card_imgg" src="halva.jpg" alt="My pic" />
                <div className="card_infoo">
                  <h1 className="card_titlee">Halwa</h1>
                  <p className="card_p">Rs.120 per bowl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
