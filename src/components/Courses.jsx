import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Courses = () => {
  return (
    <section id="course">
      <div className="py-20 bg-white">
      <Container>
        <h3 className="text-center text-[#2D2F31] pb-4 text-[40px] font-bold">Our Courses</h3>
        <Flex className={'justify-between flex-wrap'}>
        <div className="card bg-base-100 w-100 shadow-sm mb-10">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[19px]">Organic Chemistry</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-100 shadow-sm mb-10">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Chemistry</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-100 shadow-sm mb-10">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Chemistry</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-100 shadow-sm mb-10">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Chemistry</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-100 shadow-sm mb-10">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Chemistry</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-100 shadow-sm mb-10">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Chemistry</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
        </div>
       
        </Flex>
      </Container>
    </div>
    </section>
  );
};

export default Courses;
