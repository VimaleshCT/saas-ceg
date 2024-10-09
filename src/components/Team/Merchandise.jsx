import "./Merchandise.css";
import { useEffect } from "react";
import ThreeDCardDemo from "./Card3d";

//team
import download1 from "../../../public/static/assets/team/Guru_Varap_Prakash_President.jpg";
import download2 from "../../../public/static/assets/team/SOWMIYA_K_PRESIDENT.JPG";
import download3 from "../../../public/static/assets/team/KATHIR_S_VICE_PRESIDENT.jpg";
import download4 from "../../../public/static/assets/team/Shreyaa_vinod_vp.jpg";
import download5 from "../../../public/static/assets/team/Shivani J General Secretary.jpg";
import download6 from "../../../public/static/assets/team/Varshini_k_js.jpg";
import download7 from "../../../public/static/assets/team/Madhubalan_k_sports secretary.jpg";
import download8 from "../../../public/static/assets/team/Ansh_CorporateRelations.png";
import download9 from "../../../public/static/assets/team/KAMALI K _Corporate Relations.jpg";
import download10 from "../../../public/static/assets/team/Parthiban R_ Finance_.jpg";
import download11 from "../../../public/static/assets/team/Saranya_G_Finance.jpg";
import download12 from "../../../public/static/assets/team/Alexpandiyan _ EVENTS.jpg";
import download13 from "../../../public/static/assets/team/Jothilakshmi_Events_Workshop_Carnival.jpg";
import download14 from "../../../public/static/assets/team/Prashanth_Events.jpg";
import download15 from "../../../public/static/assets/team/Karthick_Selvan_Logistics.jpg";
import download16 from "../../../public/static/assets/team/Parithi_Logistics.jpg";
import download17 from "../../../public/static/assets/team/Arul_Manisha_HR.jpg";
import download18 from "../../../public/static/assets/team/Reshmi_HR.jpg";
import download19 from "../../../public/static/assets/team/Sathishkumar_G_HR_Hospitality.jpg";
import download20 from "../../../public/static/assets/team/Ajay_Marketing1.jpg";
import download21 from "../../../public/static/assets/team/Nehavarthini_Marketing Core.jpg";
import download22 from "../../../public/static/assets/team/Namitha_Sharan_Contents.jpg";
import download23 from "../../../public/static/assets/team/Sankaranarayanan_Contents.jpeg";
import download24 from "../../../public/static/assets/team/Vikrant_R_Technical.jpeg";
import download25 from "../../../public/static/assets/team/Vimalesh_CT_Technical.jpg";
import download26 from "../../../public/static/assets/team/T_Ponvel_Graphics Design.jpg";
import download27 from "../../../public/static/assets/team/Sujatha_GDesign.jpg";
import download28 from "../../../public/static/assets/team/Dineshraja D_Permissions & Documentation.jpg";

const Merchandise = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const teamMembers = [
    {
      img: download1,
      name: "Guru Varap Prakash",
      position: "President",
      instagramLink: "https://instagram.com/gvp_00_1",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download2,
      name: "Sowmiya K",
      position: "President",
      instagramLink: "https://instagram.com/_sowmiya_k_",
      linkedinLink: "https://www.linkedin.com/in/sowmiyakaruna",
    },
    {
      img: download3,
      name: "Kathir S",
      position: "Vice President",
      instagramLink: "https://instagram.com/kathir_skat",
      linkedinLink:
        "https://www.linkedin.com/in/kathir-s-427b77318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: download4,
      name: "Shreyaa Vinod",
      position: "Vice President",
      instagramLink: "https://instagram.com/shreyaa__vinod",
      linkedinLink:
        "https://www.linkedin.com/in/shreyaa-vinod-a8a74b294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: download5,
      name: "Shivani J",
      position: "General Secretary",
      instagramLink: "https://instagram.com/shivani__jagadeesan__",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download6,
      name: "Varshini K",
      position: "Joint Secretary",
      instagramLink: "https://instagram.com/example1",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download7,
      name: "Madhubalan",
      position: "Sports Secretary",
      instagramLink: "https://instagram.com/mr_.maddy._",
      linkedinLink: "https://www.linkedin.com/in/madhubalan-k-885a5424a/",
    },
    {
      img: download8,
      name: "Ansh Bomb",
      position: "Corporate Relation",
      instagramLink: "https://instagram.com/ansh_bomb",
      linkedinLink: "http://www.linkedin.com/in/ansh-bomb",
    },
    {
      img: download9,
      name: "Kamali K",
      position: "Corporate Relation",
      instagramLink: "https://instagram.com/kamali_aks_",
      linkedinLink: "http://www.linkedin.com/in/kamali-kaliaraj3006",
    },
    {
      img: download10,
      name: "Parthiban R",
      position: "Finance",
      instagramLink: "https://instagram.com/parthiban_2k03",
      linkedinLink:
        "https://www.linkedin.com/in/parthiban-r-92724a225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: download11,
      name: "Saranya G",
      position: "Finance",
      instagramLink: "https://instagram.com/_.saranya._27",
      linkedinLink:
        "https://www.linkedin.com/in/saranya-g27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: download12,
      name: "AlexPandiyan B",
      position: "Events,Workshops & Carnivals",
      instagramLink:
        "https://www.instagram.com/a_l_e_x_p_a_n_d_i_y_a_n/profilecard/?igsh=bzMyNmJieDl3MjJu",
      linkedinLink: "https://in.linkedin.com/in/alex-sakthi-27210625b",
    },
    {
      img: download13,
      name: "Jothilakshmi T",
      position: "Events,Workshops & Carnivals",
      instagramLink: "https://www.instagram.com/jothi_thirukkumaran/",
      linkedinLink: "https://www.linkedin.com/in/jothilakshmi-t-8a5812281/",
    },
    {
      img: download14,
      name: "Prashanth G",
      position: "Events,Workshops & Carnivals",
      instagramLink:
        "https://www.instagram.com/_prashanth.7_?igsh=eGMxM3VzMzAxaGZx",
      linkedinLink:
        "https://www.linkedin.com/in/prashanth-g-53801a271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: download15,
      name: "Karthick Selvan",
      position: "Logistics",
      instagramLink: "https://instagram.com/dracareys_",
      linkedinLink: "https://www.linkedin.com/in/karthick-selvan-424489201",
    },
    {
      img: download16,
      name: "Parithi M",
      position: "Logistics",
      instagramLink: "https://instagram.com/handsome_tamizhan",
      linkedinLink: "https://www.linkedin.com/in/parithi-m16/",
    },
    {
      img: download17,
      name: "Arul Manisha A",
      position: "HR & Hospitality",
      instagramLink: "https://instagram.com/arulmanishaaaron ",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download18,
      name: "Reshmi R",
      position: "HR & Hospitality",
      instagramLink: "https://instagram.com/_.reshmiii._",
      linkedinLink:
        "https://www.linkedin.com/in/reshmi-r-336426239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: download19,
      name: "Sathishkumar",
      position: "HR & Hospitality",
      instagramLink: "https://www.instagram.com/____sk_the_smartzz____",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download20,
      name: "Ajay Raj Agarwal S",
      position: "Marketing",
      instagramLink: "https://instagram.com/sara_aju23",
      linkedinLink: "https://www.linkedin.com/in/ajay-raj-agarwal-59aa09254/",
    },
    {
      img: download21,
      name: "Nehavarthini M",
      position: "Marketing",
      instagramLink: "https://instagram.com/_neha.ammu_",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download22,
      name: "Namitha Sharan A",
      position: "Contents",
      instagramLink: "https://instagram.com/sharon__0505",
      linkedinLink:
        "https://www.linkedin.com/in/namitha-sharan-346573268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      img: download23,
      name: "Sankaranarayanan S",
      position: "Contents",
      instagramLink: "https://instagram.com/_s_a_n_k_a_r_2003",
      linkedinLink: "https://linkedin.com/in/example1",
    },
    {
      img: download24,
      name: "Vikrant Ramesh",
      position: "Technical Design",
      instagramLink: "https://instagram.com/vikrant__ramesh",
      linkedinLink: "https://www.linkedin.com/in/vikrant-ramesh-046061190",
    },
    {
      img: download25,
      name: "Vimalesh C T",
      position: "Technical Design",
      instagramLink: "https://www.instagram.com/pranovvimal_30/",
      linkedinLink: "https://www.linkedin.com/in/vimalesh-c-t/",
    },
    {
      img: download26,
      name: "Ponvel T",
      position: "Graphical Design",
      instagramLink: "https://instagram.com/ponvel_artlover",
      linkedinLink: "https://www.linkedin.com/in/ponvel-t-913497255/",
    },
    {
      img: download27,
      name: "Sujatha M",
      position: "Graphical Design",
      instagramLink: "https://instagram.com/sujatha_1174",
      linkedinLink: "https://www.linkedin.com/in/sujatha-m-088b61279",
    },
    {
      img: download28,
      name: "DineshRaja D",
      position: "Permissions & Documentation",
      instagramLink: "https://instagram.com/mr_dinesh_deva",
      linkedinLink: "https://www.linkedin.com/in/dineshraja-d-73ab32290",
    },
  ];

  return (
    <section id="merchandise">
      <div className="mt-20 bg-cover bg-g bg-no-repeat pb-8 min-h-[85vh]">
        <div
          className="flex items-center justify-center p-8 pt-10 pb-5"
          style={{ backgroundColor: "#000", color: "#fff" }}
        ></div>
        <h1
          className="text-3xl md:text-5xl font-anta md:font-bold text-center"
          style={{ color: "white" }}
        >
          Meet Our Team
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 items-center w-[90%] mx-auto min-h-[500px] px-10 mb-20 bk text-white md:mt-5 py-10">
          {teamMembers.map((member, index) => (
            <ThreeDCardDemo
              key={index}
              img={member.img}
              name={member.name}
              position={member.position}
              instagramLink={member.instagramLink}
              linkedinLink={member.linkedinLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
