import React from "react";
import photo from "../../Assets/photo.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import photo_1 from "../../Assets/photo.jpg";
import photo_2 from "../../Assets/Uni_photo_2.jpeg";
import photo_3 from "../../Assets/Uni_photo_3.jpg";
import photo_4 from "../../Assets/Uni_photo_4.jpg";
import photo_5 from "../../Assets/Uni_photo_5.jpg";

const back_ground_4to = [
  { id: 1, img: photo_1 },
  { id: 2, img: photo_2 },
  { id: 3, img: photo_3 },
  { id: 4, img: photo_4 },
  { id: 5, img: photo_5 },
];

export default function Home() {
  return (
    <div>
      <div className="pt-5 overflow-hidden bg-white rounded "></div>

      <div className="flex pl-5 pr-5 divide-x">
        <div className="flex flex-col w-80 ">
          <div>
            <Link to="/Notices">
              <button className="items-center h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
                Notice Board
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <div>
            <Link to="/Update">
              <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
                Updates
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <div>
            <Link to="/News_page">
              <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
                News
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <div>
            <Link to="/Article">
              <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
                Articals
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <div>
            <Link to="/Events">
              <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
                Event
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <div>
            <Link to="/Other">
              <button className="h-8 px-4 font-bold text-white bg-red-800 rounded hover:bg-yellow-300 py-auto w-60">
                Other
              </button>
            </Link>
          </div>
          <div className="my-2"></div>
          <div className="text-center">
            In case Of Emergency
            <div className="flex flex-col ">
              <div className="text-lg font-bold text-center">81 2222 248</div>
              <div className="text-lg font-bold text-center">70 5352 568</div>
            </div>
          </div>
        </div>

        <div className="object-cover object-none w-full h-200">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            interval={2000}
            autoPlay={true}
          >
            {back_ground_4to.map((item) => (
              <img
                key={item.id}
                className="object-cover w-full h-[500px] opacity-200"
                src={item.img}
                alt=""
              />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="text-2xl text-center pt-11">
        <p> Our Vision</p>
      </div>
      <div className="pt-8 pl-40 pr-40">
      At University Of Peradeniya Health Center, we envision a thriving and inclusive community where health and well-being are prioritized, fostering an environment that empowers every student, faculty, and staff member to achieve their full potential. Our vision is to be a leader in promoting holistic health, providing innovative and accessible healthcare services, and cultivating a culture of well-being that inspires lifelong wellness.<br></br> <br></br>
      
      In order to achieve this Vision, The University Health Center strives to be <br></br> <br></br>
      
      1. At University of Peradeniya Health Center, our vision is to foster a thriving and inclusive community where health and well-being are prioritized, embracing a holistic approach that addresses the interconnected dimensions of physical, mental, and emotional health.<br></br>
      2. We are committed to creating an inclusive environment that respects and values the diverse needs of every student, faculty, and staff member, ensuring that our health services cater to the unique requirements of our community.<br></br>
      3. Empowering individuals to take an active role in their health is at the core of our vision, providing resources and education to enable informed decision-making and fostering a sense of personal responsibility.<br></br>
      4. Striving for innovation in healthcare services, we aim to meet the evolving needs of our community while ensuring accessibility by removing barriers to healthcare and leveraging technology to enhance service delivery.<br></br>
      5. Our vision involves a cultural transformation within the university, where health and well-being become integral aspects of our community's identity, promoting a positive and supportive atmosphere for healthy habits and lifestyle choices.
      </div>

      <div className="text-2xl text-center pt-11">
        <p> Our Mission </p>
      </div>

      <div className="pt-8 pl-40 pr-40">
      "To provide exceptional, inclusive, and student-centered healthcare services, fostering a proactive and preventive culture of well-being. We prioritize comprehensive resources, create a supportive environment, and collaborate with the community to empower individuals in achieving and maintaining optimal health throughout their academic journey." <br></br> <br></br>
      </div>

    </div>
  );
}
