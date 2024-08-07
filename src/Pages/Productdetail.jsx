import React from "react";
import detail1 from "../Components/assets/details1.png";
import detail2 from "../Components/assets/detail2.png";
import detail3 from "../Components/assets/details3.png";
import detail4 from "../Components/assets/details4.png";
import detail5 from "../Components/assets/details4.png";
import "./css/details.css";
export default function ProductDetail() {
  return (
    <>
      <div className="details-cont">
        <div className="prod-images">
          <div className="main-image">
            <img src={detail1} alt="" />
          </div>
          <div className="img-change">
            <img src={detail2} alt="" />
            <img src={detail3} alt="" />
            <img src={detail4} alt="" />
            <img src={detail5} alt="" />
          </div>
        </div>
        <div className="prod-details">
          <h3>Contemporary Canopy Bed</h3>
          <p>
            It has a very thin frame and can be made from a variety of different
            materials to match your style. A contemporary canopy bed is the
            modern version of a canopy bed. It has a very thin frame and can be
            made from a variety of different materials to match your style. The
            style of this bed can work well in most bedrooms and can even add
            some height to the smallest rooms.
          </p>
          <div className="rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <path
                d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                fill="#3CAE14"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <path
                d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                fill="#3CAE14"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <path
                d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                fill="#3CAE14"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <path
                d="M3.5 0L4.2858 2.41844H6.8287L4.77145 3.91312L5.55725 6.33156L3.5 4.83688L1.44275 6.33156L2.22855 3.91312L0.171302 2.41844H2.7142L3.5 0Z"
                fill="#3CAE14"
              />
            </svg>
          </div>
          <br />
          <hr />
          <br />
          <h3>$500.00 or 95.00/month</h3>
          <br />
          <p>Suggested payments with 3 months special financing</p>

          <br />
          <hr />
          <br />
          <div className="qty">
            <div className="qty-btn">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <p>
              Only 18 items Left! <br /> Don’t miss it
            </p>
          </div>
          <br />
          <div className="action-btn">
            <div className="buy-btn">
              <p>Buy Now</p>
            </div>
            <div className="cart-btn">
              <p>Add to cart</p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="delivery">
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                  stroke="black"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                  stroke="black"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="info">
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 15.76V6.25C16 5.71957 15.7893 5.21086 15.4142 4.83579C15.0391 4.46071 14.5304 4.25 14 4.25H4C3.46957 4.25 2.96086 4.46071 2.58579 4.83579C2.21071 5.21086 2 5.71957 2 6.25V15.25C2 15.5152 2.10536 15.7696 2.29289 15.9571C2.48043 16.1446 2.73478 16.25 3 16.25H3.71C3.90493 15.8049 4.22534 15.4263 4.63204 15.1604C5.03874 14.8945 5.5141 14.7529 6 14.7529C6.4859 14.7529 6.96126 14.8945 7.36796 15.1604C7.77466 15.4263 8.09507 15.8049 8.29 16.25H15.71C15.783 16.074 15.88 15.909 16 15.76ZM16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25H22V13.36C22.0004 12.6343 21.8033 11.9223 21.43 11.3L20.2 9.25L19.29 7.74C19.2015 7.59072 19.0757 7.46705 18.9249 7.38114C18.7741 7.29522 18.6035 7.25003 18.43 7.25H16V15.76Z"
                  stroke="black"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 11.25H6M11 8.25H6M8.5 17.25C8.50044 17.6219 8.41789 17.9892 8.25839 18.3252C8.09888 18.6611 7.86642 18.9573 7.57796 19.192C7.2895 19.4268 6.9523 19.5942 6.59094 19.6821C6.22957 19.77 5.85315 19.7762 5.48909 19.7002C5.12504 19.6242 4.78253 19.4679 4.48652 19.2428C4.19051 19.0176 3.94846 18.7293 3.77802 18.3987C3.60757 18.0682 3.51302 17.7038 3.50125 17.332C3.48948 16.9603 3.5608 16.5907 3.71 16.25C3.9402 15.7244 4.34422 15.2939 4.85423 15.031C5.36424 14.768 5.94919 14.6884 6.51091 14.8057C7.07262 14.923 7.57689 15.2299 7.93908 15.675C8.30127 16.1201 8.49932 16.6762 8.5 17.25ZM20.5 17.25C20.5004 17.6219 20.4179 17.9892 20.2584 18.3252C20.0989 18.6611 19.8664 18.9573 19.578 19.192C19.2895 19.4268 18.9523 19.5942 18.5909 19.6821C18.2296 19.77 17.8531 19.7762 17.4891 19.7002C17.125 19.6242 16.7825 19.4679 16.4865 19.2428C16.1905 19.0176 15.9485 18.7293 15.778 18.3987C15.6076 18.0682 15.513 17.7038 15.5013 17.332C15.4895 16.9603 15.5608 16.5907 15.71 16.25C15.783 16.074 15.88 15.909 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.43 16.565 20.502 16.906 20.5 17.25Z"
                  stroke="black"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="info">
                <h4>Return Delivery</h4>
                <p>Free 30 days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
