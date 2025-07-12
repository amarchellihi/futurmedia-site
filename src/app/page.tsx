
import Contactez from "@/components/ContactUs";
import Form from "@/components/Form";
import Intro from "@/components/Services";
import Agence from "@/components/agence";
import ServicesSection from "@/components/expertise"; 
import Vision from "@/components/vision";
import References from "@/components/references";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div> 
      <main className="h-full w-full bg-cover bg-center bg-no-repeat p-12"
      style={{ backgroundImage: "url('/background-image.png')" }}>
         <Hero/>
        <Intro/>
        
        <Agence/>
        <ServicesSection/>
        <Vision/>
        <References/>
        <Contactez/>
        <Form/>
      </main>  
    </div>
  );
}
