import React from 'react'

function Card(){
    return(
      <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
          <div className="card">
      <img className="card_img" src="../images/pic1.jpg" alt="My pic"/>
      <div className="card_info">
      <h1 className="card_title">Fresh Food</h1>
      <p className="card_category">We use only the best ingredients to cook tasty, healthy and fresh food for you.</p>
      </div>
    </div>
    </div>
          <div className="col-sm-3">
          <div className="card">
      <img className="card_img" src="../images/pic2.jpg" alt="My pic"/>
      <div className="card_info">
      <h1 className="card_title">Proper Hygiene</h1>
      <p className="card_category">We care for your health.So proper hygiene is maintained at our place.</p>
      </div>
    </div>
          </div>
          <div className="col-sm-3">
          <div className="card">
      <img className="card_img" src="../images/pic8.png" alt="My pic"/>
      <div className="card_info">
      <h1 className="card_title">Experienced Chefs</h1>
      <p className="card_category">Our staff consists of chefs and cooks with years of experience.</p>
      </div>
    </div>
          </div>
          <div className="col-sm-3">
          <div className="card">
      <img className="card_img" src="../images/pic7.jpg" alt="My pic"/>
      <div className="card_info">
      <h1 className="card_title">A Variety Of Dishes</h1>
      <p className="card_category">In our menu you’ll find wide variety of dishes,desserts and drinks.</p>
      </div>
    </div>
          </div>
          </div>
          </div>
    </>
    );
  }
  
  export default Card;
  