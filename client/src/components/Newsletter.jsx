import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { registerMember } from "../services/index/members";
import Image from "../components/images/image3.jpg";
import "./newsletter.css"
function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerMember(data); // Assuming this function handles member registration
      toast.success("Registered successfully!");
      reset(); // Clear form inputs after successful registration
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="newsletter">
      <div>
        <img src={Image} alt="logo" />
      </div>
      <div className="newsletter-subs">
        <span className="newsletter-text">Start hacking your way to Stronger Mental Performance and Physical Results.</span>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="all-input">
            <input 
              type="text" 
              {...register("name", { required: true })} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Name" 
            />
            {errors.name && <span>This field is required</span>}
            <input 
              type="text" 
              {...register("email", { required: true })} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
            />
            {errors.email && <span>This field is required</span>}
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
