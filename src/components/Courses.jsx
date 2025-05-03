import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Courses = () => {
  return (
    <section id="course">
      <div className="py-20 bg-white">
      <Container>
                      {/* JigJag  */}
                      <div className="w-full text-center mb-8">
        <button class="group relative">
          <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 opacity-30 blur-lg transition-all duration-500 group-hover:opacity-70 group-hover:blur-xl"></div>

          <div class="relative rounded-lg border border-white/10 bg-gradient-to-b from-gray-900 via-gray-950 to-black px-8 py-4 shadow-xl">
            <div class="absolute inset-x-0 top-px h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-x-0 bottom-px h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div class="relative flex items-center justify-between gap-6">
              <div class="flex items-center gap-4">
                <div class="relative flex h-12 w-12 items-center justify-center">
                  <div class="absolute inset-0 rounded-full border border-rose-500/20 border-t-rose-500 transition-transform duration-1000 group-hover:rotate-180"></div>
                  <div class="absolute inset-[3px] rounded-full bg-gray-950"></div>
                  <span class="relative text-sm font-bold text-rose-500">
                    CW
                  </span>
                </div>

                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2">
                    <span class="text-base font-bold text-white uppercase">
                    Our Courses
                    
                    </span>
                    <div class="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50">
                    
                    </div>
                  </div>

                  <div class="h-1.5 w-32 overflow-hidden rounded-full bg-gray-800">
                    <div class="h-full w-2/3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="relative flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-4 w-4 text-rose-500"
                  >
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <div class="absolute inset-0 rounded-lg bg-rose-500/10 blur-sm transition-all duration-300 group-hover:blur-md"></div>
                </div>

                <span class="text-sm font-semibold text-white">
                  ChemistryWalah
                </span>

                <div class="flex gap-1">
                  <div class="h-2 w-2 rounded-full bg-orange-500/40 transition-all duration-300 group-hover:bg-orange-500"></div>
                  <div class="h-2 w-2 rounded-full bg-orange-500/40 transition-all duration-300 group-hover:bg-orange-500 group-hover:delay-75"></div>
                  <div class="h-2 w-2 rounded-full bg-orange-500/40 transition-all duration-300 group-hover:bg-orange-500 group-hover:delay-150"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-black">We are a group of passionate individuals dedicated to making a difference.</p>
        </button>
        </div>
        {/* JigJag  */}
        
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
