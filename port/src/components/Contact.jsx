import {React,useContext,useState} from 'react'
import { SubmitButton } from './Button'
import { ThemeContext } from './ThemeContext'
import Swal from 'sweetalert2'
const Contact = () => {
    const {dm} =useContext(ThemeContext)
    const [result, setResult] = useState("");
    const [errors,setErrors] = useState({});
    const initialValues ={name:"",email:""};
    const [formValues,setFormValues] = useState(initialValues);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = async (e) => {
      e.preventDefault(); 
      const validationError = validateForm(formValues);
      setErrors(validationError);
  
      if (Object.keys(validationError).length === 0) {
          await onSubmit(e);
      } else {
          console.log("Validation errors:", validationError);
      }
  };
    const validateForm = (data) =>{
        let errors = {};
        if(!data.name){
            errors.name = "Name is required";
        }
        if(!data.email){
            errors.email = "Email is required";
        }else if(!validateEmail(data.email)){
            errors.email = "Email is invalid";
        }


        return errors;
    };

    const validateEmail = (email) =>{
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);


    }
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f2ed462d-36b5-4321-b295-665ff81e7dec");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: "Thank You!",
                text: "Your submission was successful. Have a great day!",
                icon: "success"
            });
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          
          setResult(data.message);
        }
      };
  return (
    <section id='contact'>
    <div className={`${dm?"dark bg-black": ""}   container mx-auto p-12 rounded-2xl backdrop-blur-sm bb`}>
    <div className="dark:backdrop-blur-sm backdrop-blur-sm flex flex-col md:flex-row min-h-full relative py-10 justify-around">
        
        <div className="title mt-4   items-center justify-start flex flex-col text-5xl lg:text-6xl text-center md:text-left">
            <div className="dark:text-white">
            <h1 className=" ">CONTACT</h1>
            <h2 className="">ME</h2>
            </div>

        </div>
        <div className="">
            <form action="" className="flex flex-col items-center gap-y-2 w-full dark:text-white" onSubmit={handleSubmit} >


                <div className="inputbox mt-3 w-full">
                <label htmlFor="name" className=""><span class="material-symbols-rounded">person</span></label>
                
                <div className="dd absolute ">Name</div>

                <input type="text" id="name" name="name" placeholder="" className="mt-1 border rounded "  value={formValues.name} onChange={handleChange}/>
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>


                <div className="inputbox mt-3 w-full">
                <label htmlFor="name" className=""><span class="material-symbols-rounded">mail</span></label>
                
                <div className="dd absolute top-0 t">Email</div>

                <input type="text" id="name" name="email" placeholder="" className="mt-1 border rounded "  value={formValues.email} onChange={handleChange}/>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                


                <div className="inputbox relative mt-6 w-full">
                <label htmlFor="message" className="di dark:text-white z-10  absolute"><span class="material-symbols-rounded">
comment
</span></label>

                <textarea rows="4" cols="40" name="message" id="message" maxLength={125} className=" resize-none p-1 border dark:border-white border-black rounded relative mt-4 pr-9 w-full" placeholder='Type your message here' required></textarea>
                <div className="di absolute top-1/4 dark:text-white  hidden">Message <span class="material-symbols-rounded">
arrow_downward
</span></div>
                </div>
                
                
                <div className="w-full"><SubmitButton></SubmitButton></div>
                
                
            </form>
        </div>
    </div>
</div></section>
  )
}

export default Contact
