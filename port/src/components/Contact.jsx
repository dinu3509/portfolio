import {React,useContext,useState} from 'react'
import { SubmitButton } from './Button'
import { ThemeContext } from './ThemeContext'
import Swal from 'sweetalert2'
const Contact = () => {
    const {dm} =useContext(ThemeContext)
    const [result, setResult] = useState("");

    const initialValues ={name:"",email:""};
    const [formValues,setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const {name,value} =  e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues)
    };

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
    <div className={`${dm?"dark bg-black": ""}   container mx-auto p-12 rounded-2xl backdrop-blur-sm bb`}>
    <div className="dark:backdrop-blur-sm backdrop-blur-sm grid grid-cols-2 min-h-full relative py-10">
        
        <div className="title mt-4  items-center justify-start flex flex-col text-6xl">
            <div className="dark:text-white">
            <h1 className=" text-6xl">CONTACT</h1>
            <h2 className="text-6xl">ME</h2>
            </div>

        </div>
        <div className="flex items-start justify-center  ">
            <form action="" className="flex flex-col gap-y-2 w-full dark:text-white" onSubmit={onSubmit} >
                <div className="inputbox mt-3 ">
                <label htmlFor="name" className=""><span class="material-symbols-rounded">person</span></label>
                
                <div className="dd absolute ">Name</div>

                <input type="text" id="name" name="name" placeholder="" className="mt-1 border rounded " required value={formValues.name} onChange={handleChange}/>
                </div>
                <div className="inputbox mt-3">
                <label htmlFor="name" className=""><span class="material-symbols-rounded">mail</span></label>
                
                <div className="dd absolute top-0 t">Email</div>

                <input type="text" id="name" name="email" placeholder="" className="mt-1 border rounded " required value={formValues.email} onChange={handleChange}/>
                </div>
    
                <div className="inputbox relative mt-6">
                <label htmlFor="message" className="di dark:text-white z-10  absolute"><span class="material-symbols-rounded">
comment
</span></label>

                <textarea rows="4" cols="40" name="message" id="message" maxLength={125} className=" resize-none p-1 border dark:border-white border-black rounded relative mt-4 pr-9" placeholder='Type your message here' required></textarea>
                <div className="di absolute top-1/4 dark:text-white  hidden">Message <span class="material-symbols-rounded">
arrow_downward
</span></div>
                </div><div className="w-full relative flex "><SubmitButton></SubmitButton></div>
                
                
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact
