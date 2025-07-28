"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Rahul Verma",
      profession: "Frontend Developer",
      feedback: "Working with Rahul was a breeze. He understands requirements quickly and delivers clean, quality code.",
    },
    {
      name: "Neha Sharma",
      profession: "UI/UX Designer",
      feedback: "Loved the design-to-code consistency. Everything was pixel perfect and mobile responsive.",
    },
    {
      name: "Ankit Tiwari",
      profession: "Project Manager",
      feedback: "Highly dependable and always on time. Would love to collaborate again on future projects.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    feedback: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formData]);
    setFormData({ name: "", profession: "", feedback: "" });
    setShowForm(false);
  };

  return (
    <div className="h-[850px] w-full flex flex-col items-center justify-start gap-20  py-16 ">
      <div className="w-96 h-24 flex flex-col items-center justify-around">
        <h1 className="text-primary text-center font-heading font-bold text-4xl md:text-6xl">
          TESTIMONIALS
        </h1>
        <p className="text-base font-subheading text-secondary text-center">
          Built with Code, Backed by Trust
        </p>
      </div>

      <div className="relative w-full max-w-5xl overflow-hidden">
        
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
       
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />

      
        <div
          className="flex gap-12 overflow-auto animate-scroll-x"
          style={{
            animation: "scroll-x 25s linear infinite",
            width: `${testimonials.length * 320 * 2}px`,
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="min-w-[600px] md:min-h-[300px] h-[200px]  flex flex-col justify-around" >
              <p className="text-secondary text-2xl text-center font-space font-thin italic">{item.feedback}</p>
                <div className="p-6 text-center">
                <h2 className="text-primary text-4xl font-bold">{item.name}</h2>
                <p className="text-secondary text-xs md:text-base">{item.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => setShowForm(!showForm)} className=" bg-primary text-card flex gap-2 rounded-full p-1 font-lato "> <span className="bg-[#1a1a1a] text-white border rounded-full px-3 py-1  text-sm">Drop</span> <span className="text-lg">Your Own</span> <span><Icon icon="gg:add" width="28" height="28"  style={{color: "#000"}} /></span></button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-[320px] max-w-md bg-[#1a1a1a] rounded-2xl border p-4 flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="p-2 rounded-md bg-black text-white"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Profession"
            required
            className="p-2 rounded-md bg-black text-white"
            value={formData.profession}
            onChange={(e) =>
              setFormData({ ...formData, profession: e.target.value })
            }
          />
          <textarea
            placeholder="Testimonial"
            required
            className="p-2 rounded-md bg-black text-white"
            value={formData.feedback}
            onChange={(e) =>
              setFormData({ ...formData, feedback: e.target.value })
            }
          />
          <button type="submit" className="bg-primary text-black px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      )}
          <h1 className="text-center text-md font-source text-secondary font-thin italic">Code speaks for itself</h1>
    </div>
  );
}
